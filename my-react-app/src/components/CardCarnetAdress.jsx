import React from 'react'
import TrashIcon from './TrashIcon';

const CardCarnetAdress = ({ name, address, city }) => {
    return (
        <div className="mb-4 border rounded-lg p-5">
            <h3 className="font-bold text-lg">{name}</h3>
            <p>{address}</p>
            <p>{city}</p>
            <div className="flex justify-end gap-2">
                <button className="btn btn-red btn-outline btn-sm">
                    <TrashIcon className="w-4 h-4 mr-2" />
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default CardCarnetAdress