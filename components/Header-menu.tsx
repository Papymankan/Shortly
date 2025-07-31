"use client";

import React, { useActionState, useEffect, useState } from "react";
import { useUser } from "./context/user-context";
import Link from "next/link";
import { Button } from "./ui/button";
import { logoutHandler } from "@/actions/logout";
import { toast } from "sonner";
import SuccessCustomToast from "./SuccessCustomToast";

export default function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const { user } = useUser();

  const [state, formAction, isPending] = useActionState(logoutHandler, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      toast.custom(
        () => <SuccessCustomToast text="You logged out successfully !" />,
        {
          duration: 3000,
          position: "top-right",
          dismissible: true,
        }
      );
    }
  }, [state]);

  return (
    <>
      <button
        className={`z-50 block h-8 w-8 cursor-pointer ${
          !showMenu && "space-y-1.5"
        } lg:hidden ${showMenu && "-space-y-0.5"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div
          className={`w-8 border-2 border-grayishViolet duration-200 ${
            showMenu && "rotate-45"
          }`}
        ></div>
        <div
          className={`w-8 border-2 border-grayishViolet duration-200 ${
            showMenu && "hidden"
          }`}
        ></div>
        <div
          className={`w-8 border-2 border-grayishViolet duration-200 ${
            showMenu && "-rotate-45"
          }`}
        ></div>
      </button>

      {/* Menu */}
      {showMenu && (
        <>
          <div className="absolute left-6 right-6 top-24 z-50 flex flex-col items-center space-y-4 rounded-xl bg-darkViolet p-8 font-poppins text-white lg:hidden">
            <a
              href="#"
              className="w-full py-1 text-center text-lg duration-200 hover:scale-105"
            >
              Features
            </a>
            <a
              href="#"
              className="w-full py-1 text-center text-lg duration-200 hover:scale-105"
            >
              Pricing
            </a>
            <a
              href="#"
              className="w-full py-1 text-center text-lg duration-200 hover:scale-105"
            >
              Resources
            </a>
            {user ? (
              <>
                <Link
                  href="/links"
                  className="w-full rounded-full py-4 mt-6 text-center text-lg bg-cyan"
                >
                  Links
                </Link>
                <form action={formAction} className="w-full">
                  <Button
                    className="w-full rounded-full bg-red-600 px-12 py-7 text-center text-lg"
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? "logging out ..." : "Logout"}
                  </Button>
                </form>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="w-full border-t py-1 pt-6 text-center text-lg"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="w-full rounded-full bg-cyan px-12 py-4 text-center text-lg"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
