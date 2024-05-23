import React, { useState } from "react";
import Card from "./Card";
const MesLivraisons = () => {


  return (
    <>
      <Card 
        name="Mes livraisons" 
        buttonName="Chercher un colis!"
        firstSelectOptions={[
          { value: "1", label: "Toutes mes annonces" },
          { value: "2", label: "En attente de paiement" },
          { value: "3", label: "En attente de disponibilités " },
          { value: "4", label: "En ligne" },
          { value: "5", label: "En cours de livraison" },
          { value: "6", label: "Livrées" },
          { value: "7", label: "Expirées" },
          { value: "8", label: "Refusées" },
        ]}
        Options2 = {[
          { value: "option1", label: "Les plus anciens" },
          { value: "option2", label: "Les plus récents" },
        ]}
        text="Oups, tu n'as pas encore de livraison. allons chercher une ?"
      />

    </>
  );
};

export default MesLivraisons;
