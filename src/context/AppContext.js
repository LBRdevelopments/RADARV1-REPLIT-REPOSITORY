import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ /* initial state */ });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext); 