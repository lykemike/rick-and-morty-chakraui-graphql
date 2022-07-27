import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Character from "../components/Characters";

export default function Home(results) {
  const initialState = results;
  const [characters, setCharacters] = useState(initialState.characters);
  const [nextIndex, setNextIndex] = useState(initialState?.info?.next);
  const [prevIndex, setPrevIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handleNextButton = async () => {
    const results = await fetch("/api/load-more", {
      method: "post",
      body: nextIndex,
    });

    const data = await results.json();
    setNextIndex(data?.info?.next);
    setPrevIndex(data?.info?.prev);
    window.scrollTo(0, 0);
    setCharacters(data?.characters);
  };

  const handlePrevButton = async () => {
    const results = await fetch("/api/load-more", {
      method: "post",
      body: prevIndex,
    });

    const data = await results.json();
    setNextIndex(data?.info?.next);
    setPrevIndex(data?.info?.prev);
    window.scrollTo(0, 0);
    setCharacters(data?.characters);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    const results = await fetch("/api/SearchCharacters", {
      method: "post",
      body: search,
    });

    const { characters, error } = await results.json();
    characters.length == 0 ? toast.error("No characters found.") : toast.success("Characters found!");

    if (error) {
      toast.error("An error occured", {
        duration: 5000,
      });
    } else {
      setCharacters(characters);
    }
  };

  const resetSearch = async () => {
    toast("Characters reset.", {
      icon: "👽",
    });
    setSearch("");
    setCharacters(initialState.characters);
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Toaster />
      <div>
        <Head>
          <title>Rick and Morty</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/rickmorty.ico" />
        </Head>

        <Box mb={4} flexDirection="column" align="center" justify="center" py="8">
          <Heading as="h1" size="4xl" mb={8} letterSpacing={4}>
            Rick and Morty
          </Heading>
          <form onSubmit={async (event) => handleSearch(event)}>
            <Stack maxWidth="350px" width="100%" isInline mb={8}>
              <Input placeholder="Search" value={search} border="none" onChange={(e) => setSearch(e.target.value)} />
              <IconButton
                colorScheme="blue"
                aria-label="Search Database"
                icon={<SearchIcon />}
                disabled={search === ""}
                type="submit"
              />
              <IconButton
                colorScheme="red"
                aria-label="reset button"
                icon={<CloseIcon />}
                disabled={search === ""}
                onClick={async () => resetSearch()}
              />
            </Stack>
          </form>

          {characters.length == 0 ? (
            <Text fontSize="3xl">No Characters found.</Text>
          ) : (
            <Character characters={characters} />
          )}

          <HStack spacing="40" justify="center" mt={10}>
            <Box w="40px" h="40px">
              {prevIndex != null && search == "" ? (
                <Button colorScheme="linkedin" onClick={handlePrevButton}>
                  PREV
                </Button>
              ) : null}
            </Box>
            <Box w="40px" h="40px">
              {nextIndex != null && search == "" ? (
                <Button colorScheme="linkedin" onClick={handleNextButton}>
                  NEXT
                </Button>
              ) : null}
            </Box>
          </HStack>
        </Box>
      </div>
    </Flex>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
            next
          }
          results {
            id
            name
            status
            species
            image
            location {
              id
              name
            }
            origin {
              id
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
      info: data.characters.info,
    },
  };
}
