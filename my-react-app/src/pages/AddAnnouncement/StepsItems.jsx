import  { useState } from "react";
import Inpute from "../../components/forms/Inpute";
import Select from 'react-select';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputeStyles from "../../utils/InputeStyles";

const Options1 = [
    { value: "1", label: " Au pied du véhicule  " },
    { value: "2", label: " Manutention - 1 personne (29€)  " },
    { value: "3", label: "Manutention - 2 personne (59€)  " },
   
  
  ];
  const Options2 = [
    { value: "1", label: " RDC" },
    { value: "2", label: " 1ere" },
    { value: "3", label: "2ème" },
    { value: "4", label: "3ème" },
  
  ];
  const Option3 = [
    { value: "1", label: "Avec ascenseur" },
    { value: "2", label: " Sans ascenseur" },
  
  ];
function StepsItems(props) {

    const [selectedOption1, setSelectedOption1] = useState(null);
    const [showExactDimensions, setShowExactDimensions] = useState(false);
  
    const handleSelectChange1 = (selectedOption) => {
      setSelectedOption1(selectedOption);
    };
  
    const SwitchOnOf = styled((props) => (
      <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
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
            backgroundColor: theme.palette.mode === 'dark' ? '#fbbf24' :'#fbbf24',
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
  return (
    <div >
    <h1 className="font-semibold text-[30px] text-gray-800 mb-5">{props.name}</h1>

    <div className="mb-4">
    <label className="font-semibold text-[13px] mb-3 text-gray-600">Adresse</label>
    <Inpute  placeholder="Exp: 13 rue de Rilover , 70021 Paris" type="tel" />
    </div>
    
    <label className="font-semibold text-[13px]  text-gray-600">Type d enlèvement</label>
    <Select
      className="flex-grow w-full mr-2 mt-3 text-sm  border border-gray-200 py  rounded bg-color  "
      options={Options1}
      styles={InputeStyles}
      isSearchable={false}
      onChange={handleSelectChange1}
    />
    {selectedOption1 && selectedOption1.value !== '1' && (
    <div className="flex mt-4">

      <div className="w-1/2 mr-3">
      <label className="font-semibold text-[13px]  text-gray-600">Étage</label>
      <Select
        className="flex-grow w-full mr-2 mt-3 text-sm  border border-gray-200 py  rounded bg-color  "
        options={Options2}
        styles={InputeStyles}
        isSearchable={false}

      />
      </div>
      <div className="w-1/2">
      <label className="font-semibold text-[13px]  text-gray-600">Accès</label>
      <Select
        className="flex-grow w-full mr-2 mt-3 text-sm  border border-gray-200 py  rounded bg-color  "
        options={Option3}
        styles={InputeStyles}
        isSearchable={false}

      />
      </div>
    
   
    </div>
    )}
      <FormControlLabel
        control={<SwitchOnOf sx={{ m: 1 }} defaultChecked />}
        checked={showExactDimensions}
        onChange={() => setShowExactDimensions(!showExactDimensions)}
        label="J'ai les coordonnées de l'expéditeur"            
      />

{showExactDimensions ? (
<>
      <div className="flex mb-4">
      <div className="w-1/2 mr-3">
      <label className="font-semibold text-[13px]  text-gray-600">Prénom</label>
      <Inpute  placeholder="Exp: Saber" type="tel" />

      </div>
      <div className="w-1/2">
      <label className="font-semibold text-[13px]  text-gray-600">Nom</label>
      <Inpute  placeholder="Exp: Mgannem" type="tel" />
      </div>

      </div>
      
    <div className="mb-4">
    <label className="font-semibold text-[13px] mb-3 text-gray-600">Numéro de téléphone</label>
    <Inpute  placeholder="Exp: 13 rue de Rilover , 70021 Paris" type="tel" />
    </div>
    <label className="font-semibold text-[13px] text-gray-600">
    Instructions d enlèvement
    </label>
    <textarea
      className="w-full p-3 pr-4 mt-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
      type="textarea"
      style={InputeStyles}
      placeholder="Ex : Rue étroite, stationnement complique , appelez quand vous arrivez"
    />
          <p className="text-xs text-gray-500 mt-2">Ces informations sont privées et ne seront partagées avec le transporteur qu après réservation.</p>

</>
) : (
<></>
)}
 </div>  )
}

export default StepsItems