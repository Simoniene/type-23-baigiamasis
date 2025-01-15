import React from "react";
import { Question } from "@/types/question";
import Card from "../QuestionCards/QuestionCard";
import styles from "./styles.module.css";

type QuestionProps = {
  questions?: Question[];
};

const Questions = ({ questions = [] }: QuestionProps) => {
  return (
    <div className={styles.wrapper}>
      {questions.map((singleQuestion) => {
        return (
          <Card
            id={singleQuestion.id}
            key={singleQuestion.id}
            question={singleQuestion.question}
          />
        );
      })}
    </div>
  );
};

export default Questions;
