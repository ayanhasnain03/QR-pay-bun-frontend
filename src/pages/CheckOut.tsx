import axios from "axios";
import { useState } from "react";

const CheckOut = () => {
  const [amount, setAmount] = useState("");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const payFunc = async (e: any) => {
    e.preventDefault();
    setErr(null);
    setQrCode(null); // Reset QR code

    try {
      // Hit the API and send the amount
      const res = await axios.post(
        "https://qr-pay-hono-react.onrender.com/create-checkout-session",
        {
          amount: parseFloat(amount),
          currency: "usd",
        }
      );

      setQrCode(res.data.qrCode); // Set the QR code from response
    } catch (error) {
      console.error(error);
      setErr("Failed to create payment session. Please try again.");
    }
  };

  // Inline styles
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa", // Light background color
    padding: "20px",
  };

  const inputStyle: React.CSSProperties = {
    width: "200px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff", // Bootstrap primary color
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: "#0056b3", // Darker shade for hover
  };

  const qrContainerStyle: React.CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
  };

  const errorStyle: React.CSSProperties = {
    color: "red",
    marginTop: "10px",
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h1>Pay Via QR Code</h1>
      <input
        type="number"
        placeholder="Amount in USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
      />
      <button
        onClick={payFunc}
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor!)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor!)
        }
      >
        Pay
      </button>
      {qrCode && (
        <div style={qrContainerStyle}>
          <h2>Scan the QR Code to Pay</h2>
          <img src={qrCode} alt="QR Code for payment" />
        </div>
      )}
      {err && <p style={errorStyle}>{err}</p>}
    </div>
  );
};

export default CheckOut;
