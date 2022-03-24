import { Box, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      minH="100vh"
      maxW="container.sm"
    >
      <Navbar />
      <Box minH="73vh">{children}</Box>
      <Footer />
    </Container>
  );
};
