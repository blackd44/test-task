import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface Props {
  children?: ReactNode;
}

interface Context {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNav: () => void;
}

export const MenuContext = createContext<Context>({
  showNav: true,
  setShowNav: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleNav: function (): void {
    throw new Error("Function not implemented.");
  },
});

export function MenuProvider({ children }: Props) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = useCallback(() => setShowNav((p) => !p), []);

  const contextValue = useMemo(
    () => ({
      showNav,
      setShowNav,
      toggleNav,
    }),
    [showNav, setShowNav, toggleNav]
  );
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
}

export default MenuProvider;
