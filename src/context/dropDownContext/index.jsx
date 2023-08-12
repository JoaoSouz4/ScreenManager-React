import { useDropDown } from "../../hook/useDropDown";
import { createContext } from 'react';

export const DropDownContext = createContext();

export function DropDownCtx ({children, updateState, currentValue}){
    const {state, setState} = useDropDown({updateState, currentValue});

    return (
        <DropDownContext.Provider value = {{state, setState}}>
            {children}
        </DropDownContext.Provider>
    );
}
