import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

const TaskForm = () => {
  const [question, setQuestion] = useState("");

  const router = useRouter();

  const LOGIN = async () => {
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const body = {
        question: question,
      };

      const response = await axios.post(`http://localhost:3002/login`, body, {
        headers,
      });

      console.log(response);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Add task</h1>
      <div className={styles.form}>
        <input
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
        />
        <button onClick={LOGIN}>Log In</button>
      </div>
    </div>
  );
};

export default TaskForm;
