interface cards{
    caminho: string,
    title: string,
    text: string,
    delay?: number,
}

export function CardServices(props: cards){
    const sr = ScrollReveal({
		distance: "3.75rem",
		duration: 2500,
		delay: 400,
		reset: true,
	});

    var d = props.delay

    sr.reveal("#card", {duration: 2500, origin: "left" })

    return(                 
            <div 
                id="card"
                className=" w-[19.093rem] h-[15.268rem] mt-10 lg:mt-7 
                    flex flex-col items-center"
            >
                <img className="" src={props.caminho}></img>
                        
                <div 
                    className="flex flex-col items-center font-padrao pt-2 lg:pt-5"
                >
                    <span className="font-black text-xl lg:text-2xl">
                        {props.title}
                    </span>
                    
                    <p className="font-normal text-lg lg:text-xl text-center">
                        {props.text}
                    </p>
            </div>
        </div>
    )
}