"use server";

import { inputLinkType, user } from "@/types";

export async function inputLinkHandler(
  user: user | null,
  prevState: inputLinkType,
  formData: FormData
): Promise<inputLinkType> {
  const link = formData.get("link") as string;

  if (!user) {
    return {
      shortenUrl: "",
      success: false,
      toastError: "To shorten a link You have to login !",
      link,
    };
  }

  if (!link || typeof link !== "string") {
    return {
      shortenUrl: "",
      success: null,
      error: "URL must start with http or https",
      link: typeof link === "string" ? link : "",
    };
  }

  try {
    const url = new URL(link);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return {
        shortenUrl: "",
        success: null,
        error: "URL must start with http or https",
        link,
      };
    }
  } catch {
    return {
      shortenUrl: "",
      success: null,
      error: "Please provide a valid URL",
      link,
    };
  }

  return {
    shortenUrl: "",
    success: true,
    link,
  };
}
