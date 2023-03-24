import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Predictions from "./pages/predictions/Predictions";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./themes/theme";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import "@/App.css";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/predictions"} element={<Predictions />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
