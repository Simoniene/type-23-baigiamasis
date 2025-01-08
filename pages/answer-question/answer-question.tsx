import { useRouter } from "next/router";
import AnswerQuestionForm from "../../components/AnswerQuestionForm/AnswerQuestionForm";

const AnswerQuestionPage = () => {
  const router = useRouter();
  const { questionId } = router.query;

  return (
    <div>
      <h1>Answer the Question</h1>
      {questionId && <AnswerQuestionForm questionId={questionId as string} />}
    </div>
  );
};

export default AnswerQuestionPage;
