import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { useUser } from "../../context/UserContext";
import { useVendors } from "../../hooks/useVendors";
import { Loading } from "../../components/Loading";
import { Grid } from "@material-ui/core";
import { Vendor } from "../../common/types";
import { useFeedback } from "../../context/FeedbackContext";

export const VendorsScreen = () => {
  const { token } = useUser();
  const { vendors, doneFetching } = useVendors(token);
  const { setSuccess, setError } = useFeedback();

  const onSubmitHandler = async (vendor: Vendor) => {};

  return (
    <AppLayout title="Rules">
      {!doneFetching || !vendors ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      )}
    </AppLayout>
  );
};
