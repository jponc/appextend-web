import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router";
import { useUser } from "../../context/UserContext";
import { useInvoice } from "../../hooks/useInvoice";
import { useActivityLogs } from "../../hooks/useActivityLogs";
import { Grid, Paper } from "@material-ui/core";
import { InvoiceLinesTable } from "../../components/InvoiceLinesTable";
import { PurchaseOrdersTable } from "../../components/PurchaseOrdersTable";
import { InvoiceInfo } from "../../components/InvoiceInfo";
import { ActivityLogsTable } from "../../components/ActivityLogsTable";

export type InvoiceScreenRouteParams = {
  invoiceId: string;
};

export const InvoiceScreen: React.FC = () => {
  const { token } = useUser();
  const invoiceId = useParams<InvoiceScreenRouteParams>().invoiceId;
  const { invoice, purchaseOrders, invoiceLines, doneFetching } = useInvoice(
    token,
    invoiceId
  );
  const { activityLogs } = useActivityLogs(token, `Invoice_${invoiceId}`);
  const title = invoice ? `Invoice #${invoice.number}` : `Invoice`;

  return (
    <AppLayout title={title}>
      {!doneFetching || !invoice? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>
                  <InvoiceInfo invoice={invoice} />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper>
                  <ActivityLogsTable activityLogs={activityLogs} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InvoiceLinesTable invoiceLines={invoiceLines} />
              </Grid>
              <Grid item xs={12}>
                <PurchaseOrdersTable purchaseOrders={purchaseOrders} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </AppLayout>
  );
};
