import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useEffect, useRef, useState } from "react";
import { RiSettings4Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo1.png";

export default function NavBar({
  openModalTrans,
  TransRef,
  setOpenModalTrans,
  openModal,
  TransReftwo,
  openModalTrans2,
  setOpenModalTrans2,
  setOpenModal,
  isLogedIn,
  setIsLogedIn,
  colisRef,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navgate = useNavigate();
  const profileRef = useRef();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleButtonClick = (event) => {
    console.log("test")
    console.log(openModal)
    setOpenModal(!openModal);
    console.log(openModal)

  };

  useEffect(() => {
    const handleClickOutsidetrans = (event) => {
      if (colisRef.current && !colisRef.current.contains(event.target)) {

      }
    };

    // Add event listener to the document body
    document.body.addEventListener('click', handleClickOutsidetrans);

    // Clean up the event listener
    return () => {
      document.body.removeEventListener('click', handleClickOutsidetrans);
    };
  }, []);



  const handleTransbuttonClick = (event) => {
    setOpenModalTrans(!openModalTrans);
  };
  const handleTransbuttonClick2 = (event) => {
    setOpenModalTrans2(!openModalTrans2);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (TransRef.current && !TransRef.current.contains(event.target)) {

      }
    };

    // Add event listener to the document body
    document.body.addEventListener('click', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside2 = (event) => {
      if (TransReftwo.current && !TransReftwo.current.contains(event.target)) {

      }
    };

    // Add event listener to the document body
    document.body.addEventListener('click', handleClickOutside2);

    // Clean up the event listener
    return () => {
      document.body.removeEventListener('click', handleClickOutside2);
    };
  }, []);






  const logedOut = () => {
    setIsDropdownOpen(false);
    setIsLogedIn(false);
    localStorage.clear();
    navgate("/");
  };


  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>


      <div className="bg-white fixed top-0 z-40 w-full">


        <div className="flex-col flex">

          <div className="w-full border-b-2 border-gray-200">

            <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">

              <div className="ml-5 min-w-[100px]">
                <img src={logo} className="block btn- w-[100px] h-auto" alt="" />
              </div>
              <div className=" flex flex-row left-[14%] absolute">
                <div className="z-90" ref={TransRef}
                  onClick={() => handleTransbuttonClick()}>
                  <p

                    className=" flex lg:block 
                       hidden   top-[21px] ml-10 cursor-pointer text-black-500">
                    Transporteur
                    <KeyboardArrowDownRoundedIcon className="ml-[-2px]" />

                  </p>
                </div>
                <div className="z-90" ref={TransReftwo}
                  onClick={() => handleTransbuttonClick2()}

                >                  <p

                  className=" flex lg:block
                       hidden   top-[21px] whitespace-nowrap ml-5  cursor-pointer text-black-500">
                    Transporteur2
                    <KeyboardArrowDownRoundedIcon className="ml-[-2px]" />

                  </p>
                </div>
              </div>
              <div className="justify-end items-center flex">
                {isLogedIn ? (
                  <>
                    <div className="flex ">

                      <p
                        className="w-full pt-1 mr-5 pb- ml-20 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none"
                      >
                        <div className="lg:block   ml-40 hidden relative max-w-xs mr-20">
                          <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center  justify-center flex">
                                  <svg
                                    className="w-5 h-5 relative left-20 text-gray-400"
                                    fill="none"
                                    viewbox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path className=""
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

                          <span className=" flex relative left-20 "
                          >
                            <input
                              placeholder="Chercher  "
                              type="search" disabled
                              className="border  cursor-pointer  border-gray-300 sm:text-sm lg:w-[220px] md:w-[200px] rounded-full pt-2 pb-2 pl-10 px-3 py-2"
                            />
                            <span
                              className="cursor-pointer absolute right-0 h-full rounded-lg w-20"
                            >
                              <div className="h-full flex w-[30px] flex-col items-center justify-center">
                                <div ref={colisRef}
                                  onClick={() => handleButtonClick()} className="flex items-center justify-between border-l-2 px-2 ml-4 h-full border-gray-300">
                                  <span className="" >Colis</span>
                                  <KeyboardArrowDownRoundedIcon className="ml-[-2px]" />
                                </div>
                              </div>
                            </span>
                          </span>

                        </div>
                      </p>
                    </div>

                    <div className="relative">
                      <p
                        className="pt-1 mr-5 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100"
                      >
                        <span className="items-center justify-center flex">
                          <EmailOutlinedIcon
                            color="black"
                            sx={{ fontSize: 30 }}
                          />
                        </span>
                      </p>
                    </div>
                    <div className="relative">
                      <p
                        className="pt-1 mr-10 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200 
                hover:text-gray-900 focus:outline-none hover:bg-gray-100"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="items-center justify-center flex">
                              <NotificationsNoneOutlinedIcon
                                color="black"
                                sx={{ fontSize: 30 }}
                              />
                              <div className="absolute block w-3 h-3 bg-yellow-500 border-2 border-white rounded-full top-0 start-3.5 dark:border-gray-900 animate-ping"></div>
                            </span>
                          </span>
                        </span>
                      </p>
                    </div>
                    <div
                      className="justify-center items-center flex relative cursor-pointer  border-l   "
                      onClick={toggleDropdown}
                      ref={profileRef}
                    >
                      <div className="flex items-center justify-center">
                        <img
                          src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                          className="object-cover btn- h-9 w-9 rounded-full mr-2 ml-8 bg-gray-300"
                          alt=""
                        />
                        <div className="flex flex-col items-start mr-4 ml-3">
                          <p className="font-semibold text-md">Yialla Test</p>
                          <p className="font-normal text-sm text-yellow-500 ">
                            Transporteur
                          </p>
                        </div>
                        <KeyboardArrowDownRoundedIcon />
                        {isDropdownOpen && (
                          <div
                            className="bg-white border w-56 h-28 fixed z-100 top-16  "
                            ref={profileRef}>
                            <div className="flex flex-col justify-center items-center gap-4 p-3 h-full ">
                              <Link
                                onClick={() => setIsDropdownOpen(false)}
                                to="/setting"
                                className="flex items-center justify-start w-full gap-4 px-4"
                              >
                                <RiSettings4Line size={20} color="050816" />

                                <span>Paramétres</span>
                              </Link>
                              <div
                                onClick={logedOut}
                                className="flex items-center justify-start w-full gap-4 px-4"
                              >
                                <FiLogOut size={20} color="050816" />

                                <span>Se Déconnecter </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





