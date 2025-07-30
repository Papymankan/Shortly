// import { getLinkByShortUrl, incrementLinkVisits } from "@/lib/links";
// import { Link } from "@/types";
// import { notFound, redirect } from "next/navigation";
// import React from "react";

// export default async function page({
//   params,
// }: {
//   params: { shortenCode: string };
// }) {
//   const { shortenCode } = await params;
//   const link = getLinkByShortUrl(shortenCode) as Link;

//     if (link) {
//       incrementLinkVisits(shortenCode);
//       redirect(link.originalUrl);
//     } else {
//       notFound();
//     }

//   return <div>{shortenCode}</div>;
// }


import { getLinkByShortUrl, incrementLinkVisits } from "@/lib/links";
import { Link } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { shortenCode: string } }
) {
  const link = getLinkByShortUrl(params.shortenCode) as Link;

  if (!link) {
    // return NextResponse.redirect(new URL("/404", req.url));
    return new NextResponse("Not found", { status: 404 }); 
  }

  incrementLinkVisits(params.shortenCode);
  return NextResponse.redirect(link.originalUrl);
}