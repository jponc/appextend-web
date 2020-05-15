import React from "react";
import { ActivityLog } from "../../common/types";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import dayjs from "dayjs";

type ActivityLogsTableProps = {
  activityLogs: ActivityLog[];
};

type ActivityLogRowProps = {
  activityLog: ActivityLog;
};

const ActivityLogRow: React.FC<ActivityLogRowProps> = ({ activityLog }) => {
  const date = dayjs(activityLog.createdAt).format("MMMM D, YYYY hh:mm:ss A");
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              {date}
            </Typography>
            <Typography component="span"> — {activityLog.message}</Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export const ActivityLogsTable: React.FC<ActivityLogsTableProps> = ({
  activityLogs,
}) => {
  return (
    <List>
      {activityLogs.map((activityLog, index) => (
        <div key={`${activityLog.resourceId}-${activityLog.createdAt}`}>
          <ActivityLogRow activityLog={activityLog} />
          {(index < activityLogs.length - 1) && <Divider variant="middle" />}
        </div>
      ))}
    </List>
  );
};
