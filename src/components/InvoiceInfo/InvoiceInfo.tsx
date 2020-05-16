import React from "react";

import { Invoice } from "../../common/types";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InvoiceStatus } from "../InvoiceStatus";
import { getDateTime } from "../../utils/getDateTime";

const useStyles = makeStyles({
  container: {
    padding: 20
  },
  heading: {
    display: "flex",
    justifyContent: "space-between"
  }
});

type InvoiceInfoProps = {
  invoice: Invoice;
};

export const InvoiceInfo: React.FC<InvoiceInfoProps> = ({ invoice }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.heading}>
        <Typography variant="h4" gutterBottom>
          Invoice #{invoice.number}
        </Typography>
        <Typography variant="h4" gutterBottom>
          <InvoiceStatus status={invoice.status} />
        </Typography>
      </div>
      <Typography variant="body1" gutterBottom>
        Customer Name: {invoice.customerName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Total Amount: ${invoice.totalAmount}
      </Typography>

      <Typography variant="caption" gutterBottom>
        Created At: {getDateTime(invoice.createdAt)}
      </Typography>
    </Paper>
  );
};
