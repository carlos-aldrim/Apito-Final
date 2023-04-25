import { CaretCircleUp } from "phosphor-react"
import { Link } from "react-scroll"
import imgEmail from "../assets/images/imgEmail.svg"
import imgFooter from "../assets/images/footerCopyrights.svg"
import { BtnSocialMedias } from "../components/btnSocialMedias/BtnSocialMedias"

export function Copyrights(){
    return(
        <section id="copyrights" className=" w-full h-full lg:h-[47.953rem] ">
            <div 
                className="
                lg:pl-96 lg:ml-[17rem] ml-96 
                pt-2
                cursor-pointer 
                absolute"
            >
                <Link to="nossaequipe" duration={1000} smooth={true}>
                    <CaretCircleUp size={40} color="#cbc3c3" />
                </Link>
            </div>
            <div 
                className=" h-[29.188rem] bg-black
                flex flex-col 
                items-center
                gap-5
                pt-16
                font-padrao"
            >
                <img src={imgEmail} alt="" />

                <span 
                    className=" 
                    text-2xl lg:text-4xl 
                    text-white font-normal
                    leading-10 text-center 
                    w-14 lg:w-[20.97rem]"
                >
                    Inscreva-se para receber as novidades
                </span>
                <div 
                    className="flex justify-center"
                >
                    <input 
                        type="email"
                        className="
                            form-control
                            block
                            w-full lg:w-[33.144rem]
                            px-3
                            py-1.5
                            text-base 
                            font-normal
                            text-gray-700
                            bg-white bg-clip-border
                            border border-solid border-gray-300
                            rounded-l-xl
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-verde-claro focus:outline-none" 
                            placeholder="Email"
                    />
                    <button
                        type="button"
                        className="
                            inline-block
                            px-8
                            py-1.5
                            bg-verde-claro
                            text-white
                            font-bold
                            text-xs lg:text-2xl
                            leading-tight
                            rounded-r-xl
                            shadow-md
                            hover:shadow-lg
                            
                        "
                    >
                        Inscreva-se
                    </button>
                </div>
            </div>

            <div 
                className="
                flex"
            >
                <img src={imgFooter} alt="" />
            </div>
            <div 
                className="
                text-black
                flex
                lg:flex-row
                gap-96"
            >
                <div 
                    className="
                    font-padrao
                    text-left
                    lg:text-2xl
                    lg:pl-5
                    w-2/4"
                >
                    &#169; ApitoFinal All Right Reserved
                </div>
                <div 
                    className="
                    w-1/2
                    lg:pl-96
                    "
                >
                    <BtnSocialMedias/>
                </div>
            </div>
        </section>
    )
}