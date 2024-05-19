import React, { useState } from 'react';

function Inpute(props) {
  const [inputValue, setInputValue] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    // Check if the input has a value and set the background color accordingly
    setBgColor(event.target.value ? '#f7f6f6' : '#fff');
  };

  return (
    <input
      className="w-full p-3 pr-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
      placeholder={props.placeholder}
      type={props.type}
      onChange={handleChange}
      value={inputValue}
      style={{ backgroundColor: bgColor ,fontSize: '15px',}}
    />
  );
}

export default Inpute;
