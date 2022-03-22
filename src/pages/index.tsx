import { Box, Select, Text, useColorMode, VStack } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../components/layouts/Layout";
import { Direction, Place, Route } from "../utils/types";

interface IndexProps {
  routes: Array<Route>;
}

interface IndexProps {}

const Index: NextPage<IndexProps> = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState<number>();
  const [directions, setDirections] = useState<Array<Direction>>();
  const [selectedDirection, setSelectedDirection] = useState<number | null>();
  const [places, setPlaces] = useState<Array<Place>>();
  const [selectedPlace, setSelectedPlace] = useState<number>();

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

  return (
    <Layout>
      <VStack mt={6} spacing={4}>
        <Select
          variant="filled"
          bg={colorMode == "light" ? "#eef2f6" : "#141414"}
          _hover={{ bg: colorMode == "light" ? "#e3e8ef" : "#292929" }}
          placeholder="Select a route"
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
        {directions ? (
          <Select
            variant="filled"
            bg={colorMode == "light" ? "#eef2f6" : "#141414"}
            _hover={{ bg: colorMode == "light" ? "#e3e8ef" : "#292929" }}
            placeholder="Select a direction"
            onChange={(e) => {
              e.preventDefault();
              setSelectedDirection(e.target.value ? parseInt(e.target.value) : null);
              setPlaces(null);
              setSelectedPlace(null);
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
        ) : (
          <></>
        )}
        {places ? (
          <Select
            variant="filled"
            bg={colorMode == "light" ? "#eef2f6" : "#141414"}
            _hover={{ bg: colorMode == "light" ? "#e3e8ef" : "#292929" }}
            placeholder="Select a stop"
            onChange={(e) => {
              e.preventDefault();
              setSelectedPlace(e.target.value ? parseInt(e.target.value) : null);
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
