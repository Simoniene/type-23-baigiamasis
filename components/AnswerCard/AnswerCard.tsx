import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import axios from "axios";
import likeImg from "../../assets/img/like-svgrepo-com.svg";
import dislikeImg from "../../assets/img/dislike-svgrepo-com (1).svg";

type AnswerCardProps = {
  id: string;
  answer: string;
};
const AnswerCard = ({ id, answer }: AnswerCardProps) => {
  const isAuthenticated = !!cookie.get("jwt_token");

  const onDeleteAnswer = async () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to delete an answer.");
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
        console.log("Answer deleted successfully!");
      }
    } catch (err) {
      console.log("Error deleting answer", err);
    }
  };

  return (
    <div className={styles.card}>
      <span>{answer}</span>
      <div className={styles.answerBtn}>
        <>
          <button
            onClick={() => {
              likeImg;
            }}
            className={styles.likeBtn}
          >
            <img src={likeImg.src} alt="like mark" />
          </button>

          <button
            onClick={() => {
              dislikeImg;
            }}
            className={styles.dislikeBtn}
          >
            <img src={dislikeImg.src} alt="dislike mark" />
          </button>
        </>
        <Link href={"/"} passHref>
          <button onClick={onDeleteAnswer}>Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default AnswerCard;
