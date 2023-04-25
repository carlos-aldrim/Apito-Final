import { CaretCircleDown, CaretCircleUp } from "phosphor-react"
import { Link } from "react-scroll"
import { BtnSocialMedias } from "../components/btnSocialMedias/BtnSocialMedias"
import imgBg from "../assets/images/imgAbout.svg"

import {Index as Header} from "../components/headerIndex/Index"


export function Sobre(){
    return(
        <section id="sobre" className="w-full h-full lg:h-[40.6rem] bg-white relative">
            <div className="flex flex-col">

                <div className="w-full flex flex-row relative gap-0">
                    <div className=" relative lg:pl-96 bg-right-top mt-[-1rem]">
                        <div className="pl-64">
                            <img src={imgBg} alt="" />
                        </div>
                    </div>
                    <div className=" absolute flex flex-col font-padrao text-xl w-auto lg:w-[36.355rem] pl-20">
                        <div className="pt-20 text-xl md:text-4xl lg:text-5xl leading-5 font-medium">
                            Apaixonados por futebol!
                        </div>
                        <div className="text-xl lg:text-2xl pt-6 space-y-5">
                            <p>
                                Essa paixão nos moveu para desenvolver uma ferramenta indispensável 
                                para quem adora organizar e participar de campeonatos esportivos.                             
                            </p>
                            <p>
                                Disponibilize os resultados, jogos, tabelas, rankings e mídias do seu
                                campeonato em tempo real. Se comunique e receba comentários de
                                todos que seguem o seu campeonato.
                            </p>
                            <p>
                                Crie campeonatos com mais de uma categoria, ideal para
                                campeonatos que possuem subdivisões e categorias bem
                                dispostas em grupos, ou mata-mata.
                            </p>
                        </div>
                        <div className="pt-5 ">
                            <BtnSocialMedias/>
                        </div>
                    </div>
                    
                </div>

                <div className="absolute">
                    
                    <div 
                        className=" 
                            w-full 
                            lg:ml-96 lg:pl-72"
                    >
                        <Header up="servicos" />
                    </div>

                    
                    <div className=" w-full md:pl-96 lg:pl-96 lg:ml-64 cursor-pointer md:mt-96 lg:mt-96">
                        <div className="lg:pt-36 md:pt-28">
                            <Link to="nossaequipe" duration={1000} smooth={true}>
                                <CaretCircleDown size={56} color="#cbc3c3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}