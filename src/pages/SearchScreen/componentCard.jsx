import {MdOutlineMoreHoriz} from 'react-icons/md';
import { ModalCard } from './ModalCard';
import Modal from '../../components/modal';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/modalContext';
import { ScreenCardContext } from '../../context/ScreenCardContext';
import { LaborContext } from '../../context/labor';


export function ComponentCard(props){
    
    const {modalState, setModalState} = useContext(ModalContext);
    const {cardStates} = useContext(ScreenCardContext);
    const {laborState} = useContext(LaborContext);
    const {name, brand, prices, description } = cardStates;

    return(

        <>
            <Modal.Root>
                <Modal.Component isActive={modalState}>
                    <ModalCard 
                        name = {name}
                        brand = {brand}
                        prices = {prices}
                        description = {description}
                    />
                </Modal.Component>
            </Modal.Root>
            <div 
                onClick={() => setModalState({...modalState, isOpen: true})}
            > 
                <div className = "flex flex-col gap-2 w-full">
                    <div className = 'flex gap-4 items-center justify-between '>
                        <label className = 'text-xl text-black'><strong>{name}</strong></label>
                        <label className = ' p-0 text-[rgb(32,32,32,55%)] '>{brand}</label>
                    </div>

                    <div className = ' border rounded-xl p-4 border-ghover flex flex-col gap-3'>
                        <div className = 'flex justify-between'>
                            <label className='text-gray2'>Paralela:</label>
                            <span>
                                <div className = 'flex gap-2'>
                                    <div className = 'text-primary'>R${prices.parallel}</div>
                                    <div className = ' px-1  text-[white] border   bg-gray2 rounded'><strong>R$ {prices.parallel + laborState}</strong></div>
                                </div>
                            </span>
                        </div>

                        <div className = 'flex justify-between'>
                            <label className='text-gray2'>Intermediária:</label>
                            <span>
                                <div className = 'flex gap-2'>
                                    <div className = 'text-primary'>R${prices.medium}</div>
                                    <div className = ' px-1 text-[white] border  bg-gray2 rounded'><strong>R$ {prices.medium + laborState}</strong></div>
                                </div>
                            </span>
                        </div>

                        <div className = 'flex justify-between'>
                            <label className='text-gray2'>Primeira linha:</label>
                            <span>
                                <div className = 'flex gap-2'>
                                    <div className = 'text-primary'>R${prices.firstLine}</div>
                                    <div className = ' px-1 text-[white] border  bg-gray2 rounded'><strong>R$ {prices.firstLine + laborState}</strong></div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}