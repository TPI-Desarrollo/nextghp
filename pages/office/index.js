import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Element from '../../UIcomponents/zcCard'

const imgOffice = `${prefix}/imgs/header/office.png`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-auto-rows: 150px;
	grid-gap: 3em;
	margin: 10px 8%;
`
const office = [
	{
		name: 'OFICINAS',
		desc: '2-4 pm',
		link: 'https://docs.google.com/spreadsheets/d/1nLoG42SGWYe4xi7BHpKh6goHHLkImDSj7XKUu0XjFU0/edit#gid=1528342584',
		img: `${prefix}/imgs/office/btn.png`
	},
	{
		name: 'OFICINAS',
		desc: '4-6 pm',
		link: 'https://docs.google.com/spreadsheets/d/1nLoG42SGWYe4xi7BHpKh6goHHLkImDSj7XKUu0XjFU0/edit#gid=23923283',
		img: `${prefix}/imgs/office/btn.png`
	}
]

const Office = () => {
	return <QV>
		<Header
			title="Oficinas"
			desc="Perfil y progreso de los equipos"
			imgH={imgOffice}
		/>
		<Grid>
			{office.map(item => 
				<Element 
					key={item.desc}
					item={item}
				/>
			)}
		</Grid>
	</QV>
}

export default Office;
