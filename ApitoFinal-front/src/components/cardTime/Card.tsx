
interface timeProps{
    link:string
    img: string
    nome: string
    dev: string
    isFemale: boolean
}


export function Card(props:timeProps){
    const isFemale = props.isFemale

    return(
        <div 
            className="lg:w-[15.541rem] lg:h-[16.205] 
            flex flex-col items-center
            gap-1
            font-padrao"
        >
            <a href={props.link}>
                <img className="hover:scale-110" src={props.img} alt="" />
            </a>

            <div 
                className="flex flex-col
                gap-1 items-center
                pt-5 text-xl"
            >
                <span 
                    className="text-2xl lg:text-3xl
                    font-bold"
                >
                    {props.nome}
                </span>

                {isFemale ?
                <span>Desenvolvedora {props.dev}</span>
                :<span>Desenvolvedor {props.dev}</span>}
                
            </div>
            
        </div>
    )
}