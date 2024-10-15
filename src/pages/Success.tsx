// Success.tsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Success = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0fff4", // Light green background
    animation: "fadeIn 1s ease-in-out", // Fade-in animation
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    background: "white",
    padding: "20px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle: React.CSSProperties = {
    color: "#4caf50", // Green color for success
    fontSize: "2.5rem",
    marginBottom: "10px",
  };

  const paragraphStyle: React.CSSProperties = {
    color: "#333", // Dark text for contrast
    fontSize: "1.2rem",
    marginBottom: "20px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none", // Remove underline from link
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Payment Successful!</h1>
        <p style={paragraphStyle}>
          Your payment has been processed successfully.
        </p>
        <Link to="/" style={buttonStyle}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
