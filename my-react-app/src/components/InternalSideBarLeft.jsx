import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menus } from "../utils/navigationLink";
import { RiSettings4Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const InternalSideBarLeft = ({ open, setOpen, isMobileView, contentRef }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [submenuRotation, setSubmenuRotation] = useState([]);
  const location = useLocation(); // Obtenez l'URL actuelle
  const handleContentScroll = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && contentRef.current) {
      sidebar.scrollTop = contentRef.current.scrollTop;
    }
  };

  const logedOut = () => {
    localStorage.clear();    
    navgate("/");
  };


  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && contentRef.current) {
      contentRef.current.addEventListener("scroll", handleContentScroll);
    }

    return () => {
      if (sidebar && contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleContentScroll);
      }
    };
  }, [contentRef]);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    let updatedRotation = [...submenuRotation];
    updatedRotation[index] = !updatedRotation[index];
    setSubmenuRotation(updatedRotation);
  };

  return (
    <div
      className={`min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white-500 text-gray-800 ${open ? "w-64" : "w-0"
        }`}
    >
      <div
        className="fixed flex flex-col top-0 left-0 w-64 bg-gray-50 h-full border-r"
        id="sidebar"
      >
        <div className="flex items-center justify-center h-14 border-b"></div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {menus.map((menu, idx) => (
              <li key={idx} className={`${menu.title ? "px-5" : ""}`}>
                {menu.title ? (
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-500">
                      {menu.title}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={menu.link}
                    onClick={() =>
                      menu.menu ? toggleSubMenu(idx) : setOpen(false)
                    }
                    className={`relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-r-4 border-transparent pr-6 ${location.pathname === menu.link
                        ? "bg-gray-100 text-gray-800 border-yellow-400"
                        : "hover:bg-gray-50 hover:text-gray-800 hover:border-yellow-400"
                      }`}
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      {React.createElement(menu.icon, {
                        className: "w-5 h-5",
                        size: 20,
                      })}
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {menu.name}
                    </span>
                    {menu.new && (
                      <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                        {menu.new}
                      </span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className=" w-full h-30 absolute bottom-0 flex flex-col px-[40px] pb-10  ">
            
              <div className="flex flex-col gap-4  h-full ">
                <Link
                  to="/setting"
                  className="flex items-center justify-start gap-2 white-space-nowrap "
                >
                  <RiSettings4Line size={20} color="050816" />

                  <span>Paramétres</span>
                </Link>
                <div
                  onClick={logedOut}
                  className="flex cursor-pointer items-center justify-start gap-2 whitespace-nowrap "
                >
                  <FiLogOut size={20} color="050816" />

                  <span className=""> Se Déconnecter </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalSideBarLeft;
