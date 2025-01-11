import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AnswerQuestionForm from "@/components/AnswerQuestionForm/AnswerQuestionForm";
import AnswerCard from "@/components/AnswerCard/AnswerCard";

const AnswerQuestionPage = () => {
  return (
    <div>
      <h1>Answer</h1>
      <Header />
      <AnswerCard />
      <AnswerQuestionForm />
      <Footer />
    </div>
  );
};

export default AnswerQuestionPage;
