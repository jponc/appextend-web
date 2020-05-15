import { config } from "../config";
import { Vendor } from "../common/types";
import { buildHeaders } from "./utils";

export const getVendors = async (token: string): Promise<Vendor[]> => {
  const url = `${config.apiHost}/vendors`;

  const res = await fetch(url, {
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};

export const createVendor = async (
  token: string,
  newVendor: Vendor
): Promise<Vendor> => {
  const url = `${config.apiHost}/vendors`;

  const res = await fetch(url, {
    method: "POST",
    headers: buildHeaders(token),
    body: JSON.stringify({
      body: newVendor
    }),
  });

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};
