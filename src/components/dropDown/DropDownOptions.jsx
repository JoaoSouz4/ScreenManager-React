

import { useContext } from "react";
import { DropDownContext } from "../../context/dropDownContext";


export function DropDownOptions ({children, width}){
    const {state} = useContext(DropDownContext);

    return(
        <div 
            className = {`z-40 absolute hidden top-[calc(100%+0.48rem)] left-[calc(100%-5rem)]  flex-col bg-gray border-ghover border-2 rounded-xl shadow-md ease-in duration-200`}
            ref = {state.ref}
        >
            {children}
        </div>
    )
}