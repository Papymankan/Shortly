export type inputLinkType = {
  shortenUrl: string | null;
  success: boolean | null;
  error?: string;
  toastError?: string;
  link?: string;
};

export type user = {
  id: number;
  email: string;
  username: string;
  password: string;
  profileImageUrl: string | null;
};

export type contextType = {
  user: user | null;
  links: Link[] | null;
};

export type signUpInputType = {
  email: string;
  username: string;
  password: string;
  profileImageUrl: string;
};

export type SignUpState = {
  success: boolean;
  errors: { [key: string]: string };
  values?: { email: string; username: string; password: string };
};

export type loginInputType = {
  email: string;
  password: string;
};

export type LoginState = {
  success: boolean;
  errors: { [key: string]: string };
  values?: { email: string; password: string };
};

export type Link = {
  id: number;
  shortUrl: string;
  originalUrl: string;
  visits: number;
  userId: number;
  createdAt: string;
};
