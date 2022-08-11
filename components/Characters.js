import { Badge, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Character = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="40px">
      {characters.map((character) => {
        let statusColor = "";
        let statusName = "";
        if (character.status == "Alive") {
          statusColor = "green";
          statusName = "🟢";
        } else if (character.status == "Dead") {
          statusColor = "red";
          statusName = "🔴";
        } else if (character.status == "unknown") {
          statusColor = "gray";
          statusName = "⚫";
        }
        return (
          <Link href={`character/${character.id}`} key={character.id}>
            <a>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  alt={character.image}
                  src={character.image}
                  width={300}
                  height={300}
                  priority={false}
                />

                <Heading as="h4" align="center" size="md">
                  {character.name}
                </Heading>
                <Badge fontSize="1em" colorScheme={statusColor}>
                  {`${statusName} ${character.status} - ${character.species}`}
                </Badge>

                <Text align="center">Origin : {character.origin.name}</Text>
                <Text align="center">Location : {character.location.name}</Text>
              </div>
            </a>
          </Link>
        );
      })}
    </SimpleGrid>
  );
};

export default Character;
