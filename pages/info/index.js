import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'

const imgInfo = `${prefix}/imgs/header/info.png`

const Info = () => {
	return <QV>
		<Header
			title="Informacion"
			desc="Acerca del juego"
			imgH={imgInfo}
		/>
	</QV>
}
export default Info;
