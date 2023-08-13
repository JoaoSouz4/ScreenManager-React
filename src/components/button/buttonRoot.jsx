export function ButtonRoot ({children, width, isActive, isDisabled}){

    function handleClick(e){
        e.preventDefault();

        isActive();
    }
    return (
        <button
            onClick = {handleClick}
            disabled = {isDisabled}
            className ={` bg-primary rounded-lg p-3 text-white border-2 border-phover  flex items-center justify-center gap-2 disabled:opacity-75`}
        >
            {children}
        </button>
    )
}