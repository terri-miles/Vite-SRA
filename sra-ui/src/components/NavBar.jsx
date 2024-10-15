import React, { useContext, useEffect } from "react";
import Links from "../components/Links";
import logo from "../assets/sra-logo.png";
import { sraContext } from "../context/GlobalContext";

const NavBar = () => {

  const { selectedPage, setSelectedPage, isModal, setIsModal } =
    useContext(sraContext);

  const isActive = () => {
    window.scrollY > 0 ? null : setSelectedPage("home");
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center sm:px-[24px] md:px-[40px] lg:px-[72px] py-[32px] shadow-lg">
        <img
          src={logo}
          alt=""
          className="sm:w-[150px] md:w-[180px] lg:w-[180px]"
        />

        <div className="sm:hidden md:hidden lg:flex gap-16 text-[20px] font-medium text-[#494949]">
          <Links
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Links
            page="Services"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Links
            page="Features"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Links
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Links
            page="FAQ"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <button
          className="border-2 border-red-400 px-6 py-2 rounded-md text-red-500"
          onClick={() => setIsModal(!isModal)}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
