export type TLogin = {
  email: string;
  password: string;
};


export type TUser = {
    email: string;
    role: string;
    iat: number;
    exp: number;
  };