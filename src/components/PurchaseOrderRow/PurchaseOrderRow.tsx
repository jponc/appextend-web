import React from "react";
import { PurchaseOrder } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import NumberFormat from "react-number-format";

type PurchaseOrderRowProps = {
  purchaseOrder: PurchaseOrder;
};

export const PurchaseOrderRow: React.FC<PurchaseOrderRowProps> = ({
  purchaseOrder,
}) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {purchaseOrder.id}
    </TableCell>
    <TableCell align="right">{purchaseOrder.number}</TableCell>
    <TableCell align="right">{purchaseOrder.vendorName}</TableCell>
    <TableCell align="right">
      <NumberFormat
        value={purchaseOrder.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </TableCell>
  </TableRow>
);
