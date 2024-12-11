'use client'; 

import { useEffect } from 'react'; 

export const MiroSDKInit = ({ fullscreen }) => {
    useEffect(() => {

        if(!window.localStorage.getItem('miroId') && miro.board.ui.canOpenModal()) {
                miro.board.ui.openModal({
                    url: '/modal',
                    width: 550,
                    height: 550,
                    fullscreen: fullscreen,
                }); 
        }
        
    }); 
    
    return null; 
}; 
