import { Box, Container, HStack, Spacer } from "@chakra-ui/react";
import { Logo } from "./logo";
import { MobilePopover } from "./mobile-popover";
import { NavbarLinks } from "./navbar-links";
import LogoutButton from "./LogoutButton";

export const Block = () => {
  return (
    <Box borderBottomWidth="1px" bg="bg.panel">
      <Container py={{ base: "3.5", md: "4" }}>
        <HStack justify="space-between">
          <Logo />
          <Spacer hideFrom="md" />
          <NavbarLinks hideBelow="md" />
          <LogoutButton />
          <MobilePopover>
            <NavbarLinks />
          </MobilePopover>
        </HStack>
      </Container>
    </Box>
  );
};
