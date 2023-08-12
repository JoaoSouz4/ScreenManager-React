import { createContext, useState } from "react";

export const ModalEditContext = createContext();

export default function ModalEditProvider({children}){

    const [modalState, setModalState] = useState(false);
    return(
        <ModalEditContext.Provider value = {{modalState, setModalState}}>
            {children}
        </ModalEditContext.Provider>
    )
}