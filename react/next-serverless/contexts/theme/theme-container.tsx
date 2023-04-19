import React from "react";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import { ThemeProvider } from "@emotion/react";

import theme from "../../styles/theme";

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <ThemeProvider theme={{}}> */}
      <CSSReset />
      {children}
      {/* </ThemeProvider> */}
    </ChakraProvider>
  );
};

export default ThemeContainer;
