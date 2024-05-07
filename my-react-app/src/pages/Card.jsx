import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import Select from "react-select";
const options = [
  { value: "option1", label: "Les plus anciens" },
  { value: "option2", label: "Les plus récents" },
];
const Card = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle filter selection
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#fad35f" : "white",
      cursor: "pointer",
    }),
  };

  return (
    <div className="container mx-auto w-3/5 px-4 py-8 ">
       <div className="flex items-center justify-between"> 
          <h1 className="font-bold text-3xl  mb-6 text-gray-500">
            {props.name}
          </h1>
          <div className="flex items-center">
            <span className="mr-4"> </span>
            <AddIcon className="text-yellow-500 mb-3 text-4xl ml-4" style={{ fontSize: "2.5rem" }}/>
          </div>
        </div>
      
      {/* Search Bar */}
      <div className="relative mt-4 mb-4">
        <input
          className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md text-sm sm:text-base md:text-xl lg:text-xl xl:text-lg"
          type="text"
          placeholder="Recherche par titre, ref annonces"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="text-gray-400" />
        </div>
      </div>
      {/* Filter Options */}
      <div className="flex mb-4">
        <div className="flex-grow mr-2 w-70">
          <Select 
            className="flex-grow w-full mr-2 border-gray-300 text-sm sm:text-base md:text-xl lg:text-xl xl:text-lg"
            options={props.firstSelectOptions}
            styles={customStyles}
          />
        </div>
        {/* Filter Options 2 */}
        <div className="flex-grow ml-2  w-30">
          <Select 
            className="flex-grow w-full border-gray-300 text-sm sm:text-base md:text-xl lg:text-xl xl:text-lg"
            options={props.Options2}
            styles={customStyles}
          />
        </div>
      </div>


      {/* Last Section */}
      <div className="bg-gray-50 p-10 rounded-xl mt-8">
        <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
          {props.text}
        </h1>
        <button className="w-full mt-8 rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};

export default Card;
