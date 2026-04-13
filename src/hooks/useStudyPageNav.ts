import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// baare aval ke miaad fehrest baaz baashe behtar nist??!
export const useStudyPageNav = () => {
  const [activeTab, setActiveTab] = useLocalStorage("activeTab", 0);
  const [isFehrestOpen, setIsFehrestOpen] = useLocalStorage("isFehrestOpen", false);
  const [isMenuOpen, setIsMenuOpen] = useLocalStorage("isMenuOpen", false);
  const [wasFehrestOpen, setWasFehrestState] = useLocalStorage("wasFehrestOpened", false);

  const closeFehrest = () => {
    setIsFehrestOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleFehrest = () => {
    setActiveTab(0);
    setIsFehrestOpen((prev: boolean) => !prev);
    !isFehrestOpen && history.pushState({ isFehrestVisible: true }, "");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev: boolean) => !prev);
    !isMenuOpen && history.pushState({ isMenuVisible: true }, "");
  };

  const goToBook = () => {
    setActiveTab(0);
    wasFehrestOpen && setIsFehrestOpen(true);
    setWasFehrestState(false);
  };

  const goToQuiz = () => {
    isFehrestOpen && setWasFehrestState(isFehrestOpen);
    closeFehrest();
    setActiveTab(1);
  };

  const goToYavar = () => {
    isFehrestOpen && setWasFehrestState(isFehrestOpen);
    closeFehrest();
    setActiveTab(2);
  };

  useEffect(() => {
    const onPopstate = () => {
      if (isMenuOpen) {
        closeMenu();
      } else if (isFehrestOpen) {
        closeFehrest();
      }
    };

    window.addEventListener("popstate", onPopstate);

    return () => window.removeEventListener("popstate", onPopstate);
  }, [isMenuOpen, isFehrestOpen]);

  return {
    activeTab,

    isFehrestOpen,
    closeFehrest,
    toggleFehrest,

    isMenuOpen,
    closeMenu,
    toggleMenu,

    goToBook,
    goToQuiz,
    goToYavar,
  };
};
