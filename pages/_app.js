import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen antialiased bg-blur-gradient">
      <Footer>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Footer>
    </div>
  );
}

export default MyApp;
