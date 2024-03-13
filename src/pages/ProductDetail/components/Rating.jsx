import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Rating = ({ rateData }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="bg-zinc-100 px-2 py-1 rounded-xl text-sm">
        {rateData.rate}
      </span>
      <Rate disabled allowHalf defaultValue={rateData.rate} />
      <Link to={'#'} className="underline">{rateData.count} Reviews</Link>
    </div>
  );
};

export default Rating;
