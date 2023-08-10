import Button from "../button"
import {MdArrowDropDown, MdOutlineMoreHoriz} from 'react-icons/md';
import { DropDownContext } from "../../context/dropDownContext";

import { useContext } from 'react';
import { DropDownButtonDotted } from "./DropDownButtonDotted";

export function DropDownButton({func, type}){
    const {state, setState} = useContext(DropDownContext);
    return(
        
        <div>
            {
                type == 'dotted' ? 
                    <DropDownButtonDotted isActive = {() => {setState({...state, isOpen: !state.isOpen})}}/>
                :
                <Button.Root isActive = {() => {setState({...state, isOpen: !state.isOpen})}}>
                    
                    <Button.Icon icon = {MdArrowDropDown}/>
                    
                </Button.Root>
            }
        </div>
    )
}