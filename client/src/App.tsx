import "@/App.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [selected, setSelected] = useState<boolean>();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width={"100%"} height={"100%"} padding={"1rem 2rem 4rem 2rem"}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<div>Dashboard Page</div>} />
            <Route
              path={"/predictions"}
              element={<div>Predictions Page</div>}
            />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
