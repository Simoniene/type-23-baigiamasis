import React, { useEffect, useState } from "react";
import { Question } from "@/types/question";
import { useRouter } from "next/router";
import { getAllQuestions } from "@/api/question";
import { AxiosError } from "axios";
import cookie from "js-cookie";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Tasks from "@/components/Tasks/Question";

const MainPage = () => {
  const router = useRouter();

  const [tasks, setTasks] = useState<Question[]>([]);

  const fetchTasks = async () => {
    const token = cookie.get("jwt_token");
    try {
      const response = await getAllQuestions(token as string);

      setTasks(response.data.tasks);

      console.log(response);
    } catch (err: unknown) {
      const error = err as AxiosError;

      if ((error.status = 401)) {
        router.push("/login");
      }

      console.log(err);
    }
  };

  const token = cookie.get("jwt_token");

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div>
      <Header />
      <Tasks questions={tasks} />
      <Footer />
    </div>
  );
};

export default MainPage;
