import styled from 'styled-components'

const GrContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`
const Group = styled.div`
	margin: 10px 12px 5px 12px;
	padding: 5px 10px;
	border-radius: 5px;
	border: 2px solid #172bef;
	font-weight: bold;
	font-size: .9em;
  background-color: ${props => props.primary ? '#1920EF' : null};
  color: ${props => props.primary ? '#fff' : null};
	transition: 0.3s;

	:hover {
		transform: scale(1.03);
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
