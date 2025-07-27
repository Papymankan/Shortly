"use server";

import { SignUpState } from "@/types";

export async function signUpHandler(
  prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  await new Promise((res) => setTimeout(res, 2000));
  const email = formData.get("email");
  const username = formData.get("username");
  const password = formData.get("password");

  console.log(email, password, username);

  return { success: false, errors: {} };
}
