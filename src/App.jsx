import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Booking from './pages/Booking.jsx';
import Transaksi from './pages/Transaksi.jsx';
import Pembukuan from './pages/Pembukuan.jsx';
import Kehadiran from './pages/Kehadiran.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="booking" element={<Booking />} />
        <Route path="transaksi" element={<Transaksi />} />
        <Route path="pembukuan" element={<Pembukuan />} />
        <Route path="kehadiran" element={<Kehadiran />} />
      </Route>
    </Routes>
  );
}
