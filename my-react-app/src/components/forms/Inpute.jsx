
function Inpute(props) {
  // Instead of using internal state, we rely on the parent to pass the value and onChange handler
  const { placeholder, type, value, onChange,name } = props;

  return (
    <input
      className={`w-full p-3 pr-4 mt-3 border rounded text-sm focus:outline-none focus:shadow-outline-yellow ${value ? '' : 'invalid'}`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      name={name}  // Ensure the name prop is passed
      value={value}  // Now the value comes from the parent component (MyForm)
      required 
    />
  );
}

export default Inpute;
