import AnswerCard from "@/components/AnswerCard/AnswerCard";
import React from "react";

const TaskPage = () => {
  return (
    <div>
      <AnswerCard id="some-question-id" answer="Existing answer text" />
      {/* <AnswerQuestionForm id="some-question-id" answer="Existing answer text" /> */}
    </div>
  );
};
export default TaskPage;
