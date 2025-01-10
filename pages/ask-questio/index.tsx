import AskQuestionForm from "@/components/AskQuestionForm/AskQuestionForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const AskQuestionPage = () => {
  return (
    <div>
      <Header />
      <h1>Ask Your Question</h1>
      <AskQuestionForm />
      <Footer />
    </div>
  );
};

export default AskQuestionPage;
