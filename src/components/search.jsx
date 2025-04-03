"use client";
import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Search({ onchange, onKeyDown, suggestions = [], onSelect }) {
  const [error, setError] = useState("");

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      if (!e.target.value.trim()) {
        setError("Хотын нэр оруулна уу!");
        setTimeout(() => setError(""), 3000);
      }
    }
    onKeyDown(e);
  };

  return (
    <div className="relative flex flex-col items-center w-3/6 ml-52">
      <div className="flex bg-white rounded-full gap-2 w-full shadow-md">
        <BiSearchAlt className="size-6 mt-5 ml-5 text-gray-500" />
        <input
          onChange={onchange}
          onKeyDown={handleKeyDown}
          className="outline-none rounded-full w-full h-16 text-neutral-950 px-4 text-lg"
          placeholder="Хотын нэр..."
        />
      </div>
      {error && (
        <div className="absolute top-full mt-2 bg-red-500 text-white text-center px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          {error}
        </div>
      )}
      {suggestions?.length > 0 && (
        <ul className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden z-20 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-200 transition-colors text-gray-800 border-b last:border-none"
              onClick={() => onSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
