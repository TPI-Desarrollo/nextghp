import styled from 'styled-components'

const GrContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 40px;
	margin-top: 40px;
`
const Group = styled.div`
	padding: 5px 10px;
	border-radius: 5px;
	border: 2px solid #172bef;
	transition: 0.3s;
	font-weight: bold;
	font-size: 1em;
  background-color: ${props => props.primary ? '#1920EF' : null};
  color: ${props => props.primary ? '#fff' : null};

	:hover {
		transform: scale(1.05);
	}
`

const GroupSel = ({group, setGroup}) => {
	return (
			<GrContainer>
				<Group 
					onClick={() => setGroup('dos')}
					primary={group === 'dos'}
				>
							Horario 2 - 4 pm
				</Group>
				<Group 
					onClick={() => setGroup('cuatro')}
					primary={group === 'cuatro'}
				>
							Horario 2 - 4 pm
				</Group>
			</GrContainer>
	);
}

export default GroupSel;
