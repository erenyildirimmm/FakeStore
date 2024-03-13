import React, { useEffect, useState } from "react";

const SelectSize = ({ sizes }) => {
  const [activeSize, setActiveSize] = useState("");

  return (
    <>
      <h5 className="mb-2 font-semibold">Size</h5>
      <div className="flex items-center gap-4">
        {sizes.length > 0 &&
          sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`w-12 h-12 text-xs rounded-xl flex items-center justify-center p-3 hover:border-none ${
                activeSize === size
                  ? "bg-zinc-950 text-cyan-400"
                  : "border border-zinc-300 text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              {size}
            </button>
          ))}
      </div>
    </>
  );
};

export default SelectSize;
