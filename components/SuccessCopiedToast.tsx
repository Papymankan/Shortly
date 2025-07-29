"use client";
import React from "react";
export default function SuccessCopiedToast() {
  return (
    <div className="bg-cyan text-white flex sm:w-96 w-full items-center justify-between sm:gap-3 gap-2 rounded-md sm:p-4 p-3 shadow">
      <div>
        <p className="sm:text-sm text-xs font-medium text-red-800">
          ✅ Your link was Copied successfully
        </p>
      </div>
    </div>
  );
}
