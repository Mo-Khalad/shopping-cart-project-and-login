import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, className = "" }) => {
  const dialog = useRef();
  const show = dialog.current

  useEffect(() => {
    if (open) {
      show.showModal()
    }
    return () => show?.close();
  }, [open,show]);
  return createPortal(
    <dialog ref={dialog} className={`m-auto border border-0 ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};
export default Modal;


