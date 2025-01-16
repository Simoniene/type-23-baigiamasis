import React, { useState } from "react";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import RegisterForm from "../RegisterForm/RegisterForm";
import { AxiosError } from "axios";
import { LoginUser } from "@/api/user";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isLoggingIn, setLoggingIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const router = useRouter();

  const onLogin = async () => {
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await LoginUser(userData);

      if (response.status === 200) {
        setLoggingIn(false);
        setError(false);
        cookie.set("jwt_token", response.data.token);
        router.push("/");
      }
    } catch (err) {
      const error = err as AxiosError;
      setLoggingIn(false);
      if ((error.status = 401)) {
        console.log("Login failed");
        setError(true);
      }
      console.log(err);
    }
  };

  const handleSwitchToRegister = () => {
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
  };

  return (
    <>
      {showRegister ? (
        <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
      ) : (
        <div className={styles.wrapper}>
          <h1>Log In</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={onLogin}>Log In</button>
          <button onClick={handleSwitchToRegister}>
            Don`t have an account? Register here.
          </button>
          <div>{isError && <>Login failed</>}</div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
