export function InputContent({children}){
    return(
        <div className = 'p-2 flex w-full h-full rounded-lg border-2 border-ghover items-center focus:outline-1 focus:outline-primary'>
            {children}
        </div>
    )
}