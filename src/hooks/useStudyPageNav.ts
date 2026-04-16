import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// baare aval ke miaad fehrest baaz baashe behtar nist??!
export const useStudyPageNav = () => {
  const [activeTab, setActiveTab] = useLocalStorage("activeTab", 0);
  const [isFehrestOpen, setIsFehrestOpen] = useLocalStorage("isFehrestOpen", false);
  const [isMenuOpen, setIsMenuOpen] = useLocalStorage("isMenuOpen", false);
  const [wasFehrestOpen, setWasFehrestOpen] = useLocalStorage("wasFehrestOpened", false);

  const closeFehrest = () => setIsFehrestOpen(false);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleFehrest = () => {
    setActiveTab(0);
    setIsFehrestOpen((prev: boolean) => !prev);
    !isFehrestOpen && history.pushState({ isFehrestVisible: true }, "");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev: boolean) => !prev);
    !isMenuOpen && history.pushState({ isMenuVisible: true }, "");
  };

  const goToTab = (tabIndex: number) => {
    const isBookTab = tabIndex === 0;
    if (isBookTab) {
      if (wasFehrestOpen) setIsFehrestOpen(true);
      setWasFehrestOpen(false);
    } else {
      if (isFehrestOpen) setWasFehrestOpen(isFehrestOpen);
      closeFehrest();
    }

    setActiveTab(tabIndex);
  };

  const goToBook = () => goToTab(0);

  const goToQuiz = () => goToTab(1);

  const goToYavar = () => goToTab(2);

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
    // goToTab,
    goToBook,
    goToQuiz,
    goToYavar,

    isFehrestOpen,
    closeFehrest,
    toggleFehrest,

    isMenuOpen,
    closeMenu,
    toggleMenu,
  };
};
