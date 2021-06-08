import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { light, dark } from "./palette";

const getTheme = mode =>
  responsiveFontSizes(
    createMuiTheme({
      palette: mode === "light" ? light : dark,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        h1: {
          fontFamily: "Bodoni Moda",
        },
        h2: {
          fontFamily: "Bodoni Moda",
        },
        h3: {
          fontFamily: "Bodoni Moda",
        },
        h4: {
          fontFamily: "Bodoni Moda",
        },
        h5: {
          fontFamily: "Bodoni Moda",
        },
        fontFamily: "Montserrat, sans-serif",
        fontWeightLight: "normal",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    }),
  );

export default getTheme;
