import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // Registracijos funkcija
  const onRegister = async () => {
    try {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:3000/register",
        userData
      ); // Naudokite "register" endpoint'ą
      if (response.status === 200) {
        cookie.set("jwt_token", response.data.token); // Užfiksuokite tokeną į cookies
        router.push("/"); // Nukreipkite į pagrindinį puslapį
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
        <button onClick={onRegister}>Register</button>
      </div>
      <button onClick={onSwitchToLogin}>
        Already have an account? Sign In
      </button>
    </>
  );
};

export default RegisterForm;
