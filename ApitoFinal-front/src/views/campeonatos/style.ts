import styled from "styled-components";

export const Figure = styled.figure`
	background-image: url("FundoDoCardCampeonato.svg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: calc(0.5rem + 4px) 0;
	border-radius: 10px;
	gap: 5.36px;

	h3 {
		color: #fff;
		font-size: 1rem;
	}
`;
