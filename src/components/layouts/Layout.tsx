import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
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
      {children}
    </Container>
  );
};
