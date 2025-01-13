import React, { useState } from "react";
import Header from "@/components/Header/Header";
import LoginForm from "@/components/LoginForm/LoginForm";
import Footer from "@/components/Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
