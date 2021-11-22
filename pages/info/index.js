import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import About from './about'

const imgInfo = `${prefix}/imgs/header/info.png`
const Cont = styled.div`
	padding: 0px 30px;
`


const Info = () => {
	return <QV pg="Informacion">
		<Header
			title="Informacion"
			desc="Acerca del juego"
			imgH={imgInfo}
		/>
		<Cont>
			<About />
		</Cont>
	</QV>
}
export default Info;
