import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../components/forms/Button";
import Select from 'react-select';
import InputeStyles from "../utils/InputeStyles";

const Card = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

 



  
  return (
    <div className="container w-full   p-5 lg:px-[20%]  mt-10  ">
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
          style={InputeStyles}          
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
            styles={InputeStyles}
            isSearchable={false}
          />
        </div>
        {/* Filter Options 2 */}
        <div className="flex-grow  w-30">
          <Select
            className="flex-grow w-full  text-sm  border border-gray-200  rounded"
            options={props.Options2}
            styles={InputeStyles}
            isSearchable={false}
           
          />
        </div>
      </div>

      {/* Last Section */}
      <div className="bg-gray-50 border p-10 rounded mt-8 flex flex-col items-center justify-center">
        <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
          {props.text}
        </h1>
        <div className ='mt-5'>
        <Button buttonName={props.buttonName}/>

        </div>

      </div>
    </div>
  );
};

export default Card;
