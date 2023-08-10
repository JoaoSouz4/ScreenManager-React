export function InputMain({type, isDisabled, placeholder, step, isChange, value}){
    return (
        <input 
            className = 'bg-transparent outline-none w-full' 
            type = {type} 
            disabled = {isDisabled}
            placeholder = {placeholder}
            step={step}
            onChange={isChange}
            value = {value}
        />
    )
}