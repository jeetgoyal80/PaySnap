import React, { useState } from "react";
import axios from "axios";

const QRForm = () => {
  const [upi, setUpi] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [upiLink, setUpiLink] = useState("");
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleGenerate = async () => {
    if (!upi.trim()) {
      alert("Please enter a valid UPI ID");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`${backendUrl}/generate_qr`, {
        params: { upi_id: upi, name, amount, note },
      });
      setQrImage(res.data.qr_base64);
      setUpiLink(res.data.upi_link);
    } catch (err) {
      console.error(err);
      alert("Error generating QR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.formContainer}>
      <input
        style={styles.input}
        placeholder="Enter UPI ID (e.g., example@oksbi)"
        value={upi}
        onChange={(e) => setUpi(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Amount (optional)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />
      <input
        style={styles.input}
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        style={{
          ...styles.button,
          backgroundColor: loading ? "#818CF8" : "#5563DE",
          cursor: loading ? "not-allowed" : "pointer",
        }}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate QR"}
      </button>

      {qrImage && (
        <div style={styles.qrContainer}>
          <img
            src={`data:image/png;base64,${qrImage}`}
            alt="UPI QR"
            style={styles.qrImage}
          />
          <a href={upiLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
            {upiLink}
          </a>
          <button
            style={styles.downloadBtn}
            onClick={() => {
              const link = document.createElement("a");
              link.href = `data:image/png;base64,${qrImage}`;
              link.download = "upi_qr.png";
              link.click();
            }}
          >
            Download QR
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  formContainer: {
    width: "100%",
    maxWidth: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  button: {
    width: "100%",
    backgroundColor: "#5563DE",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
  qrContainer: {
    marginTop: "25px",
    textAlign: "center",
    animation: "fadeIn 0.8s ease-in-out",
  },
  qrImage: {
    width: "200px",
    height: "200px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  },
  link: {
    display: "block",
    marginTop: "10px",
    color: "#5563DE",
    textDecoration: "none",
    fontSize: "13px",
    wordBreak: "break-all",
  },
  downloadBtn: {
    marginTop: "12px",
    backgroundColor: "#4ADE80",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s",
  },
};

// Add subtle hover & focus styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  input:focus {
    border-color: #5563DE !important;
    box-shadow: 0 0 6px rgba(85,99,222,0.4);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`, styleSheet.cssRules.length);

export default QRForm;
