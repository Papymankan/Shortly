import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";

export default function page() {
  return (
    <>
      <Header />

      <div className="w-full my-20 flex justify-center items-center">
        <div className="sm:w-96 w-full sm:mx-0 mx-5 shadow p-4 rounded-xl">
          <h1 className="text-xl font-bold">Sign Up</h1>
          <h2 className="mb-4 mt-2 text-sm text-gray-500">
            Create your account
          </h2>
          <SignupForm />
        </div>
      </div>

      <Footer />
    </>
  );
}
