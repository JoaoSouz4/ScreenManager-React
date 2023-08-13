import { useContext, useState } from "react";
import Input from "../../components/input";
import {LaborContext} from '../../context/labor';
import updateLaborValue from "../../services/api/updateLaborValue";
import getLaborValue from "../../services/api/getLaborValue";
import { DefaultModalContext } from "../../context/defaultModal";
import DefaultModal from "../../components/defaultModal";

export default function LaborPage(){

    const {laborState, setLaborState} = useContext(LaborContext);
    const {modalStates, modalActions} = useContext(DefaultModalContext)
    const [newLaborValue, setNewLabelValue] = useState();

    const handleClick = () => {
        updateLaborValue(newLaborValue).then(res => {
            if(res.isSucess){
                getLaborValue().then(res => setLaborState(res))
                return modalActions.showModal(res.message);
            }
        });
        
    }
    return(
        
            
                
            <div className = 'w-full h-full flex flex-col justify-center items-center'>
            <DefaultModal />
            <div className = 'w-[400px]'>
                <div className = 'flex gap-4 text-xl border-b border-ghover pb-4'>
                    Valor Atual: <div className = ' flex justify-center items-center gap-2 text-sm border border-primary rounded-full px-4'>R$ {laborState}</div>
                </div>
                <form className = 'w-full pt-4'>
                    <Input.Root>
                        <Input.Label content={'Atualizar mão de obra'}/>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Main
                                    placeholder={'valor para os serviços...'}
                                    value = {newLaborValue}
                                    isChange={(e)=> setNewLabelValue(e.target.value)}
                                />
                            </Input.Content>

                            <Input.Button.Root
                                isActive={handleClick}
                            >
                                <Input.Button.Content text={'atualizar'}/>
                            </Input.Button.Root>
                        </Input.Wrapper>
                    </Input.Root>
                </form>
            </div>
        </div>   
    )
}