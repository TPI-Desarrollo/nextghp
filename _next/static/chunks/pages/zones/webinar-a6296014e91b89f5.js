(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{1150:function(e,n,t){"use strict";var r=t(7379),o=t(5893),i=r.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:flex-start;"]),a=r.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 12px 5px 12px;padding:5px 10px;border-radius:5px;border:2px solid #172bef;font-weight:bold;font-size:.9em;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));n.Z=function(e){var n=e.group,t=e.setGroup;return(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{onClick:function(){return t("dos")},primary:"dos"===n,children:"Horario 2 - 4 pm"}),(0,o.jsx)(a,{onClick:function(){return t("cuatro")},primary:"cuatro"===n,children:"Horario 4 - 6 pm"})]})}},1026:function(e,n,t){"use strict";var r=t(7379),o=t(1163),i=t(1664),a=t(2279),s=t(8626),c=t(5893),l=r.ZP.div.withConfig({displayName:"zoneHeader__Container",componentId:"sc-1oy950j-0"})(["display:flex;align-items:flex-end;justify-content:flex-start;margin:60px 0em;"]),d=r.ZP.div.withConfig({displayName:"zoneHeader__Cont",componentId:"sc-1oy950j-1"})(["padding:10px 20px;"]),u=r.ZP.h1.withConfig({displayName:"zoneHeader__Title",componentId:"sc-1oy950j-2"})(["font-size:30px;letter-spacing:-0.03em;margin:0;"]),f=r.ZP.h4.withConfig({displayName:"zoneHeader__Desc",componentId:"sc-1oy950j-3"})(["font-weight:normal;font-size:14px;margin:0;"]),p=r.ZP.img.withConfig({displayName:"zoneHeader__Img",componentId:"sc-1oy950j-4"})(["margin:30px 0 0 0;max-width:100px;max-height:90px;"]),m=r.ZP.img.withConfig({displayName:"zoneHeader__Back",componentId:"sc-1oy950j-5"})(["height:1.4em;transition:0.3s ease;:hover{transform:scale(1.1);cursor:pointer;}"]);n.Z=function(e){var n=e.zone,t=((0,o.useRouter)(),(0,s.Ug)()[n]),r=t.name,h=t.desc,g=t.img;return(0,c.jsxs)(l,{children:[(0,c.jsx)(i.default,{href:"/zones",children:(0,c.jsx)(m,{src:"".concat(a.O,"/imgs/items/back.png")})}),(0,c.jsxs)(d,{children:[(0,c.jsx)(p,{src:"".concat(a.O).concat(g)}),(0,c.jsx)(u,{children:r}),(0,c.jsx)(f,{children:h})]})]})}},7942:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(4957),s=t(9898),c=t(639);var l={};function d(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,o=s.useRouter(),u=i.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),i=t[0],s=t[1];return{href:i,as:e.as?a.resolveHref(o,e.as):s||i}}),[o,e.href,e.as]),f=u.href,p=u.as,m=e.children,h=e.replace,g=e.shallow,x=e.scroll,y=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(n=i.default.Children.only(m))&&"object"===typeof n&&n.ref,w=c.useIntersection({rootMargin:"200px"}),v=r(w,2),j=v[0],_=v[1],C=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=_&&t&&a.isLocalURL(f),n="undefined"!==typeof y?y:o&&o.locale,r=l[f+"%"+p+(n?"%"+n:"")];e&&!r&&d(o,f,p,{locale:n})}),[p,f,_,y,t,o]);var I={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:s}))}(e,o,f,p,h,g,x,y)},onMouseEnter:function(e){a.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(o,f,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof y?y:o&&o.locale,P=o&&o.isLocaleDomain&&a.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);I.href=P||a.addBasePath(a.addLocale(p,N,o&&o.defaultLocale))}return i.default.cloneElement(n,I)};n.default=u},639:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=o.useRef(),l=o.useState(!1),d=r(l,2),u=d[0],f=d[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[p,u]};var o=t(7294),i=t(6286),a="undefined"!==typeof IntersectionObserver;var s=new Map},9271:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(2279),o=t(7294),i=t(1664),a=t(7379),s=t(9669),c=t(1026),l=t(1150),d=t(5893),u=a.ZP.div.withConfig({displayName:"webinarCarousel__Container",componentId:"sc-1seogi6-0"})(["display:flex;min-height:auto;flex-direction:column;justify-content:flex-start;"]),f=a.ZP.div.withConfig({displayName:"webinarCarousel__Selector",componentId:"sc-1seogi6-1"})(["display:flex;justify-content:center;align-items:center;padding:16px;"]),p=a.ZP.div.withConfig({displayName:"webinarCarousel__Dot",componentId:"sc-1seogi6-2"})(["cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:",";border-radius:50%;display:inline-block;transition:0.6s ease;:hover{transform:scale(1.2) translatey(-3px);}"],(function(e){return e.active?"blue":"#bbb"})),m=a.ZP.div.withConfig({displayName:"webinarCarousel__Button",componentId:"sc-1seogi6-3"})(["cursor:pointer;width:auto;margin:0 20px;color:blue;font-weight:bold;font-size:18px;transition:0.6s ease;:hover{transform:scale(1.2);}"]),h=a.ZP.div.withConfig({displayName:"webinarCarousel__Cards",componentId:"sc-1seogi6-4"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));grid-gap:15px;justify-content:center;align-items:center;margin-bottom:1em;"]),g=a.ZP.div.withConfig({displayName:"webinarCarousel__Card",componentId:"sc-1seogi6-5"})(["display:flex;justify-content:center;align-items:center;min-height:200px;width:min(380px,90%);background-color:#1920EF;transition:.3s ease;box-shadow:-3px 0px 20px rgba(0,0,0,0.15);:hover{transform:scale(1.01);box-shadow:-3px 0px 10px rgba(0,0,0,0.3);}"]),x=a.ZP.img.withConfig({displayName:"webinarCarousel__WebImg",componentId:"sc-1seogi6-6"})(["width:100%;"]),y=a.ZP.div.withConfig({displayName:"webinarCarousel__Text",componentId:"sc-1seogi6-7"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-size:1.8em;font-weight:bold;margin:0;"]),b=a.ZP.h4.withConfig({displayName:"webinarCarousel__Date",componentId:"sc-1seogi6-8"})(["font-size:.75em;font-weight:normal;margin:0;"]),w=a.ZP.p.withConfig({displayName:"webinarCarousel__Title",componentId:"sc-1seogi6-9"})(["text-align:center;font-weight:bold;font-size:14px;width:90%;margin:10px 0 0 0;"]),v=a.ZP.p.withConfig({displayName:"webinarCarousel__Expo",componentId:"sc-1seogi6-10"})(["text-align:center;font-weight:bold;font-size:12px;color:blue;width:90%;margin:0;"]),j=a.ZP.div.withConfig({displayName:"webinarCarousel__CardCont",componentId:"sc-1seogi6-11"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]),_=function(e){var n=e.item,t=e.grp,o=(e.active,t||"dos");return(0,d.jsx)(h,{children:n.map((function(e,n){return(0,d.jsxs)(j,{children:[(0,d.jsx)(i.default,{href:e.link[o],children:(0,d.jsx)(g,{prox:"prox"===e.state,children:"prox"===e.state?(0,d.jsxs)(y,{children:[(0,d.jsx)("div",{children:"PROXIMAMENTE"}),(0,d.jsx)(b,{children:e.date})]}):(0,d.jsx)(x,{src:"".concat(r.O,"/imgs/webinars/").concat(e.n,".jpg")})})}),(0,d.jsx)(w,{children:e.name}),(0,d.jsx)(v,{children:e.expo})]},"crd".concat(n))}))})},C=function(e){var n=e.data,t=e.group,r=(0,o.useState)(0),i=r[0],a=r[1],s=function(e){var t=i-e;return t<0?a(n.length-1):t===n.length?a(0):void a(t)};return(0,d.jsxs)(u,{children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(m,{onClick:function(){return s(-1)},children:"\u276e"}),n.map((function(e,n){return(0,d.jsx)(p,{onClick:function(){return a(n)},active:i===n},"sld".concat(n))})),(0,d.jsx)(m,{onClick:function(){return s(1)},children:"\u276f"})]}),n.map((function(e,n){return i===n?(0,d.jsx)(_,{item:e,grp:t,active:i===n},"sld".concat(n)):null}))]})},I=t(8626),N=a.ZP.div.withConfig({displayName:"webinar__Header",componentId:"sc-p17ejt-0"})(["display:flex;margin:2em auto 0 auto;padding:0;justify-content:space-between;align-items:center;color:#172BEF;width:90%;border-bottom:solid 3px #DFE2E4;"]),P=a.ZP.div.withConfig({displayName:"webinar__Text",componentId:"sc-p17ejt-1"})(["display:flex;flex-direction:column;justify-content:flex-end;"]),Z=a.ZP.h3.withConfig({displayName:"webinar__Title",componentId:"sc-p17ejt-2"})(["font-weight:bold;font-size:20px;margin:0;"]),E=a.ZP.p.withConfig({displayName:"webinar__Desc",componentId:"sc-p17ejt-3"})(["color:black;font-weight:normal;font-size:15px;margin:0px;margin-bottom:2px;"]),k=a.ZP.div.withConfig({displayName:"webinar__Inscrip",componentId:"sc-p17ejt-4"})(["display:flex;box-sizing:border-box;border:1.5px solid #172BEF;border-radius:5px;min-height:30px;justify-content:center;align-items:center;background-color:#F4F7FD;color:#172BEF;font-weight:bold;font-size:14px;padding:0px 10px;transition:.3s ease;:hover{transform:scale(1.03);background-color:#172BEF;color:white;cursor:pointer;}"]),z=a.ZP.span.withConfig({displayName:"webinar__R",componentId:"sc-p17ejt-5"})(["color:#172BEF;font-weight:bold;"]),M=a.ZP.img.withConfig({displayName:"webinar__Img",componentId:"sc-p17ejt-6"})(["max-width:400px;margin:20px 10px;transition:.3s ease;:hover{transform:scale(1.03) rotate(-.5deg);cursor:pointer;}"]),L=function(){var e=(0,o.useState)("dos"),n=e[0],t=e[1],a=(0,I.n2)(),u=a.titles[0],f=a.titles[1];return(0,d.jsxs)(s.Z,{pg:"Zonas Comunes",children:[(0,d.jsx)(c.Z,{zone:1}),(0,d.jsx)(l.Z,{group:n,setGroup:t}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(P,{children:[(0,d.jsx)(Z,{children:u[0]}),(0,d.jsxs)(E,{children:[u[1],(0,d.jsx)(z,{children:u[2]})]})]}),(0,d.jsx)(k,{children:"Inscribite Aqu\xed"})]}),(0,d.jsx)(C,{data:a["2021s2"],grp:n}),(0,d.jsx)(N,{children:(0,d.jsxs)(P,{children:[(0,d.jsx)(Z,{children:f[0]}),(0,d.jsxs)(E,{children:[f[1],(0,d.jsx)(z,{children:f[2]})]})]})}),(0,d.jsx)(C,{data:a["2021s1"],grp:n}),(0,d.jsx)(N,{children:(0,d.jsxs)(E,{children:["Mira los ",(0,d.jsx)(z,{children:"Webinars"})," de versiones anteriores"]})}),(0,d.jsx)(i.default,{href:"https://www.youtube.com/watch?v=rBoyRR4KGaE&list=PLvLMsmXmVy6LHh1oouUSUtIebNmtJdleH&ab_channel=Facultaddeingenier%C3%ADa-UniversidadNacionaldeColombia",children:(0,d.jsx)(M,{src:"".concat(r.O,"/imgs/webinars/antes.png")})})]})}},5405:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zones/webinar",function(){return t(9271)}])},1664:function(e,n,t){e.exports=t(7942)},1163:function(e,n,t){e.exports=t(9898)},7625:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return o}})}},function(e){e.O(0,[379,626,5,774,888,179],(function(){return n=5405,e(e.s=n);var n}));var n=e.O();_N_E=n}]);