import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import Select from 'react-select';

const Card = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter1, setSelectedFilter1] = useState("");
  const [selectedFilter2, setSelectedFilter2] = useState("");

 


  const colourStyles = {
    backgroundColor: searchQuery ? "#f7f6f6" : "", 
    fontSize : "15px",
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? "0 0 0 3px rgba(251, 191, 36, 0.5)" : "none",
      backgroundColor:  state.selectProps.value ? '#f7f6f6' : '', 
      padding :"5px 5px",
      fontSize : "15px",
      borderColor: "transparent",
      outline: "none",
      "&:hover": {
        outline: "none !important",
      },
      "&:focus": {
        outline: "none !important",
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#fbbf24"
          : isFocused
          ? "#f2e3be"
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? "#fff"
          : "#000000",
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? ""
              : ""
            : undefined,
        },
      };
    },
  };
  
  return (
    <div className="container w-full xl:w-[50%] md:w-[70%] p-5 mt-10  ">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[20px]  text-gray-800">
          {props.name}
        </h1>
        <div className="flex items-center">
          <span className="mr-4"> </span>
          <AddIcon className="text-yellow-500 mb-1 text-4xl ml-4" style={{ fontSize: "2rem" }}/>

        </div>
      </div>

      <div className="relative mt-4 mb-4">
        {/* search */}
        <input
          className="w-full p-3 pl-16 pr-4  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
          type="text"
          placeholder="Recherche par titre, ref annonces"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={colourStyles}          
        />
        <div className="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none bg-yellow-500  rounded-l">
          <SearchIcon className="text-white" />
        </div>
      </div>
      {/* Filter Options */}
      <div className="flex mb-4">
        <div className="flex-grow mr-2 w-70">
          <Select
            className="flex-grow w-full mr-2  text-sm  border border-gray-200 py  rounded bg-color  "
            options={props.firstSelectOptions}
            styles={colourStyles}

          />
        </div>
        {/* Filter Options 2 */}
        <div className="flex-grow  w-30">
          <Select
            className="flex-grow w-full  text-sm  border border-gray-200  rounded"
            options={props.Options2}
            styles={colourStyles}
  
           
          />
        </div>
      </div>

      {/* Last Section */}
      <div className="bg-gray-50 border p-10 rounded mt-8 flex flex-col items-center justify-center">
        <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
          {props.text}
        </h1>
        <button className=" mt-8 rounded-lg min-w-[200px] max-w-[250px] bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};

export default Card;
