import bcrypt from "bcryptjs";

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password: string, hashed: string) {
  return bcrypt.compareSync(password, hashed);
}
