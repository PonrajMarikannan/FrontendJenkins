import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCrim() {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    dob: "",
    crimecase: {
      cid: "",
      casenumber: "",
      casedescription: "",
      dateoccour: ""
    }
  });

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8085/crime/all");
        setRecords(response.data);
      } catch (err) {
        console.error("Error fetching CriminalCase records:", err);
      }
    };
    fetchRecords();
  }, []);

  const handleSelectChange = async (e) => {
    const Id = e.target.value;
    console.log(`Selected Case ID: ${Id}`);
    try {
      const response = await axios.get("http://localhost:8085/crime/" + Id);
      console.log("Criminal data fetched:", response.data);
      setInputData((prevState) => ({
        ...prevState,
        crimecase: {
          ...prevState.crimecase,
          ...response.data,
          cid: Id
        }
      }));
    } catch (err) {
      console.error("Error fetching Crime data:", err);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8085/criminal", inputData);
      alert("Data added successfully");
      navigate("/ViewCrim");
    } catch (err) {
      console.error("Error adding Criminal data:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1  role="form-heading" className="text-3xl text-center font-semibold mb-8">Add Criminal Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label role="cnlbl" className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label role="cdlbl" className="block text-sm font-medium text-gray-700" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="text"
              name="dob"
              className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setInputData({ ...inputData, dob: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label  role="cilbl" className="block text-sm font-medium text-gray-700" htmlFor="crimecase">
              Case ID
            </label>
            <select
              className="form-select mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="selectedId"
              value={inputData.crimecase.cid}
              onChange={handleSelectChange}
            >
              <option value="">Select Case ID</option>
              {records.map((d, i) => (
                <option key={i} value={d.cid}>
                  {d.cid}
                </option>
              ))}
            </select>
          </div>
          <button role="btnlbl"
            className="w-full bg-indigo-500 text-white p-3 rounded-md font-semibold hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCrim;
