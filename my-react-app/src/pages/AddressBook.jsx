import React from "react";
import "tailwindcss/tailwind.css";

const AddressesBook = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Carnet d'adresses</h1>
        <button className="btn btn-warning btn-sm">Ajouter une adresse</button>
      </div>
      <div className="bg-white dark:bg-gray-950  p-6">
        <div className="mb-6">
          <input
            className="input"
            type="search"
            placeholder="Rechercher une adresse..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <CardContent
              name="Adresse 1"
              address="123 Rue de la Paix"
              city="75001 Paris, France"
            />
          </div>
          <div>
            <CardContent
              name="Adresse 2"
              address="456 Rue du Marché"
              city="69000 Lyon, France"
            />
          </div>
          <div>
            <CardContent
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

function CardContent({ name, address, city }) {
  return (
    <div className="mb-4 border rounded-lg p-5">
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{address}</p>
      <p>{city}</p>
      <div className="flex justify-end gap-2">
        <button className="btn btn-red btn-outline btn-sm">
          <TrashIcon className="w-4 h-4 mr-2" />
          Supprimer
        </button>
      </div>
    </div>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

export default AddressesBook;
