import React from "react";
import UnderlinedButtons from "./UnderlinedButtons";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const DashboardCard = (props) => {
  return (
    <>
      {" "}
      <div className="w-full  rounded-lg border-[1px] bg-gray-50 p-3 mb-4">
        <div className="w-full h-full ">
          <div className=" flex justify-between  mt-3  items-center  w-full  ">
            <h1 className="text-lg ml-4 font-semibold text-yellow-400 ">
              Mes annonces en cours:
            </h1>
            <MoreVertIcon style={{ fontSize: "25px", color: "gray" }} />
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className=" mt-3  rounded-lg items-center flex flex-col gap-7 justify-center   ">
              <h1 className="">Aucune annonce n'a ete crée</h1>
              <button className=" whitespace-nowrap shadow-custom hover:bg-yellow-500 w-auto h-auto px-[10%] py-[5%] rounded-lg bg-yellow-400 text-white">
                Ajouter une annonce
              </button>
            </div>
            <div className="w-full h-[10%] flex justify-end items-end ">
              <p className="ml-auto text-sm text-yellow-400 mr-10 mb-3 underline">
                Voir plus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
