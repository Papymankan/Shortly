import { user } from "@/types";
import db from "./db";

export function createUser(
  email: string,
  username: string,
  password: string,
  profileImageUrl: string
) {
  const stmt = db.prepare(`
    INSERT INTO users (email, username, password, profileImageUrl)
    VALUES (?, ?, ?, ?)
  `);
  const result = stmt.run(email, username, password, profileImageUrl);
  return result.lastInsertRowid;
}

export function getUserByEmail(email: string) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}

export function getUserById(id: string) {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
}
