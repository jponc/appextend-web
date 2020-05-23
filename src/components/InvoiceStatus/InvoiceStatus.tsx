import React from "react";
import { InvoiceStatuses } from "../../common/types";
import Chip from "@material-ui/core/Chip";

type InvoiceStatusProps = {
  status: InvoiceStatuses;
};

const statusColours = {
  [InvoiceStatuses.Incomplete]: "#717171",
  [InvoiceStatuses.Complete]: "#4caf50",
  [InvoiceStatuses.POSent]: "#4caf50",
  [InvoiceStatuses.POCreated]: "#2196f3",
  [InvoiceStatuses.NoMatch]: "#f44336",
};

export const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status }) => (
  <Chip
    label={status}
    color="primary"
    style={{ backgroundColor: statusColours[status] }}
  />
);
