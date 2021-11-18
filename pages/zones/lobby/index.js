import { useState, useEffect } from 'react'
import { prefix } from '../../../utils/prefix.js';

import styled from 'styled-components';
import QV from '../../../UIcomponents/qv';
import PisosSel from '../../../UIcomponents/pisoSel'
import GroupSel from '../../../UIcomponents/groupSel'
import ItemList from './itemList'

import { statePiso } from '../../../public/data/etesc'
import { getLobbyData } from '../../../public/data/zones'


const Title = styled.h2`
	font-weight: 600;
	font-size: 35px;
	line-height: 52px;
	letter-spacing: -0.03em;
	color: #272835;
	margin: 50px 0 0 0;
	z-index: 2;
`
const TitleCont = styled.h2`
	font-weight: 600;
	font-size: 1.5em;
	line-height: 52px;
	letter-spacing: -0.03em;
	color: #272835;
	margin: 0px;
	z-index: 2;
`

const Lobby = () => {
	const [piso, setPiso] = useState(1)
	const [group, setGroup] = useState("dos")
	const [data, setData] = useState({})
	const pisoA = statePiso()

	useEffect(() => {
		setData(getLobbyData(group, piso))
	}, [])

	return <QV>
		<Title>Lobby</Title>
		<PisosSel piso={piso} pisoF={setPiso}/>
		<GroupSel group={group} setGroup={setGroup}/>
		<TitleCont>Recursos de Piso</TitleCont>
			{piso <= pisoA
				?	<ItemList data={data}/>
				: null }
	</QV>
}

export default Lobby
