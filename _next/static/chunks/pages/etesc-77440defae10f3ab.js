(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{1150:function(e,i,a){"use strict";var t=a(7379),o=a(5893),p=t.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:flex-start;"]),u=t.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 12px 5px 12px;padding:5px 10px;border-radius:5px;border:2px solid #172bef;font-weight:bold;font-size:.9em;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));i.Z=function(e){var i=e.group,a=e.setGroup;return(0,o.jsxs)(p,{children:[(0,o.jsx)(u,{onClick:function(){return a("dos")},primary:"dos"===i,children:"Horario 2 - 4 pm"}),(0,o.jsx)(u,{onClick:function(){return a("cuatro")},primary:"cuatro"===i,children:"Horario 2 - 4 pm"})]})}},4804:function(e,i,a){"use strict";var t=a(7379),o=a(5893),p=t.ZP.div.withConfig({displayName:"pisoSel__Selector",componentId:"sc-198y8og-0"})(["display:flex;flex-wrap:wrap;align-items:center;text-align:center;justify-content:space-evenly;padding:5px 5%;margin:20px 0;background-color:#e0e5ed;border-radius:20px;color:#1920EF;font-weight:bold;font-size:.8em;@media screen and (max-width:1000px){padding:5px 15%;}"]),u=t.ZP.div.withConfig({displayName:"pisoSel__SelItem",componentId:"sc-198y8og-1"})(["border-radius:20px;padding:5px 10px;margin:5px 0px;white-space:nowrap;transition:0.5s;background-color:",";color:",";:hover{transform:scale(1.2);background-color:#979FF5;color:#ffffff;cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));i.Z=function(e){var i=e.piso,a=e.pisoF;return(0,o.jsx)(p,{children:[1,2,3,4,5,6].map((function(e){return(0,o.jsxs)(u,{onClick:function(){return a(e)},primary:i===e,children:["Piso ",e]},e.toString())}))})}},6885:function(e,i,a){"use strict";a.r(i);var t=a(7379),o=a(2279),p=a(3335),u=a(5893),s="".concat(o.O,"/imgs/etesc/up-file.png"),n="".concat(o.O,"/imgs/etesc/reto.png"),d=t.ZP.div.withConfig({displayName:"listItems__Container",componentId:"sc-1e439g2-0"})(["padding:10px 20px;"]),r=t.ZP.div.withConfig({displayName:"listItems__SrcList",componentId:"sc-1e439g2-1"})(["display:flex;flex-direction:column;color:blue;margin-bottom:30px;"]),c=t.ZP.div.withConfig({displayName:"listItems__ItemCat",componentId:"sc-1e439g2-2"})(["font-weight:600;font-size:25px;line-height:52px;letter-spacing:-0.03em;color:#272835;margin:0px;"]),l=t.ZP.a.withConfig({displayName:"listItems__Item",componentId:"sc-1e439g2-3"})(["display:flex;color:#000;align-items:center;margin-bottom:10px;margin-top:10px;margin-left:20px;transition:0.3s;:hover{transform:scale(1.02);color:#1920EF;}"]),m=t.ZP.img.withConfig({displayName:"listItems__ItemImg",componentId:"sc-1e439g2-4"})([""]),v=t.ZP.span.withConfig({displayName:"listItems__ItemTitle",componentId:"sc-1e439g2-5"})(["font-weight:600;font-size:18px;padding-left:15px;width:80%;"]),h=function(e){var i=e.title,a=e.data,t=e.imgSrc;return(0,u.jsxs)(r,{children:[(0,u.jsx)(c,{children:i}),a instanceof Array?a.map((function(e){return(0,u.jsxs)(l,{href:e[1],target:"_blank",children:[(0,u.jsx)(m,{src:t}),(0,u.jsx)(v,{children:e[0]})]},e[0])})):null]})},g=function(){return(0,u.jsx)("h3",{children:"El piso seleccionado estara disponible una vez se complete la fase del piso anterior"})};i.default=function(e){e.group;var i=e.piso,a=e.data,t=(0,p.LR)();return(0,u.jsx)(d,{children:i<=t?(0,u.jsxs)("div",{children:[a.entrega[0]?(0,u.jsx)(h,{title:"ENTREGABLES",data:a.entrega,imgSrc:s}):null,a.reto[0]?(0,u.jsx)(h,{title:"RETOS DE PISO",data:a.reto,imgSrc:n}):null]}):(0,u.jsx)(g,{})})}},1363:function(e,i,a){"use strict";a.r(i);var t=a(7294),o=a(2279),p=a(3335),u=a(7379),s=a(4068),n=a(9454),d=a(4804),r=a(1150),c=a(6885),l=a(5893),m="".concat(o.O,"/imgs/header/etesc.png"),v=u.ZP.h2.withConfig({displayName:"etesc__Title",componentId:"sc-a18d0j-0"})(["font-weight:600;font-size:35px;line-height:52px;letter-spacing:-0.03em;color:#272835;margin:0;z-index:2;"]);i.default=function(){var e=(0,t.useState)(1),i=e[0],a=e[1],o=(0,t.useState)("dos"),u=o[0],h=o[1],g=(0,p.iR)(u,i),I=(0,p.a5)(i);return(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(n.Z,{title:"ETESC",desc:"Edificio Tecnol\xf3gico de Empredimiento Sostenible",imgH:m}),(0,l.jsx)(r.Z,{group:u,setGroup:h}),(0,l.jsx)(d.Z,{piso:i,pisoF:a}),(0,l.jsx)(v,{children:I}),(0,l.jsx)(c.default,{group:u,piso:i,data:g})]})}},3335:function(e,i,a){"use strict";a.d(i,{P9:function(){return m},iR:function(){return d},So:function(){return l},a5:function(){return r},Ug:function(){return c},LR:function(){return n}});var t=JSON.parse('{"pisos":["Selecciona un piso","Piso 1: Ambientaci\xf3n","Piso 2: Conceptualizaci\xf3n","Piso 3: Ideaci\xf3n","Piso 4: Dise\xf1o + Innovaci\xf3n","Piso 5: Prototipado","Piso 6: Sala de Juntas"],"dos":{"1":{"entrega":[["ACTA DE COMPROMISO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189"]],"reto":[]},"2":{"entrega":[["PREGUNTA ESENCIAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701073"]],"reto":[["TALLER DE \xc9TICA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745401"],["PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745626"],["PREGUNTAS CONVERSATORIO TECNOLOG\xcdA Y SOCIEDAD","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745684"],["PREGUNTAS CONVERSATORIO ECONOM\xcdA DEL CONOCIMIENTO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745688"],["PREGUNTAS CONVERSATORIO DISE\xd1O Y ERGONOM\xcdA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745692"]]},"3":{"entrega":[["POSIBLES SOLUCIONES / INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700231"]],"reto":[]},"4":{"entrega":[["PROBLEMA / Dise\xf1o y Prototipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701160"],["PITCH PISO 4",""],["Avance del trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700251"],["Evaluacion de Desempe\xf1os","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700274"]],"reto":[]},"5":{"entrega":[["PROTOTIPO FINAL, Campa\xf1a Publicitaria y Estrategia de Mercado","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701166"],["PITCH PISO 3",""],["Trabajo en Equipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700299"]],"reto":[]},"6":{"entrega":[["Validaci\xf3n de la Solucion","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700339"],["PITCH FINAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700336"],["Pagina Web","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700342"],["entrega Final: Trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700332"],["Evaluacion de Desempe\xf1os II","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700346"]],"reto":[]}},"cuatro":{"1":{"entrega":[["ACTA DE COMPROMISO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700426"]],"reto":[]},"2":{"entrega":[["PREGUNTA ESENCIAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701074"]],"reto":[["TALLER DE \xc9TICA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745402"],["PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627"],["PREGUNTAS CONVERSATORIO TECNOLOG\xcdA Y SOCIEDAD","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627"],["PREGUNTAS CONVERSATORIO ECONOM\xcdA DEL CONOCIMIENTO","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745689"],["PREGUNTAS CONVERSATORIO DISE\xd1O Y ERGONOM\xcdA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745693"]]},"3":{"entrega":[["POSIBLES SOLUCIONES / INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700465"],["PITCH PISO 3",""]],"reto":[]},"4":{"entrega":[["PROBLEMA / Dise\xf1o y Prototipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701161"],["PITCH PISO 4",""],["Avance del trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700485"],["Evaluacion de Desempe\xf1os","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700506"]],"reto":[]},"5":{"entrega":[["PROTOTIPO FINAL, Campa\xf1a Publicitaria y Estrategia de Mercado","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701167"],["PITCH PISO 3",""],["Trabajo en Equipo","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700531"]],"reto":[]},"6":{"entrega":[["Validaci\xf3n de la Solucion","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700571"],["PITCH FINAL","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700568"],["Pagina Web","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700574"],["entrega Final: Trabajo Escrito","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700564"],["Evaluacion de Desempe\xf1os II","https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700578"]],"reto":[]}}}'),o=JSON.parse('[{"name":"CAFETERIA","desc":"Conformacion de Equipos","img":"/imgs/zones/cafe.png","link":"https://ingenieria.unal.edu.co/tpi/index.php/24propuestas"},{"name":"REUNIONES","desc":"Webinars para todos","img":"/imgs/zones/reun.png","link":"/zones/webinar"},{"name":"LOBBY","desc":"Tus tareas inician aqui","img":"/imgs/zones/lobby.png","link":"/zones/lobby","type":"twover"},{"name":"ASESORES","desc":"Resuelve tus dudas","img":"/imgs/zones/asesor.png","link":"/zones/asesor","type":"twohor"}]'),p=JSON.parse('{"dos":{"1":{"ova":[["Juego SALA DE ESCAPE","https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700374"],["Cronograma Interactivo","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701298"],["Decalogo Del Mentor","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700168"],["Comunicacion Eficaz","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700320"]],"pdf":[["SYLLABUS - Libro Interactivo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700372"]],"video":[],"tool":[]},"2":{"ova":[],"pdf":[["PROTOCOLO PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749093"],["RUBRICA PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749453&forceview=1"]],"video":[],"tool":[]},"3":{"ova":[],"pdf":[["GUIA METODOLOGICA INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700225"],["GUIA DE TRABAJO ESCRITO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700249"]],"video":[],"tool":[]},"6":{"ova":[],"pdf":[["GUIA PRE SELECCION DE MEJORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700321"],["GUIA PARTICIPACION DE PROFESORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700317"],["GUIA PARTICIPACION DE ESTUDIANTE","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700318"],["GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700319"]],"video":[["CREACI\xd3N PAGINAS WIX","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700315"]],"tool":[]}},"cuatro":{"1":{"ova":[["Juego SALA DE ESCAPE","https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603"],["Cronograma Interactivo","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701299"],["Decalogo Del Mentor","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700405"],["Comunicacion Eficaz","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700552"]],"pdf":[["SYLLABUS - Libro Interactivo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700601"]],"video":[],"tool":[]},"2":{"ova":[],"pdf":[["PROTOCOLO PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749094"],["RUBRICA PITCH PISO 2","https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749452&forceview=1"]],"video":[],"tool":[]},"3":{"ova":[],"pdf":[["GUIA METODOLOGICA INFOGRAFIA","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700459"],["GUIA DE TRABAJO ESCRITO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700483"]],"video":[],"tool":[]},"6":{"ova":[],"pdf":[["GUIA PRE SELECCION DE MEJORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700553"],["GUIA PARTICIPACION DE PROFESORES","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700549"],["GUIA PARTICIPACION DE ESTUDIANTE","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700550"],["GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700551"]],"video":[["CREACI\xd3N PAGINAS WIX","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700547"]],"tool":[]}}}'),u=JSON.parse('{"rd":{"dos":{"1":{"ova":[["Roles en el equipo de Trabajo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=738780"]],"video":[["Como Hacer un Pitch","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700302"],["Pregunta Escencial","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701245"]],"formulario":[["Encuesta de persepcion conservatorios: como presentar un pitch","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700304"],["Encuesta Presentacion de la materia","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700175"],["Encuesta de Conocimientos Previos","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700174"]]},"2":{"ova":[["Metodolog\xeda V\xe9ster y \xc1rbol de Problemas","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743427"],["C\xf3mo hacer un Pestal?","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743467"],["Mapa de Empat\xeda","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743476"]],"video":[["Video Conservatorios 20 de Octubre","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700201"]],"formulario":[]},"3":{},"4":{},"5":{},"6":{}},"cuatro":{"1":{"ova":[["Roles en el equipo de Trabajo","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=739513"]],"video":[["Como Hacer un Pitch","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700534"],["Pregunta Escencial","https://campus.virtual.unal.edu.co/mod/page/view.php?id=701209"]],"formulario":[["Encuesta de persepcion conservatorios: como presentar un pitch","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700536"],["Encuesta Presentacion de la materia","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700412"],["Encuesta de Conocimientos Previos","https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700411"]]},"2":{"ova":[["Metodolog\xeda V\xe9ster y \xc1rbol de Problemas","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743429"],["C\xf3mo hacer un Pestal?","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743468"],["Mapa de Empat\xeda","https://campus.virtual.unal.edu.co/mod/page/view.php?id=743477"]],"video":[["Video Conservatorios 20 de Octubre","https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700435"]],"formulario":[]},"3":{},"4":{},"5":{},"6":{}}}}'),s=2,n=function(){return s},d=function(e,i){return t[e][i]},r=function(e){return t.pisos[e]},c=function(){return o},l=function(e,i){return p[e][i]},m=function(e,i){return u.rd[e][i]}},8499:function(e,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/etesc",function(){return a(1363)}])}},function(e){e.O(0,[379,676,774,888,179],(function(){return i=8499,e(e.s=i);var i}));var i=e.O();_N_E=i}]);