import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import CreditCardIcon from "../components/CreditCardIcon";
import WalletCardsIcon from "../components/WalletCardsIcon";
import RadioButton from "../components/RadioButton";

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
                icon={<CreditCardIcon />}
                value="card"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
              <RadioButton
                label="Portefeuille"
                icon={<WalletCardsIcon />}
                value="wallet"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </div>
          </div>
          <div className="col-span-2">
            {selectedValue === "card" && (
              <form className="grid gap-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Titulaire du compte"
                  className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                />
                <input
                  type="text"
                  id="iban"
                  placeholder="IBAN"
                  className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Adresse"
                  className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                />
                <input
                  type="text"
                  id="address-complement"
                  placeholder="Complément d'adresse"
                  className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="postal-code"
                    placeholder="Code postal"
                    className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                  />
                  <input
                    type="text"
                    id="city"
                    placeholder="Ville"
                    className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                  />
                </div>
                <button className="btn btn-warning text-white w-full" type="submit">
                  Ajouter
                </button>
              </form>
            )}
            {selectedValue === "wallet" && (
              <form className="grid gap-4">
                <input
                  type="text"
                  id="wallet-name"
                  placeholder="Nom du portefeuille"
                  className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                />
                <input
                  type="text"
                  id="wallet-id"
                  placeholder="ID du portefeuille"
                  className="input focus:outline-none focus:border-yellow-500 focus:ring-0"
                />
                <button className="btn btn-warning text-white w-full" type="submit">
                  Ajouter
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payments;
