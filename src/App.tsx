import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Language from './components/Language';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';
import { Toaster } from 'react-hot-toast';
import LogoutButton from './components/LogoutButton';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();
  const showLogoutButton = location.pathname === '/invoiceList' || location.pathname === '/invoice-detail';

  return (
    <>
      <Toaster position="top-center" />
      {showLogoutButton && <LogoutButton />}
      <Language />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoiceList" element={<ProtectedRoute element={<InvoiceList />} />} />
        <Route path="/invoice-detail" element={<ProtectedRoute element={<InvoiceDetail />} />} />
        <Route path="*" element={'Not Found'} />
      </Routes>
    </>
  );
}

export default App;
