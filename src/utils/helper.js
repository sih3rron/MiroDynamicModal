export async function addMiroIdToStorage(userId) {
    if (!window.localStorage.getItem("miroId")) {
        window.localStorage.setItem("miroId", userId);
    }
    return await miro.board.ui.closeModal("Modal Closed");
}

export default async function addMiroIdToDb(userId) {

    const idExists = await checkMiroIdExistsInDb(userId);
    if (idExists) return console.error("Error: ", "ID already exists in DB");

    const post = await postUserId(userId);
    if (!post.status == 200) return console.log("Error: ", post.status );

    return await miro.board.ui.closeModal("Modal Closed");

}

export async function checkMiroIdExistsInDb(userId) {

    const res = await fetch(
        `/api/database/fetch-data`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    );

    const data = await res.json();

    if(data.length == 0 || data[0].miroId !== userId) { 
        return false; 
    }
    if(data[0].miroId == userId) { 
        return true; 
    }

}

export async function postUserId(userId) {
    try {
        const res = await fetch(
            `/api/database/post-data`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ miroId: userId }),
            },
        );

        return res.status;
    } catch (ERROR) {
        console.error("postUserId ERROR: ", ERROR);
    }
}

export async function listenForModalClose() {
    
}