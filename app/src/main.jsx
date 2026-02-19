import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    Gray: "#5A5959",
    White: "#EEEEF4",
    WhiteBlack: "#FFFFFF",
    Purple: " #5F00D9",
    GrayWhite: "#797E82",
  },
};

const theme = extendTheme({ colors });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
