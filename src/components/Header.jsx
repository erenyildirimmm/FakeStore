import React from 'react'

const Header = () => {
  return (
    <header className="bg-stone-950 flex  z-50 top-0 justify-between items-center h-24 w-full mx-auto px-4">
      <h1 className="text-3xl font-bold text-zinc-100">
        Fake<span className="text-cyan-400">Store</span>
      </h1>
    </header>
  );
}

export default Header