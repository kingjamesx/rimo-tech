"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Form Data:", formData);
    try {
      const url =
        "http://wokpa.ddns.net:9000/#/Listener/post_api_listeners_login";
      const response = await axios.post(url, formData);
      toast.success(response.data);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="bg-white p-8 rounded shadow-md text-[#333]">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md text-[black]"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md text-[black]"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="********"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
