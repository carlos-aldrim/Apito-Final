import { BarraMenuInicial } from "../components/barraMenuInicial/BarraMenuInicial";
import { BtnSocialMedias } from "../components/btnSocialMedias/BtnSocialMedias"
import jogadorImg from "../assets/images/jogador-1.svg";


export function Home(){
    const sr = ScrollReveal({
		distance: "3.75rem",
		duration: 2500,
		delay: 400,
		reset: true,
	});

	sr.reveal("#home-text", { delay: 200, origin: "left" });
	sr.reveal("#home-img", { delay: 200, origin: "top" });


    return(
        <section id="home" className="">
			<BarraMenuInicial />
			<section className="relative">
				<div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-24 mt-2 lg:mt-90 px-10 lg:px-12">
					{/**Conteúdo */}
					<div
						id="home-text"
						className="z-0 flex flex-col items-center lg:items-start lg:w-[32rem]"
					>
						<span className="font-padrao text-3xl md:text-4 lg:text-5xl text-center lg:text-left ">
							Bem vindo ao{" "}
							<span className="font-black text-verde-claro text-5xl italic">
								Apito Final
							</span>{" "}
							!
						</span>
						<p className="font-padrao text-2xl text-center lg:text-left mt-4">
							Gerencie os melhores campeonatos de futebol, times
							esportivos, e jogadores incríveis sem sair de casa.
						</p>
						<div className="flex justify-center flex-wrap gap-6">
							<button
								type="button"
								className="btn-index btn-index-preto hover:bg-verde-claro"
							>
								Cadastrar
							</button>
						</div>


						<div className="flex flex-col items-end">
							<div className="flex justify-end gap-6 mb-6 pt-40">
								<BtnSocialMedias/>
								<a href="#">
									<img
										src="./src/assets/images/football 1.svg"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>

					{/**imagem */}
					<div
						id="home-img"
						className="flex justify-right flex-1 mb-10 md:mb-20 lg:mg-0 "
					>
						<img
							className="w-full h-full sm:w-2/3 sm:h-2/3 md:w-3/4 md:h-3/"
							src={jogadorImg}
							alt=""
						/>
					</div>
				</div>
			</section>
		</section>
    )
}