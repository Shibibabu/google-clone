import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const stateContext = createContext();

//reducer is act according to changes in state

//its a higher order component
export const StateProvider = ({
    reducer, initialState, children
}) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}

    </stateContext.Provider>
);

//hook which allow us to pull information from the data layer
export const useStateValue = () => useContext(stateContext);