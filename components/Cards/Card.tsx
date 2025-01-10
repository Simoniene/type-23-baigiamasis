import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
// import completedImg from "../../assets/img/complete-svgrepo-com.svg";
// import notCompletedImg from "../../assets/img/not-completed.svg";

type CardProps = {
  id: string;
  question: string;
  //   status: boolean;
};

const Card = ({ id, question }: CardProps) => {
  return (
    <Link className={styles.link} href={"/tasks"}>
      <div className={styles.card}>
        {/* <>
          {status ? (
            <img src={completedImg.src} alt="completed mark" />
          ) : (
            <img src={notCompletedImg.src} alt="not completed mark" />
          )}
        </> */}
        <span> {question}</span>
      </div>
    </Link>
  );
};

export default Card;
