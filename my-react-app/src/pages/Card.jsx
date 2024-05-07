import React, { useState } from 'react';

const Card = ( props ) => {
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

  return (
    <div className="h-full ">
        <h1 className="font-bold text-3xl mt-16 text-gray-500 text-center">
          {props.name}
        </h1>      {/* Search Bar */}
      <input
        className="w-full p-2 border border-gray-300 rounded-md mt-14 mb-4"
        type="text"
        placeholder="Recherche par titre"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="flex mb-4">
            <div className="flex-1 mr-2">
                <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="anciens">Toutes mes annonces</option>
                    <option value="recent">En attente de paiement</option>
                    <option value="recent">En attente de disponibilités</option>
                    <option value="recent">En ligne</option>
                    <option value="recent">En cours de livraison </option>
                    <option value="recent">Livrées</option>
                    <option value="recent">Supprimées </option>
                    <option value="recent">Expirées  </option>
                    <option value="recent">Refusées </option>


                </select>
            </div>
            {/* Filter Options 2 */}
            <div className="flex-1 ml-2">
                <select className="w-full p-2 border border-gray-300  rounded-md">
                    <option value="anciens">Les plus anciens</option>
                    <option value="recent">Les plus récents</option>
                </select>
            </div>
        </div>

      {/* Filter Options */}
      
      {/* Last Section */}
      <div className="bg-gray-50 p-10 rounded-xl mt-8">
          <h1 className="mt-5 text-md font-normal text-center ">
            Voudrais-tu être celui qui brise ce silence en créant une annonce ?{" "}
          </h1>
          <button className="w-full mt-8 rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
            {props.buttonName}
          </button>
        </div>
    </div>
  );
};

export default Card;
