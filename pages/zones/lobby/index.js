import { useState, useEffect } from 'react'
import { prefix } from '../../../utils/prefix.js';

import styled from 'styled-components';
import QV from '../../../UIcomponents/qv';
import ZoneHeader from '../../../UIcomponents/zoneHeader'
import PisosSel from '../../../UIcomponents/pisoSel'
import GroupSel from '../../../UIcomponents/groupSel'
import ItemList from '../../../UIcomponents/SrcItemList'
import { Modal, useModal } from '../../../UIcomponents/modal'

import HallFame from './hallFame'

import { 
	statePiso, 
	getLobbyData 
} from '../../../public/data'


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
	const [isOpen, openModal, closeModal] = useModal(false)
	const [piso, setPiso] = useState(1)
	const [group, setGroup] = useState("dos")
	const [data, setData] = useState({})
	const pisoA = statePiso()

	useEffect(() => {
		setData(getLobbyData(group, piso))
	}, [group, piso])

	return <QV pg="Zonas Comunes">
		<ZoneHeader	zone={2}/>
		<button onClick={openModal}>Open</button>
		<GroupSel group={group} setGroup={setGroup}/>
		<PisosSel piso={piso} pisoF={setPiso}/>
		<TitleCont>Recursos de Piso</TitleCont>
			{piso <= pisoA
				?	<ItemList data={data}/>
				: null }
		<Modal 
			isOpen={isOpen}
			closeM={closeModal}
			title="Salon de la fama"
		>
			<HallFame group={group} setGroup={setGroup}/>
		</Modal>
	</QV>
}

export default Lobby
