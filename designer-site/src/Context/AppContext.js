import React, { createContext, useState } from "react";
const AppContext = createContext();

function ContextProvider({children}){
    const [isLoading,setIsLoading]=useState(true);
    const values={
        isLoading,
        setIsLoading
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;

}
export { AppContext, ContextProvider };
