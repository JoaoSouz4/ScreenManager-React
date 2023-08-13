export function InputMain({type, isDisabled, placeholder, step, isChange, value}){
    return (
        <input 
            className = 'bg-transparent w-full outline-none' 
            type = {type} 
            disabled = {isDisabled}
            placeholder = {placeholder}
            step={step}
            onChange={isChange}
            value = {value}
        />
    )
}