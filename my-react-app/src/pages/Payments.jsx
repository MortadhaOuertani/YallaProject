import React from "react";
import "tailwindcss/tailwind.css";

const Payments = () => {
  return (
    <main className="flex justify-center w-full px-32 h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl w-full p-8 ">
        <h1 className="text-3xl font-bold mb-8">
          Ajouter un moyen de paiement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border rounded-lg  p-5">
          <div className="col-span-1">
            <div className="grid gap-4">
              <RadioButton
                label="Carte"
                icon={<CreditCardIcon />}
                value="card"
              />
              <RadioButton
                label="Portefeuille"
                icon={<WalletCardsIcon />}
                value="wallet"
              />
            </div>
          </div>
          <div className="col-span-2">
            <form className="grid gap-4">
              <input
                type="text"
                id="name"
                placeholder="Titulaire du compte"
                className="input"
              />
              <input
                type="text"
                id="iban"
                placeholder="IBAN"
                className="input"
              />
              <input
                type="text"
                id="address"
                placeholder="Adresse"
                className="input"
              />
              <input
                type="text"
                id="address-complement"
                placeholder="Complément d'adresse"
                className="input"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  id="postal-code"
                  placeholder="Code postal"
                  className="input"
                />
                <input
                  type="text"
                  id="city"
                  placeholder="Ville"
                  className="input"
                />
              </div>
              <button className="btn btn-warning w-full" type="submit">
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

function RadioButton({ label, icon, value }) {
  return (
    <label className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-100 hover:text-gray-900">
      {icon}
      {label}
      <input
        type="radio"
        className="peer sr-only"
        id={value}
        name="paymentMethod"
        value={value}
      />
    </label>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}

export default Payments;
