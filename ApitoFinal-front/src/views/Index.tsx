import { ApitoFinal } from "./ApitoFinal";
import { Copyrights } from "./Copyrights";
import { Home } from "./Home";
import { NossaEquipe } from "./NossaEquipe";
import { Servicos } from "./Servicos";
import { Sobre } from "./Sobre";

export function Index() {
	
	return (
		<div id="index">
			
				<Home/>
			
				<ApitoFinal/>
			
				<Servicos />
			
				<Sobre />
			
				<NossaEquipe/>
			
				<Copyrights />
		</div>
	);
}
