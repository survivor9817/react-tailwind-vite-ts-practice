import Fehrest from "./Fehrest";
import Menu from "./Menu";
import NavBtn from "./NavBtn";
import { useStudyPageNav } from "../hooks/useStudyPageNav";
import Book from "./Book";
// import {
//   Exercise,
//   List,
//   MenuBook,
//   School,
//   Menu as MenuIcon,
// } from "@nine-thirty-five/material-symbols-react/rounded";

// import Fehrest from "./Fehrest";
// import Menu from "./Menu";
// import Book from "./Book";
// import Quiz from "./Quiz";
// import Yavar from "./Yavar";

const StudyPage = () => {
  const {
    isFehrestOpen,
    closeFehrest,
    toggleFehrest,
    isMenuOpen,
    closeMenu,
    toggleMenu,
    activeTab,
    goToBook,
    goToQuiz,
    goToYavar,
  } = useStudyPageNav();

  return (
    <>
      <Fehrest isFehrestOpen={isFehrestOpen} onClose={closeFehrest} />

      <Menu isMenuOpen={isMenuOpen} onClose={closeMenu} />

      {/* <List className="size-8.5 scale-x-[-1]" />
        <MenuBook className="size-8" />
        <Exercise className="size-8 rotate-45" />
        <School className="size-8" />
        <MenuIcon className="size-7.5" /> */}

      <div className="max-w-210 min-w-80 mx-auto overflow-hidden flex flex-col-reverse sm:flex-col">
        <nav
          className="flex justify-between items-center border-2 border-b-0 rounded-t-3xl bg-[#eee]
              border-[#bcbcbc] h-14 sm:rounded-b-3xl sm:border-b-2 sm:border-t-0 sm:rounded-t-none"
        >
          <NavBtn
            label="فهرست"
            labelClass="sm:hidden"
            iconName="list"
            iconClass="text-[34px] scale-x-[-1]"
            btnClass="flex-none w-16"
            onClick={toggleFehrest}
          />

          <div className="flex flex-1 relative">
            <NavBtn label="کتاب" iconName="menu_book" iconClass="text-[32px]" onClick={goToBook} />
            <NavBtn
              label="تمرین"
              iconName="exercise"
              iconClass="text-[32px] rotate-45"
              onClick={goToQuiz}
            />
            <NavBtn label="یاور" iconName="school" iconClass="text-[32px]" onClick={goToYavar} />

            <div
              className="absolute top-1 bottom-1 right-0 w-[33.33%] rounded-xl bg-[rgba(30,144,255,0.2)]
                   transition-transform duration-300 ease-in-out z-0"
              style={{ transform: `translateX(${activeTab * -100}%)` }}
            />
          </div>

          <NavBtn
            label="منو"
            labelClass="sm:hidden"
            iconName="menu"
            iconClass="text-[28px]"
            btnClass="flex-none w-16"
            onClick={toggleMenu}
          />
        </nav>

        <div
          className="flex flex-row transition-transform duration-300 ease-in-out 
            w-[300%] h-[calc(100vh-58px)] sm:h-[calc(100dvh-58px)]"
          style={{ transform: `translateX(${activeTab * (100 / 3)}%)` }}
        >
          <Book />
          {/* <Quiz /> */}
          {/* <Yavar /> */}
        </div>
      </div>
    </>
  );
};

export default StudyPage;
