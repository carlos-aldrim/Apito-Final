import { ItemTime } from "./itemTime/Index";
import img from "../../assets/images/football 1.svg"

interface times{
    nomeTime1:string
    nomeTime2:string
}

export function Chaves(props:times) {
    return(
        <div className="flex flex-col gap-3 w-72 h-40 p-4">
            <ItemTime img={img} nomeTime={props.nomeTime1} />
            <ItemTime img={img} nomeTime={props.nomeTime2} />
        </div>
    )
}