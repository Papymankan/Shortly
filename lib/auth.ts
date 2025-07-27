import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";

import db from "./db";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

export async function createSessionCookie(userId: number | bigint) {
  try {
    const session = await lucia.createSession(userId.toString(), {});
    console.log("Session:", session);

    const sessionCookie = lucia.createSessionCookie(session.id);
    console.log("Session Cookie:", sessionCookie);

    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (err) {
    console.error("CREATE SESSION ERROR:", err); // 👈 show real error
    throw err; // 👈 propagate it to the signup handler
  }
}

// export async function verifyAuth() {
//   const sessionCookie = cookies().get(lucia.sessionCookieName);

//   if (!sessionCookie) return { user: null, session: null };

//   const sessionId = sessionCookie.value;

//   if (!sessionId) return { user: null, session: null };

//   const result = await lucia.validateSession(sessionId);

//   try {
//     if (result.session && result.session.fresh) {
//       const sessionCookie = lucia.createSessionCookie(result.session.id);
//       cookies().set(
//         sessionCookie.name,
//         sessionCookie.value,
//         sessionCookie.attributes
//       );
//     }
//     if (!result.session) {
//       const sessionCookie = lucia.createBlankSessionCookie();
//       cookies().set(
//         sessionCookie.name,
//         sessionCookie.value,
//         sessionCookie.attributes
//       );
//     }
//   } catch {}

//   return result;
// }

// export async function destroySession() {
//   const { session } = await verifyAuth();

//   if (!session) return { error: "UnAuthorized" };

//   await lucia.invalidateSession(session.id);

//   const sessionCookie = lucia.createBlankSessionCookie();
//   cookies().set(
//     sessionCookie.name,
//     sessionCookie.value,
//     sessionCookie.attributes
//   );
// }
