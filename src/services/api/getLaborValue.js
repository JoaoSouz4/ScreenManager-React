export default async function getLaborValue(){
    return await fetch('http://localhost:8080/get/getlaborvalue')
        .then(res => res.json())
        .then(res => res.laborDocument.laborValue)
}