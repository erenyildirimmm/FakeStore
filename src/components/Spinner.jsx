import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ className, size = 80 }) => {
  return (
    <div className={className}>
      <ClipLoader className={className} color="#22d3ee" size={size} />
    </div>
  );
};

export default Spinner;