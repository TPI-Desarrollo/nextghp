import { useState } from 'react'
import { useMainState } from '../../libs/stateHooks'

import styled from 'styled-components'
import Link from 'next/link'
import { prefix } from '../../utils/prefix.js';
import { getDataProg } from '../../public/data'

import QV from '../../UIcomponents/qv';
import Pdf from '../../UIcomponents/pdf';

import Header from '../../UIcomponents/header'

import { getNoti } from '../../public/data'

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

	@media screen and (max-width: 800px) {
		width: 100%;
	}
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

const Grid = styled.div`
	display: grid;
	margin: 0 3em;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;
`
const GridB = styled.div`
	display: grid;
	margin: 0 3em;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1em;
`
const Entrega = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: gray;
	margin: 0 3em;
`
const Noti = styled.div`
	grid-row: span 2;
	background: gray;
`

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 4em;
`
const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: gray;
	height: 60px;
`


const Login = () => {
  const [mState, setMainState] = useMainState()
	const prog = getDataProg()
	const noti = getNoti() 
	const video = noti[0] 
		? noti[0] : null

	const openModal = (type) => {
    setMainState({
      ...mState,
      modal: {
        visibility: true,
        type: type
      }
    })
	}

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

		<Title>Tu proxima entrega</Title>
		<Link href='etesc'>
			<Entrega>Tu Proxima entrega</Entrega>
		</Link>

		<Title>Lo mas relevante</Title>
		<Grid>
			<Noti onClick={()=>openModal('Noticiero')}>
				El ultimo Noticiero agregado:<br/>
				{video.nombre}<br/>
				{video.fecha}
			</Noti>
			<Box onClick={()=>openModal('Salon de la Fama')}>Salon de la Fama</Box>
			<Box onClick={()=>openModal('Ultimas actualizaciones')}>Las ultimas actualizaciones</Box>
		</Grid>


		<TitleBox>
			<Title>Que contenido estas Buscando?</Title>
			<Link href='info/conoceOV'>
				<div>Mas Informacion</div>
			</Link>
		</TitleBox>
		<GridB>
			<Link href='zones/lobby'>
				<Box>Lobby</Box>
			</Link>
			<Link href='zones/src/asesor'>
				<Box>Asesores</Box>
			</Link>
			<Link href='zones/webinar'>
				<Box>Webinars</Box>
			</Link>
		</GridB>

	</QV>
}
export default Login
