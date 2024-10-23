import { useState } from 'react';
import ImageUploader from '../../components/forms/ImageUploader';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from 'react-select';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import InputeStyles from '../../utils/InputeStyles';
import Button from '../../components/forms/Button';
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

const firstSelectOptions = [
  { value: "-5Kg", label: "-5Kg" },
  { value: "5 à 30 kg", label: "5 à 30 kg" },
  { value: "30 à 50 kg", label: "30 à 50 kg" },
  { value: "50 à 100 kg", label: "50 à 100 kg" },
  { value: "+100 kg", label: "+100 kg" },
];

function AddCardItem({ handleNextSteps }) {
  const [showExactDimensions, setShowExactDimensions] = useState(false);
  const [objects, setObjects] = useState([{ id: 1 }]);
  const [cardFormData, setCardFormData] = useState([
    {
      id: 1,
      image: "",
      qty: 1,
      objet: "",
      showExactDimensions: false,
      dimensions: { length: "", width: "", height: "" },
      format: "",
      poids: "",
      information: "",
    },
  ]);

  // Ensure to log form data when submitting
  const handleSubmit = () => {
    handleNextSteps(cardFormData); // Move to the next step
  };

  // Handler for updating cardFormData
  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...cardFormData];
    updatedFormData[index][field] = value;
    setCardFormData(updatedFormData);
  };

  // Handler for dimensions (nested fields)
  const handleDimensionChange = (index, dimensionField, value) => {
    const updatedFormData = [...cardFormData];
    updatedFormData[index].dimensions[dimensionField] = value;
    setCardFormData(updatedFormData);
  };

  const deleteForm = (id) => {
    setObjects(objects.filter((object) => object.id !== id));
    setCardFormData(cardFormData.filter((data) => data.id !== id));
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
    const newId = objects.length + 1;
    setObjects([...objects, { id: newId }]);
    setCardFormData([...cardFormData, {
      id: newId,
      image: "",
      qty: 1,
      objet: "",
      showExactDimensions: false,
      dimensions: { length: "", width: "", height: "" },
      format: "",
      poids: "",
    }]);
  };

  return (
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
                min="0"
                id={`items.${index}.qty`}
                style={InputeStyles}
                placeholder="1"
                type="number"
                value={cardFormData[index].qty}
                onChange={(e) => handleInputChange(index, "qty", e.target.value)}
              />
            </div>
            <div className="flex-grow w-80">
              <label className="font-semibold text-[13px] text-gray-600">Objet</label>
              <input
                className="w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                type="text"
                style={InputeStyles}
                placeholder="Ex : tableau ,Scotteur ,etc ....."
                value={cardFormData[index].objet}
                onChange={(e) => handleInputChange(index, "objet", e.target.value)}
              />
            </div>
          </div>

          <FormControlLabel
            control={<SwitchOnOf sx={{ m: 1 }} checked={cardFormData[index].showExactDimensions} />}
            onChange={() => handleInputChange(index, "showExactDimensions", !cardFormData[index].showExactDimensions)}
            label="Je connais les dimensions exactes"
          />

          {cardFormData[index].showExactDimensions ? (
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
                  value={cardFormData[index].dimensions.length}
                  onChange={(e) => handleDimensionChange(index, "length", e.target.value)}
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
                  value={cardFormData[index].dimensions.width}
                  onChange={(e) => handleDimensionChange(index, "width", e.target.value)}
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
                  value={cardFormData[index].dimensions.height}
                  onChange={(e) => handleDimensionChange(index, "height", e.target.value)}
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
                value={firstSelectOptions.find(option => option.value === cardFormData[index].format)}
                onChange={(option) => handleInputChange(index, "format", option.value)}
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
              value={firstSelectOptions.find(option => option.value === cardFormData[index].poids)}
              onChange={(option) => handleInputChange(index, "poids", option.value)}
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
      <label className="font-semibold text-[13px] text-gray-600">Informations complémentaires</label>
      <textarea
        className="w-full p-3 pr-4 mt-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
        type="textarea"
        style={InputeStyles}
        placeholder="Ex : Le carton le plus long fait 2m15, Le plus lourd est un canapé"
        value={cardFormData[0].information}  // Access the information from the first item
        onChange={(e) => handleInputChange(0, "information", e.target.value)}  // Pass the value directly
      />


      <div className="mt-4 mb-5">
        <div className="flex justify-between w-full">
          <Button
            buttonName="Suivant"
            icons={<KeyboardTabIcon className="ml-4" />}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCardItem;
