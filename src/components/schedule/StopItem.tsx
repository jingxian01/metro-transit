import { Box, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import { Stop } from "../../utils/types";

interface StopItemProps {
  stops: Array<Stop>;
}

export const StopItem: NextPage<StopItemProps> = ({ stops }) => {
  return stops[0] && stops[0].description ? (
    <Box
      p={2}
      mb={{ base: 2, md: 4 }}
      fontWeight="semibold"
      bg={useColorModeValue("gray.200", "#141414")}
      rounded="md"
    >
      {stops[0].description}
    </Box>
  ) : (
    <></>
  );
};
