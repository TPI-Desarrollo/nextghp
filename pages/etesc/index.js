import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';
import { getEtesc, getPisoTitle } from '../../public/data'
import { useMainState } from '../../libs/stateHooks'

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
	margin: 0;
	z-index: 2;
`
const Margin = styled.div`
	margin: 0 20px;
`

const Etesc = () => {
  const [mState, setMainState] = useMainState()
	const group = mState.group ? mState.group : 'dos'
	const piso = mState.piso ? mState.piso : 1
	const data = getEtesc(group, piso)
	const pisoTitle = getPisoTitle(piso)
	return <QV pg="ETESC">
		<Header
			title="ETESC"
			desc="Edificio Tecnológico de Empredimiento Sostenible"
			imgH={imgEtesc}
		/>
		<Margin>
			<p>
				En esta sección podras realizar los entregables más importantes en el desarrollo de tu proyecto los cuales te permitiran avanzar al proximo piso. 
				Con estos y otros retos podras ganar Innocoins y Puntos de Victoria .
			</p>	
			<GroupSel/>
			<PisosSel/>
			<Title>{pisoTitle}</Title>
			<ListItems group={group} piso={piso} data={data}/>	
		</Margin>
		
	</QV>
}

export default Etesc;
