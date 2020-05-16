import dayjs from "dayjs";

export const getDateTime = (timeString: string): string => {
  return dayjs(timeString).format("MMMM D, YYYY hh:mm:ss A");
}
