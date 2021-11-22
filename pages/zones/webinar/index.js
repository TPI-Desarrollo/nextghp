import { prefix } from '../../../utils/prefix.js';
import { useState } from 'react'

import styled from 'styled-components';
import QV from '../../../UIcomponents/qv';
import ZoneHeader from '../../../UIcomponents/zoneHeader'
import GroupSel from '../../../UIcomponents/groupSel'
import Carousel from '../../../UIcomponents/webinarCarousel'

const Header = styled.div`
	display: flex;
	margin-top: 1em;
	padding: 0;
	justify-content: space-between;
	align-items: center;
	color: #172BEF;
	width: 100%;
	border-bottom: solid 3px #DFE2E4;
`
const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`
const Title = styled.h3`
	font-weight: bold;
	font-size: 20px;
	margin: 0;
`
const Desc = styled.p`
	color: black;
	font-weight: normal;
	font-size: 15px;
	margin: 0px;
	margin-bottom: 2px;
`
const Inscrip = styled.div`
	display: flex;
	box-sizing: border-box;
	border: 1.5px solid #172BEF;
	border-radius: 5px;
	height: 30px;
	justify-content: center;
	align-items: center;
	background-color: #F4F7FD;
	color: #172BEF;
	font-weight: bold;
	font-size: 14px;
	padding: 0px 10px;
	transition: .3s ease;

	:hover {
		transform: scale(1.03);
		background-color: #172BEF;
		color: white;
		cursor: pointer;
	}
`
const R = styled.span`
	color: #172BEF;
	font-weight: bold;
`
const Img = styled.img`
	max-width: 400px;
	margin: 20px 10px;
	transition: .3s ease;
	:hover {
		transform: scale(1.03) rotate(-.5deg);
		cursor: pointer;
	}
`

const data = [
	[
	{
		n: 2,
		name: 'Pasos clave para emprender con exito',
		expo: 'Luis Felipe Batero',
		date: '24 Noviembre 2021',
		link: {
			dos: 'https://forms.gle/VqqMmdLCB2wJF2oLA',
			cuatro: 'https://forms.gle/VqqMmdLCB2wJF2oLA'
		},
		state: 'prox'
	},
	{
		n: 1,
		name: 'Innovación en iluminación y alumbrado',
		expo: 'Mario Quiroga',
		date: '17 Noviembre 2021',
		link: {
			dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=700382',
			cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=700611'
		},
		state: 'pass'
	}
	],
]

const Webi = () => {
	const [group, setGroup] = useState("dos")
	return <QV pg="Zonas Comunes">
		<ZoneHeader	zone={1}/>
		<GroupSel group={group} setGroup={setGroup}/>
		<Header>
			<Text>
				<Title>WEBINARS</Title>
				<Desc>EN INNOVACION TECNOLOGICA Y EMPRENDIMIENTO <R>2021-2</R></Desc>
			</Text>
			<Inscrip>
				Inscribite Aquí
			</Inscrip>
		</Header>
		<Carousel data={data} grp={group}/>
		<Header>
			<Desc>Mira los <R>Webinars</R> de versiones anteriores</Desc>
		</Header>
		<Img src={`${prefix}/imgs/webinars/antes.png`}/>
	</QV>
}

export default Webi;
