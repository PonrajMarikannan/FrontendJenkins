import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline';

function ViewCom() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8085/crime/all");
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      } catch (err) {
        console.error("Error fetching crime records:", err);
      }
    };
    fetchRecords();
  }, []);

  const handleDelete = (id) => {
    const conf = window.confirm("Do you want to delete this Case?");
    if (conf) {
      axios
        .delete(`http://localhost:8085/crime/${id}`)
        .then((res) => {
          alert("Record has been deleted successfully.");
          navigate("/Home");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 role="hlbl" className="text-4xl font-bold text-gray-800 text-center mb-8">
          Crime File Management System
        </h1>

        <div className="flex justify-end mb-4">
          <button role="addbtn" >
            <Link
              to="/AddCom"
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add New Complient
            </Link>
          </button>
         
        </div>

        <div className="overflow-x-auto">
          <table role="tbl" className="min-w-full bg-white rounded-lg shadow-sm">
            <thead role="thead" className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left font-semibold border-b"
                  >
                    {column}
                  </th>
                ))}
                <th className="px-4 py-3 text-left font-semibold border-b">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody role="tblbl" className="text-gray-600 text-sm font-light">
              {records.map((record, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-left whitespace-nowrap">
                    {record.cid}
                  </td>
                  <td className="py-3 px-4 text-left">{record.casenumber}</td>
                  <td className="py-3 px-4 text-left">{record.casedescription}</td>
                  <td className="py-3 px-4 text-left">{record.dateoccour}</td>
                  <td className="py-3 px-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/EditCom/${record.cid}`}
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <PencilIcon className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(record.cid)}
                        className="text-red-600 hover:underline flex items-center"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Delete
                      </button>
                    </div>
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

export default ViewCom;
