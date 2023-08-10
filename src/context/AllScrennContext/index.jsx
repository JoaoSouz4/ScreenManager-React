import { createContext, useState, useEffect} from "react";

export const AllScreenContext = createContext();

export default function AllScreenProvider({children}){

    const [allScreen, setAllScreen] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/get/allscreen')
            .then((res) => res.json())
            .then((res) => {
                setAllScreen(res.list)
            }
        )
    }, []);

    return (
        <AllScreenContext.Provider value = {{allScreen, setAllScreen}}>
            {children}
        </AllScreenContext.Provider>
    )
}