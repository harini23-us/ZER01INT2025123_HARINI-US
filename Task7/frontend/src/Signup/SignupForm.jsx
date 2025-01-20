import React, { useState } from "react";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      FirstName: firstName,
      LastName: lastName,
      Password: password,
      Email: email,
      PhoneNumber: phone,
      DOB: dob,
      otp: "", // Empty OTP, as you mentioned
    };

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(formData), // Send the data as JSON
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Signup successful", result);
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const labelStyles = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const headingStyles = {
    textAlign: "center",
    marginBottom: "20px",
  };

  return (
    <div>
      <h2 style={headingStyles}>Signup Form</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div>
          <label htmlFor="firstName" style={labelStyles}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyles}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="password" style={labelStyles}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyles}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyles}>
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="dob" style={labelStyles}>
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
            style={inputStyles}
          />
        </div>
        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
    </div>
  );
}
