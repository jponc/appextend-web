import { config } from "../config";
import { ActivityLog } from "../common/types";
import { buildHeaders } from "./utils";

export const getActivityLogs = async (token: string, resourceId: string): Promise<ActivityLog[]> => {
  const url = `${config.apiHost}/activity-logs?resourceId=${resourceId}`;

  const res = await fetch(url, {
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();

  return json.body;
};
