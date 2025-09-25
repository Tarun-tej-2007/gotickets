import React, { useState, useEffect } from "react";
import "./signup.css";

export default function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    if (formData.password !== formData.repassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    alert(`✅ Signup successful!\nWelcome ${formData.username}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Email Id</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Re-Enter Password</label>
          <input
            type="password"
            name="repassword"
            placeholder="Re-enter password"
            value={formData.repassword}
            onChange={handleChange}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
