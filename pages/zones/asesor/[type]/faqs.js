import { useState } from 'react'
import styled from 'styled-components';

const data = [
    {
	menu: 'faq1',
	name: '¿Que es Quanticon Valley?',
	desc: `El juego Quanticon Valley es una apuesta de gamificación desarrollada y propuesta por la Facultad de Ingeniería. Participaron el programa innovaTE, grupo LIATER, el programa de innovación y el Taller de Proyectos Interdisciplinarios (TPI).
	    Se basa en la experiencia de TPI, busca promover la motivación y el desarrollo de habilidades blandas de sus participantes con el desarrollo de un proyecto.
	`,
    },
    {
	menu: 'faq2',
	name: '¿En qué consiste el juego Quanticon Valley?',
	desc: `Cada equipo participante será un jugador cuyos integrantes tienen un cargo, con un mentor asignado y con mínimo un experto guía que los acompañará durante todo el recorrido por el edificio. El jugador asciende durante el semestre en el edificio de siete (7) pisos. Para ascender, requiere resolver unos retos, que le permiten ir madurando su idea y construir la solución al proyecto con una solución innovadora.`,
    }
]
const Cont = styled.div`
	padding: 0px 20px;
	display: ${p => p.active ? 'flex' : 'none'};
	transition: .3s ease;
	flex-direction: column;
`
const Title = styled.div`
	font-weight: bold;
	font-size: 18px;
	line-height: 27px;
	margin: 10px 0px 30px 0px;
`
const Item = styled.div`
	align-self: center;
	border: 1.5px solid #AEBCD9;
	box-sizing: border-box;
	border-radius: 7px;
	padding: 20px 20px;
	margin: 15px 25px 15px 20px;
	width: 90%;
	text-align: justify;
	transition: all 0.2s ease;
	box-shadow: ${p => p.active ? 
		'0px 6px 8px rgba(0, 0, 0, 0.3)' : null};

	p {
			overflow: hidden;
			max-height: ${p => !p.active ? '0px' : '120px' };
			font-size: 14px;
			line-height: 19px;
			color: #4F4F4F;
			padding: ${p => !p.active ? '0px' : '5px 10px' };
			margin: 0px;
			transition: all 0.2s ease-in-out;
	}
`
const ItemTitle = styled.div`
	font-weight: 600;
	font-size: 15px;
	line-height: 22px;
	color: #172BEF;
	margin: 0px;
	transition: all 0.2s ease;
	:hover {
			transform: scale(1.01);
	}
`

const Faqs = ({active}) => {
	const [sel, setSel] = useState('')
	const handleSel = (item) => {
		if(item === sel){return setSel('')}
		setSel(item)
	}
	return <Cont active={active}>
		<Title>_Lo que más nos preguntan</Title>
		{data.map(i =>
		<Item key={i.menu} id={i.menu} active={i.menu === sel}>
			<ItemTitle onClick={() => handleSel(i.menu)}>
				{i.name}
			</ItemTitle>
			<p>{i.desc}</p>
		</Item>
		)}	
	</Cont>
}

export default Faqs;
