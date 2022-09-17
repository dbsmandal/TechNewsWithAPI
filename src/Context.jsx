import React,{useContext} from "react";
//Context Creation
const AppContext=React.createContext();
//Create a Provider Function

const AppProvider=({children})=>{
    return <AppContext.Provider value={"Dbsmandal react "}> {children}</AppContext.Provider>
};
//create Custom Hook
const useGlobalContext=()=>{
    return useContext(AppContext)
};

export {AppContext,AppProvider,useGlobalContext};




