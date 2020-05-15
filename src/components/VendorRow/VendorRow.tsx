import React from "react";
import { Vendor } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

type VendorRowProps = {
  vendor: Vendor;
};

export const VendorRow: React.FC<VendorRowProps> = ({ vendor }) => (
  <TableRow>
    <TableCell>{vendor.id}</TableCell>
    <TableCell>{vendor.name}</TableCell>
    <TableCell>${vendor.minimumAmount}</TableCell>
  </TableRow>
);
