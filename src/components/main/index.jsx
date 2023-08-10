import { Outlet} from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default function Main(){
   
    return(
        <div className = 'min-w-[700px] sm:w-full h-full  border-ghover p-4'>
            <Outlet/>
        </div>
    )
}