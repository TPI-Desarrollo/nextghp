import { prefix } from '../../utils/prefix.js';
import lobbydata from './zonesCont/lobby.json'

const datazones = [
	{
		name: 'CAFETERIA',
		desc: 'Conformacion de Equipos',
		img: `${prefix}/imgs/zones/cafe.png`,
		link: 'https://ingenieria.unal.edu.co/tpi/index.php/24propuestas',
	},
	{
		name: 'REUNIONES',
		desc: 'Webinars para todos',
		img: `${prefix}/imgs/zones/reun.png`,
		link: '/zones/webinar',
	},
	{
		name: 'LOBBY',
		desc: 'Tus tareas inician aqui',
		img: `${prefix}/imgs/zones/lobby.png`,
		link: '/zones/lobby',
		type: 'twover'
	},
	{
		name: 'ASESORES',
		desc: 'Resuelve tus dudas',
		img: `${prefix}/imgs/zones/asesor.png`,
		link: '/zones/asesor',
		type: 'twohor'
	},
]

export const getZones = () => datazones
export const getLobbyData = (grp, piso) => lobbydata[grp][piso]


