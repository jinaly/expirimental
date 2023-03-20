// import dbconnection from "../dashboard/db/dbconnection";
import dbconnection from "../dashboard/db";

export default async function handler(req, res) {
  try {
    const query = "SELECT firstname,lastname,email FROM userdata";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    res.status(200).json({ result: data });
  } catch (error) {}
}
