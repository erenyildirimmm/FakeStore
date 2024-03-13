import React from 'react'

const Search = ({label, placeholder, handleChangeSearch, value, ...props}) => {
  return (
    <div {...props}>
      <div className="sm:block hidden">
        <label
          htmlFor="searchInput"
          className="text-lg sm:text-zinc-300 text-zinc-950 border-l-2 pl-2 border-cyan-400 font-semibold"
        >
          {label}
        </label>
      </div>
      <input
        type="text"
        id="searchInput"
        className="outline-none border border-zinc-300 bg-transparent w-full px-4 sm:py-2 py-3 rounded-xl text-sm mt-6 focus:border-zinc-800 sm:focus:border-cyan-400"
        placeholder={placeholder}
        onChange={handleChangeSearch}
        value={value}
      />
    </div>
  );
}

export default Search