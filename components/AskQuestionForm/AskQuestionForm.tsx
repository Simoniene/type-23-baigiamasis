import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Link from "next/link";

const AskQuestionForm = () => {
  const [question, setQuestion] = useState("");

  const router = useRouter();

  const isAuthenticated = !!cookie.get("jwt_token");

  const onAskQuestion = async () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to ask a question.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/questions",
        { question },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Your question was posted!");
        router.push("/");
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.wrapper}>
          <input
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Link href={"/"} passHref>
            <button onClick={onAskQuestion} className={styles.questionBtn}>
              Submit Question
            </button>
          </Link>
        </div>
      ) : (
        <p>You need to log in to ask a question.</p>
      )}
    </div>
  );
};

export default AskQuestionForm;
