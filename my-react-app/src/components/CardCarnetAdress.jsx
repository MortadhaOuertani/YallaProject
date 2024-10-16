import Icons from './Icons/Icons';
import { deleteData } from '../components/apiAndFunction/apiService';
import { API_ENDPOINTS } from '../components/apiAndFunction/apiEndpoints';

const CardCarnetAdress = ({ id, name, address, city }) => {
    // Handle the delete button click
    const handleDelete = async () => {
        try {
            // Call the API to delete the data using the ID
            await deleteData(`${API_ENDPOINTS.DELETE_ADDRESS}/${id}`);
            con
        } catch (error) {
            console.error('Error deleting the address:', error);
        }
    };

    return (
        <div className="mb-4 border rounded-lg p-5">
            <h3 className="font-bold text-lg">{name}</h3>
            <p>{address}</p>
            <p>{city}</p>
            <div className="flex justify-end gap-2">
                <button
                    className="text-black hover:bg-red-500 hover:text-white border border-black btn btn-sm"
                    onClick={handleDelete} // Attach the delete function
                >
                    <Icons.TrashIcon className="w-4 h-4 mr-2" />
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default CardCarnetAdress;
