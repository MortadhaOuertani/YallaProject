import React from "react";

function Accordion({ title, content, idx, isOpen, handleClick }) {
  return (
    <li className="bg-white my-2  border rounded-lg">
      <h2
        onClick={() => handleClick(idx)}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-yellow-500 h-6 w-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-2 border-yellow-500 overflow-hidden max-h-0 duration-300 transition-all ${
          isOpen ? "max-h-screen" : ""
        }`}
      >
        <p className="p-3 text-gray-900">{content}</p>
      </div>
    </li>
  );
}

function App() {
  const [accordion, setAccordion] = React.useState(
    Array.from({ length: 5 }, () => ({ isOpen: false }))
  );

  const handleClick = (idx) => {
    setAccordion((prevState) =>
      prevState.map((item, index) => ({
        ...item,
        isOpen: index === idx ? !item.isOpen : false,
      }))
    );
  };

  return (
    <body className="h-screen bg-white w-full">
      <main className="p-5 bg-light-blue">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-1/2 my-1">
            <h2 className="text-xl font-semibold text-vnet-blue mb-2">
              FAQ - Order, Shipping, Etc.
            </h2>
            <ul className="flex flex-col mt-10">
              <Accordion
                title="When will my order arrive? 1"
                content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation"
                idx={0}
                isOpen={accordion[0].isOpen}
                handleClick={handleClick}
              />
              <Accordion
                title="When will my order arrive? 2"
                content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation"
                idx={1}
                isOpen={accordion[1].isOpen}
                handleClick={handleClick}
              />
              <Accordion
                title="When will my order arrive? 3"
                content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation"
                idx={2}
                isOpen={accordion[2].isOpen}
                handleClick={handleClick}
              />
              <Accordion
                title="When will my order arrive? 4"
                content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation"
                idx={3}
                isOpen={accordion[3].isOpen}
                handleClick={handleClick}
              />
              <Accordion
                title="When will my order arrive? 5"
                content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation"
                idx={4}
                isOpen={accordion[4].isOpen}
                handleClick={handleClick}
              />
            </ul>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
