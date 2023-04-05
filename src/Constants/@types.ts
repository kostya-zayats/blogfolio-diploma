export enum PageNames {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export type NewsPost = {
  'id': number;
  'image': string;
  'text': string;
  'date': string;
  'lesson_num': number;
  'title': string;
  'author': number;
};

export type NewsPostsList = Array<NewsPost>;

