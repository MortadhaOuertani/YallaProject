import { TbLocation } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { BsMailboxFlag } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Support = () => {
  return (
    <section className="bg-white flex  justify-center lg:p-20  overflow-hidden w-full  h-full  mt-10 mb-5">
      <div className="container  ">
        <div className="flex flex-wrap lg:justify-between mx-4   ">
          <div className="w-full h-full lg:w-1/2 xl:w-6/12 px-5 ">
            <div className="max-w-[570px] mb-12 lg:mb-5">
              <span className="block mb-4 text-base text-primary font-semibold">
                Contactez-nous
              </span>
              <h2 className="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Prenez contact avec nous
              </h2>
              <p className="text-sm text-body-color leading-relaxed mb-5">
                Nous sommes là à votre service ! Si vous rencontrez un problème,
                avez une réclamation ou toute autre demande, merci de décrire
                brièvement votre situation. Notre équipe prendra en charge votre
                demande. Nous répondons généralement dans un délai de 1 à 3
                heures. Un e-mail vous sera envoyé dès que notre équipe prendra
                en charge votre demande Yialllla!
              </p>
            </div>
            <div className="flex flex-wrap  h-full w-full  ">
              <div></div>
              <div className="flex flex-col  w-full gap- border rounded-lg   ">
                <div className="border-b  p-3 flex flex-row-reverse justify-between h-1/4 ">
                  <TbLocation style={{ fontSize: 24, color: "#fbbf24" }} />
                  <div className="ml-5">
                    <h1 className="font-bold text-yellow-500">Adresse : </h1>
                    <h1 className="text-sm underline truncate">
                      Voir sur le map{" "}
                    </h1>
                  </div>
                </div>
                <div className="border-b  p-3 flex flex-row-reverse justify-between h-1/4">
                  <LuPhone style={{ fontSize: 24, color: "#fbbf24" }} />
                  <div className="ml-5">
                    <h1 className="">location : </h1>
                    <h1 className="">location</h1>
                  </div>
                </div>

                <div className="border-b  p-3 flex flex-row-reverse justify-between h-1/4 ">
                  <BsMailboxFlag style={{ fontSize: 24, color: "#fbbf24" }} />
                  <div className="ml-5"></div>
                  <h1 className="">location : </h1>
                  <h1 className="">location : </h1>
                </div>
                <div className="  p-3 flex flex-row-reverse justify-between h-1/4 ">
                  <IoTimeOutline style={{ fontSize: 24, color: "#fbbf24" }} />
                  <div className="ml-5">
                    <h1 className="">service</h1>
                    <h1 className="">24/7</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-5/12 mt-4">
            <div className="bg-gray-50  rounded-lg p-8 sm:p-12 border lg:m-0 m-0 ">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full text-white bg-yellow-500 rounded-lg  p-3 transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
