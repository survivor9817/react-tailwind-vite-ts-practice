import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal2 = ({ isOpen, onClose, title, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root")!;
  const previousActiveEl = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // فوکوس و قفل اسکرول
  useEffect(() => {
    if (!isOpen) return;

    previousActiveEl.current = document.activeElement as HTMLElement;
    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );
    firstFocusable?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previousActiveEl.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* جلوگیری از بسته شدن هنگام کلیک داخل مودال */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6
                   transform transition-all duration-300 ease-out
                   opacity-0 scale-95"
        // Tailwind animation trigger
        style={{ opacity: 1, scale: 1 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
      >
        {/* Header */}
        {title && (
          <h2 id="modal-title" className="text-xl font-semibold mb-4">
            {title}
          </h2>
        )}

        {/* Body */}
        <div className="mb-4">{children}</div>

        {/* Footer – دکمهٔ بستن */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            بستن
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};
