import React, { useState } from "react";
import Spinner from "../../../components/Spinner";

const Categories = ({ title, categories, onSelectCategory }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleClick = (e) => {
    if (typeof e === "string") {
      setActiveFilter(e);
      onSelectCategory(e);
    } else {
      onSelectCategory(e.target.innerText);
      setActiveFilter(e.target.innerText);
    }
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return categories.length > 0 ? (
    <>
      {title && (
        <h2 className="text-lg text-zinc-300 mb-6 border-l-2 pl-2 border-cyan-400 font-semibold">
          {title}
        </h2>
      )}
      <ul className="ml-3">
        <li
          key="all"
          className={`mb-4 ${
            activeFilter === "all"
              ? "text-md font-bold text-cyan-400"
              : "text-sm"
          }`}
        >
          <button
            className="hover:text-cyan-400"
            onClick={() => handleClick("all")}
          >
            {capitalizeFirstLetter("all")}
          </button>
        </li>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li
              key={category}
              className={`mb-4 ${
                activeFilter === capitalizeFirstLetter(category)
                  ? "text-md font-bold text-cyan-400"
                  : "text-sm"
              }`}
            >
              <button className="hover:text-cyan-400" onClick={handleClick}>
                {capitalizeFirstLetter(category)}
              </button>
            </li>
          ))
        ) : (
          <h3>Not found</h3>
        )}
      </ul>
    </>
  ) : (
    <Spinner className='flex items-center justify-center' size={40} />
  );
};

export default Categories;
