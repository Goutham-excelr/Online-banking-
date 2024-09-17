import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Login from '../../online bank/Login'; // Your login component
import MainBar from './AppBar/appBar';
import Dashboard from "./dashBoard";
import { Outlet } from 'react-router-dom';
import Register from './Signup';
import Home from './home';
import { Container } from '@mui/material';
import Accountdata from './components/Accdata';
import SelfTransfer from './components/Self';
import ToAnotherBankAccount from './components/Another';
import BankStatement from './components/Statment';

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
        <Route path="/home" element={<Home />} />
        <Route path="/accountdata" element={<Accountdata />} />
        <Route path="/selfTransfer" element={<SelfTransfer />} />
        <Route path="/toAnotherBankAccount" element={<ToAnotherBankAccount />} />
        <Route path="BankStatement" element={<BankStatement/>} />
       

        {/* Add more routes here if needed */}
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
    <Container sx={{pr:5}}>
    <Outlet/>
    </Container>
  </BrowserRouter>
);

export default App;
