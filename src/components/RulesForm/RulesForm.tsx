import React, { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormGroup,
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

  const onSubmitHandler = () => {
    const newRules: AppRules = {
      GeneratePurchaseOrder: isCheckedGeneratePurchaseOrder
    }

    onSubmit(newRules);
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isCheckedGeneratePurchaseOrder}
            onChange={() =>
              setIsCheckedGeneratePurchaseOrder(
                !isCheckedGeneratePurchaseOrder
              )
            }
            name="GeneratePurchaseOrder"
            color="primary"
          />
        }
        label="GeneratePurchaseOrder"
      />

      <FormControl>
        <Button onClick={onSubmitHandler} variant="contained">Submit</Button>
      </FormControl>
    </FormGroup>
  );
};
