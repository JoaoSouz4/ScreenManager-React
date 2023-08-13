import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import Button from '../../components/button';
import { ModalEditContext } from '../../context/modalEditContext';
import {MdOutlineLibraryAddCheck} from 'react-icons/md';

export default function Modal(){

    const navigate = useNavigate();
    const {modalState, setModalState} = useContext(ModalEditContext);

    return(
        <div className = {modalState? 'z-40 fixed top-0 left-0': 'hidden'}>
            <div className='bg-[rgb(24,24,24,18%)] w-[100vw] h-[100vh]'>
                <div className="flex justify-center items-center h-full">
                    <div className = 'bg-[#ffff] shadow-2xl p-6 flex gap-3 flex-col justify-center items-center border-2 border-ghover rounded-xl'>
                        <div className = 'flex items-center gap-2 '>
                    
                            <h3 className = 'text-xl'><strong>Dados atualizados com sucesso</strong></h3>
                    
                            <MdOutlineLibraryAddCheck className = 'bg-green'/>
                        </div>
                        <p>Presione ok paracontinuar</p>
                        
                        <Button.Root
                            isActive={() => {
                            navigate('/search')
                            setModalState(false)
                        }}>
                            <Button.Content text={'ok'}/>
                        </Button.Root>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}