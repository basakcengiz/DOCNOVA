export interface LoginResponse {
  id: string;
  superAdmin: boolean;
  companies: Company[];
  jwt: string;
  expirationDate: string;
  user: User;
  mfaEnabled: boolean;
  secretImageUri: string | null;
  lastCompanyId: string;
}
export type User = {
  id: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  creationTime: string | null;
  photoUrl: string | null;
  mailLang: string;
  isSuperAdmin: boolean | null;
  lastLoginTime: string | null;
  authorities: string[] | null;
  adminAuthorities: string[];
  featureAllowed: boolean;
};
type Company = {
  id: string;
  name: string;
  taxNumber: string;
  website: string | null;
  address: string;
  city: string;
  country: string;
  portalType: string;
  postalCode: string;
  phoneNumber: string;
  credit: number;
  iconUrl: string | null;
  email: string;
  userCount: number;
  vatNumber: string;
  faxNumber: string | null;
  mailLanguage: string;
  subscriptionType: string;
  cif: string | null;
  sftp: boolean;
  isSubCompany: boolean;
  peppolParticipantId: string | null;
  peppolRegisterRequestStatus: string;
  featureAllowed: boolean;
  subCompanies: Company[];
  stripeObj: {
    stripeCustomerId: string;
    type: string;
    renewalDate: string;
    melaAiTokenCount: number;
    renewal: boolean;
  };
  authorities: string;
  compAuthTypes: string;
};

interface PaymentDetails {
  paymentStatus: string;
  paidAmount: number;
  totalAmount: number;
  remainingAmount: number;
}

export interface Invoice {
  allowanceTotalAmount?: number | null;
  companyId?: string;
  createdTime?: string;
  currency: string;
  customerCountryCode?: string;
  customerEndpoint?: string;
  customerId?: string;
  customerName: string;
  customerVat?: string;
  deliveryDate?: string | null;
  documentType?: string;
  dueDate?: string;
  errorMessage?: string | null;
  fileName?: string | null;
  id: string;
  idDescarcare?: string | null;
  idIncarcare?: string | null;
  invoiceNumber: string;
  issueDate?: string;
  lastUpdatedTime?: string;
  lineExtensionAmount?: number;
  localCreatedTime?: string;
  localLastUpdatedTime?: string;
  payableAmount?: number;
  paymentDetails?: PaymentDetails;
  sendViaPeppol?: boolean;
  source?: string;
  status?: string;
  statusTime?: string;
  supplierCountryCode?: string;
  supplierEndpoint?: string;
  supplierId?: string;
  supplierName: string;
  supplierVat?: string;
  taxExclusiveAmount?: number;
  taxInclusiveAmount?: number;
  type?: string;
  typeCode?: number;
  userId?: string | null;
}
