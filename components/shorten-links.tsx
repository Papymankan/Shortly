import React from "react";

interface input {
  origUrl: string;
  shortUrl: string;
}

export default function ShortenLinks({ origUrl, shortUrl } : input) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-between rounded-xl bg-white p-6 md:flex-row">
      <p className="text-center text-lg font-bold md:text-left">
        {origUrl}
      </p>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className="mr-6 font-bold text-cyan">{shortUrl}</p>
        <button className="mt-2 rounded-lg bg-cyan p-2 px-8 text-white hover:opacity-70 focus:outline-none md:mt-0">
          Copy
        </button>
      </div>
    </div>
  );
}
