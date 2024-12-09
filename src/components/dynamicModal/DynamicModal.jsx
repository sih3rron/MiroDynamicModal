'use client'

import {useContext, createContext, useState} from 'react';
import Image from 'next/image';

const ModalContext = createContext();

function useCardContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Card compound components cannot be rendered outside the Card component');
    }
    return context;
}

export default function DynamicModal({
    children, 
    title,
    body,
    image,
    cta
}) {
    return (
        <>
        <div>
            <Image src={image} alt={title} width={500} height={200} style={{ objectFit: 'contain' }}/>
        </div>

        <div>
            <h2>{ title }</h2>
        </div>

        <div>
            <p>{ body }</p>
        </div>

        <div>
            <button>{ cta }</button>
        </div>

        
        </>
    )
}