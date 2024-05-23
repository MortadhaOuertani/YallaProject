import React from 'react'
import Money from "../../assets/money.png"
import Inpute from "../../components/forms/Inpute";

function Step4() {
  return (
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
        <span >Assurance (jusqu'à 150€)</span>
        <span className="font-semibold text-yellow-500">offerte</span>
      </div>
      <div className="flex justify-between font-semibold border-t pt-2 mt-2">
        <span>Prix total TTC</span>
        <span className="text-yellow-500">68.00 €</span>
      </div>
    </div>
  </div>  )
}

export default Step4