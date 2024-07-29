import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline';

function ViewCrim() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8085/criminal/all");
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      } catch (err) {
        console.error("Error fetching Criminal records:", err);
      }
    };
    fetchRecords();
  }, []);

  const handleDelete = (id) => {
    // const conf = window.confirm("Do you want to delete this Criminal?");
    // if (conf) {
      axios
        .delete(`http://localhost:8085/criminal/${id}`)
        .then((res) => {
          alert("Record has been deleted successfully.");
          navigate("/AdminHome");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    // }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 role="hlbl" className="text-center text-4xl font-bold text-gray-800 mb-8">
          Criminal List
        </h1>

        <div className="flex justify-end mb-4">
          <button role="addbtn">
            <Link
              to="/AddCrim"
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add New Criminal
            </Link>
          </button>
          
        </div>

        <div className="overflow-x-auto">
          <table role="tbl" className="min-w-full bg-white rounded-lg shadow-sm">
            <thead role="thead" className="bg-gray-200 text-gray-600 uppercase text-sm">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="py-3 px-6 text-left bg-gray-300 border-b"
                  >
                    {column}
                  </th>
                ))}
                <th className="py-3 px-6 text-center bg-gray-300 border-b">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody role="tblb" className="text-gray-600 text-sm font-light">
              {records.map((record, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{record.id}</td>
                  <td className="py-3 px-6 text-left">{record.name}</td>
                  <td className="py-3 px-6 text-left">{record.dob}</td>
                  <td className="py-3 px-6 text-left">{record.crimecase.casedescription}</td>
                  <td className="py-3 px-6 text-center flex items-center justify-center space-x-2">
                    <Link
                      to={`/EditCrim/${record.id}`}
                      className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-md text-xs flex items-center"
                      >
                      <PencilIcon className="h-4 w-4 mr-1" />
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md text-xs flex items-center"
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewCrim;
