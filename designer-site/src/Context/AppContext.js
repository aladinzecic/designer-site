import React, { createContext, useState } from "react";
const AppContext = createContext();

function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [isBackgroundBlack, setIsBackgroundBlack] = useState(true);
  const [isMenuOn, setIsMenuOn] = useState(false);

  const values = {
    isLoading,
    setIsLoading,
    isRefreshed,
    setIsRefreshed,
    isBackgroundBlack,
    setIsBackgroundBlack,
    setIsMenuOn,
    isMenuOn
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
