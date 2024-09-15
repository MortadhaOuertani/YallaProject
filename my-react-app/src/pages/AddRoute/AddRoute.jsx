import {useState}from "react";
import Inpute from "../../components/forms/Inpute";
import Radio from '@mui/material/Radio';
import Button from "../../components/forms/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import AllerRetourCheckbox from "./AllerRetourCheckbox";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddRoute = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedValue2, setSelectedValue2] = useState("c");
  const [showInput, setShowInput] = useState(false); // State to track input visibility
  const [isAllerRetourChecked, setIsAllerRetourChecked] = useState(false);

    const handleAllerRetourChange = (event) => {
        setIsAllerRetourChecked(event.target.checked);
    };
  // Toggle input visibility when the checkbox is checked/unchecked
  const handleCheckboxChange = () => {
    setShowInput(!showInput);
  };
  const [etapes, setEtapes] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const addEtape = () => {
    setEtapes([...etapes, {}]); // Add a new step
  };

  const deleteEtapes = (index) => {
    setEtapes(etapes.filter((etape, i) => i !== index)); // Remove the step at the given index
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  const controlProps2 = (item) => ({
    checked: selectedValue2 === item,
    onChange: handleChange2,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const PrettoSlider = styled(Slider)({
    color:'#fac53f',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 50,
      height: 50,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#fbbf24',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  

  return (
    <div className="container w-full lg:w-full lg:px-[20%] md:w-[70%] p-5 mt-10">
      <h1 className="font-semibold text-[30px] text-gray-800">Votre itinéraire</h1>


      <div>
        <div className="flex items-center justify-between mt-5">
          <div className="font-semibold text-[15px] text-gray-600 ml-3">Je recherche des livraisons</div>
          <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" />
        </div>

        <div className="mt-5">
          <Radio {...controlProps('a')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400 mr-4">Sur mon trajet</label>
          <Radio {...controlProps('b')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400">Autour de moi</label>
        </div>

        {selectedValue ==='b' ?(
          <>
            <div className="mt-4 ml-3">
                <label className="font-semibold text-[13px] mb-3 text-gray-500">Adresse</label>
                <Inpute placeholder="Exp: 13 rue de Rilover , 70021 Paris" type="text" />
            </div>
            <div className="mt-4 ml-3" >
            <label className="font-semibold text-[13px] text-gray-500">Rayon d'action</label>
          
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              max={300}
              defaultValue={20}
              valueLabelFormat={value => `${value} km`}
            />
            </div>
          </>
        ):(
          <>
          <div  className="mt-4 ml-3">
            <label className="font-semibold text-[13px] mb-3 text-gray-500">Ville de départ</label>
            <Inpute  placeholder="Exp: 13 rue de Rilover , 70021 Paris" type="text" />
            {etapes.map((etape, index) => (
            <div key={index} className="flex items-center">
              <Inpute  placeholder="Exp: Etape 1" type="text" />
              <IconButton aria-label="delete" onClick={() => deleteEtapes(index)} disableRipple>
                <DeleteIcon className="mt-2" sx={{ color: 'red' }} />
              </IconButton>
            </div>
            ))}

          </div>

            <div className="mt-4 ml-3">
              <label className="font-semibold text-[13px] mb-3 text-gray-500">Ville d'arrivée</label>
              <Inpute  placeholder="Exp: 13 rue de Rilover , 70021 Marsielle" type="text" />
            </div>

            <div className="flex flex-col items-end mt-5">
              <Button buttonName="Ajouter une étape" handleClick={addEtape} />
            </div>

          </>
        )}
       
      </div>

      <div>
        <div className="flex items-center justify-between mt-5">
          <div className="font-semibold text-[15px] text-gray-600 ml-3">D'un montant minimum</div>
          <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
        </div>
        <div className="mt-4 ml-3 mb-3">
                <label className="font-semibold text-[13px] mb-3 text-gray-500">Prix minimum accepté</label>
                <Inpute placeholder="Exp: 60$" type="text" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mt-5">
            <div className="font-semibold text-[15px] text-gray-600 ml-3">Fréquence</div>
            <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
        </div>
        <div className="mt-5">
          <Radio {...controlProps2('c')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400 mr-4">Je fais le trajet une fois</label>
          <Radio {...controlProps2('d')} sx={{ color:'#E9E9EA', '&.Mui-checked': { color:'#fbbf24', }, }} />
          <label className="font-semibold text-[13px] mb-3 text-gray-400">Je fais le trajet régulièrement</label>
        </div>
      </div>

      {(selectedValue === 'b' || selectedValue === 'a') && selectedValue2 === 'c' ?(
      <div>
        <div className="flex items-center justify-between mt-5">
            <div className="font-semibold text-[15px] text-gray-600 ml-3">Date</div>
            <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
        </div>
        <div className="mt-4 ml-3 mb-3">
                <label className="font-semibold text-[13px] mb-3 text-gray-500">Date du trajet aller</label>
                <Inpute placeholder="Exp: 60$" type="date" />
        </div>
        {selectedValue ==='a' && selectedValue2 ==='c'?(
          <>
           <Checkbox
              {...label}
              onChange={handleCheckboxChange}
              sx={{
                color: '#d8d8d8',
                '&.Mui-checked': {
                  color: '#fbbf24',
                },
              }}
            /><label className="font-semibold text-[13px] mb-3 text-gray-500">Aller-retour</label>
          </>
        ):(null)}
        
        <div>
        {showInput && (
          <div className="mt-4 ml-3 mb-3">
            <label className="font-semibold text-[13px] mb-3 text-gray-500">Date du trajet retour
            </label>
            <Inpute placeholder="Exp: 60$" type="date" />
          </div> 
        )}
        </div>
      </div>

      ):null}

{selectedValue === 'a'  && selectedValue2 === 'd' ?(
  <>
    <div className="flex items-center justify-between mt-5">
            <div className="font-semibold text-[15px] text-gray-600 ml-3">Date</div>
            <div className="flex-1  border-b border-gray-200  rounded-[3px] dark:border-gray-200 ml-4" style={{ height: '5px' }}/>
    </div>
    <Checkbox
          {...label}
          sx={{
            color: '#d8d8d8',
            '&.Mui-checked': {
              color: '#fbbf24',
            },

          }}
          onChange={handleAllerRetourChange}

    /><label className="font-semibold text-[13px] mb-5 text-gray-500">Aller-retour</label>
    <AllerRetourCheckbox name ="Aller le(s)"/>
    {isAllerRetourChecked && <AllerRetourCheckbox name="Retour le(s)" />}

  </>
):null}
      <div className="flex flex-col items-center mt-5">
              <Button buttonName="Valider" handleClick={addEtape} />
      </div>
    </div>
  );
};

export default AddRoute;
