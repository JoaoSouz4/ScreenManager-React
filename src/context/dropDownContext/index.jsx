import { useDropDown } from "../../hook/useDropDown";
import { createContext } from 'react';

export const DropDownContext = createContext();

export function DropDownCtx ({children, updateState}){
    const {state, setState} = useDropDown({updateState});

    return (
        <DropDownContext.Provider value = {{state, setState}}>
            {children}
        </DropDownContext.Provider>
    );
}
