import {useContext} from 'react';
import { AlertContext } from "../../context/alertContext";
import {MdOutlineWarning} from 'react-icons/md';

export default function Alert(){

    const {alertStates, setAlertStates} = useContext(AlertContext);
    
    return (
        <div>
            <div className = {!alertStates.isVisible? `hidden`: 'fixed bottom-10 left-10 z-40 animate-bounce'}>
                <div className = 'border-2 border-ghover p-4 rounded-lg shadow-md bg-[#ffff]'>
                    <div className = 'flex gap-2 items-center'>
                        <div>
                            <MdOutlineWarning className = 'text-yellow'/>
                        </div>
                        <label>
                            <strong>
                                {alertStates.currentMsg}
                                *
                            </strong>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}