'use client';

import { useEffect } from 'react';
import { checkMiroIdExistsInDb } from '../utils/helper';

export const MiroSDKInit = ({ fullscreen }) => {

    
    
    useEffect(() => {

        const miroId = miro.board.getUserInfo().then((user) => {
            checkMiroIdExistsInDb(user.id).then((res) => {
                if (res == false) {
                    if (!window.localStorage.getItem('miroId') && miro.board.ui.canOpenModal()) {
                        
                        const { waitForClose } = miro.board.ui.openModal({
                            url: '/modal',
                            width: 550,
                            height: 550,
                            fullscreen: fullscreen,
                        })

                    }
                }
            });
        });
    });

    return null;
}; 
