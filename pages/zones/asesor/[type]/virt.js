import { prefix } from '../../../../utils/prefix.js';

import styled from 'styled-components';
const Cont = styled.div`
	padding: 0px 20px;
	display: ${p => p.active ? 'flex' : 'none'};
	transition: .3s ease;
`

const Virt = ({active}) => {
	return <Cont active={active}>
		asesores virtuales
	</Cont>
}

export default Virt;
