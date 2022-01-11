import { Box } from "@chakra-ui/react";
import { Feed } from "../components/Feed";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
const Index = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow="1" bg="#F7FAFC">
      <Navbar />
      <Feed />
    </Box>
  );
};

export default Index;
