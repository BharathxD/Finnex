import "@/App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Test</h1>
      </ThemeProvider>
    </>
  );
};

export default App;
