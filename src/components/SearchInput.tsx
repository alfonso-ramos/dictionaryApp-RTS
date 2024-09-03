import React, { useState } from 'react';

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchInput = ({ value, onChange, onSearch } : SearchInputProps) => {
  const [inputError, setInputError] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!value.trim()) {
        setInputError(true);
      } else {
        setInputError(false);
        onSearch();
      }
    }
  };

  return (
    <div className="flex flex-col max-w-[736px] mx-auto my-6">
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e);
            if (inputError && e.target.value.trim()) {
              setInputError(false);
            }
          }}
          onKeyPress={handleKeyPress}
          placeholder="Introduce una palabra"
          className={`w-full pl-6 pr-10 py-2 rounded-xl h-16 ${
            inputError ? "border-red-500 text-red-500" : "border-gray-300 text-gray-200"
          } bg-[#1f1f1f] dark:bg-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        <img
          src="/assets/images/icon-search.svg"
          alt="Buscar"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          onClick={() => {
            if (!value.trim()) {
              setInputError(true);
            } else {
              setInputError(false);
              onSearch();
            }
          }}
        />
      </div>
      {inputError && (
        <p className="text-red-500 text-sm mt-2">Whoops, can’t be empty…</p>
      )}
    </div>
  );
};

export default SearchInput;
