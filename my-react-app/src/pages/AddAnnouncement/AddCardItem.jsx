import React, { useState } from 'react';
import ImageUploader from '../../components/forms/ImageUploader';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from 'react-select';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import InputeStyles from '../../utils/InputeStyles';
import Button from '../../components/forms/Button';
const firstSelectOptions = [
  { value: "1", label: "-5Kg" },
  { value: "2", label: "5 à 30 kg" },
  { value: "3", label: "30 à 50 kg" },
  { value: "4", label: "50 à 100 kg" },
  { value: "5", label: "+100 kg" },
];

function AddCardItem() {
  const [showExactDimensions, setShowExactDimensions] = useState(false);
  const [objects, setObjects] = useState([{ id: 1 }]);

  
  const deleteForm = (id) => {
    setObjects(objects.filter((object) => object.id !== id));
  };

  const SwitchOnOf = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#fbbf24' : '#fbbf24',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  const toggleSecondForm = () => {
    setObjects([...objects, { id: objects.length + 1 }]);
  };

  return (
    <>
      <div>
        <h1 className="font-semibold text-[30px] text-gray-800">Quels objets envoyez-vous ?</h1>
        {objects.map((object, index) => (
          <div key={object.id}>
            <div className="relative mt-10 mb-4">
              <ImageUploader />
            </div>

            <div className="flex mb-4">
              <div className="flex-grow mr-2 w-20">
                <label className="font-semibold text-[13px] text-gray-600">Quantité</label>
                <input
                  className="w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                  min="0" id="items.0.qty"
                  style={InputeStyles}
                  placeholder="1"
                  type="number"
                  name="items.0.qty"
                />
              </div>
              <div className="flex-grow w-80">
                <label className="font-semibold text-[13px] text-gray-600">Objet</label>
                <input
                  className="w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                  type="text"
                  style={InputeStyles}
                  placeholder="Ex : tableau ,Scotteur ,etc ....."
                />
              </div>
            </div>

            <FormControlLabel
              control={<SwitchOnOf sx={{ m: 1 }} defaultChecked />}
              checked={showExactDimensions}
              onChange={() => setShowExactDimensions(!showExactDimensions)}
              label="Je connais les dimensions exactes"
            />

            {showExactDimensions ? (
              <div className='flex mt-3'>
                <div className="flex-grow mr-7 w-20">
                  <label className="font-semibold text-[13px] text-gray-600">Longueur (cm)</label>
                  <input
                    aria-invalid="false"
                    className="w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                    min="0"
                    style={InputeStyles}
                    placeholder="1"
                    type="number"
                    name="items.0.qty"
                  />
                </div>
                <div className="flex-grow mr-7 w-20">
                  <label className="font-semibold text-[13px] text-gray-600">Largeur (cm)</label>
                  <input
                    aria-invalid="false"
                    className="w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                    min="0"
                    style={InputeStyles}
                    placeholder="1"
                    type="number"
                    name="items.0.qty"
                  />
                </div>
                <div className="flex-grow w-20">
                  <label className="font-semibold text-[13px] text-gray-600">Hauteur (cm)</label>
                  <input
                    aria-invalid="false"
                    className="w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                    min="0"
                    style={InputeStyles}
                    placeholder="1"
                    type="number"
                    name="items.0.qty"
                  />
                </div>
              </div>
            ) : (
              <div className="flex-grow mt-3">
                <label className="font-semibold text-[13px] text-gray-600">Format</label>
                <Select
                  className="flex-grow w-full mr-2 mt-3 text-sm border border-gray-200 py rounded bg-color"
                  options={firstSelectOptions}
                  styles={InputeStyles}
                  isSearchable={false}
                />
              </div>
            )}
            <div className="flex-grow mt-7">
              <label className="font-semibold text-[13px] text-gray-600">Poids</label>
              <Select
                className="flex-grow w-full mr-2 mt-3 text-sm border border-gray-200 py rounded bg-color"
                options={firstSelectOptions}
                styles={InputeStyles}
                isSearchable={false}
              />
            </div>
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
 );
}

export default AddCardItem;