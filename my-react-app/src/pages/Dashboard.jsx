import React, { useEffect, useState } from "react";
import { carouselTitle, data1, tabs } from "../utils/DashboardData";
import {
  AccordionSection,
  Carousel,
  MidumeCardLayout,
  NotificationCard,
  SmallCardLayout,
} from "../components";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {//change the style to css file for better clearity
    }
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <div className="  w-full h-full flex  overflow-hidden xl:pl-[4%] xl:pr-[3%] xl:pt-[90px] lg:p-14 lg:pl-[5%] lg:pr-[3%]  lg:pt-[80px]  ">
        <div className="grid md:grid-cols-3 w-full ">
          <div className="col-span-2 pr-[3%] flex flex-col  rounded-lg ">
            <div className="flex flex-col items-center justify-between">
              <div className="w-full  h-fit rounded-lg  mb-4 p-5 flex items-center">
                <div className="flex items-center justify-start flex-grow">
                  <div className="ml-4">
                    <h1 className="text-[20px]">Mardi, 07 Mai</h1>
                    <h1 className="text-[36px] font-merriweather">
                      Salut! Yialla T.
                    </h1>
                  </div>
                </div>

                <div>
                  <h1 className="text-[60px] mr-4 animate-bounce">👋</h1>
                </div>
              </div>
            </div>

            <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="text-center  flex flex-col overflow-y-auto  gap-2 h-[450px]">
              <div className=" h-1/2 ">
                {" "}
                <DashboardCard header={"Mes annonces en cours"} path={"/notifications"}  text={"Aucune annonces n'a ete crée"}  buttonText={"Ajouter une annonce"}  />
              </div>
              <div className=" h-1/2">
                <DashboardCard  header={"Mes trajets en cours"} path={"/trajets"} text={"Aucune trajets n'a ete crée"} buttonText={"Ajouter une trajet"} />
              </div>
              <div className=" h-1/2">
                <DashboardCard  header={"Mes livraisons en cours"} path={"/messages"} text={"Aucune livraisons n'a ete crée"}buttonText={"Ajouter une livraison"} />
              </div>
            </div>
          </div>
          <div className=" col-span-1  min-w-md h-auto pb-auto  flex justify-center ml-[1.5%] w-full  ">
            <div className="flex flex-col pb-auto h-auto w-[90%]   ">
              <div className=" h-auto max-w-auto  min-w-sm ">
                <div className="flex">
                  <div className="w-1/2 h-auto mr-2 mb-2  ">
                    {" "}
                    <SmallCardLayout
                      key={0}
                      sign={data1[0].sign}
                      title={data1[0].title}
                      text={data1[0].text}
                      bg={data1[0].bg}
                      rounded={data1[0].rounded}
                      textColor={data1[0].textColor}
                      firstElement={data1[0].firstElement}
                      textSize={data1[0].textSize}
                    />
                  </div>
                  <div className="w-1/2 h-[120px] ml-2 mb-2 ">
                    {" "}
                    <SmallCardLayout
                      key={1}
                      title={data1[1].title}
                      text={data1[1].text}
                      bg={data1[1].bg}
                      rounded={data1[1].rounded}
                      textColor={data1[1].textColor}
                      firstElement={data1[1].firstElement}
                      textSize={data1[1].textSize}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 h-[120px] mr-2 mt-2 ">
                    {" "}
                    <SmallCardLayout
                      key={2}
                      title={data1[2].title}
                      text={data1[2].text}
                      bg={data1[2].bg}
                      rounded={data1[2].rounded}
                      textColor={data1[2].textColor}
                      firstElement={data1[2].firstElement}
                      textSize={data1[2].textSize}
                    />
                  </div>
                  <div className="w-1/2 h-[120px] ml-2 mt-2">
                    {" "}
                    <SmallCardLayout
                      key={3}
                      sign={data1[3].sign}
                      title={data1[3].title}
                      text={data1[3].text}
                      bg={data1[3].bg}
                      rounded={data1[3].rounded}
                      textColor={data1[3].textColor}
                      firstElement={data1[3].firstElement}
                      textSize={data1[3].textSize}
                    />
                  </div>
                </div>
              </div>
              <div className=" h-[40vh] w-full mt-4  ">
                <Carousel />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Dashboard;
