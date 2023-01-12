import React, { Component }  from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AdminPage from "./components/AdminPage";
import ClientPage from "./components/ClientPage";
import ChartPage from "./components/ChartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route exact path="/register-page" element={<SignUpPage />}/>
        <Route exact path="/admin-page" element={<AdminPage />}/>
        <Route exact path="/client-page" element={<ClientPage />}/>
        <Route exact path="/chart-page" element={<ChartPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
