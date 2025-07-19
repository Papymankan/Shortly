import db from "./db";

export function createLink(
  userId: string,
  originalUrl: string,
  shortUrl: string
) {
  const stmt = db.prepare(`
    INSERT INTO links (userId, originalUrl, shortUrl)
    VALUES (?, ?, ?)
  `);
  return stmt.run(userId, originalUrl, shortUrl).lastInsertRowid;
}

export function getLinkByShortUrl(shortUrl: string) {
  return db.prepare("SELECT * FROM links WHERE shortUrl = ?").get(shortUrl);
}

export function incrementLinkVisits(shortUrl: string) {
  db.prepare(
    `
    UPDATE links SET visits = visits + 1 WHERE shortUrl = ?
  `
  ).run(shortUrl);
}

export function getLinksByUser(userId: string) {
  return db.prepare("SELECT * FROM links WHERE userId = ?").all(userId);
}