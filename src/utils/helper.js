export async function addMiroIdToStorage(userId){
    if ( !window.localStorage.getItem('miroId')) { 
        window.localStorage.setItem('miroId', userId);
    }
    return await miro.board.ui.closeModal("Modal Closed");
}

export default async function addMiroIdToDb(userId){
    const post = await postUserId(userId);

    if (post.status === 200) { return await miro.board.ui.closeModal("Modal Closed")};
    if (post.status === 500) { return console.log("Error: ", post.status)};
}

export async function checkMiroIdExistsInDb(userId){
    
    return console.log("Success: ", userId);
}

export async function postUserId(userId){

    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/database/post-data`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userId,
    });

    console.log("UserID ", userId);

    return { status: res.status };
}

