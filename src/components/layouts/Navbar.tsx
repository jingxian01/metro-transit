import { Box, Flex, HStack, IconButton, Link } from "@chakra-ui/react";
import { NextPage } from "next";
import { Name } from "./Name";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { FaGithub } from "react-icons/fa";

interface NavbarProps {}

export const Navbar: NextPage<NavbarProps> = ({}) => {
  return (
    <Flex py={4} justifyContent="space-between" alignItems="center">
      <Name />
      <HStack>
        <ThemeToggleButton />
        <Link href="https://github.com/jingxian01/metro-transit" target="_blank">
          <IconButton aria-label="github" icon={<FaGithub />} />
        </Link>
      </HStack>
    </Flex>
  );
};
