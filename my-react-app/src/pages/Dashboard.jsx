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

      <div className="  w-full h-full flex  pl-8 pt-[32px] overflow-hidden ">
        <div className="grid  grid-cols-3 w-full">
          <div className="col-span-2 flex flex-col">
            <div className=" w-full h-[18%] rounded-lg bg-customGray flex justify-center items-center">
              <h1 className="text-[34px]">
                  Welcome to Dashboard yialla test !
              </h1>
            </div>
            <div className="text-center flex-grow flex flex-row justify-between w-[100%]  h-[50%]  mt-6">
             <DashboardCard isMytrajets={false}  />
             <DashboardCard isMytrajets={true} />
            </div>
            
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col px-3 w-full items-center h-full">
              <div className="flex">
                <div className="w-1/2 h-[120px] m-2">  <SmallCardLayout
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
                <div className="w-1/2 h-[120px] m-2">  <SmallCardLayout
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
                <div className="w-1/2 h-[120px] m-2">  <SmallCardLayout
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
                <div className="w-1/2 h-[120px] m-2">  <SmallCardLayout
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
              <div className=" mt-3 w-full h-full ">
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
