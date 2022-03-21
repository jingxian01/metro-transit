import { Select } from "@chakra-ui/react";
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

  // console.log(routes);
  return (
    <Layout>
      <Select
        placeholder="Select a route"
        onChange={(e) => {
          e.preventDefault();
          setSelectedRoute(parseInt(e.target.value));
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
          placeholder="Select a direction"
          onChange={(e) => {
            e.preventDefault();
            setSelectedDirection(parseInt(e.target.value));
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
          placeholder="Select a stop"
          onChange={(e) => {
            e.preventDefault();
            console.log(e.target.value);
            setSelectedPlace(parseInt(e.target.value));
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
