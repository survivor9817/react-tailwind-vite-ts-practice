import "./App.css";
import StudyPage from "./components/StudyPage";
import { ToastProvider } from "./components/ToastProvider";
import { BookProvider } from "./components/BookProvider";
// import LandingPage from "./components/LandingPage";

const Darsyavar = () => {
  return (
    <ToastProvider>
      <BookProvider>
        {/* <LandingPage /> */}
        <StudyPage />
      </BookProvider>
    </ToastProvider>
  );
};

export default Darsyavar;
