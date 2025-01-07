import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import LoginForm from "../LoginForm/LoginForm";

const RegisterForm = (props: any) => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const router = useRouter();

  const onRegister = async () => {
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

    return (
      <>
        <div className={styles.wrapper}>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button onClick={onRegister}>Register</button>
        </div>
        <button onClick={() => props.onChangeRegisterForm("LoginForm")}>
          Already have an account? Sign In
        </button>
      </>
    );
  };
};

export default RegisterForm;
