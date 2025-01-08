import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";

const AnswerQuestionForm = ({ questionId }: { questionId: string }) => {
  const [answer, setAnswer] = useState("");

  const isAuthenticated = !!cookie.get("jwt_token");

  const onSubmitAnswer = async () => {
    if (!isAuthenticated) {
      console.log("You must be logged in to answer a question.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/tasks",
        { answer, questionId },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Your answer has been submitted!");
        setAnswer("");
      }
    } catch (err) {
      console.log("Error submitting answer", err);
    }
  };
  const onDeleteAnswer = () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to delete an answer.");
      return;
    }

    console.log("Answer deleted");
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
          <button onClick={onDeleteAnswer}>Delete Question </button>
        </div>
      ) : (
        <p>You need to be logged in to answer a question.</p>
      )}
    </div>
  );
};

export default AnswerQuestionForm;
