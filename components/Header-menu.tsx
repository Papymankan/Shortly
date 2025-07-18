"use client"

import React, { useState } from "react";

export default function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);

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
            <a
              href="#"
              className="w-full border-t py-1 pt-6 text-center text-lg"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full rounded-full bg-cyan px-12 py-4 text-center text-lg"
            >
              Sign Up
            </a>
          </div>
        </>
      )}
    </>
  );
}
