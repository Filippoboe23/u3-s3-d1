import React from "react";

function Bottone({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0"
      }}
    >
      {label}
    </button>
  );
}

export default Bottone;
