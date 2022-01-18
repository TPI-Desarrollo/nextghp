(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{7942:function(e,n,t){"use strict";var o=t(3038);n.default=void 0;var r,i=(r=t(7294))&&r.__esModule?r:{default:r},a=t(4957),c=t(9898),s=t(639);var l={};function u(e,n,t,o){if(e&&a.isLocalURL(n)){e.prefetch(n,t,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[n+"%"+t+(r?"%"+r:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),d=i.default.useMemo((function(){var n=a.resolveHref(r,e.href,!0),t=o(n,2),i=t[0],c=t[1];return{href:i,as:e.as?a.resolveHref(r,e.as):c||i}}),[r,e.href,e.as]),f=d.href,p=d.as,m=e.children,h=e.replace,g=e.shallow,v=e.scroll,x=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(n=i.default.Children.only(m))&&"object"===typeof n&&n.ref,w=s.useIntersection({rootMargin:"200px"}),k=o(w,2),_=k[0],y=k[1],C=i.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);i.default.useEffect((function(){var e=y&&t&&a.isLocalURL(f),n="undefined"!==typeof x?x:r&&r.locale,o=l[f+"%"+p+(n?"%"+n:"")];e&&!o&&u(r,f,p,{locale:n})}),[p,f,y,x,t,r]);var E={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,o,r,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&o.indexOf("#")>=0&&(c=!1),n[r?"replace":"push"](t,o,{shallow:i,locale:s,scroll:c}))}(e,r,f,p,h,g,v,x)},onMouseEnter:function(e){a.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(r,f,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var j="undefined"!==typeof x?x:r&&r.locale,F=r&&r.isLocaleDomain&&a.getDomainLocale(p,j,r&&r.locales,r&&r.domainLocales);E.href=F||a.addBasePath(a.addLocale(p,j,r&&r.defaultLocale))}return i.default.cloneElement(n,E)};n.default=d},639:function(e,n,t){"use strict";var o=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=r.useRef(),l=r.useState(!1),u=o(l,2),d=u[0],f=u[1],p=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,t){var o=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:r,elements:o}),t}(t),r=o.id,i=o.observer,a=o.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return r.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[p,d]};var r=t(7294),i=t(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map},2054:function(e,n,t){"use strict";t.r(n);var o=t(7294),r=t(2279),i=t(1664),a=t(7379),c=t(8626),s=t(5893),l=a.ZP.div.withConfig({displayName:"know__Cont",componentId:"sc-ktdc9m-0"})(["display:flex;transition:.3s ease;flex-direction:column;"]),u=a.ZP.h3.withConfig({displayName:"know__Title",componentId:"sc-ktdc9m-1"})(["font-size:20px;font-weight:700;"]),d=a.ZP.div.withConfig({displayName:"know__Selector",componentId:"sc-ktdc9m-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:.8em;justify-content:center;align-items:center;margin-bottom:2em;@media screen and (max-width:800px){grid-template-columns:repeat(2,1fr);}"]),f=a.ZP.div.withConfig({displayName:"know__Box",componentId:"sc-ktdc9m-3"})(["display:flex;justify-content:center;align-items:center;height:65px;padding:1em;font-weight:bold;background:#FFFFFF;border:2px solid ",";box-sizing:border-box;box-shadow:0px 2px 4px rgba(0,0,0,0.075);border-radius:10px;transition:.3s ease;:hover{border:2px solid #172BEF;cursor:pointer;}"],(function(e){return e.act?"#172BEF":"#D8DEF3"})),p=a.ZP.h4.withConfig({displayName:"know__SubTitle",componentId:"sc-ktdc9m-4"})(["padding:.5em 0;margin:0 0 .5em 0;border-bottom:2px solid #bbb;max-width:500px;:hover{color:#172BEF;cursor:pointer;}"]),m=a.ZP.p.withConfig({displayName:"know__Text",componentId:"sc-ktdc9m-5"})(["margin:0 0 1em .5em;max-width:500px;text-align:justify;font-size:",";height:",";color:#4F4F4F;transition:.3s ease;"],(function(e){return e.act?".9em":"0"}),(function(e){return e.act?"auto":"0"})),h=a.ZP.img.withConfig({displayName:"know__Image",componentId:"sc-ktdc9m-6"})(["margin-right:1em;"]),g=a.ZP.button.withConfig({displayName:"know__Button",componentId:"sc-ktdc9m-7"})(["width:150px;color:#172BEF;font-weight:bold;padding:.5em 1em;margin:1em auto;border:2px solid #172BEF;border-radius:.5em;transition:.3s ease;:hover{transform:scale(1.05);background:#172BEF;cursor:pointer;color:white;}"]);n.default=function(){var e=(0,c.ar)(),n=(0,o.useState)(e[0]),t=n[0],a=n[1],v=(0,o.useState)(0),x=v[0],b=v[1];return(0,s.jsxs)(l,{children:[(0,s.jsx)(u,{children:"_Conoce Quanticon Valley"}),(0,s.jsx)(d,{children:e.map((function(e){return(0,s.jsxs)(f,{act:e.title===t.title,onClick:function(){return a(e)},children:[(0,s.jsx)(h,{src:"".concat(r.O,"/").concat(e.img)}),e.title]},e.title)}))}),(0,s.jsx)(p,{onClick:function(){return b(0)},children:"1. Objetivo de esta seccion"}),(0,s.jsx)(m,{act:0===x,children:t.obj}),(0,s.jsx)(p,{onClick:function(){return b(1)},children:"2. Que encontraras aqui?"}),(0,s.jsx)(m,{act:1===x,children:t.cont}),(0,s.jsx)(p,{onClick:function(){return b(2)},children:"3. Lo mas relevante"}),(0,s.jsx)(m,{act:2===x,children:t.imp}),(0,s.jsx)(i.default,{href:"/".concat(t.link),children:(0,s.jsx)(g,{children:"Visita esta secci\xf3n "})})]})}},6534:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/pages/know",function(){return t(2054)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=6534,e(e.s=n);var n}));var n=e.O();_N_E=n}]);