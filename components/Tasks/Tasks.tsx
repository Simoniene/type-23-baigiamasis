import React from "react";
import { Task } from "@/types/task";
import Card from "../Cards/Card";
import styles from "./styles.module.css";

type QuestionProps = {
  tasks: Task[];
};

const Tasks = ({ tasks }: QuestionProps) => {
  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => {
        return (
          <Card
            id={task.id}
            key={task.id}
            question={task.question}
            // status={task.status}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
