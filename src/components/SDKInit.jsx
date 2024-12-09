'use client'; 

import { useEffect } from 'react'; 

export const MiroSDKInit = ({ fullscreen }) => {
    useEffect(() => {
        if (miro.board.ui.canOpenModal()) {
            miro.board.ui.openModal({
                url: '/modal',
                width: 500,
                height: 500,
                fullscreen: fullscreen,
            }); 
        }
    }); 
    
    return null; 
}; 
