import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { useInvoices } from "../../hooks/useInvoices";
import { InvoicesTable } from "../../components/InvoicesTable";
import { Loading } from "../../components/Loading";

export const HomeScreen = () => {
  const { invoices, doneFetching } = useInvoices();

  return (
    <AppLayout title="Home">
      {!doneFetching ? <Loading /> : <InvoicesTable invoices={invoices} />}
    </AppLayout>
  );
};
