import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <h1>Goal : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default Counter;
