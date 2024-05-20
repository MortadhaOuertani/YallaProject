import React , {useState} from 'react'
import ImageUploader from './ImageUploader';
import InputeStyles from '../utils/InputeStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from 'react-select';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const firstSelectOptions = [
    { value: "1", label: " -5Kg" },
    { value: "2", label: " 5 à 30 kg" },
    { value: "3", label: "30 à 50 kg" },
    { value: "4", label: "50 à 100 kg" },
    { value: "5", label: "+100 kg" },
  
  ];
function AddCardItem() {
    const [showExactDimensions, setShowExactDimensions] = useState(false);
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
    <>
        <div className="relative mt-10 mb-4">
          <ImageUploader/>
        </div>


        <div className="flex mb-4">
          <div className="flex-grow  mr-2  w-20">
                <label className="font-semibold text-[13px]  text-gray-600">Quantité</label>
                <input 
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
              control={<SwitchOnOf sx={{ m: 1 }} defaultChecked />}
              checked={showExactDimensions}
              onChange={() => setShowExactDimensions(!showExactDimensions)}
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
                       isSearchable={false}

                    />
                </div>
          )}
          <div className="flex-grow mt-7 ">
              <label className="font-semibold text-[13px] text-gray-600">Poids</label>

              <Select
                className="flex-grow w-full mr-2 mt-3 text-sm  border border-gray-200 py  rounded bg-color  "
                options={firstSelectOptions}
                styles={InputeStyles}
                 isSearchable={false}

              />
          </div> 
    </>
 )
}

export default AddCardItem