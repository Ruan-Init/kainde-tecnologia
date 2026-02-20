"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { translations, type Locale, type TranslationKeys } from "./i18n";

type Theme = "dark" | "light";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const savedTheme = localStorage.getItem("kainde-theme") as Theme | null;
    const savedLocale = localStorage.getItem("kainde-locale") as Locale | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedLocale) setLocaleState(savedLocale);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("kainde-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("kainde-locale", newLocale);
  }, []);

  const t = translations[locale];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, locale, setLocale, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
