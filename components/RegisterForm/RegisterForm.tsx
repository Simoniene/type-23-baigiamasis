import React, { useState } from "react";
import styles from "./styles.module.css";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { SigninUser } from "@/api/user";
import Link from "next/link";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggingIn, setLoggingIn] = useState(false);

  const onRegister = async () => {
    try {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      const response = await SigninUser(userData);

      if ((response.status = 200)) {
        cookie.set("jwt_token", response.data.token);
        setLoggingIn(false);
        router.push("/");
        console.log("Registration was successful");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleRegisterAndSwitch = () => {
  //   onRegister();
  //   onSwitchToLogin();
  // };

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <input
          type="text"
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

        <button onClick={onRegister}> Register</button>
        <button onClick={onSwitchToLogin}>
          Already have an account? Sign In
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
