import React from "react"
import imgWallet from "../assets/images/wallet.svg"
import imgTrophy from "../assets/images/trophy.svg"
import imgCicleGrid from "../assets/images/cicle_grid.svg"
import imgFooterServices from "../assets/images/footerServices.svg"
import { CardServices } from "../components/cardApitoFinal/CardServices"
import { CaretCircleDown, CaretCircleUp } from "phosphor-react"
import { Link } from "react-scroll"
import { Index as Head } from "../components/headerIndex/Index"

export function ApitoFinal(){

    const cards = [
        {   
            caminho: imgWallet,
            title: 'Gratuito',
            texto: 'Pronto para usar! Você pode começar a usar imediatamente, sem a necessidade de cadastrar dados financeiros.'
        },
        {
            caminho: imgTrophy,
            title: 'Classificação e Ranking',
            texto: 'Tabelas de classificação, artilharia e rankings calculados automaticamente. Crie também votações entre os jogadores.'
        },
        {
            caminho: imgCicleGrid,
            title: 'Aplicação Flexível',
            texto: 'Interface simples e prática para criar campeonatos de categorias e com diferente número de fases e rodadas.'
        },
    ]

    const sr = ScrollReveal({
		distance: "3.75rem",
		duration: 2500,
		delay: 400,
		reset: true,
	});

    sr.reveal("#titulo-sessao", {delay: 300, origin: "top" })
    sr.reveal("#icon-top", {delay: 300, origin: "top" })

    return(
        <section id="apitofinal" className="relative w-full h-full lg:h-[42.8rem] ">
            <div 
                className="
                    flex flex-col flex-start items-center gap-14"
            >
                <div className="pt-1">
                    <Head up='index'></Head>
                    {/*<Link to="index" smooth={true} duration={1000}>
                        <CaretCircleUp className="id=icon-top hover:cursor-pointer" size={56} color="#F4F0F0" />
                    </Link>*/}
                </div>
                <span 
                    id="titulo-sessao"
                    className="font-padrao text-verde-claro font-black uppercase 
                        text-4xl lg:text-5xl pt-[2.033rem] lg:pt-[1.033rem] h-10"
                >
                    Apito Final
                </span>

                <div 
                    id="cards"
                    className="flex flex-1 flex-col-reverse lg:flex-row gap-0 lg:gap-20"
                >
                    <CardServices caminho={cards[0].caminho} title={cards[0].title} text={cards[0].texto} />
                    <CardServices caminho={cards[1].caminho} title={cards[1].title} text={cards[1].texto} />
                    <CardServices caminho={cards[2].caminho} title={cards[2].title} text={cards[2].texto} />
                </div>
                
                
                <div className="flex items-center">
                    <div className="relative">
                        <img className="" src={imgFooterServices}></img>
                    </div>
                    <div className="absolute ml-52 lg:ml-96 mb-3 lg:mb-0 lg:mt-12">
                        <Link to="servicos" smooth={true} duration={1000}>
                            <CaretCircleDown className="ml-2 lg:ml-64 hover:cursor-pointer" size={56} color="#EBE5E5" />
                        </Link>
                    </div>
                </div>
                
                
            </div>
         
        </section>
    )
}