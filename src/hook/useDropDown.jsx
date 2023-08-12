import { useState, useEffect, useRef, createContext} from 'react';

export function useDropDown({updateState, currentValue}){

    const stateRef = useRef();
    const [state, setState] = useState({
        isOpen: false,
        ref: stateRef,
        currentOption: '',
    });

    useEffect(() => {
        if(state.isOpen){
            stateRef.current.style.display = 'flex'
        } else {
            stateRef.current.style.display = 'none'
        }

    },[state.isOpen]);

    useEffect(()=>{
        if(updateState){
            updateState(state.currentOption);
        }
    }, [state.currentOption])
    
    return {state, setState}
}