import styled from 'styled-components'
import NavCont from './main/navBar'
import NavMob from './main/navMobile'

const Container = styled.div`
	overflow: hidden;
	position: relative;
  background-color: #eee;
  width: 100%;
	height: 100vh;
	display: grid;
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
const Right = styled.div`
	grid-area: rb;
	position: sticky;
	top: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: #fff;
	padding: 0px 10px;
	margin: 5px 2px;
	height: 98vh;
	box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.15);

	@media screen and (max-width: 800px) {
		position: absolute;
		width: 0px;
		height: 0px;
		padding: 0px;
		right: 0px;
	}
`
const Content = styled.div`
	grid-area: ct;
	padding: 0 37px 150px 20px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: -17px; 	
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
`

const QV = ({ children }) => {
  return (
		<Container>
			<Content>
				{children}
			</Content>
			<Right/>
			<NavCont/>
			<NavMob/>
		</Container>
  );
}

export default QV;
