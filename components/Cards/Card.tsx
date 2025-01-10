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
    setShowAnswer(true); // Tai nustatys `showAnswer` į true, kai paspausite mygtuką
  };
  const handleSwitchToQuestion = () => {
    setShowAnswer(false); // Tai nustatys `showAnswer` į true, kai paspausite mygtuką
  };
  return (
    <>
      <div className={styles.card}>
        <Link className={styles.link} href={`/tasks/${id}`}>
          <h1>Question</h1>
        </Link>
        {/* <>
          {status ? (
            <img src={completedImg.src} alt="completed mark" />
          ) : (
            <img src={notCompletedImg.src} alt="not completed mark" />
          )}
        </> */}
        <button onClick={handleSwitchToAnswer}>Answer</button>

        <span>{question}</span>
      </div>
      <AnswerQuestionForm onSwitchToAnswer={handleSwitchToQuestion} />
    </>
  );
};

export default Card;
