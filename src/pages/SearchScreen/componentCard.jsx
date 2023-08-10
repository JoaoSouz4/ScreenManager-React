import {MdOutlineMoreHoriz} from 'react-icons/md';
import { ModalCard } from './ModalCard';
import Modal from '../../components/modal';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/modalContext';
import { ScreenCardContext } from '../../context/ScreenCardContext';


export function ComponentCard(props){
    
    const {modalState, setModalState} = useContext(ModalContext);
    const {cardStates} = useContext(ScreenCardContext);
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
                        <label className = ' p-0 text-gray2 '>{brand}</label>
                    </div>

                    <div className = ' border rounded-xl p-4 border-ghover flex flex-col gap-3'>
                        <div className = 'flex justify-between'>
                            <label className='text-gray2'>Paralela:</label>
                            <span className =  ' rounded-lg p-[0.1rem] text-primary'><strong>R${prices.parallel}</strong></span>
                        </div>

                        <div className = 'flex justify-between'>
                            <label className='text-gray2'>Regular:</label>
                            <span className =  ' rounded-lg p-[0.1rem]  text-primary'><strong>R${prices.medium}</strong></span>
                        </div>

                        <div className = 'flex justify-between'>
                            <label className='text-gray2'>Similar:</label>
                            <span className =  ' rounded-lg p-[0.1rem]  text-primary'><strong>R${prices.firstLine}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}