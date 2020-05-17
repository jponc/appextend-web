import { useState, useEffect } from "react";
import { Vendor } from "../common/types";
import {
  getVendors,
  createVendor as createVendorAction,
  updateVendor as updateVendorAction,
  deleteVendor as deleteVendorAction,
} from "../actions/vendors";

export const useVendors = (token: string) => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [doneFetching, setDoneFetching] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setVendors(await getVendors(token));
      setDoneFetching(true);
    })();
  }, [token]);

  const createVendor = async (vendor: Vendor) => {
    await createVendorAction(token, vendor);
    setVendors(await getVendors(token));
  };

  const updateVendor = async (vendor: Vendor) => {
    await updateVendorAction(token, vendor);
    setVendors(await getVendors(token));
  };

  const deleteVendor = async (vendorId: string) => {
    await deleteVendorAction(token, vendorId);
    setVendors(await getVendors(token));
  };

  return { vendors, doneFetching, createVendor, updateVendor, deleteVendor };
};
