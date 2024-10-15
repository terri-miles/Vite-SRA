import React, { createContext, useState } from "react";

export const sraContext = createContext();

const GlobalContext = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isModal, setIsModal] = useState(false)

  const contextValue = { selectedPage, setSelectedPage, isModal, setIsModal };
  return (
    <sraContext.Provider value={contextValue}>{children}</sraContext.Provider>
  );
};

export default GlobalContext;
