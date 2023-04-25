import logo from "../../../assets/images/logo.svg";
const headerLogo = () => {
	return (
		<figure className="flex justify-start items-center gap-6 pt-16 pb-5">
			<img src={logo} alt="logo" />
			<h2 className="text-4xl font-sans font-semibold leading-12 text-verde-claro">
				Apito Final
			</h2>
		</figure>
	);
};
export default headerLogo;
