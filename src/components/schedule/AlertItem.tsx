import { WarningIcon } from "@chakra-ui/icons";
import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import { AlertMessage } from "../../utils/types";

interface AlertItemProps {
  alerts: Array<AlertMessage>;
}

export const AlertItem: NextPage<AlertItemProps> = ({ alerts }) => {
  return (
    <Box>
      {alerts.map((a, idx) => {
        return (
          <HStack
            key={`alert-${idx}`}
            bg={useColorModeValue("red.200", "red.900")}
            p={2}
            mb={{ base: 2, md: 4 }}
            rounded="md"
            justifyContent="center"
            alignItems="center"
          >
            <WarningIcon />
            <Box fontSize={{ base: "sm", md: "md" }}>
              {a.stop_closed ? <Text fontWeight="bold">Stop is currently closed.</Text> : <></>}
              <Text fontWeight="medium">{a.alert_text}</Text>
            </Box>
          </HStack>
        );
      })}
    </Box>
  );
};
