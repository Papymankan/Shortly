import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <>
      <Header />

      <div className="w-full my-20 flex justify-center items-center">
        <div className="sm:w-96 w-full sm:mx-0 mx-5 shadow p-4 rounded-xl">
          <h1 className="text-xl font-bold">Login</h1>
          <h2 className="mb-4 mt-2 text-sm text-gray-500">
            Sign in to your account
          </h2>
          <LoginForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
