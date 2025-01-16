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
const QuestionCard = ({ id, question }: CardProps) => {
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
        `http://localhost:3002/questions/${id}`,
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
      console.log("You need to be logged in to delete an question.");
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
        <Link href={`/answer-question`} passHref>
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

export default QuestionCard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import cookie from "js-cookie";
// import styles from "./styles.module.css";

// interface Question {
//   id: string;
//   questionText: string;
// }

// const QuestionCard = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [newQuestion, setNewQuestion] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);

//   const token = cookie.get("jwt_token");

//   // GET užklausa norint gauti klausimus
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(`${process.env.BASE_URL}/questions`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // Siųsti autentifikacijos žetoną
//           },
//         });
//         setQuestions(response.data); // Išsaugoti gautus klausimus
//       } catch (err) {
//         console.error(err);
//         setError("Unable to fetch questions.");
//       }
//     };

//     fetchQuestions();
//   }, [token]);

//   // POST užklausa norint pridėti naują klausimą
//   const handleAddQuestion = async () => {
//     if (!newQuestion.trim()) {
//       setError("Question cannot be empty");
//       return;
//     }

//     const newQuestionData = { questionText: newQuestion };

//     try {
//       const response = await axios.post(
//         `${process.env.BASE_URL}/questions`,
//         newQuestionData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setQuestions([...questions, response.data]); // Pridėti naują klausimą į sąrašą
//       setNewQuestion(""); // Išvalyti įvesties lauką
//     } catch (err) {
//       console.error(err);
//       setError("Unable to add question.");
//     }
//   };

//   return (
//     <div className={styles.wrapper}>
//       <h1>Questions</h1>

//       {error && <p className={styles.error}>{error}</p>}

//       <div className={styles.addQuestion}>
//         <input
//           type="text"
//           placeholder="Enter a new question"
//           value={newQuestion}
//           onChange={(e) => setNewQuestion(e.target.value)}
//         />
//         <button onClick={handleAddQuestion}>Add Question</button>
//       </div>

//       <div className={styles.questionList}>
//         {questions.length > 0 ? (
//           questions.map((question) => (
//             <div key={question.id} className={styles.questionItem}>
//               <p>{question.questionText}</p>
//             </div>
//           ))
//         ) : (
//           <p>No questions available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;
