import "./App.css";
import StudyPage from "./components/StudyPage";
import { ToastProvider } from "./components/ToastProvider";
import { BookProvider } from "./components/BookProvider";
import { StudyPageLayoutProvider } from "./components/StudyPageLayoutProvider";
import LandingPage from "./components/LandingPage";

const Darsyavar = () => {
  return (
    <ToastProvider>
      <BookProvider>
        <LandingPage />
        <StudyPageLayoutProvider>
          <StudyPage />
        </StudyPageLayoutProvider>
      </BookProvider>
    </ToastProvider>
  );
};

export default Darsyavar;
