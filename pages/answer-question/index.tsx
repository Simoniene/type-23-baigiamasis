import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AnswerQuestionForm from "@/components/AnswerQuestionForm/AnswerQuestionForm";
import AnswerCard from "@/components/AnswerCard/AnswerCard";

const AnswerQuestionPage = () => {
  return (
    <div>
      <Header />
      <h1>Answer</h1>
      <AnswerCard id="unique-answer-id" answer="This is a sample answer" />
      <AnswerQuestionForm id="some-question-id" answer="Existing answer text" />
      <Footer />
    </div>
  );
};

export default AnswerQuestionPage;
