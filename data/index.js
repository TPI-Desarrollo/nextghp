import etesc from './etesc.json'
import zones from './zones.json'
import lobbydata from './zonesCont/lobby.json'
import asesordata from './zonesCont/asesor.json'
import webinardata from './zonesCont/webinar.json'
import noti from './noti.json'

const state = {
	pisoA: 2
}
export const statePiso = () => state.pisoA

// ETESC
export const getEtesc = (grp, piso) => etesc[grp][piso]
export const getPisoTitle = (piso) => etesc["pisos"][piso]

// ZONES
export const getZones = () => zones

// LOBBY
export const getLobbyData = (grp, piso) => lobbydata[grp][piso]

// ASESOR
export const getAsesorSrc = (grp, piso) => asesordata.src[grp][piso]
export const getAsesorVir = () => asesordata.virtual
export const getAsesorFaq = () => asesordata.faqs

// WEBINARS
export const getWebinarData = () => webinardata

// NOTI
export const getNoti = () => noti
