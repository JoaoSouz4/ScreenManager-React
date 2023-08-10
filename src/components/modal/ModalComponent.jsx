import { useContext, useEffect } from "react";
import { ModalContext } from "../../context/modalContext";


export function ModalComponent({isActive, children}){

    const {modalState, setModalState} = useContext(ModalContext);

    return(
        <div ref = {modalState.ref} className = 'hidden absolute top-1/4 left-1/2 z-50'>
            <div className = 'flex justify-center '>
                <div className= 'flex flex-col max-w-[550px] fixed bg-[#ffff] z-30 rounded-lg shadow-2xl border-gray border-4' >
                    <div
                        className = 'hover:cursor-pointer z-10 absolute top-2 p-2 right-3 border-spacing-3 b-gray2 rounded-full'
                        onClick={() => {
                            setModalState({...modalState, isOpen: false})
                        }}
                    >
                        X
                    </div>
                    
                    <div>
                        {children}
                    </div>
                
                </div>
            </div>
        </div>
    )
}