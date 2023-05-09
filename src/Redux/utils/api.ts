import {create} from 'apisauce';
import {ActivateUserData, RegisterUserData} from "../Types/auth";

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

export default {
  registerUser,
  getAllNews,
  activateUser,
  getSingleNews
};