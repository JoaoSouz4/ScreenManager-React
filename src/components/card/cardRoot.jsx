import deleteScreen from '../../services/deleteScreen'
import DropDown from '../dropDown/'
import { useContext } from 'react';
import { ScreenCardContext } from '../../context/ScreenCardContext';
import { AllScreenContext } from '../../context/AllScrennContext';
import {MdDelete, MdEditNote} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export function CardRoot({children}){

    const {cardStates} = useContext(ScreenCardContext);
    const {setAllScreen} = useContext(AllScreenContext);
    const {_id} = cardStates;

    const navigate = useNavigate();

    return(
        <div className = ' bg-[#ffff] border-2 border-ghover rounded-2xl p-6 hover: cursor-pointer hover:shadow-md hover:shadow-primary hover:ease-in duration-200'>

            <div>
                <div className = ' flex justify-end relative'>
                    <DropDown.Root updateState={() => {console.log('')}}>
                        <DropDown.Button type = 'dotted'/>
                        <DropDown.Options width={'100%'}>
                            <DropDown.Option
                                label = 'Editar'
                                action={() => navigate(`/edit/${cardStates.name}`)}
                                icon = {MdEditNote}
                            />
                            <DropDown.Option
                                label = 'Deletar'
                                action={() =>{
                                    fetch(`http://localhost:8080/delete/deletescreen/${_id}`, {
                                        method: 'POST',
                                    })
                                    .then(res => res.json())
                                    .then(res => setAllScreen(res.currentList))
                                } }
                                icon = {MdDelete}
                            />
                        </DropDown.Options>

                    </DropDown.Root>
                </div>

                {children}
            </div>
        </div>
    )
}