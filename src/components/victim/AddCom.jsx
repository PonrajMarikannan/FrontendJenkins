import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCom() {
  const [inputData, setInputData] = useState({
    casenumber: "",
    casedescription: "",
    dateoccour: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateValues(inputData)) {
      try {
        await axios.post("http://localhost:8085/crime", inputData);
        alert("Data added successfully");
        navigate("/Home");
      } catch (err) {
        console.error("Error adding crime data:", err);
      }
    } else {
      alert("Please enter valid inputs!");
    }
  };

  const validateValues = (inputData) => {
    if (inputData.casenumber.trim().length === 0) {
      alert("Please enter valid Case Number!");
      return false;
    } else if (inputData.casedescription.trim().length === 0) {
      alert("Please enter valid Case Description!");
      return false;
    } else if (inputData.dateoccour.trim().length === 0) {
      alert("Please enter valid Date of Occurrence!");
      return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 role="form-heading" className="text-3xl font-semibold text-center mb-8">ADD CRIMINAL CASE</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label role="cnlbl" htmlFor="casenumber" className="block text-sm font-medium text-gray-700">
              Case Number:
            </label>
            <input
              type="number"
              id="casenumber"
              name="casenumber"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={inputData.casenumber}
              onChange={(e) => setInputData({ ...inputData, casenumber: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label role="cdlbl" htmlFor="casedescription" className="block text-sm font-medium text-gray-700">
              Case Description:
            </label>
            <input
              type="text"
              id="casedescription"
              name="casedescription"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={inputData.casedescription}
              onChange={(e) => setInputData({ ...inputData, casedescription: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <label role="doclbl" htmlFor="dateoccour" className="block text-sm font-medium text-gray-700">
              Date of Occurrence:
            </label>
            <input
              type="text"
              id="dateoccour"
              name="dateoccour"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={inputData.dateoccour}
              onChange={(e) => setInputData({ ...inputData, dateoccour: e.target.value })}
              required
            />
          </div>
          <button role="btnlbl"
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCom;
