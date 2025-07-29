"use server";

import { createLink } from "@/lib/links";
import { inputLinkType, user } from "@/types";
import { customAlphabet } from "nanoid";
import { revalidatePath } from "next/cache";

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

  const generateShortCode = customAlphabet(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    8
  );

  const shortenUrl = generateShortCode();

  try {
    createLink(user.id.toString(), link, shortenUrl);
  } catch (error) {
    return {
      shortenUrl: "",
      success: null,
      error: "There was a problem, try again later !",
      link,
    };
  }

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const fullShortUrl = `${baseUrl}/s/${shortenUrl}`;
  revalidatePath("/", "layout");

  return {
    shortenUrl: fullShortUrl,
    success: true,
    link,
  };
}
