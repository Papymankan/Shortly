import React from "react";
import CopyButton from "./CopyButton";

interface input {
  origUrl: string;
  shortUrl: string;
}

export default function ShortenLinks({ origUrl, shortUrl } : input) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-between rounded-xl bg-white p-6 md:flex-row">
      <p className="text-center font-bold md:text-left max-w-60 truncate" title={origUrl} >
        {origUrl}
      </p>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className="mr-6 font-bold text-cyan">{shortUrl}</p>
        <CopyButton shortenUrl={shortUrl}/>
      </div>
    </div>
  );
}
