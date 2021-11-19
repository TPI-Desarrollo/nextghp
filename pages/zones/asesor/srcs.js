import { useState, useEffect } from 'react'
import { prefix } from '../../../utils/prefix.js';

import styled from 'styled-components';
import PisosSel from '../../../UIcomponents/pisoSel'
import GroupSel from '../../../UIcomponents/groupSel'
import ItemList from '../../../UIcomponents/SrcItemList'

import { statePiso, getAsesorSrc } from '../../../public/data'


const Cont = styled.div`
	padding: 0px 20px;
`

const Srcs = () => {
	const [piso, setPiso] = useState(1)
	const [group, setGroup] = useState("dos")
	const [data, setData] = useState({})
	const pisoA = statePiso()

	useEffect(() => {
		setData(getAsesorSrc(group, piso))
	}, [group, piso])

	return <Cont>
		<GroupSel group={group} setGroup={setGroup}/>
		<PisosSel piso={piso} pisoF={setPiso}/>
			{piso <= pisoA
				?	<ItemList data={data}/>
				: null }
	</Cont>
}

export default Srcs
