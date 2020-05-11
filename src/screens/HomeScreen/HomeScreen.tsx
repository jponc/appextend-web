import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { useInvoices } from "../../hooks/useInvoices";
import { InvoicesTable } from "../../components/InvoicesTable";
import { Loading } from "../../components/Loading";
import { useUser } from "../../context/UserContext";

export const HomeScreen = () => {
  const { token } = useUser();
  const { invoices, doneFetching } = useInvoices(token);

  return (
    <AppLayout title="Invoices">
      {!doneFetching ? <Loading /> : <InvoicesTable invoices={invoices} />}
    </AppLayout>
  );
};
