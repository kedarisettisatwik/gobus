import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import CustomerLogin from "./consumer/Login";
import DriverLogin from "./driver/Login";
import PartnerLogin from "./partner/Login";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/consumer/login" element={<CustomerLogin/>}></Route>
          <Route path="/driver/login" element={<DriverLogin/>}></Route>
          <Route path="/partner/login" element={<PartnerLogin/>}></Route>
          <Route path="*" element={<CustomerLogin/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
