import React, { useState } from "react";
import { AppLayout } from "../../components/AppLayout";
import { CreateVendorModal } from "../../components/CreateVendorModal";
import { useUser } from "../../context/UserContext";
import { useVendors } from "../../hooks/useVendors";
import { Loading } from "../../components/Loading";
import { Grid, Button } from "@material-ui/core";
import { Vendor } from "../../common/types";
import { useFeedback } from "../../context/FeedbackContext";
import { VendorsTable } from "../../components/VendorsTable";

export const VendorsScreen = () => {
  const { token } = useUser();
  const { vendors, doneFetching, createVendor } = useVendors(token);
  const { setSuccess, setError } = useFeedback();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onSubmitCreateVendorHandler = async (newVendor: Vendor) => {
    try {
      await createVendor(newVendor);
      setSuccess("Successfully added");
      setIsModalOpen(false);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <AppLayout title="Rules">
      {!doneFetching ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button onClick={() => setIsModalOpen(true)} variant="contained">
              Add Vendor
            </Button>
          </Grid>
          <Grid item xs={12}>
            <VendorsTable vendors={vendors} />
          </Grid>
        </Grid>
      )}

      <CreateVendorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmitCreateVendorHandler}
      />
    </AppLayout>
  );
};
