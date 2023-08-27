import { createContext, ReactNode } from "react";
import useDarkMode, {
  getInitialTheme,
  setThemeHeader,
  ThemeType,
} from "./hook";

interface Props {
  children?: ReactNode;
}

interface context {
  colorTheme?: ThemeType;
  setTheme?: (val: ThemeType) => void;
}

export const ThemeContext = createContext<context>({
  colorTheme: getInitialTheme(),
});

/* istanbul ignore next */
export function ThemeProvider({ children }: Props) {
  const [colorTheme, changeTheme] = useDarkMode();

  const setTheme = (val: ThemeType) => {
    changeTheme((prev) => {
      setThemeHeader(val, prev);
      return val;
    });
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
