// import React from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// // Components
// import Navbar from './Components/Navbar';
// import AuthNavbar from './Components/AuthNavbar';
// import Home from './Pages/Home';
// import PaintingPage from './Pages/PaintingPage';
// import View from './Components/View';
// import RegistrationAddress from './Pages/RegistrationAddress';
// import CreateAccount from './Pages/CreateAccount';
// import LoginPage from './Components/LoginPage';




// export default function App() {
//   const location = useLocation();
//   const showNavbar = ['/paintings', '/view', '/home', '/login'].includes(location.pathname);
//   const showAuthNavbar = ['/create-account', '/register-address'].includes(location.pathname);
//   const [isCartOpen, setCartOpen] = useState(false); // ✅ State for cart

//   return (
//     <>
//       {/* {showNavbar && <Navbar onCartClick={() => alert("Cart clicked!")} />} */}
//       <Navbar onCartClick={() => setCartOpen(true)} /> {/* ✅ Pass prop */}
//       <CartModal open={isCartOpen} onClose={() => setCartOpen(false)} /> {/* ✅ Render modal */}
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" replace />} />
//         <Route path="/create-account" element={<CreateAccount />} />
//         <Route path="/register-address" element={<RegistrationAddress />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/paintings" element={<PaintingPage />} />
//         <Route path="/view" element={<View />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="*" element={<Navigate to="/home" replace />} />
//       </Routes>
//     </>
//   );
// }


import React, { useState } from 'react'; 
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import AuthNavbar from './Components/AuthNavbar';
import Home from './Pages/Home';
import PaintingPage from './Pages/PaintingPage';
import View from './Components/View';
import RegistrationAddress from './Pages/RegistrationAddress';
import CreateAccount from './Pages/CreateAccount';
import LoginPage from './Components/LoginPage';
import CartModal from './Components/CartModal'; 

export default function App() {
  const location = useLocation();
  const showNavbar = ['/paintings', '/view', '/home', '/login'].includes(location.pathname);
  const showAuthNavbar = ['/create-account', '/register-address'].includes(location.pathname);
  const [isCartOpen, setCartOpen] = useState(false); 

  return (
    <>
      {/* Removed conditional rendering of Navbar to always show it for simplicity */}
      <Navbar onCartClick={() => setCartOpen(true)} /> 
      {showAuthNavbar && <AuthNavbar />}
      <CartModal open={isCartOpen} onClose={() => setCartOpen(false)} /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/register-address" element={<RegistrationAddress />} />
        <Route path="/home" element={<Home />} />
        <Route path="/paintings" element={<PaintingPage />} />
        <Route path="/view" element={<View />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}