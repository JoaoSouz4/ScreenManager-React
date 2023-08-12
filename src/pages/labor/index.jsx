import Input from "../../components/input";

export default function LaborPage(){
    return(
        <div className = 'w-full h-full'>
            <div className = 'flex justify-center items-center h-full'>
                <form className = 'w-[300px]'>
                    <Input.Root>
                        <Input.Label content={'Valor da mão de obra'}/>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Main />
                            </Input.Content>

                            <Input.Button.Root>
                                <Input.Button.Content text={'atualizar'}/>
                            </Input.Button.Root>
                        </Input.Wrapper>
                    </Input.Root>
                </form>
            </div>
        </div>
    )
}