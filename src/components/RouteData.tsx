import { Box, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Route } from "../utils/types";

interface RouteDataProps extends Route {}

export const RouteData: NextPage<RouteDataProps> = ({ route_id, route_label }) => {
  return (
    <Flex direction="column" mb={2}>
      <Box>route_id: {route_id}</Box>
      <Box>route_label: {route_label}</Box>
    </Flex>
  );
};
