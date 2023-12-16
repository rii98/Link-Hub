import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import CompanyProfile from "./pages/CompanyProfile";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="/company-profile" element={<CompanyProfile />}></Route>
        <Route path="/signup" element={<Auth />}></Route>
        <Route path="/login" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
