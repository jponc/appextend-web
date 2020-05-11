import { config } from "../config";
import { Invoice, InvoiceLine, PurchaseOrder } from "../common/types";
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

export const getInvoice = async (token: string, invoiceId: string): Promise<Invoice> => {
  const url = `${config.apiHost}/invoices/${invoiceId}`;

  const res = await fetch(url, {
    headers: buildHeaders(token)
  })

  if (!res.ok) {
    throw new Error("Error");
  }

  const json = await res.json();
  return json.body;
};

export const getInvoiceLines = async (token: string, invoiceId: string): Promise<InvoiceLine[]> => {
  const url = `${config.apiHost}/invoices/${invoiceId}/lines`;

  const res = await fetch(url, {
    headers: buildHeaders(token)
  })

  if (!res.ok) {
    throw new Error("Error");
  }

  const json = await res.json();
  return json.body;
};

export const getPurchaseOrders = async (token: string, invoiceId: string): Promise<PurchaseOrder[]> => {
  const url = `${config.apiHost}/invoices/${invoiceId}/purchase-orders`;

  const res = await fetch(url, {
    headers: buildHeaders(token)
  })

  if (!res.ok) {
    throw new Error("Error");
  }

  const json = await res.json();
  return json.body;
};
