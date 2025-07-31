"use client";

import React from "react";
import { useUser } from "./context/user-context";
import LinkBox from "./Link";
import { getBaseUrl } from "@/actions/utils";

export default function UserLinks() {
  const { links } = useUser();
  const urlBase = getBaseUrl();
  return (
    <div className="w-full px-6  space-y-2">
      {links?.map((link) => (
        <LinkBox
          origUrl={link.originalUrl}
          shortUrl={`${urlBase}/s/${link.shortUrl}`}
          key={link.id}
          visited={link.visits}
        />
      ))}
    </div>
  );
}
