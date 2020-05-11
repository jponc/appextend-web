import React from "react";
import { Invoice, InvoiceStatuses } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

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
      {dayjs(invoice.createdAt).format("YYYY-MM-DD")}
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
