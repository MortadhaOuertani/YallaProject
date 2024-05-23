import React, { useState } from 'react';

function Inpute(props) {
  const [inputValue, setInputValue] = useState('');
  const [inputClass, setInputClass] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    // Check if the input has a value and set the background color accordingly
    setInputClass(event.target.value ? '' : 'invalid');
  };

  return (
    <input
      className={`w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow ${inputClass}`}
      placeholder={props.placeholder}
      type={props.type}
      onChange={handleChange}
      value={inputValue}
      required 
    />
  );
}

export default Inpute;
