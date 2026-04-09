import { useMediaQuery } from "../hooks/useMediaQuery.ts";
import Sidebar from "./Sidebar.tsx";
import FehrestList from "./FehrestList.tsx";
import BookSelect from "./BookSelect.tsx";

type Props = {
  onClose: () => void;
  isFehrestOpen: boolean;
};

const Fehrest = ({ onClose, isFehrestOpen }: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 1440px)");
  const isBackdropOn = isFehrestOpen && isSmallScreen;

  return (
    <Sidebar isOpen={isFehrestOpen} isBackdropOn={isBackdropOn} onClose={onClose} side={"right-0"}>
      <header className="flex justify-center">
        <BookSelect />
      </header>

      <ol className="mt-4">
        <FehrestList />
      </ol>
    </Sidebar>
  );
};

export default Fehrest;
