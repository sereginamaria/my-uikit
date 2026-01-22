(function(I,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],l):(I=typeof globalThis<"u"?globalThis:I||self,l(I["my-uikit"]={},I.vue))})(this,(function(I,l){"use strict";const T=(e,t)=>{const a=e.__vccOpts||e;for(const[n,r]of t)a[n]=r;return a},Ja={class:"accordion"},Qa={key:0,class:"text"},ot=T({__name:"Accordion",props:{title:{type:String,required:!0}},setup(e){const t=l.ref(!0),a=()=>{t.value=!t.value};return(n,r)=>(l.openBlock(),l.createElementBlock("div",Ja,[l.createElementVNode("span",{class:"title",onClick:a},l.toDisplayString(e.title),1),t.value?(l.openBlock(),l.createElementBlock("div",Qa,[l.renderSlot(n.$slots,"default",{},void 0,!0)])):l.createCommentVNode("",!0)]))}},[["__scopeId","data-v-1b3f6aa6"]]);function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function Za(e){if(Array.isArray(e))return e}function en(e){if(Array.isArray(e))return ke(e)}function tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function an(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lt(n.key),n)}}function nn(e,t,a){return t&&an(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Se(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var f=a.next();return o=f.done,f},e:function(f){s=!0,i=f},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function v(e,t,a){return(t=lt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function rn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function on(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,s=[],f=!0,c=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);f=!0);}catch(d){c=!0,r=d}finally{try{if(!f&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function sn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?st(Object(a),!0).forEach(function(n){v(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function se(e,t){return Za(e)||on(e,t)||Se(e,t)||sn()}function N(e){return en(e)||rn(e)||Se(e)||ln()}function fn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e){var t=fn(e,"string");return typeof t=="symbol"?t:t+""}function le(e){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function Se(e,t){if(e){if(typeof e=="string")return ke(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ke(e,t):void 0}}var ft=function(){},we={},ut={},ct=null,dt={mark:ft,measure:ft};try{typeof window<"u"&&(we=window),typeof document<"u"&&(ut=document),typeof MutationObserver<"u"&&(ct=MutationObserver),typeof performance<"u"&&(dt=performance)}catch{}var un=we.navigator||{},mt=un.userAgent,ht=mt===void 0?"":mt,M=we,k=ut,gt=ct,fe=dt;M.document;var D=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",pt=~ht.indexOf("MSIE")||~ht.indexOf("Trident/"),Ae,cn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,vt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},mn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},yt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",J="duotone",bt="sharp",xt="sharp-duotone",kt="chisel",St="etch",wt="jelly",At="jelly-duo",It="jelly-fill",Pt="notdog",Et="notdog-duo",Ot="slab",_t="slab-press",Ct="thumbprint",Nt="utility",Ft="utility-duo",$t="utility-fill",jt="whiteboard",hn="Classic",gn="Duotone",pn="Sharp",vn="Sharp Duotone",yn="Chisel",bn="Etch",xn="Jelly",kn="Jelly Duo",Sn="Jelly Fill",wn="Notdog",An="Notdog Duo",In="Slab",Pn="Slab Press",En="Thumbprint",On="Utility",_n="Utility Duo",Cn="Utility Fill",Nn="Whiteboard",Tt=[P,J,bt,xt,kt,St,wt,At,It,Pt,Et,Ot,_t,Ct,Nt,Ft,$t,jt];Ae={},v(v(v(v(v(v(v(v(v(v(Ae,P,hn),J,gn),bt,pn),xt,vn),kt,yn),St,bn),wt,xn),At,kn),It,Sn),Pt,wn),v(v(v(v(v(v(v(v(Ae,Et,An),Ot,In),_t,Pn),Ct,En),Nt,On),Ft,_n),$t,Cn),jt,Nn);var Fn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},$n={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},jn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Tn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Dt=["fak","fa-kit","fakd","fa-kit-duotone"],Lt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Dn=["kit"],Ln="kit",zn="kit-duotone",Mn="Kit",Bn="Kit Duotone";v(v({},Ln,Mn),zn,Bn);var Rn={kit:{"fa-kit":"fak"}},Wn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Un={kit:{fak:"fa-kit"}},zt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ie,ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Yn="classic",Hn="duotone",Gn="sharp",qn="sharp-duotone",Kn="chisel",Xn="etch",Jn="jelly",Qn="jelly-duo",Zn="jelly-fill",er="notdog",tr="notdog-duo",ar="slab",nr="slab-press",rr="thumbprint",ir="utility",or="utility-duo",sr="utility-fill",lr="whiteboard",fr="Classic",ur="Duotone",cr="Sharp",dr="Sharp Duotone",mr="Chisel",hr="Etch",gr="Jelly",pr="Jelly Duo",vr="Jelly Fill",yr="Notdog",br="Notdog Duo",xr="Slab",kr="Slab Press",Sr="Thumbprint",wr="Utility",Ar="Utility Duo",Ir="Utility Fill",Pr="Whiteboard";Ie={},v(v(v(v(v(v(v(v(v(v(Ie,Yn,fr),Hn,ur),Gn,cr),qn,dr),Kn,mr),Xn,hr),Jn,gr),Qn,pr),Zn,vr),er,yr),v(v(v(v(v(v(v(v(Ie,tr,br),ar,xr),nr,kr),rr,Sr),ir,wr),or,Ar),sr,Ir),lr,Pr);var Er="kit",Or="kit-duotone",_r="Kit",Cr="Kit Duotone";v(v({},Er,_r),Or,Cr);var Nr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Fr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Pe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},$r=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Mt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Vn,$r),jr=["solid","regular","light","thin","duotone","brands","semibold"],Bt=[1,2,3,4,5,6,7,8,9,10],Tr=Bt.concat([11,12,13,14,15,16,17,18,19,20]),Dr=["aw","fw","pull-left","pull-right"],Lr=[].concat(N(Object.keys(Fr)),jr,Dr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(Bt.map(function(e){return"".concat(e,"x")})).concat(Tr.map(function(e){return"w-".concat(e)})),zr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",Ee=16,Rt="fa",Wt="svg-inline--fa",W="data-fa-i2svg",Oe="data-fa-pseudo-element",Mr="data-fa-pseudo-element-pending",_e="data-prefix",Ce="data-icon",Ut="fontawesome-i2svg",Br="async",Rr=["HTML","HEAD","STYLE","SCRIPT"],Vt=["::before","::after",":before",":after"],Yt=(function(){try{return process.env.NODE_ENV==="production"}catch{return!1}})();function Q(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[P]}})}var Ht=u({},vt);Ht[P]=u(u(u(u({},{"fa-duotone":"duotone"}),vt[P]),Lt.kit),Lt["kit-duotone"]);var Wr=Q(Ht),Ne=u({},Tn);Ne[P]=u(u(u(u({},{duotone:"fad"}),Ne[P]),zt.kit),zt["kit-duotone"]);var Gt=Q(Ne),Fe=u({},Pe);Fe[P]=u(u({},Fe[P]),Un.kit);var $e=Q(Fe),je=u({},Nr);je[P]=u(u({},je[P]),Rn.kit),Q(je);var Ur=cn,qt="fa-layers-text",Vr=dn,Yr=u({},Fn);Q(Yr);var Hr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Te=mn,Gr=[].concat(N(Dn),N(Lr)),Z=M.FontAwesomeConfig||{};function qr(e){var t=k.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Kr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(k&&typeof k.querySelector=="function"){var Xr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xr.forEach(function(e){var t=se(e,2),a=t[0],n=t[1],r=Kr(qr(a));r!=null&&(Z[n]=r)})}var Kt={styleDefault:"solid",familyDefault:P,cssPrefix:Rt,replacementClass:Wt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var Y=u(u({},Kt),Z);Y.autoReplaceSvg||(Y.observeMutations=!1);var g={};Object.keys(Kt).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(a){Y[e]=a,ee.forEach(function(n){return n(g)})},get:function(){return Y[e]}})}),Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){Y.cssPrefix=t,ee.forEach(function(a){return a(g)})},get:function(){return Y.cssPrefix}}),M.FontAwesomeConfig=g;var ee=[];function Jr(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var H=Ee,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qr(e){if(!(!e||!D)){var t=k.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=k.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return k.head.insertBefore(t,n),e}}var Zr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){for(var e=12,t="";e-- >0;)t+=Zr[Math.random()*62|0];return t}function G(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function De(e){return e.classList?G(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Jt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ei(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Jt(e[a]),'" ')},"").trim()}function ce(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Le(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function ti(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ai(e){var t=e.transform,a=e.width,n=a===void 0?Ee:a,r=e.height,i=r===void 0?Ee:r,o="";return pt?o+="translate(".concat(t.x/H-n/2,"em, ").concat(t.y/H-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "),o+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ni=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Qt(){var e=Rt,t=Wt,a=g.cssPrefix,n=g.replacementClass,r=ni;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Zt=!1;function ze(){g.autoAddCss&&!Zt&&(Qr(Qt()),Zt=!0)}var ri={mixout:function(){return{dom:{css:Qt,insertCss:ze}}},hooks:function(){return{beforeDOMElementCreation:function(){ze()},beforeI2svg:function(){ze()}}}},z=M||{};z[L]||(z[L]={}),z[L].styles||(z[L].styles={}),z[L].hooks||(z[L].hooks={}),z[L].shims||(z[L].shims=[]);var F=z[L],ea=[],ta=function(){k.removeEventListener("DOMContentLoaded",ta),de=1,ea.map(function(t){return t()})},de=!1;D&&(de=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),de||k.addEventListener("DOMContentLoaded",ta));function ii(e){D&&(de?setTimeout(e,0):ea.push(e))}function te(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Jt(e):"<".concat(t," ").concat(ei(n),">").concat(i.map(te).join(""),"</").concat(t,">")}function aa(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Me=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=a,f,c,d;for(n===void 0?(f=1,d=t[i[0]]):(f=0,d=n);f<o;f++)c=i[f],d=s(d,t[c],c,t);return d};function na(e){return N(e).length!==1?null:e.codePointAt(0).toString(16)}function ra(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Be(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=ra(t);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(e,ra(t)):F.styles[e]=u(u({},F.styles[e]||{}),i),e==="fas"&&Be("fa",t)}var ae=F.styles,oi=F.shims,ia=Object.keys($e),si=ia.reduce(function(e,t){return e[t]=Object.keys($e[t]),e},{}),Re=null,oa={},sa={},la={},fa={},ua={};function li(e){return~Gr.indexOf(e)}function fi(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!li(r)?r:null}var ca=function(){var t=function(i){return Me(ae,function(o,s,f){return o[f]=Me(s,i,{}),o},{})};oa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),sa=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ua=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in ae||g.autoFetchSvg,n=Me(oi,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});la=n.names,fa=n.unicodes,Re=me(g.styleDefault,{family:g.familyDefault})};Jr(function(e){Re=me(e.styleDefault,{family:g.familyDefault})}),ca();function We(e,t){return(oa[e]||{})[t]}function ui(e,t){return(sa[e]||{})[t]}function U(e,t){return(ua[e]||{})[t]}function da(e){return la[e]||{prefix:null,iconName:null}}function ci(e){var t=fa[e],a=We("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function B(){return Re}var ma=function(){return{prefix:null,iconName:null,rest:[]}};function di(e){var t=P,a=ia.reduce(function(n,r){return n[r]="".concat(g.cssPrefix,"-").concat(r),n},{});return Tt.forEach(function(n){(e.includes(a[n])||e.some(function(r){return si[n].includes(r)}))&&(t=n)}),t}function me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?P:a,r=Wr[n][e];if(n===J&&!e)return"fad";var i=Gt[n][e]||Gt[n][r],o=e in F.styles?e:null,s=i||o||null;return s}function mi(e){var t=[],a=null;return e.forEach(function(n){var r=fi(g.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function ha(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var ga=Mt.concat(Dt);function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=ha(e.filter(function(y){return ga.includes(y)})),o=ha(e.filter(function(y){return!ga.includes(y)})),s=i.filter(function(y){return r=y,!yt.includes(y)}),f=se(s,1),c=f[0],d=c===void 0?null:c,h=di(i),b=u(u({},mi(o)),{},{prefix:me(d,{family:h})});return u(u(u({},b),vi({values:e,family:h,styles:ae,config:g,canonical:b,givenPrefix:r})),hi(n,r,b))}function hi(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?da(r):{},o=U(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!ae.far&&ae.fas&&!g.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var gi=Tt.filter(function(e){return e!==P||e!==J}),pi=Object.keys(Pe).filter(function(e){return e!==P}).map(function(e){return Object.keys(Pe[e])}).flat();function vi(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,f=e.config,c=f===void 0?{}:f,d=a===J,h=t.includes("fa-duotone")||t.includes("fad"),b=c.familyDefault==="duotone",y=n.prefix==="fad"||n.prefix==="fa-duotone";if(!d&&(h||b||y)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&gi.includes(a)){var w=Object.keys(s).find(function(A){return pi.includes(A)});if(w||c.autoFetchSvg){var x=jn.get(a).defaultShortPrefixId;n.prefix=x,n.iconName=U(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=B()||"fas"),n}var yi=(function(){function e(){tn(this,e),this.definitions={}}return nn(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Be(s,o[s]);var f=$e[P][s];f&&Be(f,o[s]),ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,d=c[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(h){typeof h=="string"&&(a[s][h]=c)}),a[s][f]=c}),a}}])})(),pa=[],q={},K={},bi=Object.keys(K);function xi(e,t){var a=t.mixoutsTo;return pa=e,q={},Object.keys(K).forEach(function(n){bi.indexOf(n)===-1&&delete K[n]}),pa.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),le(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}n.provides&&n.provides(K)}),a}function Ue(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=q[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function V(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=q[e]||[];r.forEach(function(i){i.apply(null,a)})}function R(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function Ve(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||B();if(t)return t=U(a,t)||t,aa(va.definitions,a,t)||aa(F.styles,a,t)}var va=new yi,ki=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,V("noAuto")},Si={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(V("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,ii(function(){Ai({autoReplaceSvgRoot:a}),V("watch",t)})}},wi={icon:function(t){if(t===null)return null;if(le(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=me(t[0]);return{prefix:n,iconName:U(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(Ur))){var r=he(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||B(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=B();return{prefix:i,iconName:U(i,t)||t}}}},C={noAuto:ki,config:g,dom:Si,parse:wi,library:va,findIconDefinition:Ve,toHtml:te},Ai=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?k:a;(Object.keys(F.styles).length>0||g.autoFetchSvg)&&D&&g.autoReplaceSvg&&C.dom.i2svg({node:n})};function ge(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return te(n)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var n=k.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Ii(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Le(o)&&a.found&&!n.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=ce(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Pi(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:n}]}]}function Ei(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Ye(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.maskId,c=e.extra,d=e.watchable,h=d===void 0?!1:d,b=n.found?n:a,y=b.width,w=b.height,x=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(_){return c.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(c.classes).join(" "),A={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:c.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(w)})};!Ei(c.attributes)&&!c.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),h&&(A.attributes[W]="");var m=u(u({},A),{},{prefix:r,iconName:i,main:a,mask:n,maskId:f,transform:o,symbol:s,styles:u({},c.styles)}),p=n.found&&a.found?R("generateAbstractMask",m)||{children:[],attributes:{}}:R("generateAbstractIcon",m)||{children:[],attributes:{}},S=p.children,O=p.attributes;return m.children=S,m.attributes=O,s?Pi(m):Ii(m)}function ya(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,f=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(f[W]="");var c=u({},i.styles);Le(r)&&(c.transform=ai({transform:r,width:a,height:n}),c["-webkit-transform"]=c.transform);var d=ce(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),h}function Oi(e){var t=e.content,a=e.extra,n=u(u({},a.attributes),{},{class:a.classes.join(" ")}),r=ce(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var He=F.styles;function Ge(e){var t=e[0],a=e[1],n=e.slice(4),r=se(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var _i={found:!1,width:512,height:512};function Ci(e,t){!Yt&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qe(e,t){var a=t;return t==="fa"&&g.styleDefault!==null&&(t=B()),new Promise(function(n,r){if(a==="fa"){var i=da(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&He[t]&&He[t][e]){var o=He[t][e];return n(Ge(o))}Ci(e,t),n(u(u({},_i),{},{icon:g.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var ba=function(){},Ke=g.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:ba,measure:ba},ne='FA "7.1.0"',Ni=function(t){return Ke.mark("".concat(ne," ").concat(t," begins")),function(){return xa(t)}},xa=function(t){Ke.mark("".concat(ne," ").concat(t," ends")),Ke.measure("".concat(ne," ").concat(t),"".concat(ne," ").concat(t," begins"),"".concat(ne," ").concat(t," ends"))},Xe={begin:Ni,end:xa},pe=function(){};function ka(e){var t=e.getAttribute?e.getAttribute(W):null;return typeof t=="string"}function Fi(e){var t=e.getAttribute?e.getAttribute(_e):null,a=e.getAttribute?e.getAttribute(Ce):null;return t&&a}function $i(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function ji(){if(g.autoReplaceSvg===!0)return ve.replace;var e=ve[g.autoReplaceSvg];return e||ve.replace}function Ti(e){return k.createElementNS("http://www.w3.org/2000/svg",e)}function Di(e){return k.createElement(e)}function Sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Ti:Di:a;if(typeof e=="string")return k.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Sa(o,{ceFn:n}))}),r}function Li(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ve={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Sa(r),a)}),a.getAttribute(W)===null&&g.keepOriginalSource){var n=k.createComment(Li(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~De(a).indexOf(g.replacementClass))return ve.replace(t);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,f){return f===g.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return te(s)}).join(`
`);a.setAttribute(W,""),a.innerHTML=o}};function wa(e){e()}function Aa(e,t){var a=typeof t=="function"?t:pe;if(e.length===0)a();else{var n=wa;g.mutateApproach===Br&&(n=M.requestAnimationFrame||wa),n(function(){var r=ji(),i=Xe.begin("mutate");e.map(r),i(),a()})}}var Je=!1;function Ia(){Je=!0}function Qe(){Je=!1}var ye=null;function Pa(e){if(gt&&g.observeMutations){var t=e.treeCallback,a=t===void 0?pe:t,n=e.nodeCallback,r=n===void 0?pe:n,i=e.pseudoElementsCallback,o=i===void 0?pe:i,s=e.observeMutationsRoot,f=s===void 0?k:s;ye=new gt(function(c){if(!Je){var d=B();G(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ka(h.addedNodes[0])&&(g.searchPseudoElements&&o(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&g.searchPseudoElements&&o([h.target],!0),h.type==="attributes"&&ka(h.target)&&~Hr.indexOf(h.attributeName))if(h.attributeName==="class"&&Fi(h.target)){var b=he(De(h.target)),y=b.prefix,w=b.iconName;h.target.setAttribute(_e,y||d),w&&h.target.setAttribute(Ce,w)}else $i(h.target)&&r(h.target)})}}),D&&ye.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zi(){ye&&ye.disconnect()}function Mi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function Bi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=he(De(e));return r.prefix||(r.prefix=B()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=ui(r.prefix,e.innerText)||We(r.prefix,na(e.innerText))),!r.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ri(e){var t=G(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function Wi(){return{iconName:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Bi(e),n=a.iconName,r=a.prefix,i=a.rest,o=Ri(e),s=Ue("parseNodeAttributes",{},e),f=t.styleParser?Mi(e):[];return u({iconName:n,prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ui=F.styles;function Oa(e){var t=g.autoReplaceSvg==="nest"?Ea(e,{styleParser:!1}):Ea(e);return~t.extra.classes.indexOf(qt)?R("generateLayersText",e,t):R("generateSvgReplacementMutation",e,t)}function Vi(){return[].concat(N(Dt),N(Mt))}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=k.documentElement.classList,n=function(h){return a.add("".concat(Ut,"-").concat(h))},r=function(h){return a.remove("".concat(Ut,"-").concat(h))},i=g.autoFetchSvg?Vi():yt.concat(Object.keys(Ui));i.includes("fa")||i.push("fa");var o=[".".concat(qt,":not([").concat(W,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(W,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=G(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var f=Xe.begin("onTree"),c=s.reduce(function(d,h){try{var b=Oa(h);b&&d.push(b)}catch(y){Yt||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise(function(d,h){Promise.all(c).then(function(b){Aa(b,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),f(),d()})}).catch(function(b){f(),h(b)})})}function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Oa(e).then(function(a){a&&Aa([a],t)})}function Hi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ve(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ve(r||{})),e(n,u(u({},a),{},{mask:r}))}}var Gi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?j:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,d=c===void 0?null:c,h=a.classes,b=h===void 0?[]:h,y=a.attributes,w=y===void 0?{}:y,x=a.styles,A=x===void 0?{}:x;if(t){var m=t.prefix,p=t.iconName,S=t.icon;return ge(u({type:"icon"},t),function(){return V("beforeDOMElementCreation",{iconDefinition:t,params:a}),Ye({icons:{main:Ge(S),mask:f?Ge(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:u(u({},j),r),symbol:o,maskId:d,extra:{attributes:w,styles:A,classes:b}})})}},qi={mixout:function(){return{icon:Hi(Gi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=_a,a.nodeCallback=Yi,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?k:n,i=a.callback,o=i===void 0?function(){}:i;return _a(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,f=n.mask,c=n.maskId,d=n.extra;return new Promise(function(h,b){Promise.all([qe(r,i),f.iconName?qe(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=se(y,2),x=w[0],A=w[1];h([a,Ye({icons:{main:x,mask:A},prefix:i,iconName:r,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=ce(s);f.length>0&&(r.style=f);var c;return Le(o)&&(c=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},Ki={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return ge({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(N(i)).join(" ")},children:o}]})}}}},Xi={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,s=o===void 0?{}:o,f=n.styles,c=f===void 0?{}:f;return ge({type:"counter",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:n}),Oi({content:a.toString(),extra:{attributes:s,styles:c,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(N(i))}})})}}}},Ji={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?j:r,o=n.classes,s=o===void 0?[]:o,f=n.attributes,c=f===void 0?{}:f,d=n.styles,h=d===void 0?{}:d;return ge({type:"text",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:n}),ya({content:a,transform:u(u({},j),i),extra:{attributes:c,styles:h,classes:["".concat(g.cssPrefix,"-layers-text")].concat(N(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(pt){var f=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();o=c.width/f,s=c.height/f}return Promise.resolve([a,ya({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Ca=new RegExp('"',"ug"),Na=[1105920,1112319],Fa=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),$n),zr),Wn),Ze=Object.keys(Fa).reduce(function(e,t){return e[t.toLowerCase()]=Fa[t],e},{}),Qi=Object.keys(Ze).reduce(function(e,t){var a=Ze[t];return e[t]=a[900]||N(Object.entries(a))[0][1],e},{});function Zi(e){var t=e.replace(Ca,"");return na(N(t)[0]||"")}function eo(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Ca,""),r=n.codePointAt(0),i=r>=Na[0]&&r<=Na[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function to(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(Ze[a]||{})[r]||Qi[a]}function $a(e,t){var a="".concat(Mr).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=G(e.children),o=i.filter(function(X){return X.getAttribute(Oe)===t})[0],s=M.getComputedStyle(e,t),f=s.getPropertyValue("font-family"),c=f.match(Vr),d=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),n();if(c&&h!=="none"&&h!==""){var b=s.getPropertyValue("content"),y=to(f,d),w=Zi(b),x=c[0].startsWith("FontAwesome"),A=eo(s),m=We(y,w),p=m;if(x){var S=ci(w);S.iconName&&S.prefix&&(m=S.iconName,y=S.prefix)}if(m&&!A&&(!o||o.getAttribute(_e)!==y||o.getAttribute(Ce)!==p)){e.setAttribute(a,p),o&&e.removeChild(o);var O=Wi(),_=O.extra;_.attributes[Oe]=t,qe(m,y).then(function(X){var ie=Ye(u(u({},O),{},{icons:{main:X,mask:ma()},prefix:y,iconName:p,extra:_,watchable:!0})),it=k.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(it,e.firstChild):e.appendChild(it),it.outerHTML=ie.map(function(ts){return te(ts)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function ao(e){return Promise.all([$a(e,"::before"),$a(e,"::after")])}function no(e){return e.parentNode!==document.head&&!~Rr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var ro=function(t){return!!t&&Vt.some(function(a){return t.includes(a)})},io=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(f){return f.trim()});n=n.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(c){return c.trim()})});var r=oe(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(ro(o)){var s=Vt.reduce(function(f,c){return f.replace(c,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(f){r.e(f)}finally{r.f()}return a};function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(t)a=e;else if(g.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=oe(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=oe(o.cssRules),f;try{for(s.s();!(f=s.n()).done;){var c=f.value,d=io(c.selectorText),h=oe(d),b;try{for(h.s();!(b=h.n()).done;){var y=b.value;n.add(y)}}catch(x){h.e(x)}finally{h.f()}}}catch(x){s.e(x)}finally{s.f()}}catch(x){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(x.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(x){r.e(x)}finally{r.f()}if(!n.size)return;var w=Array.from(n).join(", ");try{a=e.querySelectorAll(w)}catch{}}return new Promise(function(x,A){var m=G(a).filter(no).map(ao),p=Xe.begin("searchPseudoElements");Ia(),Promise.all(m).then(function(){p(),Qe(),x()}).catch(function(){p(),Qe(),A()})})}}var oo={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ja,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?k:n;g.searchPseudoElements&&ja(r)}}},Ta=!1,so={mixout:function(){return{dom:{unwatch:function(){Ia(),Ta=!0}}}},hooks:function(){return{bootstrap:function(){Pa(Ue("mutationObserverCallbacks",{}))},noAuto:function(){zi()},watch:function(a){var n=a.observeMutationsRoot;Ta?Qe():Pa(Ue("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Da=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},lo={mixout:function(){return{parse:{transform:function(a){return Da(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Da(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(f," ").concat(c," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:h,path:b};return{tag:"g",attributes:u({},y.outer),children:[{tag:"g",attributes:u({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),y.path)}]}]}}}},et={x:0,y:0,width:"100%",height:"100%"};function La(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fo(e){return e.tag==="g"?e.children:[e]}var uo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?he(r.split(" ").map(function(o){return o.trim()})):ma();return i.prefix||(i.prefix=B()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,d=i.icon,h=o.width,b=o.icon,y=ti({transform:f,containerWidth:h,iconWidth:c}),w={tag:"rect",attributes:u(u({},et),{},{fill:"white"})},x=d.children?{children:d.children.map(La)}:{},A={tag:"g",attributes:u({},y.inner),children:[La(u({tag:d.tag,attributes:u(u({},d.attributes),y.path)},x))]},m={tag:"g",attributes:u({},y.outer),children:[A]},p="mask-".concat(s||Xt()),S="clip-".concat(s||Xt()),O={tag:"mask",attributes:u(u({},et),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:fo(b)},O]};return n.push(_,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(p,")")},et)}),{children:n,attributes:r}}}},co={provides:function(t){var a=!1;M.matchMedia&&(a=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},mo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},ho=[ri,qi,Ki,Xi,Ji,oo,so,lo,uo,co,mo];xi(ho,{mixoutsTo:C}),C.noAuto;var za=C.config;C.library,C.dom;var be=C.parse;C.findIconDefinition,C.toHtml;var go=C.icon;C.layer;var po=C.text;C.counter;function tt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function vo(e){if(Array.isArray(e))return tt(e)}function E(e,t,a){return(t=wo(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function yo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ma(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ma(Object(a),!0).forEach(function(n){E(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ma(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function xo(e,t){if(e==null)return{};var a,n,r=ko(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ko(e,t){if(e==null)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;a[n]=e[n]}return a}function at(e){return vo(e)||yo(e)||Ao(e)||bo()}function So(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wo(e){var t=So(e,"string");return typeof t=="symbol"?t:t+""}function xe(e){"@babel/helpers - typeof";return xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(e)}function Ao(e,t){if(e){if(typeof e=="string")return tt(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?tt(e,t):void 0}}function re(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?E({},e,t):{}}function Io(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},E(E(E(E(E(E(E(E(E(E(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),E(E(E(E(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(a).map(function(n){return a[n]?n:null}).filter(function(n){return n})}var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ba={exports:{}};(function(e){(function(t){var a=function(m,p,S){if(!c(p)||h(p)||b(p)||y(p)||f(p))return p;var O,_=0,X=0;if(d(p))for(O=[],X=p.length;_<X;_++)O.push(a(m,p[_],S));else{O={};for(var ie in p)Object.prototype.hasOwnProperty.call(p,ie)&&(O[m(ie,S)]=a(m,p[ie],S))}return O},n=function(m,p){p=p||{};var S=p.separator||"_",O=p.split||/(?=[A-Z])/;return m.split(O).join(S)},r=function(m){return w(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,S){return S?S.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(m,p){return n(m,p).toLowerCase()},s=Object.prototype.toString,f=function(m){return typeof m=="function"},c=function(m){return m===Object(m)},d=function(m){return s.call(m)=="[object Array]"},h=function(m){return s.call(m)=="[object Date]"},b=function(m){return s.call(m)=="[object RegExp]"},y=function(m){return s.call(m)=="[object Boolean]"},w=function(m){return m=m-0,m===m},x=function(m,p){var S=p&&"process"in p?p.process:p;return typeof S!="function"?m:function(O,_){return S(O,m,_)}},A={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,p){return a(x(r,p),m)},decamelizeKeys:function(m,p){return a(x(o,p),m,p)},pascalizeKeys:function(m,p){return a(x(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(Po)})(Ba);var Eo=Ba.exports,Oo=["class","style"];function _o(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=Eo.camelize(a.slice(0,n)),i=a.slice(n+1).trim();return t[r]=i,t},{})}function Co(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(f){return nt(f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var d=e.attributes[c];switch(c){case"class":f.class=Co(d);break;case"style":f.style=_o(d);break;default:f.attrs[c]=d}return f},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=xo(a,Oo);return l.h(e.tag,$($($({},t),{},{class:r.class,style:$($({},r.style),o)},r.attrs),s),n)}var Ra=!1;try{Ra=process.env.NODE_ENV==="production"}catch{}function No(){if(!Ra&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wa(e){if(e&&xe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(be.icon)return be.icon(e);if(e===null)return null;if(xe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Fo=l.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,a){var n=a.attrs,r=l.computed(function(){return Wa(t.icon)}),i=l.computed(function(){return re("classes",Io(t))}),o=l.computed(function(){return re("transform",typeof t.transform=="string"?be.transform(t.transform):t.transform)}),s=l.computed(function(){return re("mask",Wa(t.mask))}),f=l.computed(function(){var d=$($($($({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return d.title=t.title,d.titleId=t.titleId,go(r.value,d)});l.watch(f,function(d){if(!d)return No("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=l.computed(function(){return f.value?nt(f.value.abstract[0],{},n):null});return function(){return c.value}}});l.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,a){var n=a.slots,r=za.familyPrefix,i=l.computed(function(){return["".concat(r,"-layers")].concat(at(t.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return l.h("div",{class:i.value},n.default?n.default():[])}}}),l.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,a){var n=a.attrs,r=za.familyPrefix,i=l.computed(function(){return re("classes",[].concat(at(t.counter?["".concat(r,"-layers-counter")]:[]),at(t.position?["".concat(r,"-layers-").concat(t.position)]:[])))}),o=l.computed(function(){return re("transform",typeof t.transform=="string"?be.transform(t.transform):t.transform)}),s=l.computed(function(){var c=po(t.value.toString(),$($({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),f=l.computed(function(){return nt(s.value,{},n)});return function(){return f.value}}});const $o=["disabled"],jo={key:0},To={key:1},Ua=T({__name:"Button",props:{label:{type:String,default:"Button"},color:{type:String,default:"primary"},disabled:{type:Boolean,required:!1},rounded:{type:Boolean,required:!1},outlined:{type:Boolean,required:!1},icon:{type:String,required:!1},size:{type:String,default:"normal"}},setup(e){return(t,a)=>(l.openBlock(),l.createElementBlock("button",{class:l.normalizeClass(["btn",`btn_${e.color}`,{btn_rounded:e.rounded},{btn_outlined:e.outlined},{btn_icon:e.icon},`btn_${e.size}`]),disabled:e.disabled},[e.icon?(l.openBlock(),l.createElementBlock("span",jo,[l.createVNode(l.unref(Fo),{icon:`fa-regular fa-${e.icon}`},null,8,["icon"])])):(l.openBlock(),l.createElementBlock("span",To,l.toDisplayString(e.label),1))],10,$o))}},[["__scopeId","data-v-e9b378bc"]]),Do=["name","id","value","checked","disabled"],Lo=["for"],zo=["for"],rt=T({__name:"Checkbox",props:{name:{type:String,default:""},id:{type:String,default:""},value:{type:String,default:""},label:{type:String,default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},group:{type:Boolean,default:!1},type:{type:String,default:"checkbox"}},emits:["update:checked","updateCheckboxGroup"],setup(e,{emit:t}){const a=t,n=e,r=i=>{n.group?a("updateCheckboxGroup",{optionId:n.id,checked:i.target.checked}):a("update:checked",i.target.checked)};return(i,o)=>(l.openBlock(),l.createElementBlock("div",{class:l.normalizeClass([{"switch-container":e.type==="switch"}])},[l.createElementVNode("input",{class:l.normalizeClass([{checkbox:e.type==="checkbox"},{switch:e.type==="switch"}]),type:"checkbox",name:e.name,id:e.id,value:e.value,checked:e.checked,disabled:e.disabled,onInput:o[0]||(o[0]=s=>r(s))},null,42,Do),l.createElementVNode("label",{for:e.id},l.toDisplayString(e.label),9,Lo),e.type==="switch"?(l.openBlock(),l.createElementBlock("label",{key:0,for:e.id,class:"switch__label"},l.toDisplayString(e.label),9,zo)):l.createCommentVNode("",!0)],2))}},[["__scopeId","data-v-53367525"]]),Va={__name:"CheckboxGroup",props:{value:{type:Array,required:!0},name:{type:String,required:!0},options:{type:Array,required:!0,validator:e=>{const t=e.every(n=>Object.keys(n).includes("name")),a=e.every(n=>Object.keys(n).includes("id"));return t&&a}}},emits:["update:value"],setup(e,{emit:t}){const a=t,n=e,r=i=>{let o=[...n.value];console.log(i),i.checked?o.push(i.optionId):o.splice(o.indexOf(i.optionId),1),console.log(o),a("update:value",o)};return(i,o)=>(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(e.options,s=>(l.openBlock(),l.createElementBlock("div",{key:s.id},[l.createVNode(rt,{label:s.name,id:s.id,name:e.name,value:s.name,checked:e.value.includes(s.id),group:"",onUpdateCheckboxGroup:r},null,8,["label","id","name","value","checked"])]))),128))}},Mo=["type","name","id","placeholder","value","label"],Bo=["for"],Ro={class:"form-error__message"},Ya=T({__name:"Input",props:{error:{type:Array,required:!1},value:{type:String,default:""},name:{type:String,required:!0},type:{type:String,default:"text"},label:{type:String,required:!0},width:{type:String,default:"300px"},placeholder:{type:String,default:""}},emits:["update:value"],setup(e,{emit:t}){const a=t,n=r=>{a("update:value",r.target.value)};return(r,i)=>(l.openBlock(),l.createElementBlock("div",{class:"form-input",style:l.normalizeStyle({width:e.width})},[l.createElementVNode("input",{class:"input-text",type:e.type,name:e.name,id:e.name,placeholder:e.placeholder,value:e.value,label:e.label,onInput:n},null,40,Mo),l.createElementVNode("label",{for:e.name,class:"input-label"},l.toDisplayString(e.label),9,Bo),l.createVNode(l.TransitionGroup,null,{default:l.withCtx(()=>[(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(e.error,o=>(l.openBlock(),l.createElementBlock("div",{class:"form-error",key:o.$uid},[l.createElementVNode("div",Ro,l.toDisplayString(o.$message),1)]))),128))]),_:1})],4))}},[["__scopeId","data-v-4433ef87"]]),Ha=T({__name:"ProgressBar",props:{maxWidth:{type:String,default:"300px"},percent:{type:Number,required:!0},color:{type:String,default:"primary"}},setup(e){return(t,a)=>(l.openBlock(),l.createElementBlock("div",{class:"progress-container",style:l.normalizeStyle([{"max-width":e.maxWidth}])},[l.createElementVNode("span",{class:"progress-percent",style:l.normalizeStyle({color:`var(--${e.color})`})},l.toDisplayString(e.percent)+"%",5),l.createElementVNode("div",{class:"progress",style:l.normalizeStyle({background:`var(--${e.color}-hover)`})},[l.createElementVNode("div",{class:"progress-bar",style:l.normalizeStyle([{width:`${e.percent}%`},{background:`var(--${e.color})`}])},null,4)],4)],4))}},[["__scopeId","data-v-6b4ad0e8"]]),Wo={class:"progress-circle"},Uo={width:"120",height:"120",viewBox:"0 0 120 120",class:"progress-circle-svg"},Vo=["stroke"],Yo=["stroke"],Ga=T({__name:"ProgressCircle",props:{percent:{type:Number,required:!0},color:{type:String,default:"primary"}},setup(e){return(t,a)=>(l.openBlock(),l.createElementBlock("div",Wo,[l.createElementVNode("span",{class:"progress-circle-percent",style:l.normalizeStyle([{color:`var(--${e.color})`}])},l.toDisplayString(e.percent)+"%",5),(l.openBlock(),l.createElementBlock("svg",Uo,[l.createElementVNode("circle",{cx:"60",cy:"60",r:"54",fill:"none",stroke:`var(--${e.color}-hover)`,"stroke-width":"12"},null,8,Vo),l.createElementVNode("circle",{class:"progress-circle-line",style:l.normalizeStyle([{"stroke-dashoffset":`calc(100 - ${e.percent})`}]),cx:"60",cy:"60",r:"54",fill:"none",stroke:`var(--${e.color})`,"stroke-width":"12",pathLength:"100"},null,12,Yo)]))]))}},[["__scopeId","data-v-6e50d1c8"]]),Ho=["name","id","value","checked","disabled"],Go=["for"],qa=T({__name:"Radiobutton",props:{name:{type:String,default:""},id:{type:String,default:""},value:{type:String,default:""},label:{type:String,default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},group:{type:Boolean,default:!1},checkedValue:{type:[String,Number,Boolean],default:""}},emits:["update:checkedValue"],setup(e,{emit:t}){const a=t,n=r=>{a("update:checkedValue",r.target.value)};return(r,i)=>(l.openBlock(),l.createElementBlock(l.Fragment,null,[l.createElementVNode("input",{class:"radiobutton",type:"radio",name:e.name,id:e.id,value:e.value,checked:e.checked,disabled:e.disabled,onInput:i[0]||(i[0]=o=>n(o))},null,40,Ho),l.createElementVNode("label",{for:e.id},l.toDisplayString(e.label),9,Go)],64))}},[["__scopeId","data-v-bd3d3168"]]),qo={class:"table-wrapper"},Ko={class:"table"},Xo=["onClick"],Ka=T({__name:"BaseTable",props:{head:{type:Array,required:!1},columnTemplates:{type:String,required:!1}},emits:["sorting"],setup(e,{emit:t}){const a=t,n=r=>{a("sorting",r.toLowerCase())};return(r,i)=>(l.openBlock(),l.createElementBlock("div",qo,[l.createElementVNode("div",Ko,[l.createElementVNode("div",{class:"table-head",style:l.normalizeStyle({"grid-template-columns":e.columnTemplates})},[(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(e.head,(o,s)=>(l.openBlock(),l.createElementBlock("div",{class:"table-head__name",key:s,onClick:f=>n(o)},l.toDisplayString(o),9,Xo))),128))],4),l.renderSlot(r.$slots,"default",{},void 0,!0)])]))}},[["__scopeId","data-v-e730b882"]]),Jo={class:"tab-nav"},Qo=["onClick"],Zo={class:"tab-content"},Xa=T({__name:"Tabs",props:{names:{type:Array,required:!0},selectedTab:{type:String,required:!1}},emits:["changeTab"],setup(e,{emit:t}){const a=t;return(n,r)=>(l.openBlock(),l.createElementBlock(l.Fragment,null,[l.createElementVNode("div",Jo,[(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(e.names,i=>(l.openBlock(),l.createElementBlock("span",{class:l.normalizeClass(["tab-nav__item",{selected:i.name===e.selectedTab}]),key:i.name,onClick:o=>a("changeTab",i.name)},l.toDisplayString(i.label),11,Qo))),128))]),l.createElementVNode("div",Zo,[l.renderSlot(n.$slots,"default",{},void 0,!0)])],64))}},[["__scopeId","data-v-f099f506"]]),es={install:(e,t)=>{console.log("Installing UI Kit..."),e.component("Accordion",ot),e.component("Button",Ua),e.component("Checkbox",rt),e.component("CheckboxGroup",Va),e.component("Input",Ya),e.component("ProgressBar",Ha),e.component("ProgressCircle",Ga),e.component("Radiobutton",qa),e.component("BaseTable",Ka),e.component("Tabs",Xa),console.log("Components registered")}};I.Accordion=ot,I.BaseTable=Ka,I.Button=Ua,I.Checkbox=rt,I.CheckboxGroup=Va,I.Input=Ya,I.ProgressBar=Ha,I.ProgressCircle=Ga,I.Radiobutton=qa,I.Tabs=Xa,I.default=es,Object.defineProperties(I,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
