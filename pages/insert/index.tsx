import AnswerQuestionForm from "@/components/AnswerQuestionForm/AnswerQuestionForm";
import AskQuestionForm from "@/components/AskQuestionForm/AskQuestionForm";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const InsertPage = () => {
  return (
    <div>
      <Header />
      <AskQuestionForm />
      <Footer />
    </div>
  );
};

export default InsertPage;
