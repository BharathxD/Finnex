import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width={"100%"} height={"100%"} padding={"1rem 2rem 0 2rem"}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
