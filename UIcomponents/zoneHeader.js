import styled from 'styled-components'
import { useRouter } from 'next/router'
import { prefix } from '../utils/prefix.js';
import { getZones } from '../public/data'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`
const Cont = styled.div`
	padding: 10px 20px;
`
const Title = styled.h1`
	font-size: 30px;
	letter-spacing: -0.03em;
	margin: 0;
`
const Desc = styled.h4`
	font-weight: normal;
	font-size: 14px;
	margin: 0;
`
const Img = styled.img`
	margin: 30px 0 0 0;
	max-width: 100px;
	max-height: 90px;
`
const Back = styled.img`
	height: 1.3em;
	transition: 0.3s ease;
	:hover {
		transform: scale(1.05)
	}
`


const ZoneHeader = ({ zone }) => {
	const router = useRouter()
	const {name, desc, img} = getZones()[zone]
	return (
			<Container>
				<Back 
					src={`${prefix}/imgs/items/back.png`}
					onClick={()=>router.back()}
				/>
				<Cont>
					<Img src={`${prefix}${img}`}/>
					<Title>{name}</Title>
					<Desc>{desc}</Desc>
				</Cont>
			</Container>
	)
}

export default ZoneHeader;
