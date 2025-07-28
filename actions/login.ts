"use server";

import { createSessionCookie } from "@/lib/auth";
import { verifyPassword } from "@/lib/hash";
import { getUserByEmail } from "@/lib/users";
import { LoginState, user } from "@/types";

export async function loginHandler(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const existingUser: user = getUserByEmail(email) as user;

  if (!existingUser) {
    return {
      errors: { email: "There is no user with this email" },
      success: false,
      values: { email, password },
    };
  }

  const isValidPassword = verifyPassword(password, existingUser.password);

  if (!isValidPassword) {
    return {
      errors: { password: "Wrong Email or password" },
      success: false,
      values: { email, password },
    };
  }

  try {
    await createSessionCookie(existingUser.id);
  } catch (error) {
    return {
      success: false,
      errors: { email: "Something went wrong. Please try again." },
      values: { email, password },
    };
  }

  return { success: true, errors: {} };
}
