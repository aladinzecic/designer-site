import React, { createContext, useState } from "react";
const AppContext = createContext();

function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [isBackgroundBlack, setIsBackgroundBlack] = useState(true);

  const values = {
    isLoading,
    setIsLoading,
    isRefreshed,
    setIsRefreshed,
    isBackgroundBlack,
    setIsBackgroundBlack
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
