"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{5627:function(e,a,i){var o=i(2279),n=(i(1664),i(7379)),t=i(5893),r=n.ZP.div.withConfig({displayName:"SrcItemList__SrcGrid",componentId:"sc-let18i-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));grid-auto-rows:auto;grid-gap:20px 40px;transition:0.3s ease;"]),s=n.ZP.div.withConfig({displayName:"SrcItemList__SrcList",componentId:"sc-let18i-1"})(["display:flex;flex-direction:column;color:blue;"]),d=n.ZP.div.withConfig({displayName:"SrcItemList__Src",componentId:"sc-let18i-2"})(["display:flex;color:#000;align-items:center;margin-bottom:10px;margin-top:10px;margin-left:20px;transition:0.3s;:hover{transform:scale(1.02);color:#1920EF;}"]),c=n.ZP.img.withConfig({displayName:"SrcItemList__Img",componentId:"sc-let18i-3"})(["width:1em;"]),p=n.ZP.div.withConfig({displayName:"SrcItemList__Title",componentId:"sc-let18i-4"})(["margin-left:1em;font-size:1em;"]),u=function(e){var a=e.data,i=e.src;return(0,t.jsx)("a",{href:a[1],target:"_blank",withoutrel:"noreferrer",children:(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{src:"".concat(o.O,"/imgs/items/").concat(i,".png")}),(0,t.jsx)(p,{children:a[0]})]})})};a.Z=function(e){var a=e.data,i=[];for(var o in a)i.push({name:o,cont:a[o]});return(0,t.jsx)(r,{children:i.map((function(e){return e.cont[0]?(0,t.jsxs)(s,{children:[(0,t.jsxs)("h4",{children:["_",e.name]}),e.cont.map((function(a){return(0,t.jsx)(u,{data:a,src:e.name},a[0])}))]},e.name):null}))})}},1150:function(e,a,i){var o=i(7379),n=i(5893),t=o.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:flex-start;"]),r=o.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 12px 5px 12px;padding:5px 10px;border-radius:5px;border:2px solid #172bef;font-weight:bold;font-size:.9em;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));a.Z=function(e){var a=e.group,i=e.setGroup;return(0,n.jsxs)(t,{children:[(0,n.jsx)(r,{onClick:function(){return i("dos")},primary:"dos"===a,children:"Horario 2 - 4 pm"}),(0,n.jsx)(r,{onClick:function(){return i("cuatro")},primary:"cuatro"===a,children:"Horario 4 - 6 pm"})]})}},4804:function(e,a,i){var o=i(7379),n=i(5893),t=o.ZP.div.withConfig({displayName:"pisoSel__Selector",componentId:"sc-198y8og-0"})(["display:flex;flex-wrap:wrap;align-items:center;text-align:center;justify-content:space-evenly;padding:5px 5%;margin:20px 0;background-color:#e0e5ed;border-radius:20px;color:#1920EF;font-weight:bold;font-size:1em;@media screen and (max-width:1000px){padding:5px 15%;}"]),r=o.ZP.div.withConfig({displayName:"pisoSel__SelItem",componentId:"sc-198y8og-1"})(["border-radius:20px;padding:5px 10px;margin:5px 0px;white-space:nowrap;transition:0.5s;background-color:",";color:",";:hover{transform:scale(1.2);background-color:#979FF5;color:#ffffff;cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));a.Z=function(e){var a=e.piso,i=e.pisoF;return(0,n.jsx)(t,{children:[1,2,3,4,5,6].map((function(e){return(0,n.jsxs)(r,{onClick:function(){return i(e)},primary:a===e,children:["Piso ",e]},e.toString())}))})}},3335:function(e,a,i){i.d(a,{P9:function(){return m},Cf:function(){return v},iR:function(){return c},So:function(){return l},a5:function(){return p},Ug:function(){return u},LR:function(){return d}});var o=JSON.parse('{"pisos":["Selecciona un piso","Piso 1: Ambientaci\xf3n","Piso 2: Conceptualizaci\xf3n","Piso 3: Ideaci\xf3n","Piso 4: Dise\xf1o + Innovaci\xf3n","Piso 5: Prototipado","Piso 6: Sala de Juntas"],"dos":{"1":{"entrega":[["ACTA DE COMPROMISO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189"]],"reto":[]},"2":{"entrega":[["PREGUNTA ESENCIAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701073"]],"reto":[["TALLER DE \xc9TICA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745401"],["PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745626"],["PREGUNTAS CONVERSATORIO TECNOLOG\xcdA Y SOCIEDAD","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745684"],["PREGUNTAS CONVERSATORIO ECONOM\xcdA DEL CONOCIMIENTO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745688"],["PREGUNTAS CONVERSATORIO DISE\xd1O Y ERGONOM\xcdA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745692"]]},"3":{"entrega":[["POSIBLES SOLUCIONES / INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700231"]],"reto":[]},"4":{"entrega":[["PROBLEMA / Dise\xf1o y Prototipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701160"],["PITCH PISO 4",""],["Avance del trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700251"],["Evaluacion de Desempe\xf1os","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700274"]],"reto":[]},"5":{"entrega":[["PROTOTIPO FINAL, Campa\xf1a Publicitaria y Estrategia de Mercado","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701166"],["PITCH PISO 3",""],["Trabajo en Equipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700299"]],"reto":[]},"6":{"entrega":[["Validaci\xf3n de la Solucion","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700339"],["PITCH FINAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700336"],["Pagina Web","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700342"],["entrega Final: Trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700332"],["Evaluacion de Desempe\xf1os II","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700346"]],"reto":[]}},"cuatro":{"1":{"entrega":[["ACTA DE COMPROMISO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700426"]],"reto":[]},"2":{"entrega":[["PREGUNTA ESENCIAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701074"]],"reto":[["TALLER DE \xc9TICA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745402"],["PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627"],["PREGUNTAS CONVERSATORIO TECNOLOG\xcdA Y SOCIEDAD","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627"],["PREGUNTAS CONVERSATORIO ECONOM\xcdA DEL CONOCIMIENTO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745689"],["PREGUNTAS CONVERSATORIO DISE\xd1O Y ERGONOM\xcdA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745693"]]},"3":{"entrega":[["POSIBLES SOLUCIONES / INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700465"],["PITCH PISO 3",""]],"reto":[]},"4":{"entrega":[["PROBLEMA / Dise\xf1o y Prototipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701161"],["PITCH PISO 4",""],["Avance del trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700485"],["Evaluacion de Desempe\xf1os","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700506"]],"reto":[]},"5":{"entrega":[["PROTOTIPO FINAL, Campa\xf1a Publicitaria y Estrategia de Mercado","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701167"],["PITCH PISO 3",""],["Trabajo en Equipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700531"]],"reto":[]},"6":{"entrega":[["Validaci\xf3n de la Solucion","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700571"],["PITCH FINAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700568"],["Pagina Web","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700574"],["entrega Final: Trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700564"],["Evaluacion de Desempe\xf1os II","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700578"]],"reto":[]}}}'),n=JSON.parse('[{"name":"CAFETERIA","desc":"Conformacion de Equipos","img":"/imgs/zones/cafe.png","link":"https://ingenieria.unal.edu.co/tpi/index.php/24propuestas"},{"name":"REUNIONES","desc":"Webinars para todos","img":"/imgs/zones/reun.png","link":"/zones/webinar"},{"name":"LOBBY","desc":"Tus tareas inician aqui","img":"/imgs/zones/lobby.png","link":"/zones/lobby","type":"twover"},{"name":"ASESORES","desc":"Resuelve tus dudas","img":"/imgs/zones/asesor.png","link":"/zones/src/asesor","type":"twohor"}]'),t=JSON.parse('{"dos":{"1":{"ova":[["Juego SALA DE ESCAPE","https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700374"],["Cronograma Interactivo","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701298"],["Decalogo Del Mentor","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700168"],["Comunicacion Eficaz","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700320"]],"pdf":[["SYLLABUS - Libro Interactivo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700372"]],"video":[],"tool":[]},"2":{"ova":[],"pdf":[["PROTOCOLO PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749093"],["RUBRICA PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749453&forceview=1"]],"video":[],"tool":[]},"3":{"ova":[],"pdf":[["GUIA METODOLOGICA INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700225"],["GUIA DE TRABAJO ESCRITO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700249"]],"video":[],"tool":[]},"6":{"ova":[],"pdf":[["GUIA PRE SELECCION DE MEJORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700321"],["GUIA PARTICIPACION DE PROFESORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700317"],["GUIA PARTICIPACION DE ESTUDIANTE","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700318"],["GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700319"]],"video":[["CREACI\xd3N PAGINAS WIX","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700315"]],"tool":[]}},"cuatro":{"1":{"ova":[["Juego SALA DE ESCAPE","https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603"],["Cronograma Interactivo","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701299"],["Decalogo Del Mentor","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700405"],["Comunicacion Eficaz","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700552"]],"pdf":[["SYLLABUS - Libro Interactivo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700601"]],"video":[],"tool":[]},"2":{"ova":[],"pdf":[["PROTOCOLO PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749094"],["RUBRICA PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749452&forceview=1"]],"video":[],"tool":[]},"3":{"ova":[],"pdf":[["GUIA METODOLOGICA INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700459"],["GUIA DE TRABAJO ESCRITO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700483"]],"video":[],"tool":[]},"6":{"ova":[],"pdf":[["GUIA PRE SELECCION DE MEJORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700553"],["GUIA PARTICIPACION DE PROFESORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700549"],["GUIA PARTICIPACION DE ESTUDIANTE","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700550"],["GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700551"]],"video":[["CREACI\xd3N PAGINAS WIX","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700547"]],"tool":[]}}}'),r=JSON.parse('{"rd":{"dos":{"1":{"ova":[["Roles en el equipo de Trabajo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=738780"]],"video":[["Como Hacer un Pitch","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700302"],["Pregunta Escencial","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701245"]],"formulario":[["Encuesta de persepcion conservatorios: como presentar un pitch","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700304"],["Encuesta Presentacion de la materia","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700175"],["Encuesta de Conocimientos Previos","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700174"]]},"2":{"ova":[["Metodolog\xeda V\xe9ster y \xc1rbol de Problemas","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743427"],["C\xf3mo hacer un Pestal?","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743467"],["Mapa de Empat\xeda","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743476"]],"video":[["Video Conservatorios 20 de Octubre","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700201"]],"formulario":[]},"3":{},"4":{},"5":{},"6":{}},"cuatro":{"1":{"ova":[["Roles en el equipo de Trabajo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=739513"]],"video":[["Como Hacer un Pitch","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700534"],["Pregunta Escencial","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701209"]],"formulario":[["Encuesta de persepcion conservatorios: como presentar un pitch","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700536"],["Encuesta Presentacion de la materia","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700412"],["Encuesta de Conocimientos Previos","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700411"]]},"2":{"ova":[["Metodolog\xeda V\xe9ster y \xc1rbol de Problemas","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743429"],["C\xf3mo hacer un Pestal?","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743468"],["Mapa de Empat\xeda","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743477"]],"video":[["Video Conservatorios 20 de Octubre","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700435"]],"formulario":[]},"3":{},"4":{},"5":{},"6":{}}},"jj":[{"img":"1-hc.png","nombre":"Hern\xe1n G. Cort\xe9s Mora","rol":"profesor facultad de ingenieria","desc":"Doctor en Ingenier\xeda - Industria y Organizaciones, Magister en Ingenier\xeda Industrial e Ingeniero de Sistemas. Experiencia en gesti\xf3n universitaria, gesti\xf3n ambiental, aprendizaje basado en proyectos (PBL), gesti\xf3n ambiental, de proyectos de extensi\xf3n, consultor\xeda, asesor\xeda, formaci\xf3n de docentes, docencia universitaria (pregrado y posgrado), investigaci\xf3n, manejo de talento humano, sistemas de informaci\xf3n y mentor\xeda de emprendedores, con m\xe1s de diez a\xf1os de experiencia en acompa\xf1amiento de iniciativas de innovaci\xf3n y emprendimiento. Actualmente Jefe de la Oficina de Gesti\xf3n Ambiental de la Sede Bogot\xe1 de la Universidad Nacional de Colombia.","campo":"Ingenieria Industrial","costo":500,"nombreMon":"Mariana Barrera","correoMon":"lmbarreram@unal.edu.co"},{"img":"1-or.png","nombre":"Oscar L. Rodriguez","rol":"profesor facultad de ingenieria","desc":"Ingeniero mecatr\xf3nico, mag\xedster en ingenier\xeda biom\xe9dica y candidato a doctor en ingenier\xeda mec\xe1nica y mecatr\xf3nica. Mi \xe1rea de trabajo ha estado orientada principalmente a la investigaci\xf3n interdisciplinar en \xe1reas como la ingenier\xeda biom\xe9dica, el modelado computacional de sistemas f\xedsicos y biol\xf3gicos, la simulaci\xf3n multif\xedsica, la programaci\xf3n cient\xedfica, el dise\xf1o, implementaci\xf3n y administraci\xf3n de tecnolog\xeda biom\xe9dica y la docencia en biomec\xe1nica y mec\xe1nica de s\xf3lidos. Entusiasta de todo lo que tenga que ver con nuevas aplicaciones de la tecnolog\xeda, sistemas computacionales de alto rendimiento y sus aplicaciones.","campo":"Ingenieria Mecatronica","costo":500,"nombreMon":"David Andr\xe9s Ni\xf1o","correoMon":"daninom@unal.edu.co"},{"img":"1-oe.png","nombre":"Oscar Andres Erazo","rol":"profesor facultad de ingenieria","desc":"MBA con orientaci\xf3n en Direcci\xf3n Estrat\xe9gica. Coach Profesional. Ingeniero en Electr\xf3nica y Telecomunicaciones con 20 a\xf1os de experiencia laboral en la planeaci\xf3n, el dise\xf1o y la gesti\xf3n de redes y proyectos de telecomunicaciones. 5 a\xf1os como Docente Universitario. Trabajo guiado por objetivos, orientado a obtener excelentes resultados. Buenas relaciones interpersonales y una amplia experiencia en la administraci\xf3n de personas. Aseguro un excelente grado de servicio, logrando identificar necesidades en este sector, disminuyendo la brecha entre la academia y el sector productivo.","campo":"Ingenieria Electronica","costo":500,"nombreMon":"Cristi\xe1n Stiven Suavita","correoMon":"cssuavitam@unal.edu.co"},{"img":"1-fb.png","nombre":"Ferney A. Beltran","rol":"profesor facultad de ingenieria","desc":"Ingeniero en Electr\xf3nica por la Universidad Nacional de Colombia y Mag\xedster en Redes de Telecomunicaciones para Pa\xedses en Desarrollo por la Universidad Rey Juan Carlos. Madrid Espa\xf1a y candidato doctor en TIC.","campo":"Ingenieria Electronica","costo":500,"nombreMon":"Leidy Cardozo","correoMon":"lcardozo@unal.edu.co"},{"img":"1-dg.png","nombre":"David L. Galindo","rol":"profesor facultad de ingenieria","desc":"Ingeniero Mecatr\xf3nico, con un m\xe1ster en Automatizaci\xf3n Industrial. Apasionado de la fiabilidad industrial, con experiencia en el desarrollo de sistemas de detecci\xf3n y diagn\xf3stico de fallos, an\xe1lisis de criticidad de activos (ACA), an\xe1lisis de causa ra\xedz (RCA) y seguimiento de indicadores clave de rendimiento (KPI). Con una experiencia centrada en el an\xe1lisis del espectro electromagn\xe9tico para la detecci\xf3n de fallos en m\xe1quinas el\xe9ctricas. Actualmente aspirante a doctor en ingenier\xeda y docente ocasional de la Universidad Nacional desde el 2019.","campo":"Ingenieria Mecatronica","costo":500,"nombreMon":"Mariana Barrera","correoMon":"lmbarreram@unal.edu.co"},{"img":"1-jv.png","nombre":"Julian D. Valbuena","rol":"profesor facultad de ingenieria","desc":"Formaci\xf3n acad\xe9mica: Ingeniero Electr\xf3nico (Grado Agosto 2016) \u2013 UNAL. Ingeniero Electricista (Grado Septiembre 2017) \u2013 UNAL. Magister en Ingenier\xeda El\xe9ctrica (Grado Septiembre 2020) \u2013 UNAL.","campo":"Ingenieria Electrica","costo":500,"nombreMon":"Mariana Barrera","correoMon":"lmbarreram@unal.edu.co"},{"img":"1-ja.png","nombre":"John F. Acu\xf1a","rol":"Profesor Facultad de Ingenier\xeda","desc":"Profesional de la ingenier\xeda Agr\xedcola, con estudios de maestr\xeda en estructuras y doctorado en mecanizaci\xf3n y tecnolog\xeda agraria, con 24 a\xf1os de experiencia docente en el \xe1rea de construcciones agr\xedcolas (infraestructura rural y bioclim\xe1tica). Director y participante en proyectos de consultor\xeda, investigaci\xf3n y transferencia de tecnolog\xeda a nivel nacional e internacional. Un hombre feliz, decidido y exitoso. L\xedder que busca soluciones a los retos a los que me enfrento. Anal\xedtico, organizado, colaborativo y en constante aprendizaje. Apasionado por la investigaci\xf3n aplicada y la docencia, buscando el bienestar de quienes me rodean en diferentes entornos.","campo":"Ingenieria Agricola","costo":500,"nombreMon":"David Andr\xe9s Ni\xf1o","correoMon":"daninom@unal.edu.co"},{"img":"1-ah.jpeg","nombre":"Alfonso Herrera Jim\xe9nez","rol":"Profesor Facultad de Ingenier\xeda","desc":"Ingeniero de sistemas de la Universidad Nacional de Colombia. Candidato a Doctor en administraci\xf3n de la Universidad San Pablo CEU de Madrid (Espa\xf1a). Especialista en Administraci\xf3n y Finanzas. Especialista en Alta Capacidad UNED en Madrid (Espa\xf1a). Gerente Financiero y Administrativo Aseo Capital. Gerente Financiero y Administrativo ECSA. Gerente de Sistemas de Laboratorios Chalver Farmac\xe9utica. Director de Sistemas Revista Cromos. Jefe de Auditor\xeda de Sistemas Contralor\xeda de Bogot\xe1. Docente Universidad Nacional: c\xe1tedras de Gerencia de Proyectos y Gerencia de Empresa. Docente Universidad EAN: especializaci\xf3n y maestr\xeda en pensamiento estrat\xe9gico. Docente Universidad de San Buenaventura: C\xe1tedra de gesti\xf3n de la responsabilidad social empresarial.","campo":"Ingenier\xeda de Sistemas","costo":500,"nombreMon":"Leidy Cardozo","correoMon":"lcardozo@unal.edu.co"}]}'),s=2,d=function(){return s},c=function(e,a){return o[e][a]},p=function(e){return o.pisos[e]},u=function(){return n},l=function(e,a){return t[e][a]},m=function(e,a){return r.rd[e][a]},v=function(){return r.jj}}}]);