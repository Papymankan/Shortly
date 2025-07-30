import { getLinkByShortUrl, incrementLinkVisits } from "@/lib/links";
import { Link } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { shortenCode: string } }
) {
  const link = getLinkByShortUrl(params.shortenCode) as Link;

  if (!link) {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  incrementLinkVisits(params.shortenCode);
  return NextResponse.redirect(link.originalUrl);
}