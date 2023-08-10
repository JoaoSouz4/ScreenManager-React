import { useRef, useState } from "react"

export function ModalCard(props){
    const {name, brand, prices, description} = props;

    return(
        <div className = 'p-6'>
            <div className = 'flex flex-col gap-2'>
                <div className = 'flex flex-col items-center gap-3'>
                    <h1 className = 'text-2xl'>Detalhes do componente</h1>
                    <div className="flex gap-4">
                        <label>
                            <strong>Nome:</strong> {name}
                        </label>
                        <label>
                            <strong>Fabricante original:</strong> {brand}
                        </label>
                    </div>
                </div>

                <div>
                    <ul className = 'flex justify-center gap-3 mt-4'>
                        <li className = 'border-primary border font-light rounded-full p-2 text-primary'>paralela: <strong>R${prices.parallel}</strong></li>
                        <li className = 'border-primary border font-light rounded-full p-2 text-primary'>média: <strong>R${prices.medium}</strong></li>
                        <li className = 'border-primary border font-light rounded-full p-2 text-primary'>original: <strong>R${prices.firstLine}</strong></li>
                    </ul>
                </div>

                <div>
                    Observações:
                    <div className = 'border-2 rounded-md p-4 border-ghover h-[100px]'>
                        {description}
                    </div>
                </div>

            </div>
            </div>
    )
}