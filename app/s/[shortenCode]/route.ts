import { getLinkByShortUrl, incrementLinkVisits } from "@/lib/links";
import { Link } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  // context: { params: { shortenCode: string } }
  // { params }: { params: { shortenCode: string } },
  { params }: { params: Promise<{ shortenCode: string }> }
) {
  const { shortenCode } = await params;
  const link = getLinkByShortUrl(shortenCode) as Link;

  if (!link) {
    return NextResponse.redirect(new URL("/404", req.url));
  }
  incrementLinkVisits(shortenCode);
  return NextResponse.redirect(link.originalUrl, 307);
}
