// 1. تایپ
type XContextType = { ... };

// 2. کانتکست با default = undefined
const XContext = createContext<XContextType | undefined>(undefined);

// 3. هوک مصرف‌کننده با چک واقعی
export const useXContext = (): XContextType => {
  const ctx = useContext(XContext);
  if (!ctx) throw new Error("useXContext must be used within XProvider");
  return ctx;
};

// 4. Provider
export const XProvider = ({ children }: { children: ReactNode }) => {
  // state و منطق
  return <XContext.Provider value={value}>{children}</XContext.Provider>;
};