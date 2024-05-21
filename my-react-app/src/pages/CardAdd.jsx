import React, { useState } from "react";
import InputeStyles from "../utils/InputeStyles";
import AddCardItem from "./AddCardItem";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Button from "../components/forms/Button";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Inpute from "../components/forms/Inpute";
import StepsItems from "./StepsItems";
import Money from "../assets/money.png"
function CardAdd(props) {
  const [objects, setObjects] = useState([{ id: 1 }]);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const toggleSecondForm = () => {
    const newId = objects.length + 1;
    setObjects([...objects, { id: newId }]);
  };

  const deleteForm = (id) => {
    setObjects(objects.filter((object) => object.id !== id));
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    // Submit logic here
    console.log("Form submitted!");
  };

  return (
    <>
    <div className="container w-full lg:w-full lg:px-[20%] md:w-[70%] p-5 mt-3">
            

    <div className="flex items-center space-x-2 mb-10">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="relative w-30 h-1 flex-1">
              <div className={`absolute inset-0 h-full ${currentStep > index ? 'bg-yellow-500' : 'bg-gray-200'} w-1/2 rounded-l-full`} />
              <div className={`absolute inset-0 h-full ${currentStep > index + 1 ? 'bg-yellow-500' : 'bg-gray-200'} w-1/2 left-1/2 rounded-r-full`} />
            </div>
          ))}
        </div>

            {currentStep === 1 && 
                <>
                <div >
                  <h1 className="font-semibold text-[30px] text-gray-800">{props.name}</h1>
                  {objects.map((object, index) => (
                    <div key={object.id}>
                      <AddCardItem />
                      {objects.length > 1 && (
                        <>
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => deleteForm(object.id)}
                              className="mt-8 text-red-600 rounded-lg min-w-[200px] max-w-[250px] py-3 text-base font-medium transition duration-200 dark:text-red-400 dark:hover:text-red-600 dark:active:bg-gray-200"
                            >
                              Supprimer un Objet
                            </button>
                          </div>
                          <hr className="mb-1 h-1.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-200" />
                        </>
                      )}
                    </div>
                  ))}

                  <div className="flex mt-3 items-center justify-center">
                    <Button buttonName="Ajouter un Objet" handleClick={toggleSecondForm} />
                  </div>

                  <hr className="mb-4 h-1.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-200" />
                  <label className="font-semibold text-[13px] text-gray-600">
                    Informations complémentaires
                  </label>
                  <textarea
                    className="w-full p-3 pr-4 mt-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                    type="textarea"
                    style={InputeStyles}
                    placeholder="Ex : Le carton le plus long fait 2m15, Le plus lourd est un canapé"
                  />

                  
                </div>
              
                </>
                
              }
                    {currentStep === 2 && 
                                    <StepsItems name="Enlèvement"/>

                
                    }
                    {currentStep === 3 && 
                                    <StepsItems name="Livraison"/>
                                  }
                    {currentStep === 4 && 
                    <div className="bg-white p-8 mt-5 rounded-lg shadow-md w-full max-w-sm mx-auto">
                    <h2 className="text-2xl font-semibold mb-6">Faites votre proposition</h2>
                    <div className="flex justify-center mb-4">
                    <img src={Money} className="h-16 w-16" alt="Money" />

                    </div>
                    <p className="text-center text-sm mb-6">Le prix généralement proposé est compris entre 60 € et 88 €.</p>
                    <div className="border-t border-b py-4 mb-4">
                      <label className="block text-center text-lg font-medium mb-2" htmlFor="price">
                        Proposition tarifaire
                      </label>
                      <div className="flex justify-center">
                        
                        <Inpute  placeholder="Exp: 68€" type="text" />

                      </div>
                      <p className="text-center text-sm mt-2">Votre prix est dans la moyenne.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Livraison</span>
                        <span>39.00 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Manutention</span>
                        <span>29.00 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span >Assurance (jusqu'à 150€)</span>
                        <span className="font-semibold text-yellow-500">offerte</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                        <span>Prix total TTC</span>
                        <span className="text-yellow-500">68.00 €</span>
                      </div>
                    </div>
                  </div>
                    }

          <div className="mt-4 mb-5">
          <div className="flex justify-between w-full">
            {currentStep > 1 && (
              <button
              className=" btn   rounded-lg  shadow-none border-none min-w-[200px]  bg-with py-3 text-base font-medium  transition duration-200 hover:bg-gry-200  dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-200 dark:active:bg-yellow-200"
              onClick={handlePrevious}
              >
              Précédent <KeyboardReturnIcon/>
            </button>
            )}
            {currentStep < totalSteps && (
              <Button
                buttonName="Suivant"
                icons={<KeyboardTabIcon className="ml-4" />}
                className="flex-end"
                handleClick={handleNext}
              />
            )}
            {currentStep === totalSteps && (
              <Button
                buttonName="Submit"
                icons={<KeyboardTabIcon className="ml-4" />}
                handleClick={handleSubmit}
              />
            )}
          </div>
          </div>

    </div>
      
   
    </>
   
  );
}

export default CardAdd;
