"use server";

import { createSessionCookie } from "@/lib/auth";
import { hashPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/users";
import { SignUpState } from "@/types";
import { redirect } from "next/navigation";

export async function signUpHandler(
  prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const email = formData.get("email")?.toString() ?? "";
  const username = formData.get("username")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const errors: Record<string, string> = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address";
  }

  if (username.length < 5) {
    errors.username = "Username must be at least 5 characters";
  }

  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (getUserByEmail(email)) {
    errors.email = "Email already in use";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, values: { email, username, password } };
  }

  try {
    const hashedPassword = hashPassword(password);
    const id = createUser(email, username, hashedPassword, "");
    await createSessionCookie(id);
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return {
      success: false,
      errors: { email: "Something went wrong. Please try again." },
      values: { email, username, password },
    };
  }

  return { success: true, errors: {} };
}
