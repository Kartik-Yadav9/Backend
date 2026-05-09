"use client";

export default function ProtectedError({ error, reset }) {
  console.error(error);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Something went wrong.</h2>
      <p>Please try loading this page again.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

