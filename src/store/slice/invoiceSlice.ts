import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Invoice } from '../../helpers/types';

export interface MovieState {
  invoices: Invoice[];
  invoiceDetail: Invoice;
}

const initialState = {
  invoices: [] as Invoice[],
  invoiceDetail: {} as Invoice
};

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setInvoices: (state, action: PayloadAction<Invoice[]>) => {
      state.invoices = action.payload;
    },
    setInvoiceDetail: (state, action: PayloadAction<Invoice>) => {
      state.invoiceDetail = action.payload;
    }
  }
});

export const { setInvoices, setInvoiceDetail } = invoiceSlice.actions;

export default invoiceSlice.reducer;
