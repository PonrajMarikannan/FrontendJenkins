import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCrim() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8085/criminal/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching criminal data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8085/criminal", data);
      alert("Criminal data updated successfully");
      navigate("/AdminHome");
    } catch (error) {
      console.error("Error updating criminal data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <h1 role="head-lbl" className="text-3xl text-center font-semibold mb-8">Update Criminal Data</h1>
          <div className="mb-4">
            <label role="id-lbl" htmlFor="id" className="block text-sm font-medium text-gray-700">
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.id || ""}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label role="name-lbl" htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.name || ""}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label role="dob-lbl" htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth:
            </label>
            <input
              type="text"
              id="dob"
              name="dob"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.dob || ""}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
            />
          </div>

          <button role="btn-lbl"
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCrim;
