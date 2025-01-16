import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuestionCards from "@/components/QuestionCard/QuestionCard";

const Main = () => {
  return (
    <div>
      <Header />
      <QuestionCards />
      <Footer />
    </div>
  );
};

export default Main;
