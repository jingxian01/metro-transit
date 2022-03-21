import { NextPage } from "next";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

interface NameProps {}

export const Name: NextPage<NameProps> = ({}) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} alignItems="baseline">
      <Text
        as="h1"
        bgGradient="linear(to-r, blue.800, red.600)"
        bgClip="text"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
        mr={2}
      >
        Metro Transit
      </Text>
      <Text
        as="h3"
        fontSize={{ base: "sm", md: "2xl" }}
        fontWeight="semibold"
        _hover={{ cursor: "pointer" }}
      >
        Real Time Schedule
      </Text>
    </Flex>
  );
};
