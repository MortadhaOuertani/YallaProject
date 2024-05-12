import React from 'react'
import Card from './Card'
function RouteListe() {
  return (
   <>
   <Card 
        name="Mes trajets" 
        buttonName="Ajouter un trajet!"
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
        text="Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !"
      />
   </>


  )
}

export default RouteListe