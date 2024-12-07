import React from 'react';
import { Search } from 'lucide-react';
import Logo from '../../common/Logo';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-8">
      <Logo />
      <div className="relative max-w-md w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-navy-700 border-transparent text-gray-200 placeholder-gray-400 focus:bg-navy-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SearchBar;