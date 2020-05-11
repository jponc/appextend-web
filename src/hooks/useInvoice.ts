import { useState, useEffect } from "react";
import { Invoice, InvoiceLine, PurchaseOrder } from "../common/types";
import {
  getInvoice,
  getInvoiceLines,
  getPurchaseOrders,
} from "../actions/invoices";

export const useInvoice = (token: string, invoiceId: string) => {
  const [invoice, setInvoice] = useState<Invoice | undefined>(undefined);
  const [invoiceLines, setInvoiceLines] = useState<InvoiceLine[]>([]);
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);

  const [doneFetching, setDoneFetching] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const [resInvoice, resInvoiceLines, resPurchaseOrders] = await Promise.all([
        getInvoice(token, invoiceId),
        getInvoiceLines(token, invoiceId),
        getPurchaseOrders(token, invoiceId)
      ])
      setInvoice(resInvoice);
      setInvoiceLines(resInvoiceLines);
      setPurchaseOrders(resPurchaseOrders);

      setDoneFetching(true);
    })();
  }, [token, invoiceId]);

  return { invoice, invoiceLines, purchaseOrders, doneFetching };
};
