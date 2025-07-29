"use client";

import { contextType, Link, user } from "@/types";
import { createContext, useContext } from "react";

export const UserContext = createContext<contextType>({
  user: null,
  links: null,
});

type props = {
  user: user | null;
  links: Link[] | null;
  children: React.ReactNode;
};

export function UserProvider({ user, links, children }: props) {
  return (
    <UserContext.Provider value={{ user, links }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
