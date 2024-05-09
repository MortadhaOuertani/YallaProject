import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo1.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

function Nnavbar({toggleSidebar}) {
    const [translateDropdownOpen, setTranslateDropdownOpen] = useState(false);
    const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

    return (
        <div className="w-full h-[70px] z-[99] top-0 left-0 fixed flex justify-between bg-white border border-gray-500">
            <div className='w-auto pl-10 gap-10 flex justify-center items-center h-full'>
                <div onClick={toggleSidebar} className='block md:hidden'>
                    <MenuIcon  style={{ fontSize: 30 }} />
                </div>
                <img
                    src={logo}
                    className="w-[100px] h-auto"
                    alt=""
                />
            </div>
            <div className='w-auto h-full gap-7 pr-10 flex justify-center items-center'>
                <div className="relative">
                    <button onMouseEnter={() => setTranslateDropdownOpen(!translateDropdownOpen)} onMouseLeave={() => setTranslateDropdownOpen(!translateDropdownOpen)} className="flex items-center space-x-1">
                        <TranslateOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {translateDropdownOpen && (
                        <ul className="absolute top-full right-[-40px] bg-white border border-gray-200 py-1 px-3 shadow">
                            <li>Translate Option 1</li>
                            <li>Translate Option 2</li>
                            <li>Translate Option 3</li>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setSupportDropdownOpen(!supportDropdownOpen)} onMouseLeave={() => setSupportDropdownOpen(!supportDropdownOpen)} className="flex items-center space-x-1">
                        <SupportAgentOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {supportDropdownOpen && (
                        <ul className="absolute top-full left-0 right-[-40px] bg-white border border-gray-200 py-1 px-3 shadow">
                            <li>Support Option 1</li>
                            <li>Support Option 2</li>
                            <li>Support Option 3</li>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setSearchDropdownOpen(!searchDropdownOpen)} onMouseLeave={() => setSearchDropdownOpen(!searchDropdownOpen)} className="flex items-center space-x-1">
                        <SearchOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {searchDropdownOpen && (
                        <ul className="absolute top-full left-0 right-[-40px] bg-white border border-gray-200 py-1 px-3 shadow">
                            <li>Search Option 1</li>
                            <li>Search Option 2</li>
                            <li>Search Option 3</li>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setHelpDropdownOpen(!helpDropdownOpen)} onMouseLeave={() => setHelpDropdownOpen(!helpDropdownOpen)} className="flex items-center space-x-1">
                        <HelpOutlineOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {helpDropdownOpen && (
                        <ul className="absolute top-full left-0 right-[-40px] bg-white border border-gray-200 py-1 px-3 shadow">
                            <li>Help Option 1</li>
                            <li>Help Option 2</li>
                            <li>Help Option 3</li>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <button onMouseEnter={() => setAccountDropdownOpen(!accountDropdownOpen)} onMouseLeave={() => setAccountDropdownOpen(!accountDropdownOpen)} className="flex items-center space-x-1">
                        <AccountCircleOutlinedIcon style={{ fontSize: 35 }} />
                    </button>
                    {accountDropdownOpen && (
                        <ul className="absolute top-full right-0 bg-white w-50 flex flex-col bg-white border border-gray-200 py-1 px-3 shadow">
                            <li>Account Option 1</li>
                            <li>Account Option 2</li>
                            <li>Account Option 3</li>
                        </ul>
                    )}
                </div>
                {/* Add similar code for the other icons */}
            </div>
        </div>
    );
}

export default Nnavbar;
