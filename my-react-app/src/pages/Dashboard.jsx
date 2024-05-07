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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <div className="  w-full h-full flex  overflow-hidden xl:p-20 lg:p-12 p-7   ">
        <div className="grid grid-cols-1  md:grid-cols-3 w-full gap-10">
          <div className="col-span-2 flex flex-col  rounded-lg ">
            <div className="flex flex-col items-center justify-between">
              <div className="w-full h-fit rounded-lg  mb-4 p-5 flex items-center">
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

            <div className="text-center flex-grow flex flex-col      ">
              <div className=" h-1/2 ">
                {" "}
                <DashboardCard isMytrajets={false} />
              </div>
              <div className=" h-1/2">
                <DashboardCard isMytrajets={true} />
              </div>
              <div className=" h-1/2">
                <DashboardCard isMytrajets={false} />
              </div>
            </div>
          </div>
          <div className=" col-span-1 max-w-sm min-w-sm   ">
            <div className=" flex flex-col h-full   ">
              <div className=" h-auto max-w-sm min-w-sm ">
                <div className="flex">
                  <div className="w-1/2 h-[120px] mr-2 mb-2  ">
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
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium  px-2.5 py-3 mb-4  mt-4 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Yellow
              </span>
              <div className="flex items-center justify-between bg-red-100 text-red-800 text-xs font-medium  px-2.5 py-3 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                <span>Continuer la verification de votre compte</span>
                <span className="underline"> Verifier </span>
              </div>

              <div className=" flex-grow mt-4  ">
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-6 gap-6 mt-6">
                        <div className="col-span-6 lg:col-span-2">
                            <div className="text-center border border-primary p-6 rounded-md">
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mon Profil
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Modifier
                                    </a>
                                </div>
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mon Profil
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Modifier
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-primary text-base font-semibold">
                                        Lhnsjwtnf Emltmp
                                    </p>
                                    <p className="text-primary text-sm">
                                        Particulier
                                    </p>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm mt-4 hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Voir mon profil public
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
      </div>
    </>
  );
};

export default Dashboard;
