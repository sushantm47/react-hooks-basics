import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import "./App.css";
import Hello from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;

/*
 <button onClick={() => setShowHello(!showHello)}>toggle button</button>
      {showHello && <Hello />}

*/
