// src/context/BookContext.tsx
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useStudyPageNav } from "../hooks/useStudyPageNav";

export type StudyPageLayoutContextType = {
  activeTab: number;
  goToBook: () => void;
  goToQuiz: () => void;
  goToYavar: () => void;
  isFehrestOpen: boolean;
  closeFehrest: () => void;
  toggleFehrest: () => void;
  isMenuOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
};

export const StudyPageLayoutContext = createContext<StudyPageLayoutContextType>({
  activeTab: 0,
  goToBook: () => {},
  goToQuiz: () => {},
  goToYavar: () => {},
  isFehrestOpen: false,
  closeFehrest: () => {},
  toggleFehrest: () => {},
  isMenuOpen: false,
  closeMenu: () => {},
  toggleMenu: () => {},
});

export const useStudyPageLayoutContext = (): StudyPageLayoutContextType => {
  const ctx = useContext(StudyPageLayoutContext);
  if (!ctx) throw new Error("useStudyPageLayout must be used within StudyPageLayoutProvider");
  return ctx;
};

type Props = {
  children: ReactNode;
};

export const StudyPageLayoutProvider = ({ children }: Props) => {
  const navTools = useStudyPageNav();
  return (
    <StudyPageLayoutContext.Provider value={navTools}>{children}</StudyPageLayoutContext.Provider>
  );
};
