"use client";

import { contextType, user } from "@/types";
import { createContext, useContext } from "react";

export const UserContext = createContext<contextType>({ user: null });

type props = {
  user: user | null;
  children: React.ReactNode;
};

export function UserProvider({ user, children }: props) {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
