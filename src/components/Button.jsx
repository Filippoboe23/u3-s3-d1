import React from "react";

function Bottone({ label, onClick }) {
  return (
    <button onClick={onClick} className=" mb-5 px-5 py-3 bg-info bg-gradient rounded border border-none text-white shadow">
      {label}
    </button>
  );
}

export default Bottone;
