import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import AnswerQuestionForm from "../AnswerQuestionForm/AnswerQuestionForm";
// import completedImg from "../../assets/img/complete-svgrepo-com.svg";
// import notCompletedImg from "../../assets/img/not-completed.svg";

type CardProps = {
  id: string;
  question: string;
  // status: boolean;
};
const Card = ({ id, question }: CardProps) => {
  const [showAnswer, setShowAnswer] = useState(false); // Įdėjau `useState` viduje komponento

  const handleSwitchToAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className={styles.card}>
      <h1>Question</h1>
      <span>{question}</span>
      {/* <>
          {status ? (
            <img src={completedImg.src} alt="completed mark" />
          ) : (
            <img src={notCompletedImg.src} alt="not completed mark" />
          )}
        </> */}
      <Link href={`/tasks/${id}`} passHref>
        <button>Answer</button>
      </Link>
    </div>
  );
};

export default Card;
