import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo1.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { VscAccount } from "react-icons/vsc";

function Nnavbar({ toggleSidebar }) {
    const [translateDropdownOpen, setTranslateDropdownOpen] = useState(false);
    const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

    function createHandleMouseLeave(state, setState) {
        return () => {
          setTimeout(() => {
            console.log(state)
              setState(false);
          }, 200); // adjust the delay as needed
        };
      }
    return (
        <div className="w-full h-[70px] z-[99] top-0 left-0 fixed flex justify-between bg-white border border-gray-500">
            <div className='w-auto pl-10 gap-10 flex justify-center items-center h-full'>
                <div onClick={toggleSidebar} className='block  lg:hidden'>
                    <MenuIcon style={{ fontSize: 30 }} />
                </div>
                <img
                    src={logo}
                    className="w-[100px] h-auto"
                    alt=""
                />
            </div>
            <div className='w-auto h-full gap-7 pr-10 flex justify-center items-center'>
                <div className="relative">
                    <button onMouseEnter={() => setTranslateDropdownOpen(!translateDropdownOpen)} onMouseLeave={() =>setTimeout(() =>!translateDropdownOpen?setTranslateDropdownOpen(false):null, 200)}className="flex items-center space-x-1">
                        <TranslateOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {translateDropdownOpen && (
                        <ul onMouseEnter={() => setTranslateDropdownOpen(true)} className="absolute h-[450px] right-0 bg-white  w-[300px] top-[70px] flex flex-col bg-white border border-gray-200  shadow">
                            <li className='w-full flex   pl-5 items-center h-auto  '>
                            </li>
                            <div className=' flex flex-col pl-7 pt-7 gap-10 w-full h-auto'>
                                <li className='gap-3 flex'> <HelpOutlineOutlinedIcon /> Account Option 2</li>
                                <li className='gap-3 flex'>  <HelpOutlineOutlinedIcon />Account Option 3</li>
                            </div>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setSupportDropdownOpen(true)} onMouseLeave={() =>setTimeout(() =>!supportDropdownOpen?setSupportDropdownOpen(false):null, 200)} className="flex items-center space-x-1">
                        <SupportAgentOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {supportDropdownOpen && (
                        <ul onMouseEnter={() => setSupportDropdownOpen(true)}  className="absolute right-0 bg-white h-[450px] w-[300px] top-[70px] flex flex-col bg-white border border-gray-200  shadow">
                            <li className='w-full flex   pl-5 items-center h-auto  border-gray-600 '>
                            </li>
                            <div className=' flex flex-col pl-7 pt-7 gap-10 w-full h-auto'>
                                <li className='gap-3 flex'> <HelpOutlineOutlinedIcon /> Account Option 2</li>
                                <li className='gap-3 flex'>  <HelpOutlineOutlinedIcon />Account Option 3</li>
                            </div>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setSearchDropdownOpen(true)} onMouseLeave={() =>  setTimeout(() =>!searchDropdownOpen?setSearchDropdownOpen(false):null, 200)}  className="flex items-center space-x-1">
                        <SearchOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {searchDropdownOpen && (
                        <ul onMouseLeave={() =>  setSearchDropdownOpen(false)} className="absolute h-[450px] right-0 bg-white  w-[300px] top-[70px] flex flex-col bg-white border border-gray-200  shadow">
                            <li className='w-full flex   pl-5 items-center h-auto  '>
                            </li>
                            <div className=' flex flex-col pl-7 pt-7 gap-10 w-full h-auto'>
                                <li className='gap-3 flex'> <HelpOutlineOutlinedIcon /> Account Option 2</li>
                                <li className='gap-3 flex'>  <HelpOutlineOutlinedIcon />Account Option 3</li>
                            </div>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setHelpDropdownOpen(true)} onMouseLeave={() =>  setTimeout(() =>helpDropdownOpen==false?setHelpDropdownOpen(false):null, 200)} className="flex items-center space-x-1">
                        <HelpOutlineOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {helpDropdownOpen && (
                        <ul onMouseLeave={() =>  setAccountDropdownOpen(false)} className="ml-auto absolute h-[450px] right-0 bg-white  w-[300px] top-[70px] flex flex-col bg-white border border-gray-200  shadow">
                            <li className=' w-full flex   pl-5 items-center h-auto  '>
                            </li>
                            <div className=' flex flex-col pl-7 pt-7 gap-10 w-full h-auto'>
                                <li className='gap-3 flex'> <HelpOutlineOutlinedIcon /> Account Option 2</li>
                                <li className='gap-3 flex'>  <HelpOutlineOutlinedIcon />Account Option 3</li>
                            </div>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setAccountDropdownOpen(true)} onMouseLeave={() =>  setTimeout(() =>!accountDropdownOpen?setAccountDropdownOpen(false):null, 200)} className="flex relative  items-center space-x-1">
                        <VscAccount style={{ fontSize: 35 }} />
                    </button>
                    {accountDropdownOpen && (
                        <ul onMouseEnter={() => setAccountDropdownOpen(true)} onMouseLeave={() =>  setAccountDropdownOpen(false)} className="ml-auto absolute h-[450px] right-0 bg-white  w-[300px] top-[70px] flex flex-col bg-white border border-gray-200  shadow">
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
                                <li className='gap-3 flex'> <HelpOutlineOutlinedIcon /> Account Option 2</li>
                                <li className='gap-3 flex'>  <HelpOutlineOutlinedIcon />Account Option 3</li>
                            </div>
                            <div className='h-auto px-5 py-5  border-t border-gray-200 items-center flex justify-center mt-auto'>
                                <button className='py-[4%] bg-yellow-400 text-white px-[40%]  rounded'>Logout</button>
                            </div>
                        </ul>
                    )}
                </div>
                {/* Add similar code for the other icons */}
            </div>
        </div>
    );
}

export default Nnavbar;
