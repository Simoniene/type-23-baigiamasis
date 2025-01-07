import React, { useState } from "react";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import RegisterForm from "../RegisterForm/RegisterForm";

const LoginForm = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onLogin = async () => {
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:3000/login",
        userData
      );
      if (response.status === 200) {
        cookie.set("jwt_token", response.data.token);
        router.push("/");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.wrapper}>
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
      </div>
      <button onClick={RegisterForm}>
        Don`t have an account? Register here.
      </button>
    </>
  );
};

export default LoginForm;
