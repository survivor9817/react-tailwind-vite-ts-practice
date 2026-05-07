import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import IconBtn from "./IconBtn";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Modal = ({ children, className = "w-77.5", onClose }: ModalProps) => {
  // unable scrolling on body
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // close modal by escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // focus on first focusable element inside modal
  const previousActiveEl = useRef<HTMLElement | null>(null); // If there are multiple consecutive modals, the current behavior is not as expected.
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isInsideOfModal = (document.activeElement as HTMLElement).closest("#modal-root");
    previousActiveEl.current = !isInsideOfModal ? (document.activeElement as HTMLElement) : null;

    const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );
    firstFocusable?.focus();

    return () => {
      previousActiveEl.current?.focus();
    };
  }, []);

  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const modalElement = (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-80"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`relative rounded-4xl p-6 shadow-lg bg-white ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-8">{children}</div>
        <div className="absolute top-2 left-2">
          <IconBtn i="cancel" iconSize="36px" onClick={onClose} />
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, modalRoot);
};

export default Modal;
