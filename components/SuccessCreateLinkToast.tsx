"use client";
import { inputLinkType } from "@/types";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function SuccessToast({
  t,
  formState,
}: {
  t: string | number;
  formState: inputLinkType;
}) {
  return (
    <div className="bg-cyan text-white flex sm:w-96 w-full items-center justify-between sm:gap-3 gap-2 rounded-md sm:p-4 p-3 shadow">
      <div>
        <p className="sm:text-sm text-xs font-medium text-red-600-800">
          ✅ Your link was created successfully
        </p>
        <p className="sm:text-xs text-xs font-medium text-red-600-800">
          {formState.shortenUrl}
        </p>
      </div>
      <Link
        onClick={() => {
          toast.dismiss(t);
        }}
        href={formState.shortenUrl!}
        className="rounded sm:px-4 px-3 py-2 text-xs sm:text-xs text-cyan bg-white"
      >
        Visit
      </Link>
    </div>
  );
}
