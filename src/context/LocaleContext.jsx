import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { defaultLocale, dictionary, locales, translatePath } from '../i18n';

const LocaleContext = createContext();
const STORAGE_KEY = 'shanu-portfolio-locale';

const resolveInitialLocale = () => {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && dictionary[stored]) {
    return stored;
  }

  const browserLanguage = window.navigator.language ?? '';
  if (browserLanguage.toLowerCase().startsWith('hi')) {
    return 'hi';
  }

  return defaultLocale;
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(resolveInitialLocale);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, locale);
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      locales,
      dictionary,
      content: dictionary[locale],
      t: (key) => translatePath(locale, key),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return context;
};
