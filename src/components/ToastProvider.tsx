// ===============================
//  ToastProvider.tsx
// ===============================

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import CloseBtn from "./CloseBtn";

/* ---------- Types ---------- */
export type ToastType = "info" | "success" | "warning" | "error";

export type Toast = {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number; // ms
};

/* ---------- ToastItem ---------- */
const ToastItem = ({ toast, onClose }: { toast: Toast; onClose: () => void }) => {
  const bgColor = {
    info: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    error: "bg-red-600",
  }[toast.type ?? "info"];

  // انیمیشن fade‑in / fade‑out
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []); // mount → visible

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      role="alert"
      className={`
        max-w-xs w-full mb-3 text-white ${bgColor} rounded-full shadow-lg
        flex items-center px-4 py-3 pointer-events-auto
        transform transition-all duration-200 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
    >
      <span className="flex-1">{toast.message}</span>

      <CloseBtn onClick={handleClose} iconSize="32px" />
    </div>
  );
};

/* ---------- Context ---------- */
type ToastContextProps = {
  toasts: Toast[];
  showToast: (msg: string, opts?: Partial<Omit<Toast, "id" | "message">>) => void;
  hideToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

/* ---------- Hook ---------- */
export const useToast = (): ToastContextProps => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

/* ---------- Provider ---------- */
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const hide = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback(
    (
      message: string,
      { type = "info", duration = 3000 }: Partial<Omit<Toast, "id" | "message">> = {},
    ) => {
      const id = `${Date.now()}-${Math.random()}`;
      const toast: Toast = { id, message, type, duration };
      setToasts((prev) => [...prev, toast]);
      console.log(id);
      // حذف خودکار پس از زمان تعیین شده
      setTimeout(() => hide(id), duration);
    },
    [hide],
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast: show, hideToast: hide }}>
      {children}

      <div className="fixed inset-0 flex flex-col items-center p-4 pointer-events-none  z-9999">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => hide(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
