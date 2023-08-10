import { createContext, useEffect } from "react";

export const ScreenCardContext = createContext();

export default function ScreenCardProvider({children, value: cardStates}){

    return (
        <ScreenCardContext.Provider value = {{cardStates}}>
            {children}
        </ScreenCardContext.Provider>
    )
} 