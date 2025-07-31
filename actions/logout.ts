"use server";

import { destroySession } from "@/lib/auth";
import { LogoutState } from "@/types";
import { revalidatePath } from "next/cache";

export async function logoutHandler(
  prevState: LogoutState,
  FormData: FormData
): Promise<LogoutState> {
  try {
    destroySession();
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong", success: false };
  }
}
