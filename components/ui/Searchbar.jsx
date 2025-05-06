'use client';

import { useState } from "react";
import { Search } from "@deemlol/next-icons";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form
      className={`
        flex items-center border border-red-500 rounded-lg text-sm
        transition-all duration-300
        ${isOpen ? 'w-32 px-2 py-1' : 'w-8 p-1'}
        overflow-hidden bg-transparent
        md:w-full md:max-w-xs md:px-2 md:py-1
      `}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <input
        type="text"
        placeholder="search..."
        className={`
          bg-transparent focus:outline-none placeholder:text-gray-400 text-gray-300 text-sm
          w-full
          ${isOpen ? 'block' : 'hidden'}
          lg:block
        `}
      />
      <Search
        className="hover:cursor-pointer shrink-0"
        size={16}
        color="#e5e7eb"
      />
    </form>
  );
}
