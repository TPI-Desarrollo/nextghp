(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{9454:function(e,n,r){"use strict";var t=r(7379),i=r(5893),o=t.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){padding:15px;}"],(function(e){return e.primary?"#1920EF":"#FFC024"})),a=t.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(e){return e.primary?"#FFF":"#000"})),c=t.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(e){return e.primary?"bold":null}),(function(e){return e.primary?"1.4em":"1em"}),(function(e){return e.primary?"#FFC024":"#000"})),s=t.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:",";bottom:",";right:",";z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"],(function(e){return e.primary?"28%":"38%"}),(function(e){return e.primary?"-15%":"0"}),(function(e){return e.primary?"10%":"0"}));n.Z=function(e){var n=e.title,r=e.desc,t=e.imgH,l=e.primary;return(0,i.jsxs)(o,{primary:l,children:[(0,i.jsx)(a,{primary:l,children:n}),(0,i.jsx)(c,{primary:l,children:r}),(0,i.jsx)(s,{src:t,primary:l})]})}},8111:function(e,n,r){"use strict";var t=r(7379),i=r(1664),o=r(2279),a=r(5893),c=t.ZP.div.withConfig({displayName:"zcCard__ZElement",componentId:"sc-53i04y-0"})(["display:flex;flex-direction:column;grid-column:",";grid-row:",";align-items:",";justify-content:",";text-align:",";background:#FFFFFF;padding:10px 20px 15px 20px;border-radius:20px;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:20px;transition:0.3s;:hover{cursor:pointer;transform:scale(1.02);box-shadow:0px 4px 8px rgba(0,0,0,0.4);}:active{background-color:#ddd;}@media screen and (max-width:1060px){grid-column:span 1;grid-row:span 1;align-items:flex-start;justify-content:flex-end;text-align:left;}"],(function(e){return"twohor"===e.type?"span 2":null}),(function(e){return"twover"===e.type?"span 2":null}),(function(e){return"twover"===e.type?"center":"flex-start"}),(function(e){return"twover"===e.type?"center":"flex-end"}),(function(e){return"twover"===e.type?"center":null})),s=t.ZP.img.withConfig({displayName:"zcCard__Img",componentId:"sc-53i04y-1"})(["height:",";margin:0px 0px 10px 10px;"],(function(e){return"ASESORES"===e.name?"35%":"45%"})),l=t.ZP.div.withConfig({displayName:"zcCard__Text",componentId:"sc-53i04y-2"})(["display:flex;flex-direction:column;font-weight:bold;"]),u=t.ZP.span.withConfig({displayName:"zcCard__Title",componentId:"sc-53i04y-3"})(["font-size:1.5rem;color:#172BEF;"]),f=t.ZP.span.withConfig({displayName:"zcCard__Desc",componentId:"sc-53i04y-4"})(["font-size:0.8rem;"]);n.Z=function(e){var n=e.item;return"_blank"===n.target?(0,a.jsx)("a",{href:n.link,target:n.target,children:(0,a.jsxs)(c,{type:n.type,children:[(0,a.jsx)(s,{src:"".concat(o.O).concat(n.img),name:n.name}),(0,a.jsxs)(l,{children:[(0,a.jsx)(u,{children:n.name}),(0,a.jsx)(f,{children:n.desc})]})]})}):(0,a.jsx)(i.default,{href:n.link,children:(0,a.jsxs)(c,{type:n.type,children:[(0,a.jsx)(s,{src:"".concat(o.O).concat(n.img),name:n.name}),(0,a.jsxs)(l,{children:[(0,a.jsx)(u,{children:n.name}),(0,a.jsx)(f,{children:n.desc})]})]})})}},7942:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},a=r(4957),c=r(9898),s=r(639);var l={};function u(e,n,r,t){if(e&&a.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,i=c.useRouter(),f=o.default.useMemo((function(){var n=a.resolveHref(i,e.href,!0),r=t(n,2),o=r[0],c=r[1];return{href:o,as:e.as?a.resolveHref(i,e.as):c||o}}),[i,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,g=e.shallow,x=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var v=(n=o.default.Children.only(m))&&"object"===typeof n&&n.ref,w=s.useIntersection({rootMargin:"200px"}),b=t(w,2),_=b[0],j=b[1],C=o.default.useCallback((function(e){_(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,_]);o.default.useEffect((function(){var e=j&&r&&a.isLocalURL(d),n="undefined"!==typeof y?y:i&&i.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(i,d,p,{locale:n})}),[p,d,j,y,r,i]);var I={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[i?"replace":"push"](r,t,{shallow:o,locale:s,scroll:c}))}(e,i,d,p,h,g,x,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof y?y:i&&i.locale,k=i&&i.isLocaleDomain&&a.getDomainLocale(p,E,i&&i.locales,i&&i.domainLocales);I.href=k||a.addBasePath(a.addLocale(p,E,i&&i.defaultLocale))}return o.default.cloneElement(n,I)};n.default=f},639:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,s=i.useRef(),l=i.useState(!1),u=t(l,2),f=u[0],d=u[1],p=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,o=t.observer,a=t.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return i.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var i=r(7294),o=r(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map},8344:function(e,n,r){"use strict";r.r(n);r(7294);var t=r(2279),i=r(8626),o=r(7379),a=r(9669),c=r(9454),s=r(8111),l=r(5893),u="".concat(t.O,"/imgs/header/office.png"),f=o.ZP.div.withConfig({displayName:"office__Grid",componentId:"sc-ln2395-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));grid-auto-rows:150px;grid-gap:3em;margin:10px 8%;"]);n.default=function(){var e=(0,i.Kz)();return(0,l.jsxs)(a.Z,{pg:"Oficina",children:[(0,l.jsx)(c.Z,{title:"Oficinas",desc:"Perfil y progreso de los equipos",imgH:u}),(0,l.jsx)(f,{children:e.map((function(e){return(0,l.jsx)(s.Z,{item:e},e.desc)}))})]})}},7951:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/office",function(){return r(8344)}])},1664:function(e,n,r){e.exports=r(7942)},7625:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(e){e.O(0,[379,626,5,774,888,179],(function(){return n=7951,e(e.s=n);var n}));var n=e.O();_N_E=n}]);