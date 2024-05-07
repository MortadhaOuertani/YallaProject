import React from "react";
import Card from "./Card";
import {tabs } from "../utils/DashboardData";

const Notifications = () => {
  return (
    <>
      <Card 
        name="Mes annonces" 
        buttonName="Ajouter une Annonces!"
        firstSelectOptions={[
          { value: "1", label: "Toutes mes annonces" },
          { value: "2", label: "En attente de paiement" },
          { value: "3", label: "En attente de disponibilités " },
          { value: "4", label: "En ligne" },
          { value: "5", label: "En cours de livraison" },
          { value: "6", label: "Livrées" },
          { value: "7", label: "Expirées" },
          { value: "7", label: "Refusées" },
        ]}
        Options2 = {[
          { value: "option1", label: "Les plus anciens" },
          { value: "option2", label: "Les plus récents" },
        ]}
        text="Voudrais-tu être celui qui brise ce silence en créant une annonce ?"
      />

    </>
  );
};

export default Notifications;
