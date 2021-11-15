import { prefix } from '../../utils/prefix.js';

const data = {
	pages : [
		{
			title: 'Principal',
			link: '/principal',
			src: `${prefix}/main/img/Icon_principal.svg`,
		},
		{
			title: 'ETESC',
			link: '/etesc',
			src: `${prefix}/main/img/Icon_ETESC.svg`,
		},
		{
			title: 'Zonas Comunes',
			link: '/zones',
			src: `${prefix}/main/img/Icon_zonas_comunes.svg`,
		},
		{
			title: 'Oficina',
			link: '/office',
			src: `${prefix}/main/img/Icon_Oficina.svg`,
		},
	//{
	//	title: 'Perfil',
	//	src: require('./img/Icon_perfil.svg').default,
	//	link: 'perfil',
	//},
		{
			title: 'Informacion',
			link: '/info',
			src: `${prefix}/main/img/Icon_Informacion.svg`,
		},
	]
}

export const getPages = () => data.pages
