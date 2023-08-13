import { DefaultModalContext } from "../../context/defaultModal";
import Button from "../button";
import { useContext } from "react";

export default function DefaultModal(){
    const {modalStates, modalActions} = useContext(DefaultModalContext);
    const handleClick = () => {
        return modalActions.closeModal();
    }

    return (
        
            <div className={modalStates.isOpen? 'fixed left-0 w-full h-full bg-[rgb(24,24,24,30%)]': 'hidden'}>
                <div className = 'relative w-full h-full flex justify-center items-center'>
                    <div className = ''>
                        <div className = 'bg-[#ffff] shadow-2xl rounded-2xl p-4 flex flex-col gap-4 border-2 border-ghover'>
                            <div className = 'text-xl'>
                                {modalStates.msg}
                            </div>
                            <div className = 'flex justify-center  w-full'>
                                <Button.Root isActive={handleClick}>
                                    <Button.Content text={'fechar'}/>
                                </Button.Root>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}