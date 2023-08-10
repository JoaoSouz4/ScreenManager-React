import Input from '../../components/input';
import { MdSearch } from 'react-icons/md';
import useSearchItem from '../../hook/useSearchItem';
import { ComponentCard } from './componentCard';
import Spinner from '../../components/spinner';
import { useState, useContext } from 'react'
import ModalProvider from '../../context/modalContext'
import { CardRoot } from '../../components/card/cardRoot';
import ScreenCardProvider from '../../context/ScreenCardContext';
import { AllScreenContext } from '../../context/AllScrennContext';
import { AlertContext } from '../../context/alertContext';
import Alert from '../../components/alert';

export default function SearchPage(){

    const {allScreen, setAllScreen} = useContext(AllScreenContext)
    const [searchValue, setSearchValue] = useState('');
    const {alertActions} = useContext(AlertContext);

    function handleClick(){
        fetch(`http://localhost:8080/get/findscreen/${searchValue}`)
            .then(res => res.json())
            .then(res => {
                if(!res.isSucess) {
                    return alertActions.showAlert('Item não encontrado')
                } else {
                    return setAllScreen(res.list)
                }  
            })
        ;
    }

    return(
        <>
            <Alert />
            <div className = 'relative flex flex-col gap-4 h-full'>
                <div>
                    <Input.Root>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Main
                                    value = {searchValue}
                                    isChange={(e) => setSearchValue(e.target.value)}
                                />
                            </Input.Content>
                            <Input.Button.Root
                                width='100px'
                                isActive={handleClick}
                            >
                                <Input.Button.Icon icon = {MdSearch}/>
                            </Input.Button.Root>
                        </Input.Wrapper>
                    </Input.Root>
                </div>
                <div className = 'h-[90%] bg-gray rounded-xl'>
            
                    {
                        !allScreen ?
                            <div className = 'w-full h-full flex items-center justify-center'>
                                <Spinner/>
                            </div>
                        :
                            allScreen.length === 0?
                                <div className = 'flex justify-center items-center h-full'>Sem registros de telas :/</div>
                            :
                            <div className = 'grid grid-cols-2 gap-6 h-[100%] overflow-y-scroll p-6'>
                                {
                                    allScreen.map( i => {
                                        return(
                                            <ScreenCardProvider key={i._id} value = {i}>
                                                <ModalProvider>
                                                    <CardRoot>
                                                        <ComponentCard/>
                                                    </CardRoot>
                                                </ModalProvider>
                                            </ScreenCardProvider>
                                        )
                                    })
                                }
                            </div>
                    }
            
                </div>
            </div>
        </>
    )
}