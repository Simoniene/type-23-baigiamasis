import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import Card from "../Cards/Card";
import { useRouter } from "next/router";

type AnswerQuestionFormProps = {
  questionId: string;
  answer: string;
};

const AnswerQuestionForm = ({ Answer }: AnswerQuestionFormProps) => {
  const [answer, setAnswer] = useState("");

  const router = useRouter();

  const isAuthenticated = !!cookie.get("jwt_token");

  const onSubmitAnswer = async () => {
    if (!isAuthenticated) {
      console.log("You must be logged in to answer a question.");
      router.push("/");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002//tasks/${id}",
        { answer },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      // const response = await axios.get(
      //   `http://localhost:3002/tasks/${id}`, // Use backticks for template literals
      //   {
      //     headers: {
      //       Authorization: `Bearer ${cookie.get("jwt_token")}`,
      //     },
      //   }
      // );

      if (response.status === 200) {
        console.log("Your answer has been submitted!");
        setAnswer("");
        router.push("/");
      }
    } catch (err) {
      console.log("Error submitting answer", err);
    }
  };
  const onDeleteAnswer = () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to delete an answer.");
      router.push("/");
      return;
    }

    console.log("Answer deleted");
    router.push("/");
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.wrapper}>
          <input
            type="text"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={onSubmitAnswer}>Submit Answer</button>
          <button onClick={onDeleteAnswer}>Delete Answer </button>
        </div>
      ) : (
        <p>You need to be logged in to answer a question.</p>
      )}
    </div>
  );
};

export default AnswerQuestionForm;
