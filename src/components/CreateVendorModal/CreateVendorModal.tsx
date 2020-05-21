import React, { useState, useEffect } from "react";
import {
  Typography,
  Modal,
  Slide,
  TextField,
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Vendor } from "../../common/types";

type CreateVendorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newVendor: Vendor) => void;
  vendor?: Vendor;
};

export const CreateVendorModal: React.FC<CreateVendorModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  vendor,
}) => {
  const classes = useStyles();

  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [minimumAmount, setMinimumAmount] = useState<string>("0");
  const [customPurchaseOrderMemo, setCustomPurchaseOrderMemo] = useState<
    string
  >("");
  const [sendEmail, setSendEmail] = useState<boolean>(false);

  useEffect(() => {
    setId(vendor?.id || "");
    setName(vendor?.name || "");
    setMinimumAmount((vendor?.minimumAmount || 0).toString());
    setCustomPurchaseOrderMemo(vendor?.customPurchaseOrderMemo || "");
    setSendEmail(vendor ? vendor.sendEmail : false);
  }, [vendor]);

  const onSubmitHandler = () => {
    const newVendor: Vendor = {
      id,
      name,
      minimumAmount: parseInt(minimumAmount),
      customPurchaseOrderMemo,
      sendEmail,
    };

    onSubmit(newVendor);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <div style={{ top: "25%", margin: "auto" }} className={classes.paper}>
          <Typography variant="h6">{vendor ? "Edit" : "Add"} vendor</Typography>

          <div>
            <FormGroup>
              <TextField
                required
                label="Vendor ID"
                value={id}
                onChange={(e) => setId(e.currentTarget.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                required
                label="Vendor Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                required
                type="number"
                label="Minimum amount to create PO ($)"
                value={minimumAmount}
                onChange={(e) => setMinimumAmount(e.currentTarget.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                required
                label="Custom Purchase Order Memo"
                value={customPurchaseOrderMemo}
                onChange={(e) =>
                  setCustomPurchaseOrderMemo(e.currentTarget.value)
                }
              />
            </FormGroup>

            <FormControlLabel
              control={
                <Checkbox
                  checked={sendEmail}
                  onChange={(e) => setSendEmail(e.target.checked)}
                />
              }
              label="Send Email"
            />

            <Divider />

            <Button
              onClick={onSubmitHandler}
              style={{ marginTop: 20 }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: theme.spacing() * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing() * 4,
    },
  })
);
