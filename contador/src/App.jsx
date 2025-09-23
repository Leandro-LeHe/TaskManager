import { useState } from "react";

export default function App() {
  // count começa em 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Contador: {count}</h1>
      <button
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 2)}
      >
        Incrementar
      </button>
    </div>
  );
}
