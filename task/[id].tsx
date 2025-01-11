import React from "react";
import { useRouter } from "next/router";
import AnswerQuestionForm from "../../components/AnswerQuestionForm/AnswerQuestionForm";

const TaskPage = () => {
  const router = useRouter();
  const { id } = router.query; // Gauti `id` iš URL

  if (!id) {
    return <div>Loading...</div>; // Pateikiame įkėlimo būseną, jei id dar nėra
  }

  return (
    <div>
      <h1>Task ID: {id}</h1>
      <AnswerQuestionForm questionId={id as string} />{" "}
      {/* Perdavimo questionId į komponentą */}
    </div>
  );
};

export default TaskPage;
