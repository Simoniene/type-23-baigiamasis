import axios from "axios";

export const insertTask = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.post(`${process.env.BASE_URL}/tasks`, {
    headers,
  });

  return response;
};

export const getAllTasks = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`${process.env.BASE_URL}/tasks`, {
    headers,
  });

  return response;
};

export const getTasksById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`${process.env.BASE_URL}/tasks/${id}`, {
    headers,
  });

  return response;
};

export const deleteTasksById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.delete(`${process.env.BASE_URL}/tasks/${id}`, {
    headers,
  });

  return response;
};

export const updateTaskStatus = async (
  id: string,
  body: object,
  token: string
) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.put(
    `${process.env.BASE_URL}/tasks/${id}`,
    body,
    {
      headers,
    }
  );

  return response;
};
