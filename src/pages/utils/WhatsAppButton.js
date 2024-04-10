"use client"
import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Modal from "./Modal";
import ClearIcon from '@mui/icons-material/Clear';
import styles from "../../styles/utils.module.css"
const WhatsAppButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };
  return (
    <div>
      <div className="flex fex-col items-center gap-6 relative z-40">
        <div className={`modal-container transition-opacity ${isActive ? "opacity-200" : "opacity-0 pointer-events-none"}`}>

          <Modal />
        </div>
        <button
          className={`${styles.zoomoutbtn} flex items-center shadow-lg fixed bottom-28  left-6  bg-white border-1 hover:text-green-500 hover:shadow-2xl text-green-700 font-bold p-2 md:p-4 rounded-full ${isActive ? 'hidden' : 'visible'}`}
          onClick={handleOpen}
        >
          <WhatsAppIcon className="text-4xl" />
        </button>

        <button
          className={`cross-button flex items-center fixed bottom-28 left-6 bg-white border-1 hover:text-green-500 hover:shadow-2xl text-green-700 font-bold p-2 md:p-4  rounded-full ${isActive ? 'visible' : 'hidden'}`}
          onClick={handleClose}
        >
          <ClearIcon className="text-4xl" />
        </button>
      </div>
    </div>
  )
}

export default WhatsAppButton
