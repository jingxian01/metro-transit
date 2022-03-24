import { differenceInMinutes, format, fromUnixTime } from "date-fns";

// eg: 17:05, Mon 03/21
const DATETIME_FORMAT = "HH:mm eee MM/dd";

export const unixToFormatDateTime = (unixInSeconds: number) => {
  const currentTime = new Date();
  const dateTime = fromUnixTime(unixInSeconds);

  let minutesLeft = "";
  const minutesDifference = differenceInMinutes(dateTime, currentTime);

  if (minutesDifference <= 2) {
    minutesLeft = "now";
  } else if (minutesDifference <= 60) {
    minutesLeft = `${minutesDifference} min`;
  }

  const formattedDateTime = format(dateTime, DATETIME_FORMAT);

  return {
    formattedDateTime,
    minutesLeft,
  };
};
