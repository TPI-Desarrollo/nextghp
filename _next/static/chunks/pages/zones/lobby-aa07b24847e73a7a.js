(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{5627:function(e,n,i){"use strict";var t=i(2279),r=(i(1664),i(7379)),o=i(5893),a=r.ZP.div.withConfig({displayName:"SrcItemList__SrcGrid",componentId:"sc-let18i-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));grid-auto-rows:auto;grid-gap:20px 40px;transition:0.3s ease;"]),s=r.ZP.div.withConfig({displayName:"SrcItemList__SrcList",componentId:"sc-let18i-1"})(["display:flex;flex-direction:column;color:blue;"]),c=r.ZP.div.withConfig({displayName:"SrcItemList__Src",componentId:"sc-let18i-2"})(["display:flex;color:#000;align-items:center;margin-bottom:10px;margin-top:10px;margin-left:20px;transition:0.3s;:hover{transform:scale(1.02);color:#1920EF;}"]),d=r.ZP.img.withConfig({displayName:"SrcItemList__Img",componentId:"sc-let18i-3"})(["width:1em;"]),l=r.ZP.div.withConfig({displayName:"SrcItemList__Title",componentId:"sc-let18i-4"})(["margin-left:1em;font-size:1em;"]),p=function(e){var n=e.data,i=e.src;return(0,o.jsx)("a",{href:n[1],target:"_blank",withoutrel:"noreferrer",children:(0,o.jsxs)(c,{children:[(0,o.jsx)(d,{src:"".concat(t.O,"/imgs/items/").concat(i,".png")}),(0,o.jsx)(l,{children:n[0]})]})})};n.Z=function(e){var n=e.data,i=[];for(var t in n)i.push({name:t,cont:n[t]});return(0,o.jsx)(a,{children:i.map((function(e){return e.cont[0]?(0,o.jsxs)(s,{children:[(0,o.jsxs)("h4",{children:["_",e.name]}),e.cont.map((function(n){return(0,o.jsx)(p,{data:n,src:e.name},n[0])}))]},e.name):null}))})}},4804:function(e,n,i){"use strict";var t=i(7379),r=i(5893),o=t.ZP.div.withConfig({displayName:"pisoSel__Selector",componentId:"sc-198y8og-0"})(["display:flex;flex-wrap:wrap;align-items:center;text-align:center;justify-content:space-evenly;padding:5px 5%;margin:20px 0;background-color:#e0e5ed;border-radius:20px;color:#1920EF;font-weight:bold;font-size:1em;@media screen and (max-width:1000px){padding:5px 15%;}"]),a=t.ZP.div.withConfig({displayName:"pisoSel__SelItem",componentId:"sc-198y8og-1"})(["border-radius:20px;padding:5px 10px;margin:5px 0px;white-space:nowrap;transition:0.5s;background-color:",";color:",";:hover{transform:scale(1.2);background-color:#979FF5;color:#ffffff;cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));n.Z=function(e){var n=e.piso,i=e.pisoF;return(0,r.jsx)(o,{children:[1,2,3,4,5,6].map((function(e){return(0,r.jsxs)(a,{onClick:function(){return i(e)},primary:n===e,children:["Piso ",e]},e.toString())}))})}},9978:function(e,n,i){"use strict";i.r(n);var t=i(7379),r=i(8626),o=i(5893),a=t.ZP.div.withConfig({displayName:"hallFame__Container",componentId:"sc-vhddg1-0"})(["border-radius:20px;height:100%;"]),s=t.ZP.div.withConfig({displayName:"hallFame__TeamTop",componentId:"sc-vhddg1-1"})(["display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;padding:.3em 3em;margin:.5em;min-height:3em;background-color:#FFC024;border-radius:10px;"]),c=t.ZP.h2.withConfig({displayName:"hallFame__Title",componentId:"sc-vhddg1-2"})(["color:black;margin:0;"]),d=t.ZP.div.withConfig({displayName:"hallFame__TeamsBoard",componentId:"sc-vhddg1-3"})(["padding:1em;height:85%;iframe{width:100%;height:100%;border:none;border-radius:20px;}@media screen and (max-width:620px){height:70%;}"]),l=t.ZP.div.withConfig({displayName:"hallFame__SelectGrp",componentId:"sc-vhddg1-4"})(["display:flex;justify-content:space-between;align-items:center;background-color:#C79000;border-radius:25px;height:85%;padding:0 1em;"]),p=t.ZP.div.withConfig({displayName:"hallFame__Button",componentId:"sc-vhddg1-5"})(["margin:5px;padding:5px 10px;background-color:",";color:",";border-style:none;border-radius:25px;font-weight:bold;transition:.3s ease;:hover{transform:scale(1.03);cursor:pointer;}"],(function(e){return e.active?"white":"#C79000"}),(function(e){return e.active?"#C79000":"white"}));n.default=function(e){var n=e.group,i=e.setGroup,t=(0,r.Cu)(),m=t.studio,f=t.btns;return console.log(m,f),(0,o.jsxs)(a,{children:[(0,o.jsxs)(s,{children:[(0,o.jsx)(c,{children:"Tabla de Clasificacion"}),(0,o.jsx)(l,{children:f.map((function(e){return(0,o.jsx)(p,{active:n===e.gr,onClick:function(){return i(e.gr)},children:e.name},e.name)}))})]}),(0,o.jsx)(d,{children:(0,o.jsx)("iframe",{id:"iframe-lead",src:m[n]})})]})}},4273:function(e,n,i){"use strict";i.r(n);var t=i(7625),r=i(7294),o=i(2279),a=i(1664),s=i(7379),c=i(60),d=i(1026),l=i(4804),p=i(1150),m=i(5627),f=i(3303),u=i(9978),h=i(8626),g=i(5893),x=s.ZP.h2.withConfig({displayName:"lobby__TitleCont",componentId:"sc-1k3bvff-0"})(["font-weight:600;font-size:1.5em;line-height:52px;letter-spacing:-0.03em;color:#272835;margin:0px;z-index:2;"]),b=s.ZP.div.withConfig({displayName:"lobby__HeaderCont",componentId:"sc-1k3bvff-1"})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),w=s.ZP.div.withConfig({displayName:"lobby__SRCCnt",componentId:"sc-1k3bvff-2"})(["display:flex;flex-direction:column;justify-content:center;margin-bottom:1em;"]),v=s.ZP.div.withConfig({displayName:"lobby__SRCBtn",componentId:"sc-1k3bvff-3"})(["display:flex;align-items:center;border-radius:20px;min-width:200px;min-height:60px;padding:.1em 1em;margin:.6em 0;font-weight:bold;box-shadow:1px 2px 8px rgba(0,0,190,0.5);transition:0.3s;:hover{transform:scale(1.03);cursor:pointer;}div{display:flex;justify-content:center;align-items:center;background-color:#1920EF;width:3em;height:3em;border-radius:25px;margin:0 1em 0 .1em;}img{height:50%;}"]);n.default=function(){var e=(0,f.d)(!1),n=(0,t.Z)(e,3),i=n[0],s=n[1],_=n[2],y=(0,r.useState)(1),j=y[0],C=y[1],Z=(0,r.useState)("dos"),I=Z[0],N=Z[1],S=(0,r.useState)({}),P=S[0],k=S[1],F=(0,h.LR)();return(0,r.useEffect)((function(){k((0,h.So)(I,j))}),[I,j]),(0,g.jsxs)(c.Z,{pg:"Zonas Comunes",children:[(0,g.jsxs)(b,{children:[(0,g.jsx)(d.Z,{zone:2}),(0,g.jsxs)(w,{children:[(0,g.jsx)(a.default,{href:"https://ingenieria.unal.edu.co/tpi/index.php/equipotpi/profesores",children:(0,g.jsxs)(v,{children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:"".concat(o.O,"/imgs/zones/mentores.svg")})}),"Conoce tus Mentores"]})}),(0,g.jsxs)(v,{onClick:s,children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:"".concat(o.O,"/imgs/zones/hall.png")})}),"Salon de la Fama"]})]})]}),(0,g.jsx)(p.Z,{group:I,setGroup:N}),(0,g.jsx)(l.Z,{piso:j,pisoF:C}),(0,g.jsx)(x,{children:"Recursos de Piso"}),j<=F?(0,g.jsx)(m.Z,{data:P}):null,(0,g.jsx)(f.u,{isOpen:i,closeM:_,title:"Salon de la fama",children:(0,g.jsx)(u.default,{group:I,setGroup:N})})]})}},5848:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zones/lobby",function(){return i(4273)}])}},function(e){e.O(0,[774,379,95,626,926,888,179],(function(){return n=5848,e(e.s=n);var n}));var n=e.O();_N_E=n}]);