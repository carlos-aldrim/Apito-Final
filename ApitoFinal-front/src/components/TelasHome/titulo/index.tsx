type texto = {
	titulo: string;
	subtitulo: string;
};

export const Titulo = ({ titulo, subtitulo }: texto) => {
	return (
		<div className="titulo flex flex-col gap-3">
			<h1 className="uppercase text-3xl font-padrao font-light text-verde-claro">
				{titulo}
			</h1>
			<h4 className="text-lg font-padrao font-semibold text-telaSubtitulo">
				{subtitulo}
			</h4>
		</div>
	);
};
