import Header from "@/components/Header";
import UserLinks from "@/components/UserLinks";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const { user } = await verifyAuth();

  if (!user) {
    redirect("/");
  }
  return (
    <>
      <Header />
      <UserLinks />
    </>
  );
}
