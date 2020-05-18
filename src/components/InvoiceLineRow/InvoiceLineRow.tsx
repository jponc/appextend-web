import React from "react";
import { InvoiceLine } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import NumberFormat from "react-number-format";

type InvoiceLineRowProps = {
  invoiceLine: InvoiceLine;
};

export const InvoiceLineRow: React.FC<InvoiceLineRowProps> = ({
  invoiceLine,
}) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {invoiceLine.id}
    </TableCell>
    <TableCell align="right">{invoiceLine.itemName}</TableCell>
    <TableCell align="right">
      <NumberFormat
        value={invoiceLine.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </TableCell>
    <TableCell align="right">{invoiceLine.quantity}</TableCell>
    <TableCell align="right">
      <NumberFormat
        value={invoiceLine.unitPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </TableCell>
    <TableCell align="right">{invoiceLine.vendorName}</TableCell>
  </TableRow>
);
