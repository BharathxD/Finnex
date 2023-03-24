import "@/App.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width={"100%"} height={"100%"} padding={"1rem 2rem 4rem 2rem"}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
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
