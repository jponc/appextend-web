import React, { useState, useEffect } from "react";
import {
  Typography,
  Modal,
  Slide,
  TextField,
  FormGroup,
  Button,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {Vendor} from "../../common/types";

type CreateVendorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newVendor: Vendor) => void
};

export const CreateVendorModal: React.FC<CreateVendorModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const classes = useStyles();
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [minimumAmount, setMinimumAmount] = useState<string>("0");

  const reset = () => {
    setId("");
    setName("");
    setMinimumAmount("0");
  }

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen])

  const onSubmitHandler = () => {
    const newVendor: Vendor = {
      id,
      name,
      minimumAmount: parseInt(minimumAmount)
    }

    onSubmit(newVendor)
  }

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
          <Typography variant="h6">Add a vendor</Typography>

          <div>
            <FormGroup>
              <TextField
                required
                label="Vendor ID"
                onChange={(e) => setId(e.currentTarget.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                required
                label="Vendor Name"
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                required
                type="number"
                label="Minimum amount to create PO ($)"
                defaultValue="0"
                onChange={(e) => setMinimumAmount(e.currentTarget.value)}
              />
            </FormGroup>

            <Button onClick={onSubmitHandler} style={{ marginTop: 20 }} variant="contained">
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