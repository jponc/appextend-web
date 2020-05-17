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
  const { vendors, doneFetching, createVendor, deleteVendor, updateVendor } = useVendors(token);
  const { setSuccess, setError } = useFeedback();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | undefined>(undefined);

  const onSubmitCreateVendorHandler = async (newVendor: Vendor) => {
    try {
      await createVendor(newVendor);
      setSuccess("Successfully added");
      setIsModalOpen(false);
    } catch (e) {
      setError(e.message);
    }
  };

  const vendorOnDeleteHandler = async (vendor: Vendor) => {
    if (window.confirm(`Are you sure you want to delete ${vendor.name} from the list?`)) {
      try {
        await deleteVendor(vendor.id);
        setSuccess("Successfully deleted vendor");
        setIsModalOpen(false);
      } catch (e) {
        setError(e.message);
      }
    }
  }

  const vendorOnEditHandler = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  }

  const vendorOnAddHandler = () => {
    setSelectedVendor(undefined);
    setIsModalOpen(true);
  }

  return (
    <AppLayout title="Vendors">
      {!doneFetching ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button onClick={vendorOnAddHandler} variant="contained">
              Add Vendor
            </Button>
          </Grid>
          <Grid item xs={12}>
            <VendorsTable vendors={vendors} onDelete={vendorOnDeleteHandler} onEdit={vendorOnEditHandler} />
          </Grid>
        </Grid>
      )}

      <CreateVendorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmitCreateVendorHandler}
        vendor={selectedVendor}
      />
    </AppLayout>
  );
};
