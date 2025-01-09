import axios from "axios";

type UserCredentials = {
  email: string;
  password: string;
};

export const LoginUser = async (userData: UserCredentials) => {
  const response = await axios.post(`${process.env.BASE_URL}/login`, userData);
  return response;
};