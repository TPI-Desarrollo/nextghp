"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{3303:function(e,n,i){i.d(n,{d:function(){return p},u:function(){return g}});var o=i(7379),t=i(2279),a=i(7294),r=i(5893),c=o.ZP.div.withConfig({displayName:"modal__Container",componentId:"sc-1plqcnx-0"})(["position:absolute;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.4);height:100%;width:100%;transition:all .6s ease;top:0;left:0;opacity:",";z-index:",";"],(function(e){return e.isOpen?"1":"0"}),(function(e){return e.isOpen?"5":"-5"})),s=o.ZP.div.withConfig({displayName:"modal__Content",componentId:"sc-1plqcnx-1"})(["position:relative;display:flex;flex-direction:column;background-color:rgba(227,227,227,0.8);;border-radius:20px;height:90%;width:90%;max-height:600px;max-width:1200px;z-index:6;transition-delay:.6s;transition:all .4s ease;top:",";"],(function(e){return e.isOpen?"0":"-1000px"})),d=o.ZP.div.withConfig({displayName:"modal__Header",componentId:"sc-1plqcnx-2"})(["display:flex;justify-content:space-between;align-items:center;border-radius:18px 18px 0 0;padding:1em;background-color:#1920EF;color:white;"]),l=o.ZP.h2.withConfig({displayName:"modal__Title",componentId:"sc-1plqcnx-3"})(["margin:0;"]),m=o.ZP.img.withConfig({displayName:"modal__CloseImg",componentId:"sc-1plqcnx-4"})(["height:100%;transition:.3 ease;:hover{transform:scale(1.05);}"]),p=function(e){var n=(0,a.useState)(e),i=n[0],o=n[1];return[i,function(){o(!0)},function(){o(!1)}]},g=function(e){var n=e.isOpen,i=e.closeM,o=e.title,a=e.width,p=e.children;return(0,r.jsx)(c,{isOpen:n,children:(0,r.jsxs)(s,{isOpen:n,style:{maxWidth:a},children:[(0,r.jsxs)(d,{children:[(0,r.jsx)(l,{children:o}),(0,r.jsx)(m,{onClick:i,src:"".concat(t.O,"/imgs/exit.png")})]}),p]})})}},8769:function(e,n,i){i.d(n,{Z:function(){return re}});var o=i(7625),t=i(7379),a=i(1664),r=i(2279),c={pages:[{title:"Principal",link:"/principal",src:"".concat(r.O,"/imgs/main/Icon_principal.svg")},{title:"ETESC",link:"/etesc",src:"".concat(r.O,"/imgs/main/Icon_ETESC.svg")},{title:"Zonas Comunes",link:"/zones",src:"".concat(r.O,"/imgs/main/Icon_zonas_comunes.svg")},{title:"Oficina",link:"/office",src:"".concat(r.O,"/imgs/main/Icon_Oficina.svg")},{title:"Informacion",link:"/info",src:"".concat(r.O,"/imgs/main/Icon_Informacion.svg")}]},s=function(){return c.pages},d=i(5893),l=t.ZP.img.withConfig({displayName:"navBar__Logo",componentId:"sc-w5sz8n-0"})(["margin:10% 0 10% 10%;max-width:50%;"]),m=t.ZP.img.withConfig({displayName:"navBar__NavImg",componentId:"sc-w5sz8n-1"})(["position:absolute;width:100%;bottom:0;left:0;@media screen and (max-height:600px){display:none;}"]),p=t.ZP.div.withConfig({displayName:"navBar__Button",componentId:"sc-w5sz8n-2"})(["display:flex;justify-content:space-evenly;align-items:center;padding:2vh 0px;font-weight:bold;width:100%;transition:0.5s ease;color:",";background-color:",";border-left:solid "," #FFC024;border-radius:",";transform:",";:hover{cursor:pointer;background-color:#303CFE;color:#ffffff;}"],(function(e){return e.active?"#fff":null}),(function(e){return e.active?"#303CFE":null}),(function(e){return e.active?"5px":"0"}),(function(e){return e.active?"0 10px 10px 0":"0"}),(function(e){return e.active?"scale(1.02)":null})),g=t.ZP.img.withConfig({displayName:"navBar__Icon",componentId:"sc-w5sz8n-3"})(["position:relative;display:inline-block height:80%;"]),h=t.ZP.span.withConfig({displayName:"navBar__Text",componentId:"sc-w5sz8n-4"})(["display:inline-block;margin:0px;padding:0px;width:65%;font-size:1rem;"]),u=t.ZP.nav.withConfig({displayName:"navBar__Container",componentId:"sc-w5sz8n-5"})(["grid-area:sb;position:sticky;background-color:#1920EF;padding:10px 0px 0px 0px;margin:12px 0px 12px 8px;border-radius:20px;top:12px;height:92vh;color:#bbb;box-shadow:-3px 0px 40px rgba(0,0,0,0.4);@media screen and (max-width:800px){display:none;}"]),f="".concat(r.O,"/imgs/main/QB_blanco_vertical_1.png"),x="".concat(r.O,"/imgs/main/QV_textura.png"),w=function(e){var n=e.pg,i=s();return(0,d.jsxs)(u,{children:[(0,d.jsx)(m,{src:x,alt:"nav-img"}),(0,d.jsx)(l,{src:f,alt:"logo"}),i.map((function(e){return(0,d.jsx)(a.default,{href:e.link,children:(0,d.jsxs)(p,{active:e.title===n,children:[(0,d.jsx)(g,{src:e.src,alt:e.link}),(0,d.jsx)(h,{children:e.title})]})},e.link)}))]})},b=t.ZP.div.withConfig({displayName:"navMobile__Button",componentId:"sc-1uzc9au-0"})(["display:flex;justify-content:center;align-items:center;padding:2vh 0px;height:100%;width:100%;transition:0.5s;:hover{transform:scale(1,1.03);background-color:#55F;color:#ffffff;}"]),y=t.ZP.img.withConfig({displayName:"navMobile__Icon",componentId:"sc-1uzc9au-1"})(["position:relative;display:inline-block height:1.6em;width:1.6em;"]),v=t.ZP.nav.withConfig({displayName:"navMobile__Container",componentId:"sc-1uzc9au-2"})(["display:none;position:fixed;background-color:#1920EF;left:0;bottom:0;height:60px;width:100%;color:#999;box-shadow:-3px 0px 40px rgba(0,0,0,0.4);justify-content:center;align-items:center;z-index:2;@media screen and (max-width:800px){display:flex;}"]),_=function(){var e=s();return(0,d.jsx)(v,{children:e.map((function(e){return(0,d.jsx)(a.default,{href:e.link,children:(0,d.jsx)(b,{children:(0,d.jsx)(y,{src:e.src,alt:e.link})})},e.link)}))})},j=i(8626),C=t.ZP.div.withConfig({displayName:"notiWidget__Container",componentId:"sc-c7thu2-0"})(["position:relative;width:100%;"]),I=t.ZP.img.withConfig({displayName:"notiWidget__Img",componentId:"sc-c7thu2-1"})(["width:100%;border-radius:1em;box-shadow:-3px 0px 40px rgba(0,0,0,0.15);transition:.3s ease;:hover{transform:scaley(1.03);box-shadow:2px 2px 8px rgba(0,0,0,0.8);cursor:pointer;}"]),k=(t.ZP.iframe.withConfig({displayName:"notiWidget__Iframe",componentId:"sc-c7thu2-2"})(["position:absolute;top:30px;left:0;width:100%;height:80%;borderRadius:0 0 1em 1em;"]),function(e){var n=e.open,i=(0,j.WA)(),o=i[0]?i[0].video:null;return(0,d.jsxs)(C,{onClick:n,children:[(0,d.jsx)(I,{src:"".concat(r.O,"/imgs/noti/news.png")}),o?(0,d.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(o),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Noticias",style:{position:"absolute",bottom:0,left:0,width:"100%",height:"80%",borderRadius:"0 0 1em 1em"}}):null]})}),P=i(6876),N=i(7294),Z=i(211),z=[[new Date(2021,9,4),"Primera Clase TPI y Inicio - Primer Piso"],[new Date(2021,9,20),"Entrega - Primer Piso"],[new Date(2021,9,25),"Inicio - Segundo Piso"],[new Date(2021,10,8),"Mentoria"],[new Date(2021,10,10),"Mentoria formativa (entrega de piso)"],[new Date(2021,10,17),"Conversatorio (Habilidades blandas, Tecnolog\xeda y sociedad, Econom\xeda del conocimiento)"],[new Date(2021,10,22),"Charla de G\xe9nero"],[new Date(2021,10,24),"Mentoria"],[new Date(2021,10,29),"Mentoria"],[new Date(2021,11,1),"Presentaci\xf3n de infograf\xeda"],[new Date(2021,11,3),"Entrega reto de piso (Pieza gr\xe1fica asuntos de g\xe9nero)"],[new Date(2021,11,6),"Mentoria"],[new Date(2021,11,10),"Primera entrega trabajo escrito"],[new Date(2021,11,13),"Mentoria"],[new Date(2021,11,15),"Conversatorio (laboratorio y prototipado)"],[new Date(2022,0,12),"Mentor\xeda formativa (entrega de piso)"]],O=function(e){var n=e.date;if("month"===e.view&&z.find((function(e){return i=e[0],o=n,0===(0,Z.Z)(i,o);var i,o})))return"calendar-event"},B=t.ZP.div.withConfig({displayName:"calendar__Container",componentId:"sc-1q4hmrr-0"})(["position:relative;height:240px;width:100%;display:flex;justify-content:center;"]),D=t.ZP.div.withConfig({displayName:"calendar__Event",componentId:"sc-1q4hmrr-1"})(["position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-radius:2em;background-color:#1920EF;color:white;width:100%;height:",";z-index:3;transition:.3s ease;"],(function(e){return e.active?"100%":"0"})),E=t.ZP.img.withConfig({displayName:"calendar__Close",componentId:"sc-1q4hmrr-2"})(["position:absolute;top:1em;right:1em;transition:.3s ease;:hover{transform:scale(1.2);}"]),F=t.ZP.h2.withConfig({displayName:"calendar__Title",componentId:"sc-1q4hmrr-3"})(["margin:0;"]),M=t.ZP.h3.withConfig({displayName:"calendar__DateT",componentId:"sc-1q4hmrr-4"})(["margin:0;"]),q=function(){var e=(0,N.useState)(null),n=e[0],i=e[1],o=z.find((function(e){var i;return(null===(i=e[0])||void 0===i?void 0:i.getTime())===(null===n||void 0===n?void 0:n.getTime())}));return(0,d.jsxs)(B,{children:[(0,d.jsx)(D,{active:o,children:o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(M,{children:[o[0].getDate(),"-",o[0].getMonth(),"-",o[0].getFullYear()]}),(0,d.jsx)(F,{children:o[1]}),(0,d.jsx)(E,{onClick:function(){i(null)},src:"".concat(r.O,"/imgs/exit.png")})]}):null}),(0,d.jsx)(P.ZP,{onChange:function(e){i(e)},value:n,tileClassName:O,locale:"es"})]})},T=t.ZP.div.withConfig({displayName:"rightBar__Container",componentId:"sc-m5hjym-0"})(["grid-area:rb;display:flex;flex-direction:column;justify-content:space-evenly;background-color:#fff;padding:0px .5em;margin:5px 2px;top:5px;height:98vh;box-shadow:-3px 0px 40px rgba(0,0,0,0.15);transition:all .3s ease-in;@media screen and (max-width:800px){position:absolute;z-index:3;height:100%;width:'100%';top:0;right:",";margin:0;padding:60px 1em .5em 1em;}"],(function(e){return e.active?"0":"-1000px"})),S=t.ZP.div.withConfig({displayName:"rightBar__ItemB",componentId:"sc-m5hjym-1"})(["display:flex;align-items:center;border-radius:1em;justify-content:space-between;box-shadow:2px 4px 6px rgba(0,0,0,0.4);background-color:#FFC024;color:black;padding:.5em 1em;font-weight:900;font-size:1em;text-align:end;transition:0.3s;:hover{transform:scale(0.98);box-shadow:2px 2px 8px rgba(0,0,0,0.8);cursor:pointer;}"]),W=t.ZP.div.withConfig({displayName:"rightBar__Header",componentId:"sc-m5hjym-2"})(["position:absolute;display:flex;justify-content:flex-end;align-items:center;padding:.5em;background-color:#1920EF;color:white;z-index:4;top:0;right:0;width:100%;height:60px;@media screen and (min-width:800px){display:none;}"]),Q=t.ZP.img.withConfig({displayName:"rightBar__CloseImg",componentId:"sc-m5hjym-3"})(["width:2.4em;transition:.3 ease;:hover{transform:scale(1.05);}"]),H=function(e){var n=e.openNoti,i=e.active,o=e.close;return(0,d.jsxs)(T,{active:i,children:[(0,d.jsx)(W,{children:(0,d.jsx)(Q,{onClick:o,src:"".concat(r.O,"/imgs/exit.png")})}),(0,d.jsx)(q,{}),(0,d.jsx)(k,{open:n}),(0,d.jsx)(a.default,{href:"https://drive.google.com/file/d/1DsxZt4232mjOLK8-4hVIm0QOPxQJ9JrX/view?usp=sharing",children:(0,d.jsxs)(S,{children:[(0,d.jsx)("img",{src:"".concat(r.O,"/imgs/pil.png")}),"Pildoras de la semana"]})})]})},L=t.ZP.div.withConfig({displayName:"MobBar__Container",componentId:"sc-9hwl8o-0"})(["position:absolute;height:50px;width:100%;background-color:#1920EF;z-index:1;display:flex;justify-content:center;align-items:center;@media screen and (min-width:800px){display:none;}"]),V=t.ZP.img.withConfig({displayName:"MobBar__Img",componentId:"sc-9hwl8o-1"})(["height:35px;"]),A=t.ZP.img.withConfig({displayName:"MobBar__Menu",componentId:"sc-9hwl8o-2"})(["position:absolute;right:1em;transition:.3s ease;:hover{transform:scale(1.1);cursor:pointer;}"]),J=function(e){var n=e.open;return(0,d.jsxs)(L,{children:[(0,d.jsx)(V,{src:"".concat(r.O,"/imgs/main/QV_Blanco_horizontal.png")}),(0,d.jsx)(A,{onClick:n,src:"".concat(r.O,"/imgs/menu.png")})]})},R=i(3303),G=t.ZP.div.withConfig({displayName:"noticiero__Container",componentId:"sc-zo7cuy-0"})(["display:grid;grid-template-columns:2fr 1fr;grid-gap:0 2em;padding:0 1em;width:100%;@media screen and (max-width:800px){display:flex;flex-direction:column;}"]),K=t.ZP.h2.withConfig({displayName:"noticiero__Title",componentId:"sc-zo7cuy-1"})(["grid-column:span 2;margin:.5em;color:#22c;"]),X=t.ZP.div.withConfig({displayName:"noticiero__List",componentId:"sc-zo7cuy-2"})(["height:60%;overflow-y:scroll;::-webkit-scrollbar-track{border:none;padding:2px 0;background-color:none;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#888;border:1px solid rgba(0,0,0,0);}@media screen and (max-width:600px){max-height:20%;margin-bottom:.2em;}"]),Y=t.ZP.img.withConfig({displayName:"noticiero__HeaderList",componentId:"sc-zo7cuy-3"})(["width:100%;margin-bottom:1em;"]),U=t.ZP.iframe.withConfig({displayName:"noticiero__Iframe",componentId:"sc-zo7cuy-4"})(["width:100%;height:65%;border-radius:1em;grid-row:span 2;@media screen and (max-width:800px){height:18%;margin-bottom:.2em;}"]),$=t.ZP.div.withConfig({displayName:"noticiero__Item",componentId:"sc-zo7cuy-5"})(["display:flex;justify-content:flex-start;align-items:center;font-weight:bold;background-color:",";:hover{background-color:#aaf;cursor:pointer;}"],(function(e){return e.active?"#aaf":null})),ee=t.ZP.img.withConfig({displayName:"noticiero__Img",componentId:"sc-zo7cuy-6"})(["margin:.2em 2em;"]),ne=t.ZP.h5.withConfig({displayName:"noticiero__ItemTi",componentId:"sc-zo7cuy-7"})(["margin:0;"]),ie=t.ZP.h6.withConfig({displayName:"noticiero__ItemDa",componentId:"sc-zo7cuy-8"})(["margin:0;font-weight:normal;"]),oe=function(){var e=(0,j.WA)(),n=(0,N.useState)(0),i=n[0],o=n[1];return(0,d.jsxs)(G,{children:[(0,d.jsx)(K,{children:e[i].nombre||e[i].fecha}),(0,d.jsx)(U,{src:"https://www.youtube.com/embed/".concat(e[i].video),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Noticias"}),(0,d.jsx)(Y,{src:"".concat(r.O,"/imgs/noti/banner.png")}),(0,d.jsx)(X,{children:e.map((function(e,n){return(0,d.jsxs)($,{onClick:function(){return o(n)},active:n===i,children:[(0,d.jsx)(ee,{src:"".concat(r.O,"/imgs/noti/video.png")}),(0,d.jsxs)("div",{children:[(0,d.jsx)(ne,{children:e.nombre||e.fecha}),(0,d.jsx)(ie,{children:e.nombre?e.fecha:null})]})]},"noti".concat(n))}))})]})},te=t.ZP.div.withConfig({displayName:"qv__Container",componentId:"sc-198ybjb-0"})(['overflow:hidden;position:relative;background-color:#eee;width:100%;height:100vh;display:grid;transition:0.3s ease;grid-template-columns:1fr 4fr 1.3fr;grid-template-rows:auto;grid-template-areas:"sb  ct  rb";margin:0;@media screen and (max-width:800px){grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:"ct";}']),ae=t.ZP.div.withConfig({displayName:"qv__Content",componentId:"sc-198ybjb-1"})(["grid-area:ct;padding:0 2em 150px 2em;margin:0 .2em;overflow-y:scroll;display:flex;flex-direction:column;::-webkit-scrollbar-track{border:none;padding:10px 0;margin:10px 0;background-color:none;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#ccc;border:1px solid rgba(0,0,0,0);}"]),re=function(e){var n=e.children,i=e.pg,t=(0,R.d)(!1),a=(0,o.Z)(t,3),r=a[0],c=a[1],s=a[2],l=(0,N.useState)(!1),m=l[0],p=l[1];return(0,d.jsxs)(te,{children:[(0,d.jsxs)(ae,{children:[n,(0,d.jsx)(R.u,{isOpen:r,closeM:s,title:"Noticiero",children:(0,d.jsx)(oe,{})})]}),(0,d.jsx)(H,{openNoti:c,active:m,close:function(){p(!1)}}),(0,d.jsx)(w,{pg:i}),(0,d.jsx)(_,{pg:i}),(0,d.jsx)(J,{open:function(){return p(!0)}})]})}},2279:function(e,n,i){i.d(n,{O:function(){return o}});var o="/nextghp"}}]);