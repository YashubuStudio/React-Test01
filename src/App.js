import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import StoreEntry from './pages/StoreEntry';
import Coupons from './pages/Coupons';
import Ping from './components/Ping';
import Register from './components/Register';
import Login from './components/Login';
import { CssBaseline } from '@mui/material';
import Spacer from './components/Spacer';
import { AuthProvider } from './AuthContext';
import AccountInfo from './pages/AccountInfo';
import QrCodePage from './pages/QrCodePage'; // 新しく作成したQrCodePageコンポーネント

const App = () => {
  return (
    <AuthProvider>
      <Router >
        <CssBaseline />
        <div className="app-container">
          <Navbar />
          <div className="content">
            <Spacer height="64px" /> {/* AppBarの高さ分のスペース */}
            <Routes>
              <Route path="/React-Test01/" element={<Home />} />
              <Route path="/React-Test01/news" element={<NewsPage />} />
              <Route path="/React-Test01/blog" element={<BlogPage />} />
              <Route path="/React-Test01/store-entry" element={<StoreEntry />} />
              <Route path="/React-Test01/coupons" element={<Coupons />} /> {/* クーポンルートを保護 */}
              <Route path="/React-Test01/ping" element={<Ping />} />
              <Route path="/React-Test01/register" element={<Register />} />
              <Route path="/React-Test01/login" element={<Login />} />
              <Route path="/React-Test01/account-info" element={<AccountInfo />} />
              <Route path="/React-Test01/store-entry/qr-code/:storeId" element={<QrCodePage/>} />
            </Routes>
            <Spacer height="56px" /> {/* BottomNavの高さ分のスペース */}
          </div>
          <BottomNav />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
