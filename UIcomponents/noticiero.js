import { useState } from 'react'
import { prefix } from '../utils/prefix.js';

import styled from 'styled-components'
import { getNoti } from '../public/data'

const Container = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 0 2em;
	padding: 0 1em;
	width: 100%;

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
	}
`
const Title = styled.h2`
	grid-column: span 2;
	margin: .5em;
	color: #22c;
`
const List = styled.div`
	height: 78%;
	overflow-y: scroll;

	::-webkit-scrollbar-track {
		border: none;
		padding: 2px 0;
		background-color: none;
	}
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #888;
		border: 1px solid rgba(0,0,0,0);
	}

	@media screen and (max-width: 800px) {
		height: 30%;
		margin-bottom: .2em;
	}
`
const HeaderList = styled.img`
	width: 100%;
	margin-bottom: 1em;
`
const Iframe = styled.iframe`
	width: 100%;
	height: 80%;
	border-radius: 1em; 
	grid-row: span 2;

	@media screen and (max-width: 800px) {
		height: 22%;
		margin-bottom: .2em;
	}
`
const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: bold;
	background-color: ${p => p.active ? '#aaf' : null};

	:hover {
		background-color: #aaf;
		cursor: pointer;
	}
`
const Img = styled.img`
	margin: .2em 2em;
`

const NotiWidget = () => {
	const noti = getNoti() 
	const [sel, setSel] = useState(0)

	return (
		<Container>
			<Title>
				{noti[sel].fecha}
			</Title>
			<Iframe 
				src={`https://www.youtube.com/embed/${noti[sel].video}`}	
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
				title="Noticias" 
			/> 
			<HeaderList src={`${prefix}/imgs/noti/banner.png`}/>
			<List>
			{noti.map((n,i) =>
				<Item 
					onClick={() => setSel(i)}
					active={i === sel}
					key={`noti${i}`}
				>
					<Img src={`${prefix}/imgs/noti/video.png`}/>
					{i+1} ) {n.fecha}
				</Item>
			)}
			</List>
		</Container>
	);
}

export default NotiWidget
