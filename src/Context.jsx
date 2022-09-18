import React, { useContext,useEffect, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext(); 

let API ="https://hn.algolia.com/api/v1/search?query=";

const initialState = {
    isLoading: true,
    query: "React",
    nbPages: 0,
    page: 0,
    hits: []
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);



    const fetchApiData = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    const removePost=(post_ID)=>{
        dispatch({
            type:"REMOVE_POST",
            payload: post_ID
        })

    }

    const searchPost=(searchQuery)=>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:searchQuery,
        });
    }
    useEffect(() => {
        fetchApiData(`${API} query=${state.query}&page=${state.page}`)
    }, [state.query]);
    return <AppContext.Provider value={{...state, removePost,searchPost  }}>
        {children}
    </AppContext.Provider>
};
//create Custom Hook
const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider, useGlobalContext };



