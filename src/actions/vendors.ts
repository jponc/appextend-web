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
      body: newVendor,
    }),
  });

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.body;
};

export const updateVendor = async (
  token: string,
  vendor: Vendor
): Promise<Vendor> => {
  const url = `${config.apiHost}/vendors/${vendor.id}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: buildHeaders(token),
    body: JSON.stringify({
      body: vendor,
    }),
  });

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.body;
};

export const deleteVendor = async (
  token: string,
  vendorId: string
): Promise<Vendor> => {
  const url = `${config.apiHost}/vendors/${vendorId}`;

  const res = await fetch(url, {
    method: "DELETE",
    headers: buildHeaders(token),
  });

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.body;
};
