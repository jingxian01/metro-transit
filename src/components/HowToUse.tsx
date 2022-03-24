import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";

interface HowToUseProps {}

export const HowToUse: NextPage<HowToUseProps> = ({}) => {
  return (
    <Box w="100%" p={2}>
      <Text fontWeight="extrabold">How to use:</Text>
      <Box px={4}>
        <Flex>
          <Text fontWeight="bold">step 1: </Text>
          <Text ml={1} fontWeight="medium">
            pick a route
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight="bold">step 2: </Text>
          <Text ml={1} fontWeight="medium">
            pick a direction
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight="bold">step 3: </Text>
          <Text ml={1} fontWeight="medium">
            pick a stop
          </Text>
        </Flex>
        <Flex>
          <Text fontWeight="bold">step 4: </Text>
          <Text ml={1} fontWeight="medium">
            click the search button
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
