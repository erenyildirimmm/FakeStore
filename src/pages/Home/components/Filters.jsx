import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Categories from "./Categories";
import Search from "./Search";

import { FaAngleDown } from "react-icons/fa6";

const Filters = ({ onSelectFilter, onChangeSearch, value }) => {
  const [categories, setCategories] = useState([]);
  const [filterIsActive, setFilterIsActive] = useState(false);
  const contentHeight = useRef();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios(
        "https://fakestoreapi.com/products/categories"
      );
      const data = response.data;
      setCategories((category) => data);
    } catch (error) {
      enqueueSnackbar("request failed", {
        variant: "danger",
      });
    }
  };
  return (
    <div className="sm:bg-zinc-950 sm:text-zinc-100 sm:p-4 rounded-xl sm:sticky top-20">
      <Search
        handleChangeSearch={onChangeSearch}
        value={value}
        className="sm:mb-10"
        placeholder="product search..."
        label="Search"
      />
      <div className="sm:block hidden">
        <Categories
          categories={categories}
          onSelectCategory={onSelectFilter}
          title="Categories"
        />
      </div>

      {/* Monil Ekranlar İçin */}
      <div className="sm:hidden block bg-zinc-950 w-full overflow-hidden mt-4 p-4 text-zinc-100 rounded-xl">
        <button
          className="p-2 w-full flex items-center justify-between text-left font-semibold"
          onClick={() => setFilterIsActive((isAvtive) => !isAvtive)}
        >
          Categories
          <FaAngleDown
            className={`transform transition duration-700 ${
              filterIsActive && "rotate-180"
            }`}
          />
        </button>
        <div
          ref={contentHeight}
          className="overflow-hidden text-zinc-100 rounded-xl transition-height duration-700 ease-in-out"
          style={
            filterIsActive
              ? {
                  height: contentHeight.current.scrollHeight,
                  marginTop: "1rem",
                }
              : { height: "0px" }
          }
        >
          <Categories
            categories={categories}
            onSelectCategory={onSelectFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
