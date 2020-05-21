import React from "react";
import { Vendor } from "../../common/types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Chip, makeStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";

type VendorRowProps = {
  vendor: Vendor;
  onDelete: (vendor: Vendor) => void;
  onEdit: (vendor: Vendor) => void;
};

type SendEmailChipProps = {
  sendEmail: boolean;
};

const useStyles = makeStyles((theme) => ({
  sendChipYes: {
    backgroundColor: theme.palette.success.main
  },
  sendChipNo: {
    backgroundColor: theme.palette.error.main
  }
}));

const SendEmailChip: React.FC<SendEmailChipProps> = ({ sendEmail }) => {
  const classes = useStyles();

  if (sendEmail) {
    return (
      <Chip color="primary" className={classes.sendChipYes} label="Yes" />
    );
  } else {
    return (
      <Chip color="primary" className={classes.sendChipNo} label="No" />
    );
  }
};

export const VendorRow: React.FC<VendorRowProps> = ({
  vendor,
  onDelete,
  onEdit,
}) => (
  <TableRow>
    <TableCell>{vendor.id}</TableCell>
    <TableCell>{vendor.name}</TableCell>
    <TableCell>
      <NumberFormat
        value={vendor.minimumAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </TableCell>
    <TableCell>{vendor.customPurchaseOrderMemo}</TableCell>
    <TableCell>
      <SendEmailChip sendEmail={vendor.sendEmail} />
    </TableCell>
    <TableCell align="right">
      <IconButton onClick={() => onEdit(vendor)}>
        <EditIcon />
      </IconButton>

      <IconButton onClick={() => onDelete(vendor)}>
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);
