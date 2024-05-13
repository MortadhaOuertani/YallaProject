import { responsiveFontSizes } from "@mui/material";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { ProfileMobile } from "../utils/navigationLink";
import { MdLogout } from "react-icons/md";
import DEU from "../assets/DEU.png";
import ENG from "../assets/ENG.png";
import ESP from "../assets/ESP.png";
import FR from "../assets/FR.png";

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
    console.log(props.TranslateRef.current);
    clearTimeout(props.TranslateRef.current);
    console.log(props.TranslateRef.current);
    props.setTranslateDropdownOpen(true);
  }

  function handleMouseEnter(setState, useRef) {
    console.log(useRef.current);
    clearTimeout(useRef.current);

    setState(true);
  }

  return (
    <>
    {props.openPorfileDropdown&&(
      <div
        onMouseEnter={() =>
          handleMouseEnter(
            props.setOpenPorfileDropdown,
            props.openPorfileDropdownRef
          )
        }
        onMouseLeave={() =>
          handleDropdownMouseLeave(
            props.setOpenPorfileDropdown,
            props.openPorfileDropdownRef
          )
        }
        className={`h-screen lg:w-[28rem] w-[19rem] right-0 absolute z-[29] pt-16 lg:relative lg:transition-all lg:duration-500 lg:ease-in-out`}
      >
        <ul className="ml-auto  h-full right-0 bg-white w-full top-[70px] flex flex-col border-l ">
          <li className="w-full bg-gray-50 flex border-b  py-5 pl-5 items-center h-auto  ">
            <div className="flex flex-row gap-5 items">
              <div className="text-3xl">
                <VscAccount />
              </div>
              <div className="  flex justify-center  flex-col gap-1">
                <p className="font-semibold text-sm mb-2">Mon compte : </p>
                <p className="font-medium">Mortadha Wartani</p>
                <p className="font-light text-sm ">mortadha500@gmail.com</p>
                <p className="font-bold text-xs text-yellow-500 ">
                  Transporteur
                </p>
              </div>
            </div>
          </li>
          <div className="flex flex-col p-5 gap-3 w-full ">
            {ProfileMobile.map((menu, index) => (
              <div
                key={index}
                className="flex items-center hover-bg p-3 rounded-lg"
              >
                <div className="w-5 h-5 ">
                  <menu.icon />
                </div>{" "}
                <li className="ml-2 text-sm tracking-wide truncate">
                  {menu.title}
                </li>
              </div>
            ))}
          </div>
          <div className="h-auto px-5 py-5  border-t  items-center flex justify-center mt-auto ">
            <button className=" flex items-center justify-center  whitespace-nowrap  min-w-[200px] max-w-[250px] h-auto p-3 rounded-lg bg-yellow-400 text-white">
              <div className="mr-3">
                <MdLogout />
              </div>
              Se deconnecter
            </button>
          </div>
        </ul>
      </div>)}

      {props.translateDropdownOpen && (
        <div
          onMouseEnter={handleTranslateMouseEnter}
          onMouseLeave={handleTranslateMouseLeave}
          className={`h-screen lg:w-[28rem] w-[19rem] absolute  lg:relative z-[29]  pt-[64px]  right-0`}
        >
          <ul className="ml-auto  h-full right-0  w-full top-[70px] flex flex-col bg-white border-l  ">
            <li className="w-full flex pl-5 items-center h-auto"></li>
            <div className="flex flex-col mt-3 px-3 rounded  gap-3 w-full h-auto ">
              <div className="flex items-center  p-5 rounded-lg hover-bg">
                <div className="w-5 h-5">
                  <img src={ENG} alt="" />
                </div>{" "}
                <li className="ml-2 text-sm tracking-wide truncate">ENGLISH</li>
              </div>
              <div className="flex items-center  p-5 rounded-lg hover-bg">
                <div className="w-5 h-5">
                  <img src={FR} alt="" />
                </div>{" "}
                <li className="ml-2 text-sm tracking-wide truncate">
                  FRANÇAIS
                </li>
              </div>
              <div className="flex items-center  p-5 rounded-lg hover-bg">
                <div className="w-5 h-5">
                  <img src={DEU} alt="" />
                </div>{" "}
                <li className="ml-2 text-sm tracking-wide truncate">DEUTCH</li>
              </div>
              <div className="flex items-center  p-5 rounded-lg hover-bg">
                <div className="w-5 h-5">
                  <img src={ESP} alt="" />
                </div>{" "}
                <li className="ml-2 text-sm tracking-wide truncate">SPANISH</li>
              </div>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileMobileView;
