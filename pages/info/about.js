import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'

const infoA = [1,2,3,4]
const infoB = [5,6,7,8,9,10]

const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`
const Subtitle = styled.h4`
	font-style:  italic;
	font-weight: bold;
	font-size: 1em;
	color: #0000BB;
`
const GridInfo = styled.div`
	display: grid;
	grid-template-columns: 
	repeat(auto-fit, minmax(min(100%, 300px), 1fr));
	margin: 0px 0px 40px 0px;

	p {
		font-size: 1em;
		text-align: justify;
	}
	img {
		width: 200px;
		margin: auto;
	}
`
const GridImg = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr));
	grid-gap: 20px;
	align-items: center;
	margin-left: 20px;
	margin-bottom: 50px;
`

const About = () => {
	return (
		<div>
			<Title>_Acerca de Quanticon Valley</Title>
			<GridInfo>
				<div>
					<p>El juego Quanticon Valley es una apuesta de gamificacion desarrollada y propuesta por la Facultad de ingenieria. Participaron el programa innovaTE, grupo LIATER, el programa de innovacion y el Taller de Proyectos Interdisciplinarios (TPI).</p>
					<p>Se basa en la experiencia de TPI, busca promover la motivacion y el desarrolla de habilidades blandas de sus participantes con el desarrollo de un proyecto. Damos una calurosa bienvenida y esperamos contar con cualquier aporte para la mejora continua.</p>
				</div>
				<img src={`${prefix}/imgs/info/QV.png`}/>
			</GridInfo>
			<Subtitle>Organiza</Subtitle>
			<GridImg>
				{infoA.map((i) => 
				<img key={i} src={`${prefix}/imgs/info/${i}.png`}/>)}
			</GridImg>
			<Subtitle>Apoya</Subtitle>
			<GridImg>
				{infoB.map((i) => 
				<img key={i} src={`${prefix}/imgs/info/${i}.png`}/>)}
			</GridImg>
		</div>
	)
}

export default About
