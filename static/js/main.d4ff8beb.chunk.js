(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{24:function(e,a,t){e.exports=t(45)},29:function(e,a,t){},30:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(10),s=t.n(l),o=(t(29),t(30),t(1)),r=t(13),i=t(2),d=function(e){var a=Object.assign({},e),t=a.setClipboardColor,c=a.color;return n.a.createElement("li",{className:"nav__li nav__color",style:{backgroundColor:"".concat(c.hex)},onClick:function(){t(c)}},c.hex)},m=function(e){var a=Object.assign({},e),t=a.setClipboardColor,c=a.colorsHistory,l=a.setIsSettingsModalOpen,s=a.session;return n.a.createElement("nav",{className:"nav l-flex l-align-center"},n.a.createElement("ul",{className:"nav__ul l-flex"},c&&c.map((function(e,a){return n.a.createElement(d,{key:a,color:e,setClipboardColor:t})})),n.a.createElement("li",{className:"nav__li nav__li--no-border nav__li--left-auto"},n.a.createElement("a",{href:"https://github.com/RyanPiv/color-sorter",target:"_blank",rel:"noopener noreferrer",className:"nav__li-icon nav__li-icon--github"},"Github")),n.a.createElement("li",{className:"nav__li nav__li--no-border",onClick:function(){var e=s&&s.colors;if(e&&e.length>0){var a=e.map((function(e){return"".concat(e.name,":").concat(e.hex)})),t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(a)),t.setAttribute("download","colors.txt"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},n.a.createElement("i",{className:"nav__li-icon nav__li-icon--download"})),n.a.createElement("li",{className:"nav__li nav__li--no-border",onClick:function(){l(!0)}},n.a.createElement("i",{className:"nav__li-icon nav__li-icon--settings"}))))},h=function(e){var a=Object.assign({},e),t=a.color,c=a.setClipboardColor,l=a.session.settings.display;return n.a.createElement("li",{className:"c-color-grid__item l-flex l-absolute-center",onClick:function(){c(t)},style:{backgroundColor:"".concat(t.hex)}},n.a.createElement("span",{className:"c-color-grid__item-text"},t.name),l.hex.checked&&n.a.createElement("span",{className:"c-color-grid__item-text"},t.hex),l.rgb.checked&&n.a.createElement("span",{className:"c-color-grid__item-text"},"RGB(",t.rgb&&"".concat(t.rgb[0],", ").concat(t.rgb[1],", ").concat(t.rgb[2]),")"),l.hsl.checked&&n.a.createElement("span",{className:"c-color-grid__item-text"},"HSL(",t.hsl&&"".concat(t.hsl[0],",\n").concat(t.hsl[1],"%,\n").concat(t.hsl[2],"%,\n").concat(t.hsl[3]),")"))},u=t(19),g=t(4),b=t.n(g);b.a.setAppElement("#root");var f=function(e){var a=Object.assign({},e),t=a.disabled,c=a.handleClick,l=a.displayName,s=a.defaultChecked;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"c-modal-settings__settings-group"},n.a.createElement("label",{className:"c-modal-settings__label",htmlFor:"c-modal-settings__check-copy-".concat(l)},l),n.a.createElement("input",{type:"checkbox",id:"c-modal-settings__copy-check-".concat(l),name:"c-modal-settings__copy-check-".concat(l),className:"c-modal-settings__check",value:"rgb",disabled:t,defaultChecked:s,onClick:c})))};b.a.setAppElement("#root");var p=function(e){var a=Object.assign({},e),t=a.disabled,c=a.handleClick,l=a.displayName,s=a.defaultChecked;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"c-modal-settings__settings-group"},n.a.createElement("label",{className:"c-modal-settings__label",htmlFor:"c-modal-settings__check-".concat(l)},l),n.a.createElement("input",{type:"checkbox",id:"c-modal-settings__check-".concat(l),name:"c-modal-settings__check-".concat(l),className:"c-modal-settings__check",value:"rgb",disabled:t,defaultChecked:s,onClick:c})))},E=[/^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i,/^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i,/^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i,/^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i,/([\da-f]{3}){1,2}$/i,/([\da-f]{4}){1,2}$/i],_=t(7),k=t.n(_),y=t(20),v=function(e){var a=e.color;return e.hex=k()(a).hex(),e.hsl=k()(a).hsl(),e.rgb=k()(a).rgb(),e.hsl[0]=Math.round(e.hsl[0])||0,e.hsl[1]=Math.round(100*e.hsl[1]),e.hsl[2]=Math.round(100*e.hsl[2]),e};b.a.setAppElement("#root");var C=function(e){var a=Object.assign({},e),t=a.isSettingsModalOpen,l=a.setIsSettingsModalOpen,s=a.session,r=a.setSession,i=a.setColorsArray,d=s.settings,m=Object(c.useRef)();return n.a.createElement(b.a,{isOpen:t,style:{overlay:{backgroundColor:"transparent"}},contentLabel:"Example Modal",className:"c-modal c-modal-settings"},n.a.createElement("div",{className:"c-modal__overlay"},n.a.createElement("button",{className:"c-modal__close-button",onClick:function(){l(!t)}},"close"),n.a.createElement("div",{className:"c-modal__content-container"},n.a.createElement("h2",{className:"c-heading c-heading--h1"},"Settings"),n.a.createElement("h3",{className:"c-heading c-heading--h2"},"Color Type to Copy to Clipboard and Download As"),n.a.createElement(f,{session:s,disabled:!0,displayName:"Hex",defaultChecked:s.settings.copy.hex.checked,handleClick:function(){r(Object(o.a)({},s,{settings:Object(o.a)({},d,{hex:{checked:!d.copy.hex.checked}})}))}}),n.a.createElement(f,{session:s,disabled:!0,displayName:"RGB",defaultChecked:s.settings.copy.rgb.checked,handleClick:function(){r(Object(o.a)({},s,{settings:Object(o.a)({},d,{rgb:{checked:!d.copy.rgb.checked}})}))}}),n.a.createElement(f,{session:s,disabled:!0,displayName:"HSL",defaultChecked:s.settings.copy.hsl.checked,handleClick:function(){r(Object(o.a)({},s,{settings:Object(o.a)({},d,{hsl:{checked:!d.copy.hsl.checked}})}))}}),n.a.createElement("h3",{className:"c-heading c-heading--h2"},"Color Format to Display in Grid Cells"),n.a.createElement(p,{session:s,disabled:!1,displayName:"Hex",defaultChecked:s.settings.display.hex.checked,handleClick:function(){r(Object(o.a)({},s,{settings:Object(o.a)({},s.settings,{display:Object(o.a)({},s.settings.display,{hex:{checked:!d.display.hex.checked}})})}))}}),n.a.createElement(p,{session:s,disabled:!1,displayName:"RGB",defaultChecked:s.settings.display.rgb.checked,handleClick:function(){r(Object(o.a)({},s,{settings:Object(o.a)({},s.settings,{display:Object(o.a)({},s.settings.display,{rgb:{checked:!d.display.rgb.checked}})})}))}}),n.a.createElement(p,{session:s,disabled:!1,displayName:"HSL",defaultChecked:s.settings.display.hsl.checked,handleClick:function(){r(Object(o.a)({},s,{settings:Object(o.a)({},s.settings,{display:Object(o.a)({},s.settings.display,{hsl:{checked:!d.display.hsl.checked}})})}))}}),n.a.createElement("h3",{className:"c-heading c-heading--h2"},"Generate Colors"),n.a.createElement("div",{className:"c-modal-settings__generate"},n.a.createElement("ul",null,n.a.createElement("li",null,"Must end each line with a semi-colon!"),n.a.createElement("li",null,"Names are not required"),n.a.createElement("li",null,"Create a color name with an equals sign, such as colorName=#fff")),n.a.createElement("h3",{className:"c-heading c-heading--h3"},"Accepted formats: "),n.a.createElement("h3",{className:"c-heading c-heading--h3"},"Sass color variables:"),n.a.createElement("p",{className:"c-subheading"},"$color-light-black: #262f2f;",n.a.createElement("br",null),"$color-gray: rgba(235, 239, 242, 0.5);",n.a.createElement("br",null)),n.a.createElement("h3",{className:"c-heading c-heading--h3"},"Name Value Pairing"),n.a.createElement("p",{className:"c-subheading"},"emerald=2ecc71;",n.a.createElement("br",null),"carrot=#e67e22;",n.a.createElement("br",null)),n.a.createElement("h3",{className:"c-heading c-heading--h3"},"Any Valid Hex of 3, 6 or 8 digits"),n.a.createElement("p",{className:"c-subheading"},"hex=000;",n.a.createElement("br",null),"hexColorName=#1e1e1e;",n.a.createElement("br",null),"#00ff0088;",n.a.createElement("br",null),"#fff;",n.a.createElement("br",null),"fff;",n.a.createElement("br",null)),n.a.createElement("h3",{className:"c-heading c-heading--h3"},"HSL, RGB, RGBA"),n.a.createElement("p",{className:"c-subheading"},"hslColor=hsl(195, 100 %, 50 %);",n.a.createElement("br",null),"rgb(0, 191, 255);",n.a.createElement("br",null)),n.a.createElement("textarea",{className:"c-modal-settings__generate-text-area",placeholder:"Paste colors:",ref:m}),n.a.createElement("button",{className:"c-button c-modal-settings__generate-button",onClick:function(){var e=m.current.value.trim().split(/[\n;]+/g),a=[];e.forEach((function(e){var t,c=e.replace(/[\n\r]+/g,"").replace(/\s+/g,""),n=c.match(/(.+?)(?=:)/g)?c.match(/(.+?)(?=:)/)[0]:c.replace("#",""),l=Object(u.a)(E);try{for(l.s();!(t=l.n()).done;){var s=t.value,o=c.match(s);if(o&&o.length>0){a.push(v({name:n,color:o[0]}));break}}}catch(r){l.e(r)}finally{l.f()}})),a.length>0&&(i(a),l(!1))}},"Generate")))))},N=function(e){var a=Object.assign({},e)||{},t=Object(c.useState)(new URLSearchParams(window.location.search)||[]),l=Object(i.a)(t,2),s=l[0],d=l[1],u=Object(c.useState)(a.colors||[]),g=Object(i.a)(u,2),b=g[0],f=g[1],p=Object(c.useState)([]),E=Object(i.a)(p,2),_=E[0],k=E[1],N=Object(c.useState)(),O=Object(i.a)(N,2),j=O[0],x=O[1],S=Object(c.useState)([]),w=Object(i.a)(S,2),A=w[0],M=w[1],B=Object(c.useState)(a),R=Object(i.a)(B,2),G=R[0],H=R[1],I=Object(c.useState)(!1),$=Object(i.a)(I,2),F=$[0],L=$[1],P=Object(c.useState)(!1),J=Object(i.a)(P,2),T=J[0],U=J[1],q=!0===T?" is-shown":"";Object(c.useEffect)((function(){var e=[];s.forEach((function(a,t){var c=v({name:t,color:a});e.push(c)})),f(e)}),[]),Object(c.useEffect)((function(){if(b.length>0){var e=Object(r.a)(b);e.sort(Object(y.firstBy)((function(e,a){return e.hsl[0]-a.hsl[0]})).thenBy((function(e,a){return e.hsl[1]-a.hsl[1]})).thenBy((function(e,a){return e.hsl[2]-a.hsl[2]})).thenBy((function(e,a){return e.hsl[3]-a.hsl[3]}))),k(e)}}),[b]),Object(c.useEffect)((function(){if(_){var e=new URLSearchParams;_.forEach((function(a){var t=a.color,c=a.name;e.set(c,t)})),H(Object(o.a)({},G,{colors:_})),d(e)}}),[_]),Object(c.useEffect)((function(){var e;(e=s).toString(),window.history.replaceState({},"",decodeURIComponent("".concat(window.location.pathname,"?").concat(e)))}),[s]),Object(c.useEffect)((function(){localStorage.setItem("color-sorter",JSON.stringify(G))}),[G]),Object(c.useEffect)((function(){j&&D(j.hex)}),[j]);var D=function(e){navigator.clipboard||function(e){var a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.focus(),a.select();try{var t=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+t)}catch(c){console.error("Fallback: Oops, unable to copy",c)}document.body.removeChild(a)}(e),navigator.clipboard.writeText(e).then((function(){}),(function(e){alert("Async: Could not copy text: ",e)}));var a=Object(r.a)(A);a.push(j),M(a),U(!0),setTimeout((function(){U(!1)}),1400)};return n.a.createElement("main",{className:"c-color-sorter".concat(F?" is-blurred":"")},n.a.createElement(C,{isSettingsModalOpen:F,setIsSettingsModalOpen:L,session:G,setColorsArray:f,setSession:H}),n.a.createElement("div",{className:"c-color-copy".concat(q," l-flex l-absolute-center"),style:{backgroundColor:j&&"".concat(j.hex)}},n.a.createElement("span",{className:"c-color-copy__value-container l-flex l-absolute-center"},n.a.createElement("p",{className:"c-color-copy__value"},"Copied: #",j&&j.hex))),n.a.createElement(m,{colorsHistory:A,setClipboardColor:x,setIsSettingsModalOpen:L,session:G}),n.a.createElement("ul",{className:"c-color-grid"},_&&_.map((function(e,a){return n.a.createElement(h,{color:e,setClipboardColor:x,session:G,key:a})})),0===_.length&&n.a.createElement(h,{color:{name:"Try loading some colors by clicking the gear icon in the nav bar",hex:"909090"},setClipboardColor:function(){},session:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(23),j=JSON.parse(localStorage.getItem("color-sorter"))||{localStorageName:"color-sorter",settings:{display:{hex:{checked:!1},rgb:{checked:!1},hsl:{checked:!1}},copy:{hex:{checked:!0},rgb:{checked:!1},hsl:{checked:!1}}},colors:[]};s.a.render(n.a.createElement(O.a,null,n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,j))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d4ff8beb.chunk.js.map