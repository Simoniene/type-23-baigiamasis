import React from "react";
import { Question } from "@/types/question";
import QuestionCard from "../QuestionCards/QuestionCard";
import styles from "./styles.module.css";

type QuestionProps = {
  questions?: Question[];
};

const Questions = ({ questions = [] }: QuestionProps) => {
  return (
    <div className={styles.wrapper}>
      {questions.map((question) => {
        return (
          <QuestionCard
            id={question.id}
            key={question.id}
            question={question.question}
          />
        );
      })}
    </div>
  );
};

export default Questions;
