import logo from '../../assets/logodefault.png'
import Button from '../button'
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';

export default function MenuBar(){
    return(
        <div className = 'flex justify-center h-full items-center border-r border-l border-ghover w-[300px]'> 
            <div className="flex flex-col justify-center h-full w-full  gap-[3rem] ">
                <div className = 'w-full flex justify-center'>
                    <img src={logo} alt="" className = 'w-[5rem]'/>
                </div>

                
                    <ul className = 'flex flex-col gap-2'>
                        <li>
                            <Link to = {'/search'}>
                                <div className = 'flex items-center gap-2 hover:bg-primary p-4 hover:shadow-md hover:text-white rounded ease-in duration-200'>
                                    <MdSearch />
                                    <span><strong>Buscar items</strong></span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to = {'/insert'}>
                                <div className = 'flex items-center gap-2 hover:bg-primary p-4 hover:shadow-md hover:text-white rounded ease-in duration-200'>
                                    <MdAdd />
                                    <span><strong>Registrar componente</strong></span>
                                </div>
                            </Link>
                        </li>
                    </ul>
            
            </div>
        </div>
    )
}