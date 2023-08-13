export default async function updateLaborValue(value){
    return await fetch('http://localhost:8080/post/insertlaborvalue', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            laborValue: value
        })})
        .then(res => res.json())
        .then(res => res);
}