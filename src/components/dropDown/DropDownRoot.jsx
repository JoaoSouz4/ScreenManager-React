import { DropDownCtx } from "../../context/dropDownContext"

export function DropDownRoot({children, updateState, currentValue}){
    
    return(
        <DropDownCtx updateState = {updateState} currentValue = {currentValue}>
            <div className = 'relative flex gap-2 items-end'>
                {children}
            </div>
        </DropDownCtx>
    )
}