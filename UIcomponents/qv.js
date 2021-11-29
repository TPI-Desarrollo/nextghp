import styled from 'styled-components'
import NavCont from './main/navBar'
import NavMob from './main/navMobile'
import RightBar from './main/rightBar'


import { Modal, useModal } from '../UIcomponents/modal'
import Noti from './noticiero'

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
	overflow-y: scroll;
	display: flex;
	flex-direction: column;

	::-webkit-scrollbar-track {
		border: none;
		padding: 10px 0;
		margin: 10px 0;
		background-color: none;
	}
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #ccc;
		border: 1px solid rgba(0,0,0,0);
	}
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
				<Noti/>
			</Modal>
			</Content>

			<RightBar	openNoti={openModal} />
			<NavCont pg={pg}/>
			<NavMob pg={pg}/>
		</Container>
  );
}

export default QV;
