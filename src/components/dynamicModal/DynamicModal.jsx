'use client'

import { useContext, createContext } from 'react';
import addMiroIdToDb, { addMiroIdToStorage, postUserId } from '../../utils/helper';


const ModalContext = createContext();

function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Modal compound components cannot be rendered outside the Dynamic Modal component');
    }
    return context;
}

export default function DynamicModal({
    children,
    heading,
    imagePosition,
    image,
    paragraphOne,
    paragraphTwo,
    linkOut,
    linkOutText,
    cta,
    user
}) {

    

    return (
        <ModalContext.Provider value={{ user, children, heading, imagePosition, image, paragraphOne, paragraphTwo, linkOut, linkOutText, cta }}>
            <div className='flex flex-col max-w-[500px] max-h-[500px] p-2'>
                { children }
            </div>
        </ModalContext.Provider>
    )
}

DynamicModal.ModalImage = function ModalImage() {
    const { image, imagePosition } = useModalContext(ModalContext);
    return (
        <div className='rounded-t-sm h-[150px]' style={{
            "backgroundImage": `url(${image})`, 
            "backgroundPosition": `${imagePosition}`, 
            "backgroundSize": "contain", 
            "backgroundRepeat": "no-repeat" 
        }}></div>
    )
}

DynamicModal.Heading = function DynamicModalHeading() {
    const { heading } = useModalContext(ModalContext);
    return (
        <div className='flex flex-row w-full my-3 justify-start items-start'>
            <h3 className='h3 font-semibold'>{ heading }</h3>
        </div>
    )
}

DynamicModal.ParagraphOne = function DynamicModalParagraphOne() {
    const { paragraphOne } = useModalContext(ModalContext);
    return (
        <div className='my-2'>
            <p className='p-medium'>{ paragraphOne }</p>
        </div>
    )
}


DynamicModal.ParagraphTwo = function DynamicModalParagraphTwo() {
    const { paragraphTwo } = useModalContext(ModalContext);
    return (
        <div className='my-2'>
            <p className='p-medium'>{paragraphTwo}</p>
        </div>
    )
}

DynamicModal.LinkOut = function DynamicModalLinkOut() {
    const { linkOut, linkOutText } = useModalContext(ModalContext);
    return (
        <div className='my-2'>
            <p className='p-medium'>
                <a href={linkOut} target='_blank' className='text-blue-600 font-medium'>
                    {linkOutText}
                </a>
            </p>
        </div>
    )
}

DynamicModal.Button = function DynamicModalButton() {
    const { cta, user } = useModalContext(ModalContext);
    return (
        <div className='flex w-full'>
            <div className={`flex flex-row w-full justify-end items-end`}>
                <button type="button" className='button button-primary' onClick={()=> addMiroIdToDb(user)}>{ cta }</button>
            </div>
        </div>
    )
}