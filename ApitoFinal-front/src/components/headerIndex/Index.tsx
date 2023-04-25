import { CaretCircleUp } from "phosphor-react"
import { Link } from "react-scroll"

interface head{
    path?:string,
    up:string,
}

export function Index(props:head){
    return(
        <div 
            className="lg:h-16"
        >
            <div 
                className="relative"
            >
                <img src={props.path} alt="" />
            </div>
            <div
                className="absolute
                lg:pt-1 lg:ml-[-2rem]
                md:ml-[-1rem]
                sm:ml-[-5rem]"
            >
                <Link 
                    to={props.up} 
                    smooth={true} 
                    duration='1000'
                >
                    <CaretCircleUp className="hover:cursor-pointer" size={56} color="#F4F0F0" />

                </Link>
            </div>
        </div>
    )
}