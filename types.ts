export type inputLinkType = {
  shortenUrl: string | null;
  success: boolean | null;
  error?: string;
  link?: string;
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
