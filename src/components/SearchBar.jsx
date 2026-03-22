import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery, searchLocation, setSearchLocation }) {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [localLocation, setLocalLocation] = useState(searchLocation);

  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setLocalLocation(searchLocation);
  }, [searchLocation]);

  const handleSearch = () => {
    setSearchQuery(localQuery);
    setSearchLocation(localLocation);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex items-center gap-4 w-full md:w-2/3 xl:w-1/2 mb-10 transform -translate-y-[60px] relative z-20">
      <div className="flex-1 flex items-center gap-3 px-4 border-r border-gray-100">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Job title, Keywords, or Company name"
          className="w-full bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 py-2"
        />
      </div>
      <div className="flex-1 flex items-center gap-3 px-4">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={localLocation}
          onChange={(e) => setLocalLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Location"
          className="w-full bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 py-2"
        />
      </div>
      <button 
        onClick={handleSearch}
        className="bg-[#0a3fd6] text-white px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}
