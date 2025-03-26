import {
  Box,
  Heading,
  HStack,
  Button,
  IconButton,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LuLogIn, LuReceipt, LuUtensils } from "react-icons/lu";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Box bg="teal.500" color="white" p={4} textAlign="center">
      <Heading as="h1" size="lg">
        {name}
      </Heading>
      <HStack gap="20px" justify="center">
        <IconButton
          as={NextLink}
          href="/"
          colorScheme="whiteAlpha"
          colorPalette="white"
          variant="ghost"
          rounded="full"
          aria-label="Login"
        >
          <LuLogIn />
        </IconButton>
        <IconButton
          as={NextLink}
          href="/restaurants/1"
          aria-label="Restaurant"
          colorScheme="whiteAlpha"
          colorPalette="white"
          variant="ghost"
          rounded="full"
        >
          <LuUtensils />
        </IconButton>
        <IconButton
          as={NextLink}
          href="/recettes"
          aria-label="Recettes"
          colorScheme="whiteAlpha"
          colorPalette="white"
          variant="ghost"
          rounded="full"
        >
          <LuReceipt />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default Header;
