(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(4957),c=t(9898),s=t(639);var l={};function f(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),u=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=u.href,p=u.as,v=e.children,g=e.replace,h=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,b=s.useIntersection({rootMargin:"200px"}),x=r(b,2),j=x[0],w=x[1],C=a.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);a.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,w,y,t,o]);var E={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:c}))}(e,o,d,p,g,h,m,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&f(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof y?y:o&&o.locale,k=o&&o.isLocaleDomain&&i.getDomainLocale(p,I,o&&o.locales,o&&o.domainLocales);E.href=k||i.addBasePath(i.addLocale(p,I,o&&o.defaultLocale))}return a.default.cloneElement(n,E)};n.default=u},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,s=o.useRef(),l=o.useState(!1),f=r(l,2),u=f[0],d=f[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||u||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[p,u]};var o=t(7294),a=t(6286),i="undefined"!==typeof IntersectionObserver;var c=new Map},2748:function(e,n,t){"use strict";t.r(n);var r=t(1664),o=t(7379),a=t(2279),i=t(5893),c=o.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-8qxyjj-0"})(["background-image:url('","/imgs/Rectangle 1.png');display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;"],a.O),s=o.ZP.div.withConfig({displayName:"pages__Goto",componentId:"sc-8qxyjj-1"})(["border:2px solid #fff;border-radius:20px;padding:25px 50px;margin:20px;transition:0.5s;:hover{transform:scale(1.06) rotate(0.5deg);background-color:rgba(255,255,255,0.1);cursor:pointer;}:active{background-color:rgba(255,255,255,0.3);}"]),l=o.ZP.img.withConfig({displayName:"pages__Img",componentId:"sc-8qxyjj-2"})(["margin:30px;"]),f=o.ZP.p.withConfig({displayName:"pages__Intro",componentId:"sc-8qxyjj-3"})(["font-size:1em;font-weight:bold;color:#fff;margin:0px;"]),u=o.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-8qxyjj-4"})(["font-size:1.8em;color:#fff;margin:0px;"]);n.default=function(){return(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{src:"".concat(a.O,"/imgs/main/QV_Blanco_horizontal.png")}),(0,i.jsx)(f,{children:"Listo para hacer parte de esta nueva aventura?"}),(0,i.jsx)(r.default,{href:"/principal",children:(0,i.jsx)(s,{children:(0,i.jsx)(u,{children:"\xa1AQUI VAMOS!"})})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2748)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);