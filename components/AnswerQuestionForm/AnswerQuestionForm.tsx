import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

type AnswerQuestionFormProps = {
  id: string;
  answer: string;
};

const AnswerQuestionForm = ({ id, answer }: AnswerQuestionFormProps) => {
  const [answerText, setAnswerText] = useState(answer);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = cookie.get("jwt_token");
    setIsAuthenticated(!!token);
  }, []);

  const onSubmitAnswer = async () => {
    if (!isAuthenticated) {
      console.log("You must be logged in to answer a question.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3002/answers/${id}`,
        { answer: answerText },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Your answer has been submitted!");
        setAnswerText("aaaa");
      }
    } catch (err) {
      console.log("Error submitting answer", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isAuthenticated ? (
        <>
          <input
            type="text"
            placeholder="Your Answer"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
          <button onClick={onSubmitAnswer}>Submit Answer</button>
        </>
      ) : (
        <p>You need to be logged in to answer a question.</p>
      )}
    </div>
  );
};

export default AnswerQuestionForm;
