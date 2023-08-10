import { createContext, useState } from "react";

export const ModalControllerContext = createContext();

export default function ModalControllerProvider({children}){

    const [flag, setFlag] = useState(false);
    
    return (
        <ModalControllerContext.Provider value = {{flag, setFlag}}>
            {children}
        </ModalControllerContext.Provider>
    )
}