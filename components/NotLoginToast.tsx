"use client";
import { inputLinkType } from "@/types";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function NotLoginToast({
  t,
  formState,
}: {
  t: string | number;
  formState: inputLinkType;
}) {
  return (
    <div className="bg-cyan text-white flex w-96 items-center justify-between gap-3 rounded-md  bg-red-50 p-4 shadow">
      <div>
        <p className="text-sm font-medium text-red-800">
          ❌ {formState.toastError}
        </p>
      </div>
      <Link
        onClick={() => {
          console.log("Undo clicked");
          toast.dismiss(t);
        }}
        href={"/login"}
        className="rounded bg-red-600 px-4 py-2 text-xs text-cyan bg-white hover:bg-red-700"
      >
        Login
      </Link>
    </div>
  );
}
