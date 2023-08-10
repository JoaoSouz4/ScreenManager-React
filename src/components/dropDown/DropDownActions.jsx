import { Separator } from "./Separator";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropDownContext";

export function DropDownOption({label, action, icon: Icon}){
    const {state, setState} = useContext(DropDownContext);

    function handleClick(){
        setState({...state, currentOption: label, isOpen: !state.isOpen})
        if(action) action();
    }
    return (
        <>
            <div className = 'flex items-center gap-2  p-2 w-full hover:bg-ghover hover: cursor-pointer hover: ease-in duration-200'>
                {Icon && <Icon />}
                <div
                    className = ''
                    onClick = {handleClick}
                >
                    {label}
                </div>
            </div>
            <Separator />
        </>
        
    )
}