import React from "react";
import { Invoice, InvoiceStatuses } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { getDateTime } from "../../utils/getDateTime";

type InvoiceRowProps = {
  invoice: Invoice;
};

export const InvoiceRow: React.FC<InvoiceRowProps> = ({ invoice }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      <Link to={`/invoices/${invoice.id}`}>{invoice.customerName}</Link>
    </TableCell>
    <TableCell align="right">{invoice.id}</TableCell>
    <TableCell align="right">{invoice.number}</TableCell>
    <TableCell align="right">${invoice.totalAmount}</TableCell>
    <TableCell align="right">
      {getDateTime(invoice.createdAt)}
    </TableCell>
    <TableCell align="right">
      <Chip
        label={invoice.status}
        color={
          invoice.status === InvoiceStatuses.Complete ? "primary" : "secondary"
        }
      />
    </TableCell>
  </TableRow>
);
