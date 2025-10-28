import React from "react";
import QRForm from "./components/QRForm";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💸 UPI QR Generator</h1>
        <p style={styles.subtitle}>
          Instantly create a scannable UPI payment QR for any UPI ID.
        </p>
        <QRForm />
        <footer style={styles.footer}>
          <p>Made with ❤️ by Jeet Goyal</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #74ABE2, #5563DE)",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    padding: "40px 60px",
    maxWidth: "450px",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "28px",
    fontWeight: "600",
  },
  subtitle: {
    color: "#666",
    marginBottom: "25px",
    fontSize: "14px",
  },
  footer: {
    marginTop: "25px",
    fontSize: "13px",
    color: "#777",
  },
};

// Add a simple fade animation globally
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}`, styleSheet.cssRules.length);

export default App;
