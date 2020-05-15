import React from "react";
import { Vendor } from "../../common/types";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { VendorRow } from "../VendorRow";

type VendorsTableProps = {
  vendors: Vendor[];
};

export const VendorsTable: React.FC<VendorsTableProps> = ({ vendors }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Minimum Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendors.map((vendor) => (
            <VendorRow key={vendor.id} vendor={vendor} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
