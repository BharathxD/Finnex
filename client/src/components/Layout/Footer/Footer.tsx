import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <Box
      height="100px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color={palette.grey[400]}
    >
      <Typography variant="h4" fontSize="1.25rem">
        Finnex &copy; 2023
      </Typography>
    </Box>
  );
};

export default Footer;
