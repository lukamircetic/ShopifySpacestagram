import { Box, Heading } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="#F7FAFC"
      w="100%"
      minH="100%"
    >
      <Heading fontWeight="400">Loading</Heading>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};
