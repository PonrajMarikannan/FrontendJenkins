import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCom() {
  const { cid } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8085/crime/${cid}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Complaint data:", error);
      }
    };
    fetchData();
  }, [cid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8085/crime", data);
      alert("Complaint Updated Successfully");
      navigate("/ViewCom");
    } catch (error) {
      console.error("Error updating Complaint data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <h1 role="headinglbl" className="text-3xl font-semibold text-center mb-8">UPDATE COMPLAINT DATA</h1>
          <div className="mb-4">
            <label role="idlbl" htmlFor="caseID" className="block text-sm font-medium text-gray-700">
              ID:
            </label>
            <input
              type="text"
              id="caseID"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.cid || ""}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label role="nlbl" htmlFor="caseNumber" className="block text-sm font-medium text-gray-700">
              Case Number:
            </label>
            <input
              type="number"
              id="caseNumber"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.casenumber || ""}
              onChange={(e) => setData({ ...data, casenumber: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label role="cdlbl" htmlFor="caseDescription" className="block text-sm font-medium text-gray-700">
              Case Description:
            </label>
            <input
              type="text"
              id="caseDescription"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.casedescription || ""}
              onChange={(e) => setData({ ...data, casedescription: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="dateoccour" role="splbl" className="block text-sm font-medium text-gray-700">
              Date of Occurrence:
            </label>
            <input
              type="text"
              id="dateoccour"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={data.dateoccour || ""}
              onChange={(e) => setData({ ...data, dateoccour: e.target.value })}
              required
            />
          </div>

          <button role="btnlbl"
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

export default EditCom;
