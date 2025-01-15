import axios from "axios";

export const insertQuestion = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.post(`${process.env.BASE_URL}/questions/`, {
    headers,
  });

  return response;
};

export const getAllQuestions = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`${process.env.BASE_URL}/questions`, {
    headers,
  });

  return response;
};

export const getQuestionsById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`${process.env.BASE_URL}/questions/${id}`, {
    headers,
  });

  return response;
};

export const deleteQuestionsById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.delete(
    `${process.env.BASE_URL}/questions/${id}`,
    {
      headers,
    }
  );

  return response;
};

export const updateQuestionStatus = async (
  id: string,
  body: object,
  token: string
) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.put(
    `${process.env.BASE_URL}/questions/${id}`,
    body,
    {
      headers,
    }
  );

  return response;
};
