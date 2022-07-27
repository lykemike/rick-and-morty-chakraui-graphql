import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Footer>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Footer>
  );
}

export default MyApp;
