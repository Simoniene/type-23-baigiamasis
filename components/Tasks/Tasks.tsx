import React from "react";
import { Task } from "@/types/task";
import Card from "../Cards/Card";
import styles from "./styles.module.css";

type QuestionProps = {
  question: Task[];
};

const Tasks = ({ question }: QuestionProps) => {
  return (
    <div className={styles.wrapper}>
      {question.map((question) => {
        return (
          <Card
            id={question.id}
            key={question.id}
            question={question.question}
            // status={task.status}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
