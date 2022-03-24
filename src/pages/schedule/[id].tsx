import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts/Layout";
import { AlertItem } from "../../components/schedule/AlertItem";
import { DepartureItem } from "../../components/schedule/DepartureItem";
import { StopItem } from "../../components/schedule/StopItem";
import { mockDirection } from "../../mock/mockData";
import { Direction, Schedule as ScheduleType } from "../../utils/types";

interface ScheduleProps {
  schedule: ScheduleType;
  direction: Direction;
}

const Schedule: NextPage<ScheduleProps> = ({ schedule, direction }) => {
  const router = useRouter();
  // const { alerts, stops, departures } = mockData2;
  const { stops, alerts, departures } = schedule;

  return (
    <Layout>
      <StopItem stops={stops} />
      <AlertItem alerts={alerts}></AlertItem>
      <DepartureItem departures={departures} direction={mockDirection} />
      <Button
        leftIcon={<ChevronLeftIcon />}
        onClick={() => {
          router.back();
        }}
      >
        back
      </Button>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params.id;
  let schedule: ScheduleType = null;

  if (typeof params === "string") {
    let paramsArray: Array<string> = params.split("-");

    const scheduleRes = await axios.get<ScheduleType>(
      `https://svc.metrotransit.org/nextripv2/${paramsArray[0]}/${paramsArray[1]}/${paramsArray[2]}`
    );
    schedule = scheduleRes.data;
  }

  return {
    props: {
      schedule,
    },
  };
};

export default Schedule;
