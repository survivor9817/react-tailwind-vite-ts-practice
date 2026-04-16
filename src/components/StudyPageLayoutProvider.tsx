// src/context/BookContext.tsx
import { createContext } from "react";
import type { ReactNode } from "react";

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

type Props = {
  value: StudyPageLayoutContextType;
  children: ReactNode;
};

export const StudyPageLayoutProvider = ({ value, children }: Props) => {
  return (
    <StudyPageLayoutContext.Provider value={value}>{children}</StudyPageLayoutContext.Provider>
  );
};
