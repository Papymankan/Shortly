"use client";

import React, { useActionState, useEffect, useState } from "react";
import ShortenLinks from "./shorten-links";
import { inputLinkHandler } from "@/actions/inputLink";
import { useUser } from "./context/user-context";
import { toast } from "sonner";
import NotLoginToast from "./NotLoginToast";
import SuccessToast from "./SuccessCreateLinkToast";
import { getBaseUrl } from "@/actions/utils";

export default function InputLink() {
  const { user, links } = useUser();

  const [formState, formAction, isPending] = useActionState(
    inputLinkHandler.bind(null, user),
    {
      shortenUrl: "",
      success: null,
      link: "",
    }
  );

  const [input, setInput] = useState(formState.link || "");

  useEffect(() => {
    if (formState.link != undefined) setInput(formState.link);
    if (formState.success) {
      setInput("");
      toast.custom((t) => <SuccessToast t={t} formState={formState} />, {
        duration: 3000,
        position: "top-right",
        dismissible: true,
      });
    }
    if (formState.toastError)
      toast.custom((t) => <NotLoginToast t={t} formState={formState} />, {
        duration: 3000,
        position: "top-right",
        dismissible: true,
      });
  }, [formState]);

  return (
    <>
      <div className="relative mt-24 w-full space-y-4 bg-gray-100 px-4 py-8">
        <div className="relative mx-auto -mt-24 max-w-4xl  items-center justify-between rounded-xl bg-veryDarkBlue md:p-8 p-4 md:flex-row">
          <form
            action={formAction}
            className="flex w-full md:space-x-5 flex-col md:flex-row"
          >
            <input
              type="text"
              name="link"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="shorten a link here"
              className="w-full bg-white md:flex-1 rounded-xl px-4 py-3 text-lg placeholder:text-yellow-500 focus:outline-none"
            />
            <button
              className="mt-5 rounded-xl bg-cyan px-6 py-3 text-lg text-white md:mt-0"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Shorten it !"}
            </button>
          </form>
          <p className="absolute bottom-2 left-7 text-sm italic text-red">
            {formState && formState.error}
          </p>
        </div>

        {/* shorten Links */}

        {links &&
          links
            .slice(0, 3)
            .map((link) => (
              <ShortenLinks
                key={link.id}
                origUrl={link.originalUrl}
                shortUrl={`${getBaseUrl()}/s/${link.shortUrl}`}
              />
            ))}
      </div>
    </>
  );
}
