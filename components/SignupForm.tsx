"use client";

import React, { useActionState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signUpHandler } from "@/actions/signup";
import { useUser } from "./context/user-context";

export default function SignupForm() {
  const router = useRouter();
  const { user } = useUser();

  if (user) router.push("/");

  const [state, formAction, isPending] = useActionState(signUpHandler, {
    success: false,
    errors: {},
    values: { email: "", username: "", password: "" },
  });

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);
  return (
    <form action={formAction} className="w-full">
      <div className="grid gap-2 py-2">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          placeholder="you@example.com"
          required
          defaultValue={state.values?.email}
        />
        <div className="w-full ">
          <p className="text-xs text-red h-4">
            {state?.errors && state.errors.email}
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
          defaultValue={state.values?.username}
        />
        <div className="w-full ">
          <p className="text-xs text-red h-4">
            {state?.errors && state.errors.username}
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
          defaultValue={state.values?.password}
        />
        <div className="w-full ">
          <p className="text-xs text-red h-4">
            {state?.errors && state.errors.password}
          </p>
        </div>
      </div>

      <Button
        type="submit"
        className="bg-cyan text-white w-full"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
