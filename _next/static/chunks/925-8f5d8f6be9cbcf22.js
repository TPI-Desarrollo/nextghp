"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{1150:function(e,n,t){var i=t(4942),r=t(7625),o=t(7379),a=t(4786),c=t(5893);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=o.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:flex-start;"]),p=o.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 8px 5px 8px;padding:5px 10px;border-radius:5px;border:2px solid #172bef;font-weight:bold;font-size:.8em;text-align:center;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));n.Z=function(){var e=(0,a.L)(),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=function(e){i(l(l({},t),{},{group:e}))};return(0,c.jsxs)(d,{children:[(0,c.jsx)(p,{onClick:function(){return o("dos")},primary:"dos"===t.group,children:"Horario 2 - 4 pm"}),(0,c.jsx)(p,{onClick:function(){return o("cuatro")},primary:"cuatro"===t.group,children:"Horario 4 - 6 pm"})]})}},8925:function(e,n,t){t.d(n,{Z:function(){return re}});var i=t(7379),r=t(1664),o=t(2279),a={pages:[{title:"Principal",link:"/principal",src:"".concat(o.O,"/imgs/main/Icon_principal.svg")},{title:"ETESC",link:"/etesc",src:"".concat(o.O,"/imgs/main/Icon_ETESC.svg")},{title:"Zonas Comunes",link:"/zones",src:"".concat(o.O,"/imgs/main/Icon_zonas_comunes.svg")},{title:"Oficina",link:"/office",src:"".concat(o.O,"/imgs/main/Icon_Oficina.svg")},{title:"Informacion",link:"/info/about",src:"".concat(o.O,"/imgs/main/Icon_Informacion.svg")}]},c=function(){return a.pages},s=t(5893),l=i.ZP.img.withConfig({displayName:"navBar__Logo",componentId:"sc-w5sz8n-0"})(["margin:10% 0 10% 10%;max-width:50%;"]),d=i.ZP.img.withConfig({displayName:"navBar__NavImg",componentId:"sc-w5sz8n-1"})(["position:absolute;width:100%;bottom:0;left:0;@media screen and (max-height:600px){display:none;}"]),p=i.ZP.div.withConfig({displayName:"navBar__Button",componentId:"sc-w5sz8n-2"})(["display:flex;justify-content:space-evenly;align-items:center;padding:2vh 0px;font-weight:bold;width:100%;transition:0.5s ease;color:",";background-color:",";border-left:solid "," #FFC024;border-radius:",";transform:",";:hover{cursor:pointer;background-color:#303CFE;color:#ffffff;}"],(function(e){return e.active?"#fff":null}),(function(e){return e.active?"#303CFE":null}),(function(e){return e.active?"5px":"0"}),(function(e){return e.active?"0 10px 10px 0":"0"}),(function(e){return e.active?"scale(1.02)":null})),m=i.ZP.img.withConfig({displayName:"navBar__Icon",componentId:"sc-w5sz8n-3"})(["position:relative;display:inline-block height:80%;"]),u=i.ZP.span.withConfig({displayName:"navBar__Text",componentId:"sc-w5sz8n-4"})(["display:inline-block;margin:0px;padding:0px;width:65%;font-size:1rem;"]),g=i.ZP.nav.withConfig({displayName:"navBar__Container",componentId:"sc-w5sz8n-5"})(["grid-area:sb;position:sticky;background-color:#1920EF;padding:10px 0px 0px 0px;margin:12px 0px 12px 8px;border-radius:20px;top:12px;height:92vh;color:#bbb;box-shadow:-3px 0px 40px rgba(0,0,0,0.4);@media screen and (max-width:800px){display:none;}"]),f="".concat(o.O,"/imgs/main/QB_blanco_vertical_1.png"),h="".concat(o.O,"/imgs/main/QV_textura.png"),x=function(e){var n=e.pg,t=c();return(0,s.jsxs)(g,{children:[(0,s.jsx)(d,{src:h,alt:"nav-img"}),(0,s.jsx)(l,{src:f,alt:"logo"}),t.map((function(e){return(0,s.jsx)(r.default,{href:e.link,children:(0,s.jsxs)(p,{active:e.title===n,children:[(0,s.jsx)(m,{src:e.src,alt:e.link}),(0,s.jsx)(u,{children:e.title})]})},e.link)}))]})},y=i.ZP.div.withConfig({displayName:"navMobile__Button",componentId:"sc-1uzc9au-0"})(["display:flex;justify-content:center;align-items:center;padding:2vh 0px;height:100%;width:100%;transition:0.5s;:hover{transform:scale(1,1.03);background-color:#55F;color:#ffffff;}"]),b=i.ZP.img.withConfig({displayName:"navMobile__Icon",componentId:"sc-1uzc9au-1"})(["position:relative;display:inline-block height:1.6em;width:1.6em;"]),v=i.ZP.nav.withConfig({displayName:"navMobile__Container",componentId:"sc-1uzc9au-2"})(["display:none;position:fixed;background-color:#1920EF;left:0;bottom:0;height:60px;width:100%;color:#999;box-shadow:-3px 0px 40px rgba(0,0,0,0.4);justify-content:center;align-items:center;z-index:2;@media screen and (max-width:800px){display:flex;}"]),w=function(){var e=c();return(0,s.jsx)(v,{children:e.map((function(e){return(0,s.jsx)(r.default,{href:e.link,children:(0,s.jsx)(y,{children:(0,s.jsx)(b,{src:e.src,alt:e.link})})},e.link)}))})},j=t(4942),_=t(7625),O=t(4786),P=t(8626),C=i.ZP.div.withConfig({displayName:"notiWidget__Container",componentId:"sc-c7thu2-0"})(["position:relative;width:100%;"]),k=i.ZP.img.withConfig({displayName:"notiWidget__Img",componentId:"sc-c7thu2-1"})(["width:100%;border-radius:1em;box-shadow:-3px 0px 40px rgba(0,0,0,0.15);transition:.3s ease;:hover{transform:scaley(1.03);box-shadow:2px 2px 8px rgba(0,0,0,0.8);cursor:pointer;}"]),I=(i.ZP.iframe.withConfig({displayName:"notiWidget__Iframe",componentId:"sc-c7thu2-2"})(["position:absolute;top:30px;left:0;width:100%;height:80%;borderRadius:0 0 1em 1em;"]),function(e){var n=e.open,t=(0,P.WA)(),i=t[0]?t[0].video:null;return(0,s.jsxs)(C,{onClick:n,children:[(0,s.jsx)(k,{src:"".concat(o.O,"/imgs/noti/news.png")}),i?(0,s.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(i),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Noticias",style:{position:"absolute",bottom:0,left:0,width:"100%",height:"80%",borderRadius:"0 0 1em 1em"}}):null]})}),Z=t(7294);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,j.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],E=function(e){var n=e.d;return(0,s.jsx)("li",{className:"weekDay",children:n})},S=function(){return(0,s.jsx)("div",{className:"evenDot"})},B=function(e){var n=e.d,t=e.y,i=e.m,r=e.haClick,o=e.event,a=e.today,c=a.d===n&&a.m===i&&a.y===t,l={background:c?"blue":null,color:c?"white":null,fontWeight:c?"Bold":null};if(new Date(t,i+1,0).getDate()<n)return null;if(1===n){var d=new Date(t,i,n).getDay();return(0,s.jsxs)("li",{onClick:r,style:D({gridColumnStart:d},l),children:[" ",n," ",o?(0,s.jsx)(S,{}):null]})}return(0,s.jsxs)("li",{onClick:r,style:l,children:[n," ",o?(0,s.jsx)(S,{}):null]})},F=function(e){var n=e.styles,t=e.handleDay,i=e.events,r={d:(new Date).getDate(),m:(new Date).getMonth(),y:(new Date).getFullYear()},o=(0,Z.useState)((new Date).getMonth()),a=o[0],c=o[1],l=(0,Z.useState)((new Date).getFullYear()),d=l[0],p=l[1],m=function(e){var n=a+e;return n>11?(c(0),p((function(e){return e+1})),null):n<0?(c(11),p((function(e){return e-1})),null):void c((function(e){return n}))};return(0,s.jsxs)("div",{style:D({maxWidth:"300px"},null===n||void 0===n?void 0:n.box),children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsxs)("h3",{style:{margin:0},children:[z[a]," ",d]}),(0,s.jsxs)("div",{className:"btns",children:[(0,s.jsx)("button",{onClick:function(){return m(-1)},style:D({},null===n||void 0===n?void 0:n.button),children:"\u276e"}),(0,s.jsx)("button",{onClick:function(){return m(1)},style:D({},null===n||void 0===n?void 0:n.button),children:"\u276f"})]})]}),(0,s.jsxs)("ol",{children:[["L","M","X","J","V","S","D"].map((function(e){return(0,s.jsx)(E,{d:e},e)})),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((function(e){return(0,s.jsx)(B,{today:r,d:e,y:d,m:a,haClick:function(){return t(new Date(d,a,e))},event:i.some((function(n){return n.d===e&&n.m===a+1&&n.y===d}))},e)}))]})]})},M=[{d:8,m:10,y:2021,event:"Primera Clase TPI y Inicio - Primer Piso"},{d:20,m:10,y:2021,event:"Entrega - Primer Piso"},{d:25,m:10,y:2021,event:"Inicio - Segundo Piso"},{d:8,m:11,y:2021,event:"Mentoria"},{d:10,m:11,y:2021,event:"Mentoria Formativa (entrega de piso)"},{d:17,m:11,y:2021,event:"Conversatorio (Habilidades blandas, Tecnolog\xeda y sociedad, Econom\xeda del conocimiento)"},{d:22,m:11,y:2021,event:"Charla de genero"},{d:24,m:11,y:2021,event:"Mentoria"},{d:29,m:11,y:2021,event:"Mentoria"},{d:1,m:12,y:2021,event:"Presentaci\xf3n de infograf\xeda"},{d:3,m:12,y:2021,event:"Entrega reto de piso (Pieza gr\xe1fica asuntos de g\xe9nero)"},{d:6,m:12,y:2021,event:"Mentoria"},{d:10,m:12,y:2021,event:"Plazo para enviar preguntas conversatorio"},{d:13,m:12,y:2021,event:"Mentoria"},{d:15,m:12,y:2021,event:"Conversatorio (laboratorio y prototipado)"},{d:12,m:1,y:2022,event:"Primera entrega trabajo escrito"}],T=i.ZP.div.withConfig({displayName:"calendar__Container",componentId:"sc-1izln6s-0"})(["position:relative;height:240px;width:100%;display:flex;justify-content:center;"]),W=i.ZP.div.withConfig({displayName:"calendar__Event",componentId:"sc-1izln6s-1"})(["position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-radius:2em;background-color:#1920EF;color:white;width:100%;height:",";z-index:3;transition:.3s ease;"],(function(e){return e.active?"100%":"0"})),L=i.ZP.img.withConfig({displayName:"calendar__Close",componentId:"sc-1izln6s-2"})(["position:absolute;top:1em;right:1em;transition:.3s ease;:hover{transform:scale(1.2);}"]),A=i.ZP.h2.withConfig({displayName:"calendar__Title",componentId:"sc-1izln6s-3"})(["margin:0;"]),H=i.ZP.h3.withConfig({displayName:"calendar__DateT",componentId:"sc-1izln6s-4"})(["margin:0;"]),Q=function(){var e=(0,Z.useState)(null),n=e[0],t=e[1],i=M.find((function(e){return new Date(e.y,e.m-1,e.d).getTime()===(null===n||void 0===n?void 0:n.getTime())}));return(0,s.jsxs)(T,{children:[(0,s.jsx)(W,{active:i,children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(H,{children:[i.d,"-",i.m,"-",i.y]}),(0,s.jsx)(A,{children:i.event}),(0,s.jsx)(L,{onClick:function(){t(null)},src:"".concat(o.O,"/imgs/exit.png")})]}):null}),(0,s.jsx)(F,{handleDay:function(e){t(e)},events:M})]})},V=t(1150);function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){(0,j.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=i.ZP.div.withConfig({displayName:"rightBar__Container",componentId:"sc-m5hjym-0"})(["grid-area:rb;display:flex;flex-direction:column;justify-content:space-evenly;background-color:#fff;padding:0px .5em;margin:5px 2px;top:5px;height:98vh;box-shadow:-3px 0px 40px rgba(0,0,0,0.15);transition:all .3s ease-in;@media screen and (max-width:800px){position:absolute;z-index:3;height:100%;width:'100%';top:0;right:",";margin:0;padding:60px 1em .5em 1em;}"],(function(e){return e.active?"0":"-1300px"})),G=i.ZP.div.withConfig({displayName:"rightBar__ItemB",componentId:"sc-m5hjym-1"})(["display:flex;align-items:center;border-radius:1em;justify-content:space-between;box-shadow:2px 4px 6px rgba(0,0,0,0.4);background-color:#FFC024;color:black;padding:.5em 1em;font-weight:900;font-size:1em;text-align:end;transition:0.3s;:hover{transform:scale(0.98);box-shadow:2px 2px 8px rgba(0,0,0,0.8);cursor:pointer;}"]),Y=i.ZP.div.withConfig({displayName:"rightBar__Header",componentId:"sc-m5hjym-2"})(["position:absolute;display:flex;justify-content:flex-end;align-items:center;padding:.5em;background-color:#1920EF;color:white;z-index:4;top:0;right:0;width:100%;height:60px;@media screen and (min-width:800px){display:none;}"]),X=i.ZP.img.withConfig({displayName:"rightBar__CloseImg",componentId:"sc-m5hjym-3"})(["width:2.4em;transition:.3 ease;:hover{transform:scale(1.05);}"]),K=function(e){var n=e.active,t=e.close,i=(0,O.L)(),r=(0,_.Z)(i,2),a=r[0],c=r[1];return(0,s.jsxs)(q,{active:n,children:[(0,s.jsx)(Y,{children:(0,s.jsx)(X,{onClick:t,src:"".concat(o.O,"/imgs/exit.png")})}),(0,s.jsx)("div",{style:{fontSize:".9em"},children:(0,s.jsx)(V.Z,{})}),(0,s.jsx)(Q,{}),(0,s.jsx)(I,{open:function(){return e="Noticiero",void c(R(R({},a),{},{modal:{visibility:!0,type:e}}));var e}}),(0,s.jsx)("a",{href:"https://drive.google.com/file/d/1xRTV1yWZlF3viIvIS8vgQjLpMZy9AP51/view?usp=sharing",target:"_blank",rel:"noreferrer",children:(0,s.jsxs)(G,{children:[(0,s.jsx)("img",{src:"".concat(o.O,"/imgs/pil.png")}),"Pildoras de la semana"]})})]})},U=i.ZP.div.withConfig({displayName:"MobBar__Container",componentId:"sc-9hwl8o-0"})(["position:absolute;height:50px;width:100%;background-color:#1920EF;z-index:1;display:flex;justify-content:center;align-items:center;@media screen and (min-width:800px){display:none;}"]),$=i.ZP.img.withConfig({displayName:"MobBar__Img",componentId:"sc-9hwl8o-1"})(["height:35px;"]),ee=i.ZP.img.withConfig({displayName:"MobBar__Menu",componentId:"sc-9hwl8o-2"})(["position:absolute;right:1em;transition:.3s ease;:hover{transform:scale(1.1);cursor:pointer;}"]),ne=function(e){var n=e.open;return(0,s.jsxs)(U,{children:[(0,s.jsx)($,{src:"".concat(o.O,"/imgs/main/QV_Blanco_horizontal.png")}),(0,s.jsx)(ee,{onClick:n,src:"".concat(o.O,"/imgs/menu.png")})]})},te=i.ZP.div.withConfig({displayName:"qv__Container",componentId:"sc-198ybjb-0"})(['overflow:hidden;position:relative;background-color:#eee;width:100%;height:100vh;display:grid;transition:0.3s ease;grid-template-columns:1fr 4fr 1.3fr;grid-template-rows:auto;grid-template-areas:"sb  ct  rb";margin:0;@media screen and (max-width:800px){grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:"ct";}']),ie=i.ZP.div.withConfig({displayName:"qv__Content",componentId:"sc-198ybjb-1"})(["grid-area:ct;padding:0 2em 150px 2em;margin:0 .2em;overflow-y:scroll;display:flex;flex-direction:column;::-webkit-scrollbar-track{border:none;padding:10px 0;margin:10px 0;background-color:none;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#ccc;border:1px solid rgba(0,0,0,0);}"]),re=function(e){var n=e.children,t=e.pg,i=(0,Z.useState)(!1),r=i[0],o=i[1];return(0,s.jsxs)(te,{children:[(0,s.jsx)(ie,{children:n}),(0,s.jsx)(K,{active:r,close:function(){o(!1)}}),(0,s.jsx)(x,{pg:t}),(0,s.jsx)(w,{pg:t}),(0,s.jsx)(ne,{open:function(){return o(!0)}})]})}}}]);