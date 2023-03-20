import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "nodereact",
    user: "root",
    password: "",
    port: 3306,
  });
  try {
    const query = "SELECT firstname,lastname,email FROM userdata";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    res.status(200).json({ result: data });
  } catch (error) {}
}
// const dbconnection = mysql.createConnection({
//   host: "localhost",
//   database: "nodereact",
//   user: "root",
//   password: "",
//   port: 3306,
// });

// export default dbconnection;
