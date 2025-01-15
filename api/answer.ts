import axios from "axios";

export const insertAnswer = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.post(`${process.env.BASE_URL}/answers/`, {
    headers,
  });

  return response;
};

export const getAllAnswers = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`${process.env.BASE_URL}/answers`, {
    headers,
  });

  return response;
};

export const getAnswersById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`${process.env.BASE_URL}/answers/${id}`, {
    headers,
  });

  return response;
};

export const deleteAnswersById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.delete(`${process.env.BASE_URL}/answers/${id}`, {
    headers,
  });

  return response;
};

export const updateAnswerStatus = async (
  id: string,
  body: object,
  token: string
) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.put(
    `${process.env.BASE_URL}/answers/${id}`,
    body,
    {
      headers,
    }
  );

  return response;
};
