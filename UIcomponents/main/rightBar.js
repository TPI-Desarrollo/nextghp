import styled from 'styled-components'

const Container = styled.div`
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
		display: none;
	}
`
const RightBar = ({openNoti}) => {
	return (
		<Container>
			<button onClick={openNoti}>Noticiero</button>
		</Container>
	);
}

export default RightBar;
