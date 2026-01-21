import React, { createContext, useContext } from 'react';
import { useLocalStorage } from './useStorage';

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [newsletterSubscribed, setNewsletterSubscribed] = useLocalStorage('app-newsletterSubscribed', false);
  const [lastVisitedPage, setLastVisitedPage] = useLocalStorage('app-lastVisitedPage', '/');

  const value = {
    newsletterSubscribed,
    setNewsletterSubscribed,
    lastVisitedPage,
    setLastVisitedPage,
  };

  return React.createElement(
    AppStateContext.Provider,
    { value },
    children
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}