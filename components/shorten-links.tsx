import React from "react";
import CopyButton from "./CopyButton";
import RedirectButton from "./RedirectButton";

interface input {
  origUrl: string;
  shortUrl: string;
}

export default function ShortenLinks({ origUrl, shortUrl }: input) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-between rounded-xl bg-white p-6 md:flex-row">
      <p
        className="text-center font-bold md:text-left sm:max-w-80 max-w-60 w-full truncate sm:text-base text-sm"
        title={origUrl}
      >
        {origUrl}
      </p>
      <div className="flex flex-col items-center justify-between md:flex-row space-x-4">
        <p className="font-bold text-cyan text-xs lg:text-base">{shortUrl}</p>
        <div className="flex items-center justify-between space-x-2">
          <CopyButton shortenUrl={shortUrl} />
          <RedirectButton shortenUrl={shortUrl} />
        </div>
      </div>
    </div>
  );
}
