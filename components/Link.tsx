import React from "react";
import CopyButton from "./CopyButton";
import RedirectButton from "./RedirectButton";

interface input {
  origUrl: string;
  shortUrl: string;
  visited: number;
}

export default function LinkBox({ origUrl, shortUrl , visited }: input) {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-between rounded-xl bg-gray-100  p-6 xl:flex-row">
      <div className="flex flex-col xl:items-start items-center justify-start flex-1">
        <p
          className="font-bold md:max-w-full sm:max-  max-w-80 truncate sm:text-base text-sm"
          title={origUrl}
        >
          {origUrl}
        </p>
        <p className="text-sm text-gray-600">
          visited times : <span>{visited}</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row space-x-4  md:w-auto w-full mt-5 md:mt-0">
        <p className="font-bold text-cyan text-xs lg:text-base break-words whitespace-pre-wrap md:w-auto w-full text-center">
          {shortUrl}
        </p>
        <div className="flex items-center justify-between space-x-2">
          <CopyButton shortenUrl={shortUrl} />
          <RedirectButton shortenUrl={shortUrl} />
        </div>
      </div>
    </div>
  );
}
