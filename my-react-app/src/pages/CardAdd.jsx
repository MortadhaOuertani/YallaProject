import React, { useState } from 'react';
import InputeStyles from '../utils/InputeStyles';
import AddCardItem from './AddCardItem';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
function CardAdd(props) {
  
  const [objects, setObjects] = useState([{ id: 1 }]); 

  const toggleSecondForm = () => {
    const newId = objects.length + 1;
    setObjects([...objects, { id: newId }]); 
  };

  const deleteForm = (id) => {
    setObjects(objects.filter((object) => object.id !== id));
  };
  return (
    
    <div className="container w-full lg:w-full lg:px-[20%] md:w-[70%] p-5 mt-10">
      <h1 className="font-semibold text-[30px] text-gray-800">
        {props.name}
      </h1>
      {objects.map((object, index) => (
        <div key={object.id}>
          <AddCardItem/>
          {objects.length > 1 && (
            <>
              <div className="flex items-center justify-center">
                <button onClick={() => deleteForm(object.id)} className="mt-8 rounded-lg min-w-[200px] max-w-[250px] py-3 text-base font-medium transition duration-200 dark:text-red-400 dark:hover:text-red-600 dark:active:bg-gray-200">
                  Supprimer un Objet
                </button>
              </div>
              <hr className="mb-1 h-1.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-200"/>
            </>
          )}
        </div>
      ))}

      <div className="flex items-center justify-center">
        <button onClick={toggleSecondForm} className="mt-6 rounded-lg min-w-[200px] max-w-[250px] py-3 text-base font-medium text-white transition duration-200  dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
          Ajouter un Objet
        </button>
      </div>
      <hr className="mb-4 h-1.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-200"/>
      <label className="font-semibold text-[13px] text-gray-600">Informations complémentaires</label>
      <textarea
        className="w-full p-3 pr-4 mt-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
        type="textarea"
        style={InputeStyles}
        placeholder="Ex : Le carton le plus long fait 2m15, Le plus lourd est un canapé"
      />
<div className="fixed bottom-4 right-1/2 transform translate-x-1/2">
<div className="flex justify-center w-70vw">
  <button className="min-w-[200px] max-w-[3000px] py-3 pr-20 pl-20 rounded-lg text-base font-medium transition duration-200 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-500">
    Suivant
    <KeyboardTabIcon className='ml-4'/>
  </button>
</div>
</div>




    </div>

  );
}

export default CardAdd;
