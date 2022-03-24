import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts/Layout";
import { AlertItem } from "../../components/schedule/AlertItem";
import { DepartureItem } from "../../components/schedule/DepartureItem";
import { StopItem } from "../../components/schedule/StopItem";
import { mockData, mockDirection } from "../../mock/mockData";
import { Direction, Schedule as ScheduleType } from "../../utils/types";

interface ScheduleProps {
  schedule: ScheduleType;
  direction: Direction;
}

const Schedule: NextPage<ScheduleProps> = ({ schedule, direction }) => {
  const router = useRouter();
  const { alerts, stops, departures } = mockData;

  // console.log(schedule);

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
  let paramsArray: Array<string> = [];
  let schedule: ScheduleType = null;
  let direction: Direction = null;

  if (typeof params === "string") {
    paramsArray = params.split("-");

    const scheduleRes = await axios.get<ScheduleType>(
      `https://svc.metrotransit.org/nextripv2/${paramsArray[0]}/${paramsArray[1]}/${paramsArray[2]}`
    );
    schedule = scheduleRes.data;

    if (schedule.departures[0]) {
      const directionRes = await axios.get<Array<Direction>>(
        `https://svc.metrotransit.org/nextripv2/directions/${paramsArray[0]}`
      );
      direction = directionRes.data.find(
        (dir) => dir.direction_id === schedule.departures[0].direction_id
      );
    }
  }

  return {
    props: {
      schedule,
      direction,
    },
  };
};

export default Schedule;
