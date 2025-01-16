import React, { useEffect, useState } from "react";
import { Question } from "@/types/question";
import { useRouter } from "next/router";
import { getAllQuestions } from "@/api/question";
import { AxiosError } from "axios";
import cookie from "js-cookie";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import Tasks from "@/components/Tasks/Question";
import QuestionCard from "@/components/QuestionCards/QuestionCard";

const MainPage = () => {
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    const token = cookie.get("jwt_token");
    try {
      const response = await getAllQuestions(token as string);

      setQuestions(response.data.tasks);

      console.log(response);
    } catch (err: unknown) {
      const error = err as AxiosError;

      if ((error.status = 401)) {
        router.push("/login");
      }

      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div>
      <Header />
      <QuestionCard id="" question="" />
      <Footer />
    </div>
  );
};

export default MainPage;
