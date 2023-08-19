import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff9f17",
      200: "#f67811",
      300: "#da5903",
      400: "#db6205",
      500: "#b94d00",
      600: "#b13e00",
      700: "#752801",
      800: "",
      900: "",
    },
  },
  fonts: {
    body: "'Space Grotesk', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.100",
      },
    }),
  },
  components: {
    Button,
  },
});
