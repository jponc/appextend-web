import React from "react";
import { InvoiceLine } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

type InvoiceLineRowProps = {
  invoiceLine: InvoiceLine;
};

export const InvoiceLineRow: React.FC<InvoiceLineRowProps> = ({ invoiceLine }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {invoiceLine.id}
    </TableCell>
    <TableCell align="right">{invoiceLine.itemName}</TableCell>
    <TableCell align="right">${invoiceLine.amount}</TableCell>
    <TableCell align="right">{invoiceLine.quantity}</TableCell>
    <TableCell align="right">${invoiceLine.unitPrice}</TableCell>
    <TableCell align="right">{invoiceLine.vendorName}</TableCell>
  </TableRow>
);
