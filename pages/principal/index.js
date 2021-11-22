import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';
import QV from '../../UIcomponents/qv';

import Header from '../../UIcomponents/header'
const imgPrin = `${prefix}/imgs/header/principal.png`

const Title = styled.h3`
	padding-left: 5%;
	text-decoration: underline;
	text-decoration-color: #FFC024;
	text-underline-offset: 10px ;
`

const Login = () => {
  return <QV pg="Principal">
		<Header
			title="Quanticon Valley"
			desc="Bienvenidos/as"
			imgH={imgPrin}
			primary
		/>
		<Title>Guia del Juego</Title>
	</QV>
}
export default Login
