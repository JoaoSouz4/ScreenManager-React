import { useState, createContext  } from "react";

export const DefaultModalContext = createContext();

export default function DefaultModalProvider({children}){

    const [modalStates, setModalStates] = useState({
        isOpen: false, 
        msg: ''
    });

    const modalActions = {
        showModal: (msg) => setModalStates({...modalStates, isOpen: true, msg: msg}),
        closeModal: () => setModalStates({...modalStates, isOpen: false})
    }

    return(
        <DefaultModalContext.Provider value = {{modalStates, modalActions}}>
            {children}
        </DefaultModalContext.Provider>
    )
}