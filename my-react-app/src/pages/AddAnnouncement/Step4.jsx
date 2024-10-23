import Money from "../../assets/money.png"
import Inpute from "../../components/forms/Inpute";
import Button from '../../components/forms/Button';
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
function Step4({handlePrevious}) {
  return (
    <>
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
        <span >Assurance (jusqu à 150€)</span>
        <span className="font-semibold text-yellow-500">offerte</span>
      </div>
      <div className="flex justify-between font-semibold border-t pt-2 mt-2">
        <span>Prix total TTC</span>
        <span className="text-yellow-500">68.00 €</span>
      </div>
    </div>
  </div> 
  <div className="mt-5 mb-5">
  <div className="flex justify-between w-full">
         <button
           className="btn rounded-lg shadow-none border-none min-w-[200px] bg-with py-3 text-base font-medium transition duration-200 hover:bg-gry-200 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-200 dark:active:bg-yellow-200"
           onClick={handlePrevious}
         >
           Précédent <KeyboardReturnIcon />
         </button>
         <Button
               buttonName="Submit"
               icons={<KeyboardTabIcon className="ml-4" />}
               type="submit"
         />
   </div>
</div>
</>
)
}

export default Step4