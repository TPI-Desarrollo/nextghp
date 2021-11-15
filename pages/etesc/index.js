import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';
import { getData, getPisoTitle } from '../../public/data/etesc'
import styled from 'styled-components'

import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import PisosSel from '../../UIcomponents/pisoSel'
import GroupSel from '../../UIcomponents/groupSel'
import ListItems from './components/listItems'

const imgEtesc = `${prefix}/imgs/header/etesc.png`

const Title = styled.h2`
	font-weight: 600;
	font-size: 35px;
	line-height: 52px;
	letter-spacing: -0.03em;
	color: #272835;
	margin: 0px;
	z-index: 2;
`

const Etesc = () => {
	const [piso, setPiso] = useState(1)
	const [group, setGroup] = useState('dos')
	const data = getData(group, piso)
	const pisoTitle = getPisoTitle(piso)
	return <QV>
		<Header
			title="ETESC"
			desc="Edificio Tecnológico de Empredimiento Sostenible"
			imgH={imgEtesc}
		/>
		<PisosSel piso={piso} pisoF={setPiso}/>
		<Title>{pisoTitle}</Title>
		<GroupSel group={group} setGroup={setGroup}/>
		<ListItems group={group} piso={piso} data={data}/>
	</QV>
}

export default Etesc;
