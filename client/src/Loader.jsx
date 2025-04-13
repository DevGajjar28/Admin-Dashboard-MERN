import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ message = "Loading..." }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top={0}
      left={0}
      zIndex={1300}
      bgcolor="rgba(255,255,255,0.8)"
    >
      <CircularProgress />
      <Typography mt={2} fontSize="1.2rem">
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
