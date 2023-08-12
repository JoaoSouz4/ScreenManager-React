import Input from '../../components/input';
import DropDown from '../../components/dropDown';
import Button from '../../components/button'
import {MdAttachMoney} from 'react-icons/md';
import Spinner from '../../components/spinner';
import { FormRegisterContext } from '../../context/formRegisterContext';
import { useContext, useRef } from 'react';
import TextArea from '../../components/textArea';
import Alert from '../../components/alert';
import { AlertContext } from '../../context/alertContext';
import { ScreenForm } from './screenForm';

export default function InsertPage(){
    const {formState, actions} = useContext(FormRegisterContext);
    const {alertActions}  = useContext(AlertContext);

    const handleSubmit = () => {
        if(formState.name == '') return alertActions.showAlert('Insira um nome antes de registrar o item');
        if(formState.prices.parallel == '' && formState.prices.medium == '' && formState.prices.firstLine == '' ) return alertActions.showAlert('Preencha ao menos uma categoria de preço para o item');

        actions.isFetching(true);
        fetch('http://localhost:8080/post/insert', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: formState.name,
                brand: formState.brand,
                description: formState.description,
                prices: {
                    parallel: formState.prices.parallel,
                    medium: formState.prices.medium,
                    firstLine: formState.prices.firstLine,
                },
                
            })
        })
            .then(res => res.json())
            .then(res => {
                actions.isFetching(false);
                if(!res.isSucess) alertActions.showAlert(res.message)
                actions.resetForm();
            })
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
                                    value = {formState.name}
                                    isChange = {(e) => actions.updateName(e.target.value)}
                                />
                            </Input.Content>
                        </Input.Wrapper>
                    </Input.Root>

                    <DropDown.Root updateState = {actions.updateBrand} currentValue={formState.brand}>
                        <DropDown.Input
                            value = {formState.brand}
                            label = 'Marca do aparelho'
                            isChange = {(e) => actions.updateBrand(e.target.value)}
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
                            value = {formState.description}
                            isChange={(e) => actions.updateDescription(e.target.value)}
                        />
                    </TextArea.Root>

                    <Button.Root 
                        isActive={handleSubmit}
                        isDisabled = {formState.isFetching? true : false}
                    >
                        {
                            <Button.Content 
                                text = {formState.isFetching? 'Aguarde...':'Registrar'}
                            />
                        }
                    </Button.Root>
                </form>
            </div>
        </div>
    )
}