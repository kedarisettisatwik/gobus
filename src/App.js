import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./consumer/Login";
import ErrorPage from "./ErrorPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage/>}></Route>
          <Route path="/gobus" element={<Login/>}></Route>
          <Route path="/gobus/consumer/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
