import React from "react";
import { ChakraProvider, CSSReset, Box, extendTheme } from "@chakra-ui/react";
import OmikujiButton from "./OmikujiButton";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="xl">
        <OmikujiButton />
      </Box>
    </ChakraProvider>
  );
}

export default App;
