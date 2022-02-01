import { prefix } from '../../utils/prefix.js';

const data = {
	pages : [
		{
			title: 'Principal',
			link: '/principal',
			src: `${prefix}/imgs/main/Icon_principal.svg`,
			dsc: 'Avance y Estado Actual del Juego',
		},
		{
			title: 'ETESC',
			link: '/etesc',
			src: `${prefix}/imgs/main/Icon_ETESC.svg`,
			dsc: 'Entregables y Retos para cada Semana',
		},
		{
			title: 'Contenido',
			link: '/content',
			src: `${prefix}/imgs/main/Icon_cont.svg`,
			dsc: 'Contenidos que apoyaran el desarrollo de tu proyecto',
		},
		{
			title: 'Zonas Comunes',
			link: '/zones',
			src: `${prefix}/imgs/main/Icon_zonas_comunes.svg`,
			dsc: 'Contenidos, Asesores, Webinars y mas...',
		},
		{
			title: 'Oficina',
			link: '/office',
			src: `${prefix}/imgs/main/Icon_Oficina.svg`,
			dsc: 'Informacion sobre cada uno de los Equipos',
		},
		{
			title: 'Informacion',
			link: '/info/about',
			src: `${prefix}/imgs/main/Icon_Informacion.svg`,
			dsc: 'Para Conocer y Saber mas de Quanticon Valley',
		},
	]
}

export const getPages = () => data.pages
