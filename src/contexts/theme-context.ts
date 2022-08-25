import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface IThemeContext {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useThemeContext = () => useContext(ThemeContext)!;
