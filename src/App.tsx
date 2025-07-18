import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Language from './components/Language';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Language />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoiceList" element={<InvoiceList />} />
        <Route path="/invoice-detail/:invoiceId" element={<InvoiceDetail />} />
        <Route path="*" element={'Not Found'} />
      </Routes>
    </>
  );
}

export default App;
