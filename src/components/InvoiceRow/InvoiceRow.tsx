import React from "react";
import { Invoice, InvoiceStatuses } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { getDateTime } from "../../utils/getDateTime";
import NumberFormat from "react-number-format";

type InvoiceRowProps = {
  invoice: Invoice;
};

const statusColours = {
  [InvoiceStatuses.Incomplete]: "#ff9800",
  [InvoiceStatuses.Complete]: "#4caf50",
  [InvoiceStatuses.POCreated]: "#4caf50",
  [InvoiceStatuses.POSent]: "#2196f3",
  [InvoiceStatuses.NoMatch]: "#f44336",
}

export const InvoiceRow: React.FC<InvoiceRowProps> = ({ invoice }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      <Link to={`/invoices/${invoice.id}`}>{invoice.customerName}</Link>
    </TableCell>
    <TableCell align="right">{invoice.id}</TableCell>
    <TableCell align="right">{invoice.number}</TableCell>
    <TableCell align="right">
      <NumberFormat
        value={invoice.totalAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </TableCell>
    <TableCell align="right">{getDateTime(invoice.createdAt)}</TableCell>
    <TableCell align="right">
      <Chip
        label={invoice.status}
        color="primary"
        style={{ backgroundColor: statusColours[invoice.status] }}
      />
    </TableCell>
  </TableRow>
);
