"use client";

export default function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "red", fontWeight: "bold" }}>
        Something went wrong...
      </h1>
    </div>
  );
}
