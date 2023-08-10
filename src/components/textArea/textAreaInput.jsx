export function TextAreaInput({value, isChange}){
    return(
        <textarea
            className = 'p-2 flex w-full h-full rounded-lg border-2 border-ghover items-center outline-none'
            name="" 
            id="" 
            value={value}
            onChange = {isChange}
        />
    )
}