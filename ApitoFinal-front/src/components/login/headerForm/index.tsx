type titulo = {
	title: string;
	subtitle: string;
};
export const HeaderForm = ({ title, subtitle }: titulo) => {
	return (
		<header className="gap-2">
			<h1 className="text-titleLogin font-padrao font-semibold text-titleLoginFont">
				{title}
			</h1>
			<p className="text-subtitleLogin font-padrao font-semibold text-base mb-8">
				{subtitle}
			</p>
		</header>
	);
};
