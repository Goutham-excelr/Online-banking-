import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Login from '../../online bank/Login'; // Your login component
import MainBar from './AppBar/appBar';
import Dashboard from "./dashBoard";
import { Outlet } from 'react-router-dom';
import Register from './Signup';

const AppContent = () => {
  const location = useLocation();
  const shouldRenderMainBar = !['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {shouldRenderMainBar && <MainBar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />    
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Register />} />
        {/* Add more routes here if needed */}
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
    <Outlet/>
  </BrowserRouter>
);

export default App;
