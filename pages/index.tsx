import React, { useEffect, useState } from "react";
import { Task } from "@/types/task";
import { useRouter } from "next/router";
import { getAllTasks } from "@/api/task";
import { AxiosError } from "axios";
import cookie from "js-cookie";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Tasks from "@/components/Tasks/Tasks";
const MainPage = () => {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const token = cookie.get("jwt_token");
    try {
      const response = await getAllTasks(token as string);

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
      <Tasks question={tasks} />
      <Footer />
    </div>
  );
};

export default MainPage;
