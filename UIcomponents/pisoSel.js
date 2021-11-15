import styled from 'styled-components'

const Selector = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;
	justify-content: space-evenly;
	padding: 5px 5%;
	margin: 20px 5%;
	background-color: #e0e5ed;
	border-radius: 20px;
	color: #1920EF;
	font-weight: bold;
	font-size: .8em;
	@media screen and (max-width: 1000px) {
		padding: 5px 15%;
	}
`
const SelItem = styled.div`
	border-radius: 20px;
	padding: 5px 10px;
	margin: 5px 0px;
	white-space: nowrap;
	transition: 0.5s;
  background-color: ${props => props.primary ? '#1920EF' : null};
  color: ${props => props.primary ? '#fff' : null};

	:hover {
		transform: scale(1.03);
		background-color: #979FF5;
		color: #ffffff;
		cursor: pointer;
	}
`

const PisosSel = ({piso, pisoF}) => {
	return (
	<Selector>
		{[1,2,3,4,5,6].map((item) => 
			<SelItem 
				onClick={() => pisoF(item)}
				primary={piso === item}
				key={item.toString()}
			>
				    Piso {item}
			</SelItem>
		)}
	</Selector>
	);
}

export default PisosSel;
