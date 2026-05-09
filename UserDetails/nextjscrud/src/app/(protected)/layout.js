import React from "react";

export default function ProtectedLayout({ children }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Protected Section</h1>
      {children}
    </div>
  );
}
