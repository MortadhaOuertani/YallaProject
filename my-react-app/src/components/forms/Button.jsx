
function Button(props) {
  return (
    <button
      className=" btn   rounded-lg  shadow-none border-none min-w-[200px]  bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200"
      onClick={props.handleClick}
    >
      {props.buttonName} {props.icons}
    </button>
  );
}

export default Button;
