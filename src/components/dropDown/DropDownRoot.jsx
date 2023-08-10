import { DropDownCtx } from "../../context/dropDownContext"

export function DropDownRoot({children, updateState}){
    
    return(
        <DropDownCtx updateState = {updateState}>
            <div className = 'relative flex gap-2 items-end'>
                {children}
            </div>
        </DropDownCtx>
    )
}