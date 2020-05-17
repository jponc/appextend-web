export enum InvoiceStatuses {
  Incomplete = "Incomplete",
  Complete = "Complete",
}

export type Invoice = {
  id: string;
  number: string;
  customerId: string;
  customerName: string;
  totalAmount: number;
  status: InvoiceStatuses;
  createdAt: string;
  updatedAt: string;
};

export type InvoiceLine = {
  id: string;
  invoiceId: string;
  itemId: string;
  itemName: string;
  amount: number;
  quantity: number;
  unitPrice: number;
  vendorId?: string;
  vendorName?: string;
};

export type PurchaseOrder = {
  id: string;
  number: string;
  invoiceId: string;
  vendorName: string;
  vendorId: string;
  amount: number;
};

export type AppRules = {
  GeneratePurchaseOrder: boolean;
  ItemNameMatcher: string
};

export type Vendor = {
  id: string;
  name: string;
  minimumAmount: number;
  customPurchaseOrderMemo: string;
}

export type ActivityLog = {
  resourceId: string; // Invoice_123
  message: string;
  createdAt: string;
};

export type AppSettingsTokens = {
  refresh_token: string;
  access_token: string;
  access_token_expiration_date: string;
};
