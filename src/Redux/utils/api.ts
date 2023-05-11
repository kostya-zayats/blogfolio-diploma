import {create} from 'apisauce';
import {ActivateUserData, RegisterUserData, SignInUserData} from "../Types/auth";

const API = create({baseURL: 'https://studapi.teachmeskills.by'});

const registerUser = (data: RegisterUserData) => {
  return API.post('/auth/users/', data);
};

const getAllNews = () => {
  return API.get('/blog/posts/?limit=100');
};

const activateUser = (data: ActivateUserData) => {
  return API.post('/auth/users/activation/', data);
};

const getSingleNews = (id:string) => {
  return API.get(`/blog/posts/${id}/`);
};

const signInUser = (data: SignInUserData) => {
  return API.post('/auth/jwt/create/', data);
};

const getUserInfo = (token: string) => {
  return API.get(
    '/auth/users/me/',
    {},
    {
      headers: {Authorization: `Bearer ${token}`,}
    }
  );
};

export default {
  registerUser,
  getAllNews,
  activateUser,
  getSingleNews,
  signInUser,
  getUserInfo,
};