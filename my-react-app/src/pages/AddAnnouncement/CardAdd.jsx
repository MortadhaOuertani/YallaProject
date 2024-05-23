import React, { useState } from "react";
import AddCardItem from "./AddCardItem";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Button from "../../components/forms/Button";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import StepsItems from "./StepsItems";
import Step4 from "./Step4";
function CardAdd(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
 
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
                
                      <AddCardItem />
                                     
              }
                    {currentStep === 2 && 
                                    <StepsItems name="Enlèvement"/>

                
                    }
                    {currentStep === 3 && 
                                    <StepsItems name="Livraison"/>
                                  }
                    {currentStep === 4 && 
                    <Step4/>
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
