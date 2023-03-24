// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface PalletColor {
    [key: number]: string;
  }
  // Setting up the Tertiary palette color, as there is only Primary and Secondary defined
  interface Pallete {
    tertiary: PaletteColor;
  }
}
