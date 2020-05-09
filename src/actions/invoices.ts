import { config } from "../config";
import { Invoice } from "../common/types";

export const getInvoices = async (): Promise<Invoice[]> => {
  const url = `${config.apiHost}/invoices`;

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};
