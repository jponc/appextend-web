import { config } from "../config";
import { Invoice } from "../common/types";
import { buildHeaders } from "./utils";

export const getInvoices = async (token: string): Promise<Invoice[]> => {
  const url = `${config.apiHost}/invoices`;

  const res = await fetch(url, {
    headers: buildHeaders(token)
  })

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};
