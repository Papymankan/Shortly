"use client";

import React from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import SuccessCustomToast from "./SuccessCustomToast";

export default function CopyButton({ shortenUrl }: { shortenUrl: string }) {
  return (
    <button
      className="mt-2 rounded-lg bg-cyan p-2 px-2 text-white hover:opacity-70 focus:outline-none md:mt-0"
      title="Copy to ClipBoard"
      onClick={() => {
        navigator.clipboard.writeText(shortenUrl);
        toast.custom(() => <SuccessCustomToast text="Your link was Copied successfully" />, {
          duration: 3000,
          position: "top-right",
          dismissible: true,
        });
      }}
    >
      <Copy />
    </button>
  );
}
