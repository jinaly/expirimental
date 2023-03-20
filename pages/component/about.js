import { useEffect, useState } from "react";

function About() {
  const [resData, setResData] = useState();

  const getData = async () => {
    const apiurl = `http://localhost:3000/api/dashboard/db`;
    const response = await fetch(apiurl);
    const data = await response.json();
    setResData(data.result);
    console.log(data.result, "data");
  };
  useEffect(() => {
    getData();
  }, []);

  // async function getData() {
  //   const apiurl = `http://localhost:3000/api/dashboard/db`;
  //   const response = await fetch(apiurl);
  //   const data = await response.json();
  //   console.log(data, "data");
  // }
  return (
    <h2>
      {resData?.map((res) => {
        return (
          <div key={res.id}>
            <tr>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
            </tr>
            <tr>
              <td>{res.firstname}</td>
              <td>{res.lastname}</td>
              <td>{res.email}</td>
            </tr>
          </div>
        );
      })}
    </h2>
  );
}
export default About;
