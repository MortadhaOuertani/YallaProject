import React from 'react';

const SmallCardLayout = ({ sign, Icon, text, title, textColor, textSize, firstElement }) => {
  return (
    <div className="flex flex-col items-center justify-center  p-2 h-full w-auto rounded-lg bg-white border ">

      <div className="text-center flex items-center  justify-between">
        <p
          className="text-gray-900 whitespace-nowrap min-w-[175px] max-w-[175px]
           text-[15px]
            text-center flex-1 overflow-hidden"
        >
          {text}
        </p>
        <h3 className="leading-none text-yellow-400">
          {Icon && (
            <Icon
              sx={{
                color: textColor ? "" : "",
              }}
            />
          )}
        </h3>
      </div>
      <div className='text-[40px] text-center font-semibold leading-none '>
        <span
          className={` ${textColor ? "text-yellow-400" : "text-yellow-400"
            }  ${firstElement} ${sign ? "ml-5" : null}  `}
          style={{ flex: 'none' }}
        >
          {title}
        </span>
        <span className='text-yellow-400  text-[21px] '>{sign}</span>
      </div>
    </div >

  );
};

export default SmallCardLayout;
