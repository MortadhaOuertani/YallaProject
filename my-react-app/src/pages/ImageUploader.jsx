import React, { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ClearIcon from '@mui/icons-material/Clear';
const ImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div >
      <label className="font-semibold text-[15px]   text-gray-600">
      Télécharger des photos
      </label>
      <div className="relative mt-3 pt-10 pb-10 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg p-4">
        <input
          type="file"
          multiple
          accept=".jpg, .png, .gif"
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex  items-center justify-center">
          <AddAPhotoIcon className='text-yellow-500'/>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          <span className="ml-2 text-gray-600">Ajouter photos</span>
        </div>
       
      </div>

      <div>
      <p className="text-xs text-gray-500 mt-2"> Jusqu’à 5 photos, format JPG, PNG et GIF, jusqu’à 3 Mo chacune .</p>
        <div className="mt-4 flex ">
        {selectedImages.map((imageUrl, index) => (
          <div
            key={index}
            className="flex items-center mr-5 p-2 rounded-md mt-2"
          >
                <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="w-16 h-16  bg-gray-100 rounded-md object-cover"
                />
           
            <ClearIcon
              onClick={() => removeImage(index)}
              className=" absolute mb-14 ml-16 cursor-pointer text-gray-500 hover:text-yellow-500"
              style={{ fontSize: "1.3rem" }}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
