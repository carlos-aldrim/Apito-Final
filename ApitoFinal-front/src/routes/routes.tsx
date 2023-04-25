import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApitoFinal } from "../views/ApitoFinal";
import { Cadastrar } from "../views/cadastrar";
import { Campeonatos } from "../views/campeonatos";
import { PaginaInicial } from "../views/home/index";
import { Home } from "../views/Home";
import { Index } from "../views/Index";
import { Jogadores } from "../views/jogadores";
import { Login } from "../views/login/index";
import { Times } from "../views/times";
import { RecuperarSenha } from "../views/recuperarSenha";
import { PaginaEditarUsuario } from "../views/editarUsuario/Index";
import { DetalhesCampeonato } from "../views/detalhesCampeonato";
import { Tabela } from "../views/tabela";
import { PartidasCampeonato } from "../views/partidasCampeonato";
import { CampeonatoEmChaves } from "../views/chavesCampeonato/Index";
import { EditarCampeonato } from "../views/editarCampeonato/Index";

import { AuthProvider } from "../context/Auth/AuthProvider";
import { RequireAuth } from "../context/Auth/RequireAuth";

const Router = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />}>
						<Route path="home" element={<Home />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/cadastrar" element={<Cadastrar />} />
					<Route
						path="/recuperarSenha"
						element={<RecuperarSenha />}
					/>
					<Route
						path="/paginaInicial"
						element={
							<RequireAuth>
								<PaginaInicial />
							</RequireAuth>
						}
					/>
					<Route
						path="/campeonato"
						element={
							<RequireAuth>
								<Campeonatos />
							</RequireAuth>
						}
					/>
					<Route
						path="/times"
						element={
							<RequireAuth>
								<Times />
							</RequireAuth>
						}
					/>
					<Route
						path="/jogadores"
						element={
							<RequireAuth>
								<Jogadores />
							</RequireAuth>
						}
					/>

					<Route
						path="/editarUsuario"
						element={
							<RequireAuth>
								<PaginaEditarUsuario />
							</RequireAuth>
						}
					/>
					<Route
						path="/detalhesCampeonato/:id"
						element={
							<RequireAuth>
								<DetalhesCampeonato />
							</RequireAuth>
						}
					/>
					<Route
						path="/tabelaCampeonato/:id"
						element={
							<RequireAuth>
								<Tabela />
							</RequireAuth>
						}
					></Route>
					<Route
						path="/chavesCampeonato/:id"
						element={
							<RequireAuth>
								<CampeonatoEmChaves />
							</RequireAuth>
						}
					></Route>
					<Route
						path="/partidasCampeonato/:id"
						element={
							<RequireAuth>
								<PartidasCampeonato />
							</RequireAuth>
						}
					/>
					<Route
						path="/editarCampeonato"
						element={
							<RequireAuth>
								<EditarCampeonato />
							</RequireAuth>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default Router;
