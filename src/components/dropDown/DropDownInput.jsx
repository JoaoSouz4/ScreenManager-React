import Button from "../button";
import Input from "../input";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropDownContext";

export function DropDownInput({label, value}){
    const {state, setState} = useContext(DropDownContext);

    return(
        <Input.Root>
            <Input.Label content = {label}/>
            <Input.Wrapper>
                <Input.Content>
                    <Input.Main 
                        isDisabled = {true} 
                        value = {value}
                    />
                </Input.Content>
            </Input.Wrapper>
        </Input.Root>
    )
}