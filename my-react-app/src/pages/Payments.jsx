import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Icons from "../components/Icons/Icons";
import RadioButton from "../components/RadioButton";
import Button from "../components/forms/Button";
import Inpute from "../components/forms/Inpute";
const Payments = () => {
  const [selectedValue, setSelectedValue] = useState('card');

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <main className="flex justify-center w-full px-32 h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8">Ajouter un moyen de paiement</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border rounded-lg p-5">
          <div className="col-span-1">
            <div className="grid gap-4">
              <RadioButton
                label="Carte"
                icon={<Icons.CreditCardIcon />}
                value="card"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="Portefeuille"
                icon={<Icons.WalletCardsIcon />}
                value="wallet"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </div>
          </div>
          <div className="col-span-2">
            {selectedValue === "card" && (
              <form className="grid gap-4">
                <Inpute placeholder="Titulaire du compte" type="text"/>
              <Inpute placeholder="IBAN" type="text"/>
              <Inpute placeholder="Adresse" type="text"/>
              <Inpute placeholder="Complément d'adresse" type="text"/>

              <div className="grid grid-cols-2 gap-4">
                <Inpute placeholder="Code postal" type="text"/>
                <Inpute placeholder="Ville" type="text"/>
              </div>
              <div className="text-center ">
                 <Button buttonName="Ajoute"/>
              </div>
              </form>
            )}
            {selectedValue === "wallet" && (
              <form className="grid gap-4">
               
                <Inpute placeholder="Nom du portefeuille" type="text"/>
                <Inpute placeholder="ID du portefeuille" type="text"/>
                <div className="text-center ">
                 <Button buttonName="Ajoute"/>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payments;
