import { createContext, useState, useEffect } from "react";
import getLaborValue from "../../services/api/getLaborValue";

export const LaborContext = createContext();

export default function LaborProvider({children}){

    const [laborState, setLaborState] = useState(0);

    useEffect(() => {
        const res = getLaborValue();
        res.then((res)=> setLaborState(res))
    }, [])

    return(
        <LaborContext.Provider value = {{laborState, setLaborState}}>
            {children}
        </LaborContext.Provider>
    )
}