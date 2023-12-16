(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,':root {\n  --periwinkle: #e8e6fa;\n  --celestial-blue: #8fd5a6;\n  --midnight-green: #0b5563ff;\n  --powder-blue: #a2bce0ff;\n  --davys-gray: #5e5c6cff;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-family: "Poppins";\n}\n\n.container {\n  display: grid;\n  grid-template: 60px 1fr / 250px 1fr;\n  height: 100%;\n}\n\n.container > div {\n  padding: 32px;\n}\n\n.sidebar {\n  background-color: var(--periwinkle);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\nbutton {\n  appearance: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.sidebar > button {\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border-radius: 6px;\n  padding: 4px 0px;\n}\n\n.sidebar > button:not(.tab) {\n  background-color: var(--midnight-green);\n  color: white;\n  padding: 8px;\n  max-width: max-content;\n}\n\n.sidebar > button[class*=\'tab\']:not(.active):hover {\n  background-color: var(--powder-blue);\n}\n\n.sidebar .active {\n  background-color: var(--celestial-blue);\n  color: #000080; /* Navy */\n}\n\n.sidebar .active .material-symbols-outlined {\n  color: var(--midnight-green);\n}\n\n.navbar {\n  background-color: var(--midnight-green);\n  grid-column: 1 / 3;\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 8px;\n  padding-left: 16px;\n  font-size: 28px;\n}\n\n.material-symbols-outlined.md-48 {\n  font-size: 36px;\n}\n\nnav:not(.navbar) button[class*=\'tab\'] .material-symbols-outlined {\n  color: var(--davys-gray);\n}\n\n\n#tasks {\n  padding: 16px;\n}\n\nform {\n  display: none;\n  flex-direction: column;\n  padding: 16px;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  max-width: 90%;\n  margin-top: 16px;\n}\n\n.cancel {\n  background-color: transparent;\n  color: var(--midnight-green);\n  font-weight: 600;\n}\n\nform div {\n  display: flex;\n}\n\ninput[type="text"],\ninput[type="date"] {\n  appearance: none;\n  border: #9ca3af solid 1px;\n  border-radius: 4px;\n  padding: 8px;\n}\n\ninput[type="text"]:focus,\ninput[type="date"]:focus {\n  border: var(--celestial-blue) solid 2px;\n  outline: none;\n  box-shadow: var(--powder-blue) 1.95px 1.95px 2.6px;\n}\n\n.task {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n  background-color: var(--powder-blue);\n}',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var u=e[s],d=a.base?u[0]+a.base:u[0],l=o[d]||0,c="".concat(d," ").concat(l);o[d]=l+1;var f=t(c),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(m);else{var h=r(m,a);a.byIndex=s,n.splice(s,0,{identifier:c,updater:h,references:1})}i.push(c)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var u=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=u}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),s=t(565),u=t.n(s),d=t(216),l=t.n(d),c=t(589),f=t.n(c),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var p={};function g(){return p}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function b(e){y(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===v(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(e,n){y(2,arguments);var t=b(e),a=b(n),r=t.getTime()-a.getTime();return r<0?-1:r>0?1:r}function x(e,n){y(2,arguments);var t,a=b(e),r=b(n),o=w(a,r),i=Math.abs(function(e,n){y(2,arguments);var t=b(e),a=b(n);return 12*(t.getFullYear()-a.getFullYear())+(t.getMonth()-a.getMonth())}(a,r));if(i<1)t=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*i);var s=w(a,r)===-o;(function(e){y(1,arguments);var n=b(e);return function(e){y(1,arguments);var n=b(e);return n.setHours(23,59,59,999),n}(n).getTime()===function(e){y(1,arguments);var n=b(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}(n).getTime()})(b(e))&&1===i&&1===w(e,r)&&(s=!1),t=o*(i-Number(s))}return 0===t?0:t}var M={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},T="trunc";var k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function D(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const S={date:D({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:D({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:D({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var P={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function W(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=t&&t.width?String(t.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,s=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(n):n]}}const C={ordinalNumber:function(e,n){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:W({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:W({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:W({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:W({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:W({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function j(e){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=n.match(r);if(!o)return null;var i,s=o[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?function(e,n){for(var t=0;t<e.length;t++)if(e[t].test(s))return t}(u):function(e,n){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(s))return t}(u);return i=e.valueCallback?e.valueCallback(d):d,{value:i=t.valueCallback?t.valueCallback(i):i,rest:n.slice(s.length)}}}var E,A={ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.match(E.matchPattern);if(!t)return null;var a=t[0],r=e.match(E.parsePattern);if(!r)return null;var o=E.valueCallback?E.valueCallback(r[0]):r[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(a.length)}}),era:j({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:j({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:j({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:j({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const N={code:"en-US",formatDistance:function(e,n,t){var a,r=k[e];return a="string"==typeof r?r:1===n?r.one:r.other.replace("{{count}}",n.toString()),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"in "+a:a+" ago":a},formatLong:S,formatRelative:function(e,n,t,a){return P[e]},localize:C,match:A,options:{weekStartsOn:0,firstWeekContainsDate:1}};function F(e,n){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}function X(e){var n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),e.getTime()-n.getTime()}var Y=43200;function q(e,n,t){var a,r;y(2,arguments);var o=g(),i=null!==(a=null!==(r=null==t?void 0:t.locale)&&void 0!==r?r:o.locale)&&void 0!==a?a:N;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=w(e,n);if(isNaN(s))throw new RangeError("Invalid time value");var u,d,l=F(F({},t),{addSuffix:Boolean(null==t?void 0:t.addSuffix),comparison:s});s>0?(u=b(n),d=b(e)):(u=b(e),d=b(n));var c,f=function(e,n,t){y(2,arguments);var a,r=function(e,n){return y(2,arguments),b(e).getTime()-b(n).getTime()}(e,n)/1e3;return((a=null==t?void 0:t.roundingMethod)?M[a]:M[T])(r)}(d,u),m=(X(d)-X(u))/1e3,h=Math.round((f-m)/60);if(h<2)return null!=t&&t.includeSeconds?f<5?i.formatDistance("lessThanXSeconds",5,l):f<10?i.formatDistance("lessThanXSeconds",10,l):f<20?i.formatDistance("lessThanXSeconds",20,l):f<40?i.formatDistance("halfAMinute",0,l):f<60?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",1,l):0===h?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",h,l);if(h<45)return i.formatDistance("xMinutes",h,l);if(h<90)return i.formatDistance("aboutXHours",1,l);if(h<1440){var p=Math.round(h/60);return i.formatDistance("aboutXHours",p,l)}if(h<2520)return i.formatDistance("xDays",1,l);if(h<Y){var v=Math.round(h/1440);return i.formatDistance("xDays",v,l)}if(h<86400)return c=Math.round(h/Y),i.formatDistance("aboutXMonths",c,l);if((c=x(d,u))<12){var k=Math.round(h/Y);return i.formatDistance("xMonths",k,l)}var D=c%12,S=Math.floor(c/12);return D<3?i.formatDistance("aboutXYears",S,l):D<9?i.formatDistance("overXYears",S,l):i.formatDistance("almostXYears",S+1,l)}function O(e="General"){let n=[];return{title:e,addTodo:e=>n.push(e),deleteTodo:e=>n.splice(e,1),getTodos:()=>n}}!function(){const e=function(){let e=[O("allTasks")];return{addProject:n=>e.push(O(n)),deleteProject:n=>{e=e.filter((e=>e.title!==n))},getProjects:()=>e,getProjectByName:n=>e.find((e=>e.title===n))}}(),n=document.getElementById("new-task"),t=document.getElementById("tasks"),a=document.querySelector(".sidebar :first-child"),r=document.querySelector(".cancel");function o(){n.style.display="none"===n.style.display||""===n.style.display?"flex":"none"}n.addEventListener("submit",(a=>{if(n.checkValidity()){a.preventDefault();const r=new FormData(n),i=function({title:e,description:n,dueDate:t,priority:a,notes:r="",checklist:o=[]}){let i=!1;return{title:e,description:n,dueDate:t,priority:a,notes:r,checklist:o,complete:i,toggleComplete:()=>i=!i}}({title:r.get("task-name"),description:r.get("description"),dueDate:r.get("due-date"),priority:r.get("priority")});e.getProjectByName("allTasks").addTodo(i),t.innerHTML=null,e.getProjectByName("allTasks").getTodos().forEach((e=>{const n=function(e){const n=document.createElement("div");n.classList.add("task");const{title:t,description:a,dueDate:r,priority:o}=e,i=document.createElement("div");i.innerText=t,n.appendChild(i);const s=document.createElement("div");s.innerText=a,n.appendChild(s);const u=q(new Date(r),new Date,{addSuffix:!0}),d=document.createElement("div");d.innerText=u,n.appendChild(d);const l=document.createElement("div");return l.innerText=o,n.appendChild(l),n}(e);t.appendChild(n)})),n.reset(),o()}})),a.addEventListener("click",o),r.addEventListener("click",o)}()})()})();