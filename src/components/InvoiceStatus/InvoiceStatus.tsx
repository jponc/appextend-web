import React from "react";
import { InvoiceStatuses } from "../../common/types";
import Chip from "@material-ui/core/Chip";

type InvoiceStatusProps = {
  status: InvoiceStatuses;
};

export const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status }) => (
  <Chip
    label={status}
    color={status === InvoiceStatuses.Complete ? "primary" : "secondary"}
  />
);
