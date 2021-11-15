import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'

const imgOffice = `${prefix}/imgs/header/office.png`

const Office = () => {
	return <QV>
		<Header
			title="Oficinas"
			desc="Perfil y progreso de los equipos"
			imgH={imgOffice}
		/>
	</QV>
}

export default Office;
