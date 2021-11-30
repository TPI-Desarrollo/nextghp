import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';
import QV from '../../UIcomponents/qv';
import Pdf from '../../UIcomponents/pdf';

import Header from '../../UIcomponents/header'
const imgPrin = `${prefix}/imgs/header/principal.png`

const Title = styled.h3`
	padding-left: 5%;
	text-decoration: underline;
	text-decoration-color: #FFC024;
	text-underline-offset: 10px ;
`
const ContProg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em 0 2em 0;
`
const BarProg = styled.div`
	border: solid #1920EF;
	border-radius: .5em;
	height: 2.4em;
	width: 80%;
`
const Prog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1920EF;
	border-radius: .2em 0 0 .2em;
	font-weight: bold;
	font-size: 1.2em;
	color: white;
	height: 100%;
	width: ${p => p.width};
`
const SubTitle = styled.h2`
	margin: 0;
	margin-top: 1em;
`
const Desc = styled.h3`
	margin: 0;
	font-weight: normal;
`

const prog = {
	num: '40%',
	piso: '3er Piso',
	title: 'Fase de Ideación',
	desc: 'Plantea posibles Soluciones'
}

const Login = () => {
  return <QV pg="Principal">
		<Header
			title="Quanticon Valley"
			desc="Bienvenidos/as"
			imgH={imgPrin}
			primary
		/>
		<Title>Avance del Juego</Title>
		<ContProg>
			<BarProg>
				<Prog width={prog.num}>
					{prog.piso}
				</Prog>
			</BarProg>
			<SubTitle>{prog.title}</SubTitle>
			<Desc>{prog.desc}</Desc>
		</ContProg>
		<Title>Guia del Juego</Title>
		<Pdf file="content/guia.pdf"/>
	</QV>
}
export default Login
