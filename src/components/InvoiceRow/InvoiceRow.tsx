import React from "react";
import { Invoice } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import { getDateTime } from "../../utils/getDateTime";
import NumberFormat from "react-number-format";
import { InvoiceStatus } from "../InvoiceStatus";

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
      <InvoiceStatus status={invoice.status} />
    </TableCell>
  </TableRow>
);
