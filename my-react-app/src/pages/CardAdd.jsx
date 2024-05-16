import React , {useState} from 'react'
import ImageUploader from './ImageUploader';
import InputeStyles from '../utils/InputeStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Select from 'react-select';
import checkIcons from "../assets/checkIcons.png";
import clearIcons from "../assets/clearIcons.png";

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
const firstSelectOptions = [
  { value: "1", label: " -5Kg" },
  { value: "2", label: " 5 à 30 kg" },
  { value: "3", label: "30 à 50 kg" },
  { value: "4", label: "50 à 100 kg" },
  { value: "5", label: "+100 kg" },

];
function CardAdd(props) {
  

  const [showExactDimensions, setShowExactDimensions] = useState(false);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('../assets/checkIcons.png')`,
          color: '#fff', // Set icon color to white
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#ccc' : '#ccc',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#fbbf24' : '#fbbf24',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${<CheckIcon/>})`,
        color: '#fff', 
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#ccc' : '#ccc',
      borderRadius: 20 / 2,
    },
  }));

  return (
    
    <div className="container w-full lg:w-full lg:px-[20%] md:w-[70%] p-5 mt-10  ">
        <h1 className="font-semibold text-[30px]  text-gray-800">
          {props.name}
        </h1>
        <div className="relative mt-10 mb-4">
        {/* search */}
        <ImageUploader/>
      </div>


      <div className="flex mb-4">
        <div className="flex-grow  mr-2  w-20">
              <label className="font-semibold text-[13px]  text-gray-600">Quantité</label>
              <input 
                    aria-invalid="false" 
                    className="w-full p-3  pr-4 mt-3  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
                    min="0" id="items.0.qty" 
                    style={InputeStyles}
                    placeholder="1" 
                    type="number" 
                    name="items.0.qty"
              />
        </div>
        <div className="flex-grow w-80">
            <label className="font-semibold text-[13px]  text-gray-600">Objet</label>

            <input
            className="w-full p-3  pr-4 mt-3  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
            type="text"
            style={InputeStyles}
            placeholder="Ex : tableau ,Scotteur ,etc ....."        
            />
        </div>       
      </div>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked checked={showExactDimensions}
            onChange={() => setShowExactDimensions(!showExactDimensions)}/>}
        label="Je connais les dimensions exactes"
      />
      {showExactDimensions ? (
      <div className='flex mt-3'>
            <div className="flex-grow  mr-7  w-20">
                  <label className="font-semibold text-[13px]  text-gray-600">Longueur (cm)</label>
                  <input 
                        aria-invalid="false" 
                        className="w-full p-3  pr-4 mt-3  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
                        min="0" 
                        style={InputeStyles}
                        placeholder="1" 
                        type="number" 
                        name="items.0.qty"/>
            </div>
            <div className="flex-grow  mr-7  w-20">
                  <label className="font-semibold text-[13px]  text-gray-600">Largeur (cm)</label>
                  <input 
                        aria-invalid="false" 
                        className="w-full p-3  pr-4 mt-3  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
                        min="0" 
                        style={InputeStyles}
                        placeholder="1" 
                        type="number" 
                        name="items.0.qty"/>
            </div>
            <div className="flex-grow    w-20">
                  <label className="font-semibold text-[13px]  text-gray-600">Hauteur (cm)</label>
                  <input 
                        aria-invalid="false" 
                        className="w-full p-3  pr-4 mt-3  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
                        min="0"
                        style={InputeStyles}
                        placeholder="1" 
                        type="number" 
                        name="items.0.qty"
                  />
            </div>
      </div>
  ) : (
      <div className="flex-grow mt-3 ">
          <label className="font-semibold text-[13px] text-gray-600">Format</label>

          <Select
            className="flex-grow w-full mr-2 mt-3 text-sm  border border-gray-200 py  rounded bg-color  "
            options={firstSelectOptions}
            styles={InputeStyles}

          />
      </div>
 )}
      <div className="flex-grow mt-7 ">
          <label className="font-semibold text-[13px] text-gray-600">Poids</label>

          <Select
            className="flex-grow w-full mr-2 mt-3 text-sm  border border-gray-200 py  rounded bg-color  "
            options={firstSelectOptions}
            styles={InputeStyles}

          />
      </div>
    </div>
  )
}

export default CardAdd