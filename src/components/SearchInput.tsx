import React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSearch, onKeyPress }) => {
  return (
    <div className="relative flex items-center max-w-[736px] mx-auto my-6">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Introduce una palabra"
        className="w-full pl-4 pr-10 py-2 rounded-xl bg-[#1f1f1f] dark:bg-gray-200 text-gray-200 dark:text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <img
        src="/public/assets/images/icon-search.svg"
        alt="Buscar"
        className="absolute right-3 w-5 h-5"
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchInput;
