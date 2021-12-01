import styled from 'styled-components'
import Link from 'next/link'
import { prefix } from '../../utils/prefix.js';

import NotiWidget from '../notiWidget'
import Calendar from '../calendar'

const Container = styled.div`
	grid-area: rb;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: #fff;
	padding: 0px .5em;
	margin: 5px 2px;
	top: 5px;
	height: 98vh;
	box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.15);

	@media screen and (max-width: 800px) {
		display: none;
	}
`
const ItemB = styled.div`
  display: flex;
	align-items: center;
	border-radius: 1em;
	justify-content: space-between;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
  background-color: #FFC024;
  color: black;
  padding: .5em 1em;
  font-weight: 900;
  font-size: 1em;
	text-align: end;
  transition: 0.3s;

	:hover {
		transform: scale(0.98);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}
`

const RightBar = ({openNoti}) => {
	return (
		<Container>
			<Calendar/>
			<NotiWidget open={openNoti}/>
			<Link href="https://drive.google.com/file/d/1DsxZt4232mjOLK8-4hVIm0QOPxQJ9JrX/view?usp=sharing">
				<ItemB>
					<img src={`${prefix}/imgs/pil.png`}/>
					Pildoras de la semana
				</ItemB>
			</Link>
		</Container>
	);
}

export default RightBar;
