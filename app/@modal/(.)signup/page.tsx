"use client";

import { useActionState, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import { signUpHandler } from "@/actions/signup";

export default function ModalSignupPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(signUpHandler, {
    success: false,
    errors: {},
    values: { email: "", username: "", password: "" },
  });

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) router.back();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Sign Up</DialogTitle>
          <DialogDescription>Create your account</DialogDescription>
        </DialogHeader>

        <form action={formAction}>
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

          <DialogFooter className="mt-4">
            <Button
              type="submit"
              className="bg-cyan text-white w-full"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
