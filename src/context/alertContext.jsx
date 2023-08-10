import { createContext, useEffect, useRef, useState } from "react";

export const AlertContext = createContext();

export default function AlertProvider ({children}){
    const alertRef = useRef();

    const [alertStates, setAlertStates] = useState({
        isVisible : false,
        ref : alertRef,
        currentMsg: ''
    });

    const alertActions = {
        showAlert: (message) => {
            setAlertStates({...alertStates, isVisible: true, currentMsg : message})
            setTimeout(() => {
                setAlertStates({...alertStates, isVisible: false, currentMsg: ''})
            }, 4000)
        }
    }
    
    return (
        <AlertContext.Provider value = {{alertStates, alertActions}}>
            {children}
        </AlertContext.Provider>
    )
}