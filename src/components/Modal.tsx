import { createPortal } from "react-dom";

import IconBtn from "./IconBtn";
import { useEffect } from "react";
// import { useEffect } from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Modal = ({ children, className = "w-77.5", onClose }: ModalProps) => {
  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") onClose();
  //   };

  //   window.addEventListener("keydown", handleEscape);

  //   // Cleanup on unmount
  //   return () => window.removeEventListener("keydown", handleEscape);
  // }, [onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return createPortal(
    <>
      {/* Backdrop ساده و تیره */}
      <div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className={`bg-white rounded-4xl p-6 shadow-lg relative ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="absolute top-2 left-2">
            <IconBtn icon="cancel" iconSize="36px" onClick={onClose} />
          </div>

          {/* Content */}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default Modal;
