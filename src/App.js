import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {

  // data state to store the Randomeuser API data. State's initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios('https://randomuser.me/api/?results=50');
      setData(result.data.results);
      console.log(result.data)
    })();
  }, []);

  // Table column, row and cells setup
  const columns = useMemo(
    () => [
      {
        // first group - Employee Picture & Name
        Header: "Employee",
        // First group columns
        columns: [
          {
            Header: "Image",
            accessor: "picture.large",
            Cell: ({ cell: { value } }) => {
              return (
                <>
                  {<img src={value} alt="profile thumbnail"/>}
                </>
              );
            }          
          },
          {
            Header: "First Name",
            accessor: "name.first",
          },
          {
            Header: "Last Name",
            accessor: "name.last"
          }
        ]
      },
      {
        // Second group - Employee Personal info
        Header: "Employee Info.",
        // Second group columns
        columns: [
          {
            Header: "Phone",
            accessor: "phone"
          },
          {
            Header: "Email",
            accessor: "email"
          },
          {
            Header: "DOB",
            accessor: "registered.age"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <Navbar />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;