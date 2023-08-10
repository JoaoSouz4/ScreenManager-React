import { createContext, useState, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { buildActions } from "./buildActions";

export const FormRegisterContext = createContext();

export function FormProvider({children}){

    const [formState, dispatch] = useReducer(reducer, initialState);
    const actions = buildActions(dispatch);

    return(
        <FormRegisterContext.Provider value = {{formState, actions}}>
            {children}
        </FormRegisterContext.Provider>
    )
}