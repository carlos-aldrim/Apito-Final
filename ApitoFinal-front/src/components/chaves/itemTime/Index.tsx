interface time{
    img:string,
    nomeTime: string
}

export function ItemTime(props:time){
    return(
        <div className="flex flex-row 
            gap-3
            border-2 rounded-full border-verde-claro 
            p-1
            pl-2
            font-padrao
            text-black text-2xl
            font-normal
            items-center
            w-full
            h-12">
            <img className="rounded-full h-4/5" src={props.img} alt="" />
            {props.nomeTime}
        </div>
    )
}