import MenuBar from "../menuBar";
import Main from "../main";

export default function LayoutApp(){
    return(
        <div className = 'w-full h-full flex justify-center' >
            <div className = 'flex w-[80%] h-full'>
                <MenuBar />
                <Main />
            </div>
        </div>
    )
}