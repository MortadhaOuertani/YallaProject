import React , {useState} from 'react'
import ImageUploader from './ImageUploader';


function CardAdd(props) {
    const [quantity, setQuantity] = useState(0); 


  return (
    <div className="container w-full xl:w-[70%] md:w-[70%] p-5 mt-10  ">
        <h1 className="font-semibold text-[30px]  text-gray-800">
          {props.name}
        </h1>
        <div className="relative mt-10 mb-4">
        {/* search */}
        <ImageUploader/>
      </div>


      <div className="flex mb-4">
      <div className="flex-grow  mr-2  w-30">
            <label className="font-semibold text-[15px]   text-gray-600">Quantité</label>

            <input
            className="w-full p-3 pr-4 mt-3 border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
            type="text"
            placeholder="Ex : tableau ,Scotteur ,etc ....."        
            />
        </div>
        <div className="flex-grow w-70">
            <label className="font-semibold text-[15px]   text-gray-600">Objet</label>

            <input
            className="w-full p-3  pr-4 mt-3  border  rounded text-sm focus:outline-none  focus:shadow-outline-yellow"
            type="text"
            placeholder="Ex : tableau ,Scotteur ,etc ....."        
            />
        </div>       
      </div>
    </div>
  )
}

export default CardAdd