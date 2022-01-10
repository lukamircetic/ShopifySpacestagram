import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box
      p={4}
      w="100%"
      h="60px"
      position="fixed"
      top={0}
      borderWidth="1px"
      borderLeft="none"
      borderRight="none"
      bg="white"
      zIndex="1"
    >
      <Heading size="lg" textAlign="center" fontWeight="200">
        Spacestagram
      </Heading>
    </Box>
  );
};
