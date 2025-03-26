import { Box, Heading } from "@chakra-ui/react";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Box bg="teal.500" color="white" p={4} textAlign="center">
      <Heading as="h1" size="lg">
        {name}
      </Heading>
    </Box>
  );
};

export default Header;
