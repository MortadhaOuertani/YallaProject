import { CardContent } from "@mui/material";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import CardCarnetAdress from "../components/CardCarnetAdress";
import Inpute from "./Inpute";
import Button from "./Button";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import InputeStyles from "../utils/InputeStyles";

const firstSelectOptions = [
  { value: "2", label: "Par pays" },
  { value: "3", label: "Par ville" },
  { value: "4", label: "Par code postal" },
];

const Options2 = [
  { value: "option1", label: "Les plus anciens" },
  { value: "option2", label: "Les plus récents" },
];
const AddressesBook = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container w-full   p-2 md:p-10  mt-10  ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Carnet d'adresses</h1>
        <Button buttonName="Ajouter une adresse" />
      </div>
      <div className=" dark:bg-gray-950  ">
        <div className="relative mb-4">
          {/* search */}
          <input
            className="w-full p-3 pl-16 pr-4  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
            type="text"
            placeholder="Recherche par adresse"
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
              options={firstSelectOptions}
              styles={InputeStyles}
              isSearchable={false}
            />
          </div>
          {/* Filter Options 2 */}
          <div className="flex-grow  w-30">
            <Select
              className="flex-grow w-full  text-sm  border border-gray-200  rounded"
              options={Options2}
              styles={InputeStyles}
              isSearchable={false}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <CardCarnetAdress
              name="Adresse 1"
              address="123 Rue de la Paix"
              city="75001 Paris, France"
            />
          </div>
          <div>
            <CardCarnetAdress
              name="Adresse 2"
              address="456 Rue du Marché"
              city="69000 Lyon, France"
            />
          </div>
          <div>
            <CardCarnetAdress
              name="Adresse 3"
              address="789 Rue des Fleurs"
              city="13000 Marseille, France"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesBook;
