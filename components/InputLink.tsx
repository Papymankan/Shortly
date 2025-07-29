"use client";

import React, { useActionState, useEffect, useState } from "react";
import ShortenLinks from "./shorten-links";
import { inputLinkHandler } from "@/actions/inputLink";
import { useUser } from "./context/user-context";
import { toast } from "sonner";
import NotLoginToast from "./NotLoginToast";

export default function InputLink() {
  const { user } = useUser();

  const [formState, formAction] = useActionState(
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
    if (formState.success) setInput("");
    if (formState.toastError)
      toast.custom((t) => <NotLoginToast t={t} formState={formState} />, {
        duration: 300000,
        position: "top-right",
        dismissible: true,  
      });
  }, [formState]);

  return (
    <>
      <div className="relative mt-24 w-full space-y-4 bg-gray-100 px-4 py-8">
        <div className="relative mx-auto -mt-24 max-w-4xl  items-center justify-between rounded-xl bg-veryDarkBlue p-8 md:flex-row">
          <form
            action={formAction}
            className="flex w-full space-x-5 flex-col md:flex-row"
          >
            <input
              type="text"
              name="link"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="shorten a link here"
              className="w-full bg-white flex-1 rounded-xl px-4 py-3 text-lg placeholder:text-yellow-500 focus:outline-none"
            />
            <button
              className="mt-5 rounded-xl bg-cyan px-6 py-3 text-lg text-white md:mt-0"
              type="submit"
            >
              Shorten it !
            </button>
          </form>
          <p className="absolute bottom-2 left-7 text-sm italic text-red">
            {formState && formState.error}
          </p>
        </div>

        {/* shorten Links */}
        <ShortenLinks
          origUrl="https://frontendmentor.io"
          shortUrl="https://rel.ink/k4IKyk"
        />
      </div>
    </>
  );
}
