import { Box } from "@chakra-ui/react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { Route } from "../utils/types";
import { NextPage } from "next";
import { RouteData } from "../components/RouteData";

interface IndexProps {
  routes: Array<Route>;
}

interface IndexProps {}

const Index: NextPage<IndexProps> = ({ routes }) => {
  return (
    <Layout>
      <Box textAlign="center" p={4}>
        metro transit real time schedule
      </Box>
      {/* {routes.map((r) => {
        return (
          <RouteData
            key={r.route_id}
            route_id={r.route_id}
            route_label={r.route_label}
            agency_id={r.agency_id}
          />
        );
      })} */}
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
