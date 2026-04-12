import Fehrest from "./Fehrest";
import Menu from "./Menu";
import TabBtn from "./TabBtn";
import { useStudyPageNav } from "../hooks/useStudyPageNav";
import Book from "./Book";
import Quiz from "./Quiz";
import Yavar from "./Yavar";
import TabIndicator from "./TabIndicator";
import TabsContainer from "./TabsContainer";
import Tab from "./Tab";
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
    isMenuOpen,
    activeTab,
    closeFehrest,
    toggleFehrest,
    closeMenu,
    toggleMenu,
    goToBook,
    goToQuiz,
    goToYavar,
  } = useStudyPageNav();

  return (
    <>
      <Fehrest isFehrestOpen={isFehrestOpen} onClose={closeFehrest} />

      <Menu isMenuOpen={isMenuOpen} onClose={closeMenu} />

      <div className="max-w-210 min-w-80 mx-auto overflow-hidden flex flex-col-reverse sm:flex-col">
        <nav
          className="flex justify-between items-center border-2 border-b-0 rounded-t-3xl bg-[#eee] border-[#bcbcbc] h-14
           sm:rounded-b-3xl sm:border-b-2 sm:border-t-0 sm:rounded-t-none"
        >
          <TabBtn
            label="فهرست"
            labelClass="sm:hidden"
            icon="list"
            iconClass="text-[34px] scale-x-[-1]"
            btnClass="flex-none w-16"
            onClick={toggleFehrest}
          />

          <div className="flex flex-1 relative">
            <TabBtn label="کتاب" icon="menu_book" onClick={goToBook} />
            <TabBtn label="تمرین" icon="exercise" iconClass="rotate-45" onClick={goToQuiz} />
            <TabBtn label="یاور" icon="school" onClick={goToYavar} />

            <TabIndicator activeTab={activeTab} />
          </div>

          <TabBtn
            label="منو"
            labelClass="sm:hidden"
            icon="menu"
            iconClass="text-[28px]"
            btnClass="flex-none w-16"
            onClick={toggleMenu}
          />
        </nav>

        {/* baa zadane dokme tab va jaabejaaee e focus chidemaane tabhaa beham mirize.
aslan nabayad ofoghi scrollpazir bashe */}
        <TabsContainer
          activeTab={activeTab}
          className="w-full h-[calc(100vh-58px)] sm:h-[calc(100dvh-58px)]"
        >
          <Tab>
            <Book />
          </Tab>
          <Tab>
            <Quiz />
          </Tab>
          <Tab>
            <Yavar />
          </Tab>
        </TabsContainer>
      </div>
    </>
  );
};

export default StudyPage;
