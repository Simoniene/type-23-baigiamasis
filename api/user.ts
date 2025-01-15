import axios from "axios";

type UserCredentials = {
  email: string;
  password: string;
};

export const LoginUser = async (userData: UserCredentials) => {
  const response = await axios.post(`${process.env.BASE_URL}/login`, userData);
  return response;
};

type SigninUser = {
  name: string;
  email: string;
  password: string;
};

export const SigninUser = async (userData: SigninUser) => {
  const response = await axios.post(
    `${process.env.BASE_URL}/sign_in`,
    userData
  );
  return response;
};
