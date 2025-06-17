import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AuthNavbar from './Components/AuthNavbar';
import Home from './Pages/Home';
import PaintingPage from './Pages/PaintingPage';
import DrawingsPage from './Pages/DrawingsPage';
import SculpturePage from './Pages/SculpturePage';
import ArtistsPage from './Pages/ArtistsPage';
import View from './Components/View';
import RegistrationAddress from './Pages/RegistrationAddress';
import CreateAccount from './Pages/CreateAccount';
import LoginPage from './Components/LoginPage';
import CartModal from './Components/CartModal';

export default function App() {
  const location = useLocation();
  const showNavbar = ['/home', '/paintings', '/drawings', '/sculpture', '/artists', '/view'].includes(location.pathname);
  const showAuthNavbar = ['/create-account', '/register-address'].includes(location.pathname);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      {showNavbar && <Navbar onCartClick={() => setCartOpen(true)} />}
      {showAuthNavbar && <AuthNavbar />}
      <CartModal open={isCartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/register-address" element={<RegistrationAddress />} />
        <Route path="/home" element={<Home />} />
        <Route path="/paintings" element={<PaintingPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/sculpture" element={<SculpturePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/view" element={<View />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}