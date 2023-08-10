import {useParams} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import Input from '../../components/input';
import DropDown from '../../components/dropDown';
import Button from '../../components/button';
import Alert from '../../components/alert';
import { ScreenForm } from './screenForm';
import TextArea from '../../components/textArea';
import { FormEditContext } from '../../context/EditContext';

export default function EditComponentPage(){
    const {name} = useParams();
    const {formEditState, actions} = useContext(FormEditContext);

    useEffect(()=>{
        fetch(`http://localhost:8080/get/findscreen/${name}`)
            .then(res => res.json())
            .then(res => actions.updateAll(res.list))
    }, []);

    function handleSubmitEdit(){
        console.log(formEditState)
    }

    return(
        <div className = ' relative h-full flex justify-center'>
            <Alert />
        
            <div className = ' h-full flex justify-center items-center w-[50%]'>
                <form className = 'flex flex-col gap-3 w-full'>
                    <Input.Root>
                        <Input.Label content='Nome do aparelho'/>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Main 
                                    value = {formEditState.name}
                                    isChange = {(e) => {actions.updateName(e.target.value)}}
                                />
                            </Input.Content>
                        </Input.Wrapper>
                    </Input.Root>

                    <DropDown.Root updateState = {actions.updateBrand}>
                        <DropDown.Input
                            value = {formEditState.brand}
                            label = 'Marca do aparelho'
                            isChange = {(e) => {actions.updateBrand(e.target.value)}}
                        />
                        <DropDown.Button />
                        <DropDown.Options>
                            <DropDown.Option label = 'SAMSUNG'/>
                            <DropDown.Option label = 'APPLE'/>
                            <DropDown.Option label = 'MOTOROLLA'/>
                            <DropDown.Option label = 'XIAOMI'/>
                            <DropDown.Option label = 'LG'/>
                        </DropDown.Options>
                    </DropDown.Root>

                    <ScreenForm />
                    
                    <TextArea.Root>
                        <TextArea.Label title = '*Observações*'/>
                        <TextArea.Input 
                            value = {formEditState.description}
                            isChange={(e) => {actions.updateDescription(e.target.value)}}
                        />
                    </TextArea.Root>

                    <Button.Root 
                        isActive={handleSubmitEdit}
                        isDisabled = {false}
                    >
                        {
                            <Button.Content 
                                text = { 'Editar'}
                            />
                        }
                    </Button.Root>
                </form>
            </div>
        </div>
    )
}