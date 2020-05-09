import { useState, useEffect } from "react"
import { Invoice } from "../common/types";
import {getInvoices} from "../actions/invoices";

export const useInvoices = (token: string) => {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [doneFetching, setDoneFetching] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setInvoices(await getInvoices(token))
      setDoneFetching(true);
    })();
  }, [token])

  return { invoices, doneFetching }
}
