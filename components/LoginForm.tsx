"use client";

import React, { useActionState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { loginHandler } from "@/actions/login";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(loginHandler, {
    success: false,
    errors: {},
    values: { email: "", password: "" },
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
          <p className="text-xs text-red-600 h-4">
            {state?.errors && state.errors.email}
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
          <p className="text-xs text-red-600 h-4">
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
