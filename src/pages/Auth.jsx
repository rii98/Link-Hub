import React, { useState } from "react";
import Signup from "../Components/Signup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();

  return (
    <div
      style={{
        background: `url(
          "https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1800&t=st=1702727119~exp=1702727719~hmac=56c700a37f0bafd9ed8c848ecf3ea4cfd840d4a41e93adba7dd744cf9d861a60"
        )`,
      }}
    >
      <Header />
      {location.pathname === "/login" ? <Login /> : <Signup />}
      <Footer />
    </div>
  );
};

export default Auth;
