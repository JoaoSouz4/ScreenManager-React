
 async function deleteScreen(id){
    const response = await fetch(`http://localhost:8080/delete/deletescreen/${id}`, {
        method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
    })
    const responseToJson = await response.json();
    const list = await responseToJson.currentList;
    return list

}

export default deleteScreen;