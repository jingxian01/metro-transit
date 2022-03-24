import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Select, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../components/layouts/Layout";
import { Direction, Place, Route, Schedule } from "../utils/types";

interface IndexProps {
  routes: Array<Route>;
}

interface IndexProps {}

const Index: NextPage<IndexProps> = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState<number>();
  const [directions, setDirections] = useState<Array<Direction>>();
  const [selectedDirection, setSelectedDirection] = useState<number | null>();
  const [places, setPlaces] = useState<Array<Place>>();
  const [selectedPlace, setSelectedPlace] = useState<string>("");

  const router = useRouter();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (selectedRoute) {
      axios
        .get<Array<Direction>>(
          `https://svc.metrotransit.org/nextripv2/directions/${selectedRoute}`
        )
        .then(async (res) => {
          setDirections(res.data);
        });
    }
  }, [selectedRoute]);

  useEffect(() => {
    // check if it is null here, because direction id might be 0
    if (selectedDirection != null) {
      axios
        .get<Array<Place>>(
          `https://svc.metrotransit.org/nextripv2/stops/${selectedRoute}/${selectedDirection}`
        )
        .then(async (res) => {
          setPlaces(res.data);
        });
    }
  }, [selectedDirection]);

  const handleSubmit = async () => {
    const res = await axios.get<Schedule>(
      `https://svc.metrotransit.org/nextripv2/${selectedRoute}/${selectedDirection}/${selectedPlace}`
    );
    router.push(`/schedule/${selectedRoute}-${selectedDirection}-${selectedPlace}`);
  };

  return (
    <Layout>
      <VStack mt={6} spacing={4}>
        <Box w="100%">
          <Text px={2} fontWeight="semibold">
            Route
          </Text>
          <Select
            variant="filled"
            bg={colorMode == "light" ? "#eef2f6" : "#141414"}
            _hover={{ bg: colorMode == "light" ? "#e3e8ef" : "#292929" }}
            placeholder="select a route"
            defaultValue="12"
            onChange={(e) => {
              e.preventDefault();
              setSelectedRoute(e.target.value ? parseInt(e.target.value) : null);
              setDirections(null);
              setSelectedDirection(null);
              setPlaces(null);
            }}
          >
            {routes.map((r) => {
              return (
                <option key={r.route_id} value={r.route_id}>
                  {r.route_label}
                </option>
              );
            })}
          </Select>
        </Box>
        {directions ? (
          <Box w="100%">
            <Text px={2} fontWeight="semibold">
              Direction
            </Text>
            <Select
              variant="filled"
              bg={colorMode == "light" ? "#eef2f6" : "#141414"}
              _hover={{ bg: colorMode == "light" ? "#e3e8ef" : "#292929" }}
              placeholder="select a direction"
              onChange={(e) => {
                e.preventDefault();
                setSelectedDirection(e.target.value ? parseInt(e.target.value) : null);
                setPlaces(null);
                setSelectedPlace("");
              }}
            >
              {directions.map((dir) => {
                return (
                  <option key={dir.direction_id} value={dir.direction_id}>
                    {dir.direction_name}
                  </option>
                );
              })}
            </Select>
          </Box>
        ) : (
          <></>
        )}
        {places ? (
          <Box w="100%">
            <Text px={2} fontWeight="semibold">
              Stop
            </Text>
            <Select
              variant="filled"
              bg={colorMode == "light" ? "#eef2f6" : "#141414"}
              _hover={{ bg: colorMode == "light" ? "#e3e8ef" : "#292929" }}
              placeholder="select a stop"
              onChange={(e) => {
                e.preventDefault();
                setSelectedPlace(e.target.value ? e.target.value : "");
              }}
            >
              {places.map((p) => {
                return (
                  <option key={p.place_code} value={p.place_code}>
                    {p.description}
                  </option>
                );
              })}
            </Select>
          </Box>
        ) : (
          <></>
        )}
        <Spacer />
        <Spacer />
        {selectedRoute && selectedDirection != null && selectedPlace ? (
          <Button leftIcon={<Search2Icon />} onClick={handleSubmit}>
            search
          </Button>
        ) : (
          <></>
        )}
      </VStack>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<Array<Route>>("https://svc.metrotransit.org/nextripv2/routes");

  return {
    props: {
      routes: res.data,
    },
  };
}

export default Index;
