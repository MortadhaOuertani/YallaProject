import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import {
  InternalSideBarLeft,
  NavBar,
  BottomNavBar,
  IconBreadcrumbs,
} from "./components";

import {
  Home,
  FAQ,
  NFCTags,
  HowItWorks,
  NFCBusinessCards,
  Dashboard,
  AddAnnouncement,
  AddRoute,
  SearchPackage,
  Message,
  Setting,
  AddressBook,
  Payments,
  Notifications,
  Login,
  SignUp,
  RouteListe,
} from "./pages";
import { useEffect, useRef, useState } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModalTrans, setOpenModalTrans] = useState(false);
  const contentRef = useRef(null);
  const [isLogedIn, setIsLogedIn] = useState(true);
  const colisRef = useRef(null);
  const TransRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024); // Adjust this threshold as needed
      setOpen(false);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="flex flex-col">
        {isLogedIn && (
          <div className="w-full ">
            <NavBar
              TransRef={TransRef}
              openModal={openModal}
              setOpenModal={setOpenModal}
              openModalTrans={openModalTrans}
              setOpenModalTrans={setOpenModalTrans}
              isLogedIn={isLogedIn}
              setIsLogedIn={setIsLogedIn}
              colisRef={colisRef}
            />
          </div>
        )}
        <div className="flex flex-1 h-full">
          {isLogedIn ? (
            <>
              <InternalSideBarLeft
                open={open}
                setOpen={setOpen}
                isMobileView={isMobileView}
                contentRef={contentRef}
              />

              <div
                className="w-full  ml-0 lg:ml-[16rem] xl:ml-[16rem]   "
                ref={contentRef}
              >
                <div className="lg:flex lg:justify-center lg:items-center lg:w-full lg:h-full">
                  <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/monprofile" element={<Dashboard />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/plaques-nfc" element={<NFCTags />} />
                    <Route path="/comment-ca-marche" element={<HowItWorks />} />
                    <Route
                      path="/cartes-de-visite-nfc"
                      element={<NFCBusinessCards />}
                    />
                    <Route
                      path="/ajouter-une-annonce"
                      element={<AddAnnouncement />}
                    />
                    <Route path="/ajouter-un-trajet" element={<AddRoute />} />
                    <Route
                      path="/chercher-un-colis"
                      element={<SearchPackage />}
                    />
                    <Route path="/messages" element={<Message />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/trajets" element={<RouteListe />} />
                    <Route path="/carnet-d-adresse" element={<AddressBook />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full">
              <Routes>
                <Route path="/seconnecter" element={<Login />} />
                <Route path="/inscription" element={<SignUp />} />
                <Route />
              </Routes>
            </div>
          )}
        </div>
      </div>
      {isLogedIn && isMobileView && !open && (
        <div className="">
          <BottomNavBar />
        </div>
      )}
      <div
        className={`bg-white border shadow-md w-60 h-28 fixed z-60 top-[-150px] right-[28%] rounded-lg transition-transform ${openModal ? ' transform translate-y-[200%] delay-8' : ''
          }`} ref={colisRef}
      >
        <div className="flex flex-col justify-center items-center gap-4 p-3 h-full">
          <Link
            onClick={() => setOpenModal(false)}
            to="/"
            className="flex items-center justify-start w-full gap-4 px-4"
          >
            <Inventory2OutlinedIcon />
            <span>Colis</span>
          </Link>
          <Link
            onClick={() => setOpenModal(false)}
            to=""
            className="flex items-center justify-start w-full gap-4 px-4"
          >
            <LocalShippingOutlinedIcon />
            <span>Transporteur</span>
          </Link>
        </div>
      </div>
      
      <div
        className={`bg-white border shadow-md w-60 h-28 fixed z-60 top-[-150px] right-[47%] rounded-lg transition-transform ${openModalTrans ? ' transform translate-y-[200%] delay-8' : ''
          }`} ref={TransRef}
      >
        <div className="flex flex-col justify-center items-center gap-4 p-3 h-full">
          <Link
            onClick={() => setOpenModalTrans(false)}
            to="/"
            className="flex items-center justify-start w-full gap-4 px-4"
          >
            <Inventory2OutlinedIcon />
            <span>Proposer un trajet</span>
          </Link>
          <Link
            onClick={() => setOpenModalTrans(false)}
            to=""
            className="flex items-center justify-start w-full gap-4 px-4"
          >
            <LocalShippingOutlinedIcon />
            <span>Comment ça marche</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
