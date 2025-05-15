import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import CustomerLogin from "./consumer/Login";
import DriverLogin from "./driver/Login";
import ErrorPage from "./ErrorPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/gobus/consumer/login" element={<CustomerLogin/>}></Route>
          <Route path="/gobus/driver/login" element={<DriverLogin/>}></Route>
          <Route path="/gobus" element={<CustomerLogin/>}></Route>
          <Route path="/" element={<CustomerLogin/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
