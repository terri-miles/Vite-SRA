import React, { useContext } from "react";
import logo from "../assets/sra-logo.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { sraContext } from "../context/GlobalContext";

const Modal = () => {
  const { isModal, setIsModal } = useContext(sraContext);
  return (
    <div className={`${(!isModal) ? "hidden" : "block"} fixed w-full h-screen z-[1000] bg-black/80`}>
      <div className="w-full h-full flex justify-center items-center absolute z-[50]">
        <div className="bg-white shadow-lg w-[700px] px-[32px] py-[32px] rounded-md flex flex-col">
          <div className="flex justify-between items-center mb-[24px]">
            <img src={logo} alt="" className="w-[200px]" />
            <IoIosCloseCircleOutline
              className="w-[40px] h-[40px]"
              onClick={() => setIsModal(!isModal)}
            />
          </div>
          <div>
            <h2 className="text-[32px] mb-[10px] leading-tight">
              Get Assigned to an Investigator
            </h2>
            <p className="sm:text-[17px] md:text-[18px] mb-[8px]">
              <strong className="text-red-400">
                Investigation Fee Required:
              </strong>{" "}
              To get everything prepared for your investigation, a one-time fee
              of <strong>$1000</strong> is required. This covers all initial
              setup, case review, and investigator assignment. Once payment is
              confirmed, our investigator will begin working on your case
              immediately.
            </p>
            <p className="sm:text-[17px] md:text-[18px]">
              <strong className="text-red-400">Important:</strong>{" "}
              <strong className="text-gray-500">
                It is important to have telegram on your phone to get assigned
                to an Investigator immediately
              </strong>
            </p>
          </div>
          <a href="https://t.me/Jack_Reynolds_Investigator?text=I agree to the upfront fee of $1,000 for the initiation of the investigation into my case. I understand that this fee covers initial processing and resource allocation necessary to pursue the recovery of my funds." className="sm:w-full md:w-[300px] mt-[32px] px-[100px] py-[22px] bg-red-500 text-white font-bold text-[18px] rounded-md lg:hover:bg-red-700 text-center">
            Proceed
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
