import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Login from "./consumer/Login";
import ErrorPage from "./ErrorPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/consumer/login" element={<Login/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
