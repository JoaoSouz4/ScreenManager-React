import { useState, createContext, useContext, useRef, useEffect} from "react";

export const ModalContext = createContext();

export default function ModalProvider({children}){
    const modalRef = useRef({display : 'none'});

    const [modalState, setModalState] = useState({
        ref : modalRef,
        isOpen: false,
    });

    useEffect(() => {
        if(modalState.isOpen == true) {
            modalRef.current.style.display = 'flex'
        } else if(modalState.isOpen == false) {
            modalRef.current.style.display = 'none'
        }
    }, [modalState.isOpen])

    return(
        <ModalContext.Provider value = {{modalState, setModalState}}>
            {children}
        </ModalContext.Provider>
    )
}