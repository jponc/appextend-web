import React from "react";

import { Invoice } from "../../common/types";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InvoiceStatus } from "../InvoiceStatus";
import { getDateTime } from "../../utils/getDateTime";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  container: {
    padding: 20,
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
  },
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
        Total Amount: &nbsp;
        <NumberFormat
          value={invoice.totalAmount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Typography>

      <Typography variant="caption" gutterBottom>
        Created At: {getDateTime(invoice.createdAt)}
      </Typography>
    </Paper>
  );
};
