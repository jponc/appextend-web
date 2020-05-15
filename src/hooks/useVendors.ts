import { useState, useEffect } from "react";
import { Vendor } from "../common/types";
import { getVendors } from "../actions/vendors";

export const useVendors = (token: string) => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [doneFetching, setDoneFetching] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setVendors(await getVendors(token));
      setDoneFetching(true);
    })();
  }, [token]);

  return { vendors, doneFetching };
};
