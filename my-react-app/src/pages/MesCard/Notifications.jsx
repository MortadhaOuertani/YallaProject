import Card from "./Card";
import { getData } from '../../components/apiAndFunction/apiService';
import { API_ENDPOINTS } from '../../components/apiAndFunction/apiEndpoints';
import { useEffect, useState } from 'react';
import { MapPin, MessageCircle, Clock } from "lucide-react";
import Button from "../../components/forms/Button";

const Annonces = () => {

  const [annonces, setAnnonces] = useState([]); // State to store annonces
  const [error, setError] = useState(null); // Error state to handle issues with data fetching
  const [loading, setLoading] = useState(true); // Loading state to handle the async nature of the request

  const fetchAnnonces = async () => {
    try {
      const response = await getData(API_ENDPOINTS.GET_Annonces); // Fetch the JSON data
      if (response) {
        setAnnonces(response); // Assuming the API response has "annonces" key
      } else {
        setError('Invalid response format'); // Error handling if the structure is not as expected
      }
    } catch (err) {
      setError(err.message); // Catching errors and updating state
    } finally {
      setLoading(false); // Setting loading to false after the request completes
    }
  };

  useEffect(() => {
    fetchAnnonces();
    console.log(annonces);
  }, [annonces]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if something goes wrong
  }
  return (
      <div className="container w-full p-2 lg:px-[20%] mt-10">

      <Card 
        name="Mes annonces" 
        firstSelectOptions={[
          { value: "1", label: "Toutes mes annonces" },
          { value: "2", label: "En attente de paiement" },
          { value: "3", label: "En attente de disponibilités " },
          { value: "4", label: "En ligne" },
          { value: "5", label: "En cours de livraison" },
          { value: "6", label: "Livrées" },
          { value: "7", label: "Expirées" },
          { value: "8", label: "Refusées" },
        ]}
        Options2 = {[
          { value: "option1", label: "Les plus anciens" },
          { value: "option2", label: "Les plus récents" },
        ]}
       
        />
        
      {/* Last Section */}
      <div className="bg-gray-50 border p-2 rounded mt-8 flex flex-col items-center justify-center"> 
        {annonces.length > 0 ? ( // Use props.annonces here
          annonces.map((annonce) => ( // Correct map function to use props.annonces
            <div key={annonce.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-start">
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-yellow-500 font-semibold text-lg">{annonce.title}</h2>
                      <div className="text-gray-600 text-sm mt-1">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {annonce.description}
                        </div>
                      </div>
                    </div>
                    <span className="text-yellow-500 font-bold text-xl">{annonce.price.toFixed(2)} €</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                      Expirée
                    </span>
                    <MessageCircle size={14} className="mr-1" />
                    <span className="mr-2">{annonce.contactEmail}</span>
                    <span className="mr-2">-</span>
                    <span className="mr-2">No discussions yet</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {annonce.postedDate}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
            Voudrais-tu être celui qui brise ce silence en créant une annonce ?
            </h1>
            <div className="mt-5 text-center">
              <Button buttonName="Ajouter une Annonces!" />
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Annonces;
