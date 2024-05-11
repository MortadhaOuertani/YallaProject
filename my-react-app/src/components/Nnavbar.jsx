import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo1.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { VscAccount } from "react-icons/vsc";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from 'react-router-dom';
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { AiOutlineMessage } from "react-icons/ai";


function Nnavbar({ setTranslateDropdownOpen, setOpenPorfileDropdown, toggleSidebar, openPorfileDropdownRef }) {
    const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [colisDropDownOpen, setColisDropDownOpen] = useState(false);
    const timeoutRef = useRef(null);
    const profileRef = useRef(null);
    const accountRef = useRef(null);

    const colisRef = useRef(null)
    function handleDropdownMouseLeave(setState, useRef) {
        useRef.current = setTimeout(() => {
            setState(false);
        }, 100);
    }
    function handleMouseEnter(setState, useRef) {
        clearTimeout(useRef.current);
        setState(true);
console.log( "teste")
    }

    return (
        <div className="w-full h-16 z-[99] top-0 left-0 fixed flex justify-between items-center bg-white border ">
            <div className='w-auto pl-10 gap-10 flex justify-center items-center h-full '>
                <div onClick={toggleSidebar} className='block  lg:hidden'>
                    <MenuIcon style={{ fontSize: 30 }} />
                </div>
                <img
                    src={logo}
                    className="w-[100px] h-auto"
                    alt=""
                />
            </div>
            <div className='w-auto  flex justify-center items-center h-full lg:block hidden'>
                <p
                    className="w-full pt-1 mr-5 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none"
                >
                    <div className=" ml-40  relative max-w-xs mr-20">
                        <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                            <span className="justify-center items-center flex">
                                <span className="justify-center items-center flex">
                                    <span className="items-center justify-center flex">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            viewbox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <span>
                            <input
                                placeholder="Chercher Un "
                                type="search"
                                className="border border-gray-300 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"
                            />
                            <span
                                onMouseEnter={() => handleMouseEnter(setColisDropDownOpen, colisRef)} onMouseLeave={() => handleDropdownMouseLeave(setColisDropDownOpen, colisRef)}
                                className="cursor-pointer absolute right-0 h-full rounded-lg w-20"
                            >
                                <div className="h-full flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-between border-l-2 px-2 h-full border-gray-300">
                                        <span className="px-1">Colis</span>
                                        <KeyboardArrowDownRoundedIcon />
                                    </div>
                                </div>
                            </span>
                        </span>
                    </div>
                </p>
                {colisDropDownOpen && (
                    <div
                        onMouseEnter={() => handleMouseEnter(setColisDropDownOpen, colisRef)} onMouseLeave={() => handleDropdownMouseLeave(setColisDropDownOpen, colisRef)}
                        className="absolute h-auto right-0 bg-white  w-[300px] top-[70px] flex flex-col bg-white border border-gray-200  shadow"
                    >
                        <div
                            className="bg-white border shadow-md w-50 h-28 fixed z-60 top-16 right-[45%] rounded-lg"
                        >
                            <div className="flex flex-col justify-center items-center gap-4 p-3 h-full">
                                <Link
                                    to=""
                                    className="flex items-center justify-start w-full gap-4 px-4"
                                >
                                    <Inventory2OutlinedIcon />
                                    <span>Colis</span>
                                </Link>
                                <Link
                                    to=""
                                    className="flex items-center justify-start w-full gap-4 px-4"
                                >
                                    <LocalShippingOutlinedIcon />
                                    <span>Transporteur</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='lg:gap-4 sm:p-5  gap-2 h-12 flex justify-center items-center'>

                <div className="relative">
                    <button onMouseEnter={() => handleMouseEnter(setTranslateDropdownOpen, timeoutRef)} onMouseLeave={() => handleDropdownMouseLeave(setTranslateDropdownOpen, timeoutRef)} className="flex items-center space-x-1">
                        <TranslateOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                </div>
                <div className="relative" >
                    <button className="flex items-center space-x-1">
                        <SupportAgentOutlinedIcon style={{ fontSize: 35 }} />
                    </button>

                </div>
                <div className="relative lg:block hidden">
                    <button onMouseEnter={() => setSearchDropdownOpen(true)} onMouseLeave={() => setTimeout(() => !searchDropdownOpen ? setSearchDropdownOpen(false) : null, 200)} className="flex items-center space-x-1">
                        <AiOutlineMessage style={{ fontSize: 35 }} />
                    </button>

                </div>
                <div className="relative">
                    <button className="flex items-center space-x-1">
                        <HelpOutlineOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                </div>
                <div className="relative">
                    <button
                        onMouseEnter={() => handleMouseEnter(setOpenPorfileDropdown, openPorfileDropdownRef)}
                        onMouseLeave={() => handleDropdownMouseLeave(setOpenPorfileDropdown, openPorfileDropdownRef)}
                        className="flex relative  items-center space-x-1">
                        <VscAccount style={{ fontSize: 35 }} />
                    </button>

                </div>
                {/* Add similar code for the other icons */}
            </div>
        </div>
    );
}

export default Nnavbar;
