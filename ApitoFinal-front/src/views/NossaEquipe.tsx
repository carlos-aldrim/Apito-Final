import { CaretCircleDown, CaretCircleUp } from "phosphor-react"
import { Link } from "react-scroll"
import { Card } from "../components/cardTime/Card"
import imgHeader from "../assets/images/group_p_team.svg"
import imgDev1 from "../assets/images/imgGitBiel.svg"
import imgDev2 from "../assets/images/imgGitZairo.svg"
import imgDev3 from "../assets/images/imgGitRay.svg"
import imgDev4 from "../assets/images/imgGitLet.svg"
import imgFooter from "../assets/images/footerNossaEquipe.svg"

const linksGit =[
    "https://github.com/gabrielrudan",
    "https://github.com/zairobastos",
    "https://github.com/Raylander524",
    "https://github.com/leh-torres"
]

const sr = ScrollReveal({
    distance: "3.75rem",
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal("#titulo", {delay: 300, origin: "top" })
sr.reveal("#icon-group", {delay: 300, origin: "left" })

export function NossaEquipe(){
    return(
        <section 
            id="nossaequipe" 
            className="relative 
            w-full h-full
            lg:h-[43rem]"
        >
            <div 
                className=" flex
                 bg-white relative"
            >
                {/** Header*/}
                <div 
                    className="relative"
                >
                    <div 
                        className="relative 
                        lg:ml-6 lg:pl-96
                        md:ml-7 md:pl-72 md:w-fit
                        ml-2 pl-72
                        bg-right-top"
                    >
                        <img className="lg:pl-72 " src={imgHeader} alt="" />
                    </div>

                    
                </div>

                <div className="absolute">
                    <div 
                            className="
                            lg:pl-96 lg:ml-64 ml-96 
                            cursor-pointer 
                            absolute
                            "
                        >
                                <Link  to="sobre" duration={1000} smooth={true}>
                                    <CaretCircleUp size={56} color="#cbc3c3" />
                                </Link>
                    </div>
                    {/**Body */}
                    <div 
                        className="relative"
                    >
                        <div 
                            className="flex flex-col
                            lg:pl-24 lg:mt-20
                            md:pl-28
                            pl-36 pt-6
                            space-y-6"
                        >
                            <span 
                                id="titulo"
                                className="font-padrao font-bold
                                tracking-wider leading-10
                                text-xl lg:text-4xl
                                "
                            >
                                Conheça Nosso Time
                            </span>

                            <div 
                                id="icon-group"
                                className="flex flex-col 
                                lg:flex-row lg:gap-10 lg:pt-6
                                pl-3"
                            >
                                    <Card img={imgDev1} nome="Gabriel Rudan" dev="Front-End" link={linksGit[0]} isFemale={false}/>
                                    <Card img={imgDev4} nome="Letícia Torres" dev="Front-End" link={linksGit[3]} isFemale={true}/>
                                    <Card img={imgDev2} nome="Zairo Bastos" dev="Back-End" link={linksGit[1]} isFemale={false}/>
                                    <Card img={imgDev3} nome="Raylander Marques" dev="Front-End" link={linksGit[2]} isFemale={false}/>
                            </div>
                        </div>
                    </div>

                    {/**footer */}
                    <div 
                        className="flex items-center relative
                        lg:pt-0"
                    >
                        <div 
                            className="relative"
                        >
                            <img src={imgFooter} alt="" />
                        </div>

                        <div 
                            className="absolute ml-52 
                            lg:ml-96 mb-3 
                            lg:mb-0 lg:mt-12"
                        >
                            <Link to="copyrights" smooth={true} duration={1000}>
                                <CaretCircleDown className="ml-2 lg:ml-64 hover:cursor-pointer" size={56} color="#EBE5E5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}