"use server";

import { inputLinkType } from "@/types";

export async function inputLinkHandler(
  prevState: inputLinkType,
  formData: FormData
): Promise<inputLinkType> {
  console.log(formData.get("link"));

  return { error: "" };
}
