import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={buttonStyle}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={buttonStyle}>Decrement</button>
      <button onClick={() => setCount(0)} style={buttonStyle}>Reset</button>
    </div>
  );
}

// Inline styling for buttons
const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "white"
};

export default Counter;
