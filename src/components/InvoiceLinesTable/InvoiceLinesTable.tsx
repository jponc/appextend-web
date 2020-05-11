import React from "react";
import { InvoiceLine } from "../../common/types";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { InvoiceLineRow } from "../InvoiceLineRow";

type InvoiceLinesTableProps = {
  invoiceLines: InvoiceLine[];
};

export const InvoiceLinesTable: React.FC<InvoiceLinesTableProps> = ({
  invoiceLines,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item ID</TableCell>
            <TableCell align="right">Item Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Pref Vendor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceLines.map((invoiceLine) => (
            <InvoiceLineRow key={invoiceLine.id} invoiceLine={invoiceLine} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
