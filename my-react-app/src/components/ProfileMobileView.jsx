import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io";

const ProfileMobileView = (props) => {
    function handleDropdownMouseLeave(setState, useRef) {
        useRef.current = setTimeout(() => {
            setState(false);
        }, 100);
    }

    function handleTranslateMouseLeave() {
        props.TranslateRef.current = setTimeout(() => {
            props.setTranslateDropdownOpen(false);
        }, 200);
    }
    function handleTranslateMouseEnter() {
        console.log(props.TranslateRef.current)
        clearTimeout(props.TranslateRef.current);
        console.log(props.TranslateRef.current)
        props.setTranslateDropdownOpen(true);
    }

    function handleMouseEnter(setState, useRef) {
        console.log(useRef.current)
        clearTimeout(useRef.current);

        setState(true);
    }


    return (
        <>


            {props.openPorfileDropdown && (
                <div
                    onMouseEnter={() => handleMouseEnter(props.setOpenPorfileDropdown, props.openPorfileDropdownRef)}
                    onMouseLeave={() => handleDropdownMouseLeave(props.setOpenPorfileDropdown, props.openPorfileDropdownRef)}
                    className={`h-screen lg:w-[28rem] w-[19rem] absolute  lg:relative z-[29]  pt-[64px]  right-0`}>

                    <ul
                        className="ml-auto  h-full right-0 bg-white w-full top-[70px] flex flex-col bg-white border border-gray-200  shadow">
                        <li className='w-full border-b flex border-gray-500  py-5 pl-5 items-center h-auto  '>
                            <div className='  flex justify-center  flex-col gap-3'>
                                <p className='font-medium'>
                                    Mortadha Wartani
                                </p>
                                <p className='font-light'>
                                    mortadha500@gmail.com
                                </p>
                            </div>
                        </li>
                        <div className=' flex flex-col pl-7 pt-7 gap-10 w-full h-auto'>
                            <li className='gap-3 flex'>  Account Option 2</li>
                            <li className='gap-3 flex'>  Account Option 3</li>
                        </div>
                        <div className='h-auto px-5 py-5  border-t border-gray-200 items-center flex justify-center mt-auto'>
                            <button className='py-[4%] bg-yellow-400 text-white px-[40%]  rounded'>Logout</button>
                        </div>
                    </ul></div>)}

            {props.translateDropdownOpen && (
                <div
                    onMouseEnter={handleTranslateMouseEnter}
                    onMouseLeave={handleTranslateMouseLeave}
                    className={`h-screen lg:w-[28rem] w-[19rem] absolute  lg:relative z-[29]  pt-[64px]  right-0`}>


                    <ul
                        className="ml-auto  h-full right-0 bg-white w-full top-[70px] flex flex-col bg-white border border-gray-200  shadow">
                        <li className='w-full flex pl-5 items-center h-auto'></li>
                        <div className='flex flex-col pl-7 rounded py-7 gap-10 w-full h-auto'>
                            <li className='gap-3 flex'>Account Option 2</li>
                            <li className='gap-3 flex'>Account Option 3</li>
                        </div>
                    </ul></div>
            )}


        </>
    )
}

export default ProfileMobileView