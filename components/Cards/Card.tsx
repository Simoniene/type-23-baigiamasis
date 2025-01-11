import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import axios from "axios";

type CardProps = {
  id: string;
  question: string;
};
const Card = ({ id, question }: CardProps) => {
  const router = useRouter();

  const isAuthenticated = !!cookie.get("jwt_token");

  const onDeleteQuestion = async () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to delete an answer.");
      router.push("/");
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.BASE_URL}/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Question deleted successfully!");
      }
    } catch (err) {
      console.log("Error deleting question", err);
    }
  };

  return (
    <div className={styles.card}>
      <span>{question}</span>

      <Link href={`/tasks/${id}`} passHref>
        <button>Answer</button>
      </Link>
      <Link href={"/"} passHref>
        <button onClick={onDeleteQuestion}>Delete Question </button>
      </Link>
    </div>
  );
};

export default Card;
