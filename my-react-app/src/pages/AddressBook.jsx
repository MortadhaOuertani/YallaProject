import { CardContent } from "@mui/material";
import React from "react";
import "tailwindcss/tailwind.css";
import CardCarnetAdress from "../components/CardCarnetAdress";

const AddressesBook = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Carnet d'adresses</h1>
        <button className="btn btn-warning btn-sm">Ajouter une adresse</button>
      </div>
      <div className=" dark:bg-gray-950  p-6">
        <div className="mb-6 w-full ">
          <input
            className="input w-full"
            type="search"
            placeholder="Rechercher une adresse..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
