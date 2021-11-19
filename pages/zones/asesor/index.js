import { prefix } from '../../../utils/prefix.js';

import styled from 'styled-components';
import QV from '../../../UIcomponents/qv';
import ZoneHeader from '../../../UIcomponents/zoneHeader'
import Srcs from './srcs';


const Asesor = () => {
	return <QV>
		<ZoneHeader	zone={3}/>
		<Srcs/>
	</QV>
}

export default Asesor;
