import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Fehrest from "./Fehrest";
import Menu from "./Menu";

// import Fehrest from "./Fehrest";
// import Menu from "./Menu";
// import Book from "./Book";
// import Quiz from "./Quiz";
// import Yavar from "./Yavar";

type BookContextType = {
  currentBook: string;
  setCurrentBook: (value: string) => void;
  currentPage: number | "";
  setCurrentPage: (value: number | "") => void;
  goToQuiz: () => void;
};

export const BookContext = createContext<BookContextType>({
  currentBook: "",
  setCurrentBook: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  goToQuiz: () => {},
});

const StudyPage = () => {
  const [activeTab, setActiveTab] = useLocalStorage("activeTab", 0);
  const [isFehrestOpen, setIsFehrestOpen] = useLocalStorage("isFehrestOpen", false);
  // const [isFehrestOpen, setIsFehrestOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useLocalStorage("isMenuOpen", false);
  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [wasFehrestOpen, saveFehrestState] = useLocalStorage("wasFehrestOpened", false);

  const styles = {
    tabIndicator: { transform: `translateX(${activeTab * -100}%)` },
    tabsContainer: { transform: `translateX(${activeTab * (100 / 3)}%)` },
  };

  function closeFehrest() {
    setIsFehrestOpen(false);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleFehrest() {
    setActiveTab(0);
    setIsFehrestOpen((prev: boolean) => !prev);
    !isFehrestOpen && history.pushState({ isFehrestVisible: true }, "");
  }

  function toggleMenu() {
    setIsMenuOpen((prev: boolean) => !prev);
    !isMenuOpen && history.pushState({ isMenuVisible: true }, "");
  }

  function goToBook() {
    setActiveTab(0);
    wasFehrestOpen && setIsFehrestOpen(true);
    saveFehrestState(false);
  }

  function goToQuiz() {
    isFehrestOpen && saveFehrestState(isFehrestOpen);
    closeFehrest();
    setActiveTab(1);
  }

  function goToYavar() {
    isFehrestOpen && saveFehrestState(isFehrestOpen);
    closeFehrest();
    setActiveTab(2);
  }

  useEffect(() => {
    function onPopstate() {
      if (isMenuOpen) {
        closeMenu();
      } else if (isFehrestOpen) {
        closeFehrest();
      }
    }

    window.addEventListener("popstate", onPopstate);

    return () => window.removeEventListener("popstate", onPopstate);
  }, [isMenuOpen, isFehrestOpen]);

  const [currentBook, setCurrentBook] = useLocalStorage("lastBookRead", "علوم تجربی ۷");
  const [currentPage, setCurrentPage] = useLocalStorage<number | "">(currentBook, 1);
  // in current page tooye context hastesh. baa tavajoh be taghiraatesh
  // mitoonim vaase lazy load shodane content haa barnaame berizim.

  const bookContextValue: BookContextType = {
    currentBook,
    setCurrentBook,
    currentPage,
    setCurrentPage,
    goToQuiz,
  };

  const navBtnStyle = `relative z-[1] flex flex-col sm:flex-row justify-center items-center h-14 w-16 cursor-pointer
                      before:content-[''] before:absolute before:inset-1 before:rounded-[12px] before:bg-black/5 before:opacity-0
                      before:transition-opacity before:duration-200 before:ease-linear before:z-[-1] hover:before:opacity-100`;

  const navbarStyle = `flex mx-2 justify-between items-center border-2 border-b-0 rounded-t-3xl bg-[#eee] border-[#bcbcbc] h-14
                      sm:rounded-b-3xl sm:border-b-2 sm:border-t-0 sm:rounded-t-none`;

  return (
    <BookContext.Provider value={bookContextValue}>
      <>
        <Fehrest isFehrestOpen={isFehrestOpen} onClose={closeFehrest} />

        <Menu isMenuOpen={isMenuOpen} onClose={closeMenu} />

        <div className="max-w-210 min-w-80 mx-auto overflow-hidden flex flex-col-reverse sm:flex-col">
          <nav className={navbarStyle}>
            <button className={`${navBtnStyle}`} onClick={toggleFehrest}>
              <i className="msr text-[34px] scale-x-[-1]"> list </i>
              <span className="mr-0 text-sm sm:text-base sm:mr-2 sm:hidden">فهرست</span>
            </button>
            <div className="flex flex-1 relative">
              <button className={`${navBtnStyle} flex-1`} onClick={goToBook}>
                <i className="msr text-[32px]"> menu_book </i>
                <span className="mr-0 text-sm sm:text-base sm:mr-2"> کتاب </span>
              </button>
              <button className={`${navBtnStyle} flex-1`} onClick={goToQuiz}>
                <i className="msr text-[32px] rotate-45"> exercise </i>
                <span className="mr-0 text-sm sm:text-base sm:mr-2"> تمرین </span>
              </button>
              <button className={`${navBtnStyle} flex-1`} onClick={goToYavar}>
                <i className="msr text-[32px]"> school </i>
                <span className="mr-0 text-sm sm:text-base sm:mr-2"> یاور </span>
              </button>
              <div
                className="absolute top-1 bottom-1 right-0 w-[33.33%] rounded-xl bg-[rgba(30,144,255,0.2)]
                          transition-transform duration-300 ease-in-out z-0"
                style={styles.tabIndicator}
              ></div>
            </div>
            <button className={`${navBtnStyle}`} onClick={toggleMenu}>
              <i className="msr text-[28px] "> menu </i>
              <span className="mr-0 text-sm sm:text-base sm:mr-2 sm:hidden">منو</span>
            </button>
          </nav>

          <div
            className="flex flex-row transition-transform duration-300 ease-linear 
            w-[300%] h-[calc(100vh-58px)] sm:h-[calc(100dvh-58px)]"
            style={styles.tabsContainer}
          >
            {/* <Book /> */}
            {/* <Quiz /> */}
            {/* <Yavar /> */}
          </div>
        </div>
      </>
    </BookContext.Provider>
  );
};

export default StudyPage;
