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
  fontSizes: {
    title: {
      xs: "1.125rem",
      S: "1.25rem",
      M: "1.5rem",
      L: "2rem",
      XL: "3rem",
    },
    text: {
      RegularS: "0.75rem",
      BoldS: "0.875rem",
      RegularM: "1rem",
      BoldM: "1rem",
      RegularL: "1.25rem",
      BoldL: "1.25rem",
    },
    components: {
      Tag: "0.625rem",
      ButtonG: "0.875rem",
      ButtonS: "0.75rem",
    },
  },
  lineHeight: {
    heading: "130%",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});
