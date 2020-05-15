import { useState, useEffect } from "react";
import { ActivityLog } from "../common/types";
import { getActivityLogs } from "../actions/activityLogs";

export const useActivityLogs = (token: string, resourceId: string) => {
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [doneFetchingActivityLogs, setDoneFetchingActivityLogs] = useState<
    boolean
  >(false);

  useEffect(() => {
    (async () => {
      setActivityLogs(await getActivityLogs(token, resourceId));
      setDoneFetchingActivityLogs(true);
    })();
  }, [token, resourceId]);

  return { activityLogs, doneFetchingActivityLogs };
};
