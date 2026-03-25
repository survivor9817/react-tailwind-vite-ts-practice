import IconBtn from "./IconBtn";

type Props = {
  isMenuOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isMenuOpen, onClose }: Props) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 flex items-center justify-center z-80"
        onClick={onClose}
        style={{ display: isMenuOpen ? "block" : "none" }}
      ></div>
      <div
        className="fixed top-0 left-0 w-80 h-screen p-3 rounded-tr-3xl rounded-br-3xl bg-[#ebebeb] 
          transition-transform duration-300 ease-in-out translate-x-0 shadow-[2px_0px_5px_0px_rgba(0,0,0,0.5)]
          z-90 overflow-x-hidden overflow-y-auto"
        style={{ transform: `translateX(${isMenuOpen ? 0 : -105}%)` }}
      >
        <IconBtn iconName="cancel" iconSize="36px" onClick={onClose} />

        <div className="menu-section">
          <img src="./imgs/reza.jpg" alt="user-img" className="user-img" />
          <div className="user-name">رضا قزلسفلو</div>
          <span className="user-role">معلم مدرسه</span>
          <div className="divider"></div>
          <ul className="menu-items-container">
            <li>
              <a className="menu-item" href="#">
                صفحه کاربری
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                خرید جدید
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                تمرین‌های قبلی
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                طراحی امتحان
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                اضافه کردن سؤال
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                تنظیمات
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
