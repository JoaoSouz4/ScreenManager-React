import {MdOutlineMoreHoriz} from 'react-icons/md';

export function DropDownButtonDotted({isActive}){

    function handleClick(){
        isActive();
    }
    return(
        <button 
            onClick = {handleClick}
            className = 'border-2 border-transparent hover:border-primary rounded ease-in duration-300'
        >
            <MdOutlineMoreHoriz className=' text-primary'/>
        </button>
    )
}