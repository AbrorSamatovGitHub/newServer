import React from "react";
import { Dialog } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Modal = ({ isOpen, close, children }) => {
 const location = useLocation()
 React.useEffect(()=>{
  close()
 },[location.pathname])
  return (
    <Dialog open={isOpen} onClose={close} className="absolute z-50">
      <div className="bg-[#00000057] fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="  rounded bg-white p-10">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
