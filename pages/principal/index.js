import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';
import QV from '../../UIcomponents/qv';

import Header from '../../UIcomponents/header'
const imgEtesc = `${prefix}/main/img/Principal-Ilust.png`

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Title = styled.h3`
	padding-left: 5%;
	text-decoration: underline;
	text-decoration-color: #FFC024;
	text-underline-offset: 10px ;
`

const Login = () => {
  return <QV>
		<Container>
			<Header
				title="Quanticon Valley"
				desc="Bienvenidos/as"
				imgH={imgEtesc}
				primary
			/>
			<Title>Guia del Juego</Title>
		</Container>
	</QV>
}
export default Login
