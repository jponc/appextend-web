import React from "react";
import { PurchaseOrder } from "../../common/types";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { PurchaseOrderRow } from "../PurchaseOrderRow";

type PurchaseOrdersTableProps = {
  purchaseOrders: PurchaseOrder[];
};

export const PurchaseOrdersTable: React.FC<PurchaseOrdersTableProps> = ({
  purchaseOrders,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PO ID</TableCell>
            <TableCell align="right">PO Number</TableCell>
            <TableCell align="right">Vendor Name</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchaseOrders.map((purchaseOrder) => (
            <PurchaseOrderRow key={purchaseOrder.id} purchaseOrder={purchaseOrder} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
