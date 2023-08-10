import { createContext, useState, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { buildActions } from "./buildActions";

export const FormEditContext = createContext();

export default function FormEditProvider({children}){

    const [formEditState, dispatch] = useReducer(reducer, initialState);
    const actions = buildActions(dispatch);

    return(
        <FormEditContext.Provider value = {{formEditState, actions}}>
            {children}
        </FormEditContext.Provider>
    )
}