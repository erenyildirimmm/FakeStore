import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count >= 10) {
      enqueueSnackbar(`you can add up to ${count} products.`, { variant: "warning" });
      return;
    }
    setCount((count) => ++count);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((count) => --count);
    }
    return;
  };

  return (
    <div className="inline-flex items-centertext-lg text-zinc-600 bg-zinc-100 rounded-xl">
      <button className="py-3 px-6" onClick={handleDecrease}>
        -
      </button>
      <span className="py-3 px-6">{count}</span>
      <button className="py-3 px-6" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
