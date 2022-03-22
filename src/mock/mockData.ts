import { Schedule } from "../utils/types";

export const withAlert: Schedule = {
  alerts: [
    {
      stop_closed: true,
      alert_text:
        "Route 14 detoured off Bloomington between 46th St and 52nd St beginning Tue Feb 22 at 7am until further notice",
    },
    {
      stop_closed: true,
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
