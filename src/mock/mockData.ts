import { Direction, Schedule } from "../utils/types";

export const mockData: Schedule = {
  alerts: [
    {
      stop_closed: true,
      alert_text:
        "Route 14 detoured off Bloomington between 46th St and 52nd St beginning Tue Feb 22 at 7am until further notice",
    },
    {
      stop_closed: false,
      alert_text:
        "Route 14 detoured off Bloomington between 46th St and 52nd St beginning Tue Feb 22 at 7am until further notice",
    },
  ],
  departures: [
    {
      actual: true,
      departure_text: "6 Min",
      departure_time: 1647924563,
      description: "Bloomington / Chicago 56St / Via France",
      direction_id: 1,
      direction_text: "SB",
      route_id: "14",
      route_short_name: "14",
      schedule_relationship: "Scheduled",
      stop_id: 8332,
      terminal: "B",
      trip_id: "19918292-DEC21-MVS-BUS-Weekday-01",
    },
    {
      actual: false,
      departure_text: "12:42",
      departure_time: 1647927720,
      description: "Bloomington / Chicago 56St / Via France",
      direction_id: 1,
      direction_text: "SB",
      route_id: "14",
      route_short_name: "14",
      schedule_relationship: "Scheduled",
      stop_id: 8332,
      terminal: "B",
      trip_id: "19918293-DEC21-MVS-BUS-Weekday-01",
    },
  ],
  stops: [
    {
      description: "West Broadway & Penn Ave N",
      latitude: 45.003594,
      longitude: -93.307938,
      stop_id: 8332,
    },
  ],
};

export const mockDirection: Direction = {
  direction_id: 1,
  direction_name: "Westbound",
};

export const mockData2: Schedule = {
  alerts: [],
  departures: [
    {
      actual: true,
      departure_text: "6 Min",
      departure_time: 1648062000,
      description: "to Mpls-Target Field",
      direction_id: 1,
      direction_text: "WB",
      route_id: "902",
      route_short_name: "Green",
      schedule_relationship: "Scheduled",
      stop_id: 56040,
      trip_id: "20247276-DEC21-RAIL-Weekday-01",
    },
    {
      actual: true,
      departure_text: "18 Min",
      departure_time: 1648062720,
      description: "to Mpls-Target Field",
      direction_id: 1,
      direction_text: "WB",
      route_id: "902",
      route_short_name: "Green",
      schedule_relationship: "Scheduled",
      stop_id: 56040,
      trip_id: "20247278-DEC21-RAIL-Weekday-01",
    },
    {
      actual: false,
      departure_text: "2:21",
      departure_time: 1648063260,
      description: "to Mpls-Target Field",
      direction_id: 1,
      direction_text: "WB",
      route_id: "902",
      route_short_name: "Green",
      schedule_relationship: "Scheduled",
      stop_id: 56040,
      trip_id: "20247279-DEC21-RAIL-Weekday-01",
    },
    {
      actual: false,
      departure_text: "2:33",
      departure_time: 1648063980,
      description: "to Mpls-Target Field",
      direction_id: 1,
      direction_text: "WB",
      route_id: "902",
      route_short_name: "Green",
      schedule_relationship: "Scheduled",
      stop_id: 56040,
      trip_id: "20247280-DEC21-RAIL-Weekday-01",
    },
  ],
  stops: [
    {
      description: "Prospect Park Station",
      latitude: 44.971754,
      longitude: -93.215229,
      stop_id: 56040,
    },
  ],
};
