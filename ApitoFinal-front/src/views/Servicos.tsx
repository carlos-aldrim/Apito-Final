import { CaretCircleDown, CaretCircleUp } from "phosphor-react"
import { Link } from "react-scroll"
import img from "../assets/images/imgService.svg"
import bg from "../../src/assets/images/group_p.svg"
import { Index as Head } from "../components/headerIndex/Index";

const sr = ScrollReveal({
    distance: "3.75rem",
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal("#image", {delay: 300, origin: "left" })
sr.reveal("#textos", {delay: 300, origin: "right" })



export function Servicos(){
    return(
        <section id="servicos" className="relativ  w-full h-full lg:h-[42.2rem]">
            <div className="flex flex-col items-center
                bg-verde-claro"
            >
                <div>
                    <Head up="apitofinal" />
                    
                </div>

                <div className="flex flex-col lg:flex-row gap-10 pt-10 pl-10">
                    <div id="image" className="pl-20">
                      <img className="w-2/3 lg:w-3/4" src={img} alt="" />  
                    </div>
                    <div id="textos" className="text-center lg:text-right font-padrao text-2xl lg:text-4xl text-white pr-16 w-auto lg:w-[34.681rem] space-y-9">
                        <span className="font-normal text-[3.108rem] tracking-widest space-y-3">
                            Faça uso de nossos <span className="font-extrabold"> SERVIÇOS</span>
                        </span>
                        <div className="space-y-5">
                            <p className="text-xl lg:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.
                            </p>
                            <p className="text-xl lg:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="pl-20 lg:pl-96  w-2/4 lg:w-full">
                        <div className="lg:pl-80">
                            <img className="lg:w-[45.953rem]" src={bg} alt="" />
                        </div>
                    </div>
                    <div className="absolute ml-12 lg:ml-96 mb-3 lg:mb-0 lg:mt-12">
                        <Link to="sobre" smooth={true} duration={1000}>
                            <CaretCircleDown id="cicle_down" className="ml-20 md:ml-60 lg:ml-64 hover:cursor-pointer" size={56} color="#EBE5E5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}