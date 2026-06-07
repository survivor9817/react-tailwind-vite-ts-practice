import IconBtn from "./IconBtn";

type Props = {
  side: "left-0" | "right-0";
  className?: string;
  isOpen: boolean;
  isBackdropOn: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Sidebar = ({ className = "", isOpen, isBackdropOn, onClose, side, children }: Props) => {
  const movePercent = side === "right-0" ? +105 : -105;
  const sidebarMovement = { transform: `translateX(${isOpen ? 0 : movePercent}%)` };
  const backdropDisplay = { display: isBackdropOn ? "block" : "none" };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        onClick={onClose}
        style={backdropDisplay}
      ></div>
      <div
        className={`fixed top-0 w-80 h-screen h-dvh p-3 rounded-tl-3xl rounded-bl-3xl bg-[#ebebeb] 
          transition-transform duration-300 ease-in-out shadow-[-2px_0px_5px_0px_rgba(0,0,0,0.5)]
          z-70 overflow-x-hidden overflow-y-auto translate-x-0 ${side} ${className}`}
        style={sidebarMovement}
      >
        <IconBtn
          className="absolute top-0 left-0 m-2 z-50"
          i="cancel"
          iconSize="36px"
          onClick={onClose}
        />

        <div className="h-full overflow-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
