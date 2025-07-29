import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function RedirectButton({ shortenUrl }: { shortenUrl: string }) {
  return (
    <Link
      className="mt-2 rounded-lg bg-cyan p-2 px-2 text-white hover:opacity-70 focus:outline-none md:mt-0"
      title="Copy to ClipBoard"

      href={shortenUrl}
    >
      <ExternalLink />
    </Link>
  );
}
