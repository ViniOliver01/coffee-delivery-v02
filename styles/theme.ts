import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      dark: "#C47F17",
      mid: "#DBAC2C",
      light: "#F1E9C9",
    },
    purple: {
      dark: "#4B2995",
      mid: "#8047F8",
      light: "#EBE5F9",
    },
    green: {
      dark: "#0A7441",
      mid: "#0CA85D",
      light: "#92FFCA",
    },
    base: {
      title: "#272221",
      subtitle: "#403937",
      text: "#574F4D",
      label: "#8D8686",
      hover: "#D7D5D5",
      button: "#E6E5E5",
      input: "#EDEDED",
      card: "#F3F2F2",
      background: "#FAFAFA",
    },
  },
  fonts: {
    heading: "Baloo 2",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});
