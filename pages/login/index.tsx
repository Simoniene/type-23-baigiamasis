import React, { useState } from "react";
import Header from "@/components/Header/Header";
import LoginForm from "@/components/LoginForm/LoginForm";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("LoginForm");
  return (
    <div>
      {currentForm === "loginForm" ? <LoginForm /> : <RegisterForm />}
      <Header />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default LoginPage;
