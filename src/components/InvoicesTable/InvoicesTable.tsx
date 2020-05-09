import React from "react";
import { Invoice } from "../../common/types";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { InvoiceRow } from "../InvoiceRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type InvoicesTableProps = {
  invoices: Invoice[];
};

export const InvoicesTable: React.FC<InvoicesTableProps> = ({ invoices }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
