import React, { useState } from "react";
import {
  Checkbox,
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import { AppRules } from "../../common/types";

type RulesFormProps = {
  rules: AppRules;
  onSubmit: (rules: AppRules) => void;
};

export const RulesForm: React.FC<RulesFormProps> = ({ rules, onSubmit }) => {
  const [
    isCheckedGeneratePurchaseOrder,
    setIsCheckedGeneratePurchaseOrder,
  ] = useState<boolean>(rules.GeneratePurchaseOrder);
  const [amount, setAmount] = useState<string>(
    rules.MinimumAmountPerVendorToCreatePurchaseOrder.toString()
  );

  const [itemNameMatcher, setItemNameMatcher] = useState<string>(rules.ItemNameMatcher);

  const onSubmitHandler = () => {
    const newRules: AppRules = {
      GeneratePurchaseOrder: isCheckedGeneratePurchaseOrder,
      MinimumAmountPerVendorToCreatePurchaseOrder: parseInt(amount),
      ItemNameMatcher: itemNameMatcher
    };

    onSubmit(newRules);
  };

  return (
    <>
      <Grid container justify="center" direction="row">
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Auto generate PO
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Checkbox
            checked={isCheckedGeneratePurchaseOrder}
            onChange={() =>
              setIsCheckedGeneratePurchaseOrder(!isCheckedGeneratePurchaseOrder)
            }
            name="GeneratePurchaseOrder"
            color="primary"
          />
        </Grid>
      </Grid>
      <Grid container justify="center" direction="row">
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Minimum amount to generate PO
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            label="Amount ($)"
          />
        </Grid>
      </Grid>
      <Grid container justify="center" direction="row">
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Item name matcher
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={itemNameMatcher}
            onChange={(e) => setItemNameMatcher(e.target.value)}
            label="Regex"
          />
        </Grid>
      </Grid>

      <Button onClick={onSubmitHandler} variant="contained">
        Submit
      </Button>
    </>
  );
};
