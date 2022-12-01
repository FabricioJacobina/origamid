import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorege = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ nome: 'Fabrício' }}>
      {children}
    </GlobalContext.Provider>
  );
};
