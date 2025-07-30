import Header from "@/components/Header";
import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

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
          <form action={""} className="w-full">
            <div className="grid gap-2 py-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                placeholder="you@example.com"
                required
                // defaultValue={state.values?.email}
              />
              <div className="w-full ">
                <p className="text-xs text-red h-4">
                  {/* {state?.errors && state.errors.email} */}
                </p>
              </div>
            </div>

            <div className="grid gap-2 py-2">
              <Label htmlFor="username">UserName</Label>
              <Input
                name="username"
                id="username"
                placeholder="your username"
                required
                // defaultValue={state.values?.username}
              />
              <div className="w-full ">
                <p className="text-xs text-red h-4">
                  {/* {state?.errors && state.errors.username} */}
                </p>
              </div>
            </div>

            <div className="grid gap-2 py-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                placeholder="your password"
                type="password"
                required
                className="my-0"
                // defaultValue={state.values?.password}
              />
              <div className="w-full ">
                <p className="text-xs text-red h-4">
                  {/* {state?.errors && state.errors.password} */}
                </p>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-cyan text-white w-full"
              // disabled={isPending}
            >
              {/* {isPending ? "Submitting..." : "Submit"} */}
              Submit
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
