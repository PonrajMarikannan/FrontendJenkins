import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateValues(inputData);

        if (isValid) {
            axios.post("http://localhost:8085/register", inputData)
                .then(() => {
                    alert("Registration Successfully");
                    navigate("/Login");
                })
                .catch(err => console.log(err));
        }
    };

    const validateValues = (data) => {
        if (!data.name || !data.email || !data.password) {
            setError("Please fill in all fields.");
            return false;
        }
        if (!validateEmail(data.email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 role="login-heading" className="text-3xl font-bold text-center mb-8">CREATE A ACCOUNT</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label role="name-heading" className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={inputData.name}
                            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                            className="w-full mt-2 px-3 py-2 bg-gray-700 border border-gray-600 focus:border-indigo-600 rounded-lg outline-none text-white"
                        />
                    </div>

                    <div>
                        <label role="email-heading" className="block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={inputData.email}
                            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                            className="w-full mt-2 px-3 py-2 bg-gray-700 border border-gray-600 focus:border-indigo-600 rounded-lg outline-none text-white"
                        />
                    </div>

                    <div>
                        <label role="Password-heading" className="block font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={inputData.password}
                            onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                            className="w-full mt-2 px-3 py-2 bg-gray-700 border border-gray-600 focus:border-indigo-600 rounded-lg outline-none text-white"
                        />
                    </div>

                    <button role="button"
                        type="submit"
                        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-200 mt-4">
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Continue with Google
                </button>

                <p className="text-center mt-4 text-gray-300">Already have an account? <a href="/Login" className="font-medium text-indigo-400 hover:text-indigo-300">Log in</a></p>
            </div>
            <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-lg">Go Back</button>
        </main>
    );
}

export default Signup;
