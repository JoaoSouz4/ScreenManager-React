export function CheckBoxOption({label}){
    return (
        <div className = 'flex items-center gap-1'>
            <div className = 'border-primary border w-4 h-4 rounded-full flex justify-center items-center cursor-pointer'>
                <div className = 'hidden bg-primary w-2 h-2 rounded-full'>
                    
                </div>
            </div>

            <label>{label}</label>
        </div>
    )
}