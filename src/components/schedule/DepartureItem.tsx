import { Badge, Box, Flex, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { unixToFormatDateTime } from "../../utils/date";
import { Departure } from "../../utils/types";

interface DepartureItemProps {
  departures: Array<Departure>;
}

export const DepartureItem: NextPage<DepartureItemProps> = ({ departures }) => {
  return (
    <>
      {departures[0] ? (
        <>
          {departures.map((dep, idx) => {
            return (
              <DepartureItemWrapper key={`dep-${idx}`}>
                <HStack>
                  {dep.direction_text ? (
                    <Badge colorScheme="purple">{dep.direction_text}</Badge>
                  ) : (
                    <></>
                  )}
                  {dep.route_short_name ? (
                    <Badge colorScheme="orange">route {dep.route_short_name}</Badge>
                  ) : (
                    <></>
                  )}
                </HStack>
                <DepartureTime departureTime={dep.departure_time} actual={dep.actual} />
                <Info label="Description" value={dep.description} />
                <Info label="Gate" value={dep.gate} />
                <Info label="Terminal" value={dep.terminal} />
              </DepartureItemWrapper>
            );
          })}
        </>
      ) : (
        <DepartureItemWrapper>
          <Text fontWeight="medium">No departures currently</Text>
        </DepartureItemWrapper>
      )}
    </>
  );
};

interface DepartureItemWrapperProps {}

const DepartureItemWrapper: NextPage<DepartureItemWrapperProps> = ({ children }) => {
  return (
    <VStack
      bg={useColorModeValue("gray.200", "#141414")}
      p={2}
      px={3}
      mb={{ base: 2, md: 4 }}
      rounded="md"
      fontSize={{ base: "sm", md: "md" }}
      alignItems="start"
      spacing="0.5"
    >
      {children}
    </VStack>
  );
};

interface DepartureTimeProps {
  departureTime: number;
  actual: boolean;
}

const DepartureTime: NextPage<DepartureTimeProps> = ({ departureTime, actual }) => {
  const { formattedDateTime, minutesLeft } = unixToFormatDateTime(departureTime);

  return (
    <Flex direction="column">
      <HStack>
        {actual ? <Badge colorScheme="green">actual</Badge> : <></>}
        {minutesLeft ? <Text fontWeight="bold">{minutesLeft}</Text> : <></>}
      </HStack>
      <HStack>
        <Box fontWeight="semibold">Departure time: </Box>
        <Box fontWeight="medium">{formattedDateTime}</Box>
      </HStack>
    </Flex>
  );
};

interface InfoProps {
  label?: string;
  value?: string | number;
}

export const Info: NextPage<InfoProps> = ({ label, value }) => {
  return (
    <>
      {label && value ? (
        <HStack alignItems="start">
          <Box fontWeight="semibold">{label}: </Box>
          <Box fontWeight="medium">{value}</Box>
        </HStack>
      ) : (
        <></>
      )}
    </>
  );
};
