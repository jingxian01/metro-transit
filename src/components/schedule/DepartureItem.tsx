import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Departure, Direction } from "../../utils/types";

interface DepartureItemProps {
  departures: Array<Departure>;
  direction: Direction;
}

export const DepartureItem: NextPage<DepartureItemProps> = ({ departures }) => {
  return (
    <Box>
      {departures[0] ? (
        <Box>
          <Text>has departures</Text>
        </Box>
      ) : (
        <Box>no departures</Box>
      )}
    </Box>
  );
};
