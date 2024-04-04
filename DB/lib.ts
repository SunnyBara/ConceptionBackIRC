export const mysql = require("mysql2");
export default function openDb() {
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "IRC",
  });
  return connection;
}
