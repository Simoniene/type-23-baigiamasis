import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import axios from "axios";
import { useState } from "react";

type CardProps = {
  id: string;
  question: string;
};
const Card = ({ id, question }: CardProps) => {
  const router = useRouter();

  const isAuthenticated = !!cookie.get("jwt_token");

  const [answerText, setAnswerText] = useState(false);

  const onSubmitAnswer = async () => {
    if (!isAuthenticated) {
      console.log("You must be logged in to answer a question.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3002/tasks/${id}`,
        { answer: answerText },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Your answer has been submitted!");
        setAnswerText(answerText);
      }
    } catch (err) {
      console.log("Error submitting answer", err);
    }
  };

  const onDeleteQuestion = async () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to delete an answer.");
      router.push("/");
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.BASE_URL}/questions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Question deleted successfully!");
        router.push("/");
      }
    } catch (err) {
      console.log("Error deleting question", err);
    }
  };

  return (
    <div className={styles.card}>
      <span>{question}</span>
      <div className={styles.cardBtn}>
        <Link href={`/tasks/${id}`} passHref>
          <button onClick={onSubmitAnswer} className={styles.answerBtn}>
            Answer
          </button>
        </Link>
        <Link href={"/"} passHref>
          <button onClick={onDeleteQuestion}>Delete Question</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
