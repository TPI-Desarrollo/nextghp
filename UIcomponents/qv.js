import styled from 'styled-components'
import NavCont from './main/navBar'
import NavMob from './main/navMobile'
import RightBar from './main/rightBar'

import { Modal, useModal } from '../UIcomponents/modal'

const Container = styled.div`
	overflow: hidden;
	position: relative;
  background-color: #eee;
  width: 100%;
	height: 100vh;
	display: grid;
	transition: 0.3s ease;
	grid-template-columns: 1fr 4fr 1.3fr;
	grid-template-rows: auto;
	grid-template-areas: 
		"sb  ct  rb";
	margin: 0;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 
			"ct";
	}
`
const Content = styled.div`
	grid-area: ct;
	padding: 0 47px 150px 30px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: -17px; 	
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
`

const QV = ({ children, pg }) => {
	const [isOpen, openModal, closeModal] = useModal(false)
  return (
		<Container>
			<Content>
				{children}
			<Modal 
				isOpen={isOpen}
				closeM={closeModal}
				title="Noticiero"
			>
				laeluaoehu
			</Modal>
			</Content>
			<RightBar 
				openNoti={openModal}
			/>
			<NavCont pg={pg}/>
			<NavMob pg={pg}/>
		</Container>
  );
}

export default QV;
