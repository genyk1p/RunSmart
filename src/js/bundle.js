(()=>{"use strict";var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function l(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var s=document.documentElement;function c(t){var e="";return t.fake&&(e=s.style.overflow,t.style.background="",t.style.overflow=s.style.overflow="hidden",s.appendChild(t)),e}function u(t,e){t.fake&&(t.remove(),s.style.overflow=e,s.offsetHeight)}function d(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function f(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},g=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function y(t,e){return t.hasAttribute(e)}function b(t,e){return t.getAttribute(e)}function x(t){return void 0!==t.item}function w(t,e){if(t=x(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=x(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function _(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var S=!1;try{var N=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("test",null,N)}catch(t){}var k=!!S&&{passive:!0};function B(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&k;t.addEventListener(i,e[i],a)}}function H(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&k;t.removeEventListener(n,e[n],i)}}function O(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var D=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,s=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},x={},S=t.useLocalStorage;if(S){var N=navigator.userAgent,k=new Date;try{(x=s.localStorage)?(x.setItem(k,k),S=x.getItem(k)==k,x.removeItem(k)):S=!1,S||(x={})}catch(t){S=!1}S&&(x.tnsApp&&x.tnsApp!==N&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){x.removeItem(t)})),localStorage.tnsApp=N)}var P=x.tC?r(x.tC):o(x,"tC",function(){var t=document,e=l(),n=c(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],d=0;d<3;d++)if(r=s[d],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?u(e,n):i.remove(),a}(),S),I=x.tPL?r(x.tPL):o(x,"tPL",function(){var t,e=document,n=l(),i=c(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?u(n,i):a.remove(),t}(),S),R=x.tMQ?r(x.tMQ):o(x,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=l(),i=c(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?u(n,i):a.remove(),"absolute"===t}(),S),z=x.tTf?r(x.tTf):o(x,"tTf",A("transform"),S),W=x.t3D?r(x.t3D):o(x,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=l(),a=c(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?u(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(z),S),q=x.tTDu?r(x.tTDu):o(x,"tTDu",A("transitionDuration"),S),F=x.tTDe?r(x.tTDe):o(x,"tTDe",A("transitionDelay"),S),j=x.tADu?r(x.tADu):o(x,"tADu",A("animationDuration"),S),$=x.tADe?r(x.tADe):o(x,"tADe",A("animationDelay"),S),V=x.tTE?r(x.tTE):o(x,"tTE",_(q,"Transition"),S),G=x.tAE?r(x.tAE):o(x,"tAE",_(j,"Animation"),S),Q=s.console&&"function"==typeof s.console.warn,X=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Y={};if(X.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(Y[e]=i,!a||!a.nodeName)return void(Q&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var K=t.responsive,U=t.nested,J="carousel"===t.mode;if(K){0 in K&&(t=a(t,K[0]),delete K[0]);var Z={};for(var tt in K){var et=K[tt];et="number"==typeof et?{items:et}:et,Z[tt]=et}K=Z,Z=null}if(J||function t(e){for(var n in e)J||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!J){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,lt,st="horizontal"===t.axis,ct=n.createElement("div"),ut=n.createElement("div"),dt=t.container,ft=dt.parentNode,vt=dt.outerHTML,pt=dt.children,ht=pt.length,mt=Bn(),gt=!1;K&&Zn(),J&&(dt.className+=" tns-vpfix");var yt,bt,xt,wt,Ct,Mt,Tt,Et,Lt=t.autoWidth,At=In("fixedWidth"),_t=In("edgePadding"),St=In("gutter"),Nt=Dn(),kt=In("center"),Bt=Lt?1:Math.floor(In("items")),Ht=In("slideBy"),Ot=t.viewportMax||t.fixedWidthViewportWidth,Dt=In("arrowKeys"),Pt=In("speed"),It=t.rewind,Rt=!It&&t.loop,zt=In("autoHeight"),Wt=In("controls"),qt=In("controlsText"),Ft=In("nav"),jt=In("touch"),$t=In("mouseDrag"),Vt=In("autoplay"),Gt=In("autoplayTimeout"),Qt=In("autoplayText"),Xt=In("autoplayHoverPause"),Yt=In("autoplayResetOnVisibility"),Kt=(null,Tt=In("nonce"),Et=document.createElement("style"),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Ut=t.lazyload,Jt=t.lazyloadSelector,Zt=[],te=Rt?(Ct=function(){if(Lt||At&&!Ot)return ht-1;var e=At?"fixedWidth":"items",n=[];if((At||t[e]<ht)&&n.push(t[e]),K)for(var i in K){var a=K[i][e];a&&(At||a<ht)&&n.push(a)}return n.length||n.push(0),Math.ceil(At?Ot/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=J?Math.ceil((5*Ct-ht)/2):4*Ct-ht,Mt=Math.max(Ct,Mt),Pn("edgePadding")?Mt+1:Mt):0,ee=J?ht+2*te:ht+te,ne=!(!At&&!Lt||Rt),ie=At?Ei():null,ae=!J||!Rt,re=st?"left":"top",oe="",le="",se=At?function(){return kt&&!Rt?ht-1:Math.ceil(-ie/(At+St))}:Lt?function(){for(var t=0;t<ee;t++)if(yt[t]>=-ie)return t}:function(){return kt&&J&&!Rt?ht-1:Rt||J?Math.max(0,ee-Math.ceil(Bt)):ee-1},ce=Sn(In("startIndex")),ue=ce,de=(_n(),0),fe=Lt?null:se(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,he=!pe||"?",me=!1,ge=t.onInit,ye=new O,be=" tns-slider tns-"+t.mode,xe=dt.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),we=In("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||Lt)&&Jn(),Ee=!1,Le={click:Oi,keydown:function(t){t=Fi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Xe.disabled||Oi(t,-1):Ye.disabled||Oi(t,1))}},Ae={click:function(t){if(me){if(ve)return;Bi()}for(var e=ji(t=Fi(t));e!==Ze&&!y(e,"data-nav");)e=e.parentNode;if(y(e,"data-nav")){var n=an=Number(b(e,"data-nav")),i=At||Lt?n*ht/en:n*Bt;Hi(De?n:Math.min(Math.ceil(i),ht-1),t),rn===n&&(dn&&zi(),an=-1)}},keydown:function(t){t=Fi(t);var e=n.activeElement;if(y(e,"data-nav")){var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(b(e,"data-nav"));i>=0&&(0===i?a>0&&qi(Je[a-1]):1===i?a<en-1&&qi(Je[a+1]):(an=a,Hi(a,t)))}}},_e={mouseover:function(){dn&&(Pi(),fn=!0)},mouseout:function(){fn&&(Di(),fn=!1)}},Se={visibilitychange:function(){n.hidden?dn&&(Pi(),pn=!0):pn&&(Di(),pn=!1)}},Ne={keydown:function(t){t=Fi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Oi(t,0===e?-1:1)}},ke={touchstart:Qi,touchmove:Xi,touchend:Ki,touchcancel:Ki},Be={mousedown:Qi,mousemove:Xi,mouseup:Ki,mouseleave:Ki},He=Pn("controls"),Oe=Pn("nav"),De=!!Lt||t.navAsThumbnails,Pe=Pn("autoplay"),Ie=Pn("touch"),Re=Pn("mouseDrag"),ze="tns-slide-active",We="tns-slide-cloned",qe="tns-complete",Fe={load:function(t){si(ji(t))},error:function(t){var e;e=ji(t),m(e,"failed"),ci(e)}},je="force"===t.preventScrollOnTouch;if(He)var $e,Ve,Ge=t.controlsContainer,Qe=t.controlsContainer?t.controlsContainer.outerHTML:"",Xe=t.prevButton,Ye=t.nextButton,Ke=t.prevButton?t.prevButton.outerHTML:"",Ue=t.nextButton?t.nextButton.outerHTML:"";if(Oe)var Je,Ze=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Lt?ht:Ji(),nn=0,an=-1,rn=kn(),on=rn,ln="tns-nav-active",sn="Carousel Page ",cn=" (Current Slide)";if(Pe)var un,dn,fn,vn,pn,hn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",yn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ie||Re)var bn,xn,wn={},Cn={},Mn=!1,Tn=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Lt||An(we||Te),z&&(re=z,oe="translate",W?(oe+=st?"3d(":"3d(0px, ",le=st?", 0px, 0px)":", 0px)"):(oe+=st?"X(":"Y(",le=")")),J&&(dt.className=dt.className.replace("tns-vpfix","")),function(){if(Pn("gutter"),ct.className="tns-outer",ut.className="tns-inner",ct.id=xe+"-ow",ut.id=xe+"-iw",""===dt.id&&(dt.id=xe),be+=I||Lt?" tns-subpixel":" tns-no-subpixel",be+=P?" tns-calc":" tns-no-calc",Lt&&(be+=" tns-autowidth"),be+=" tns-"+t.axis,dt.className+=be,J?((ot=n.createElement("div")).id=xe+"-mw",ot.className="tns-ovh",ct.appendChild(ot),ot.appendChild(ut)):ct.appendChild(ut),zt&&((ot||ut).className+=" tns-ah"),ft.insertBefore(ct,dt),ut.appendChild(dt),v(pt,(function(t,e){m(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!J&&rt&&m(t,rt),w(t,{"aria-hidden":"true",tabindex:"-1"})})),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var r=a%ht,o=pt[r].cloneNode(!0);if(m(o,We),C(o,"id"),i.insertBefore(o,i.firstChild),J){var l=pt[ht-1-r].cloneNode(!0);m(l,We),C(l,"id"),e.appendChild(l)}}dt.insertBefore(e,dt.firstChild),dt.appendChild(i),pt=dt.children}}(),function(){if(!J)for(var e=ce,n=ce+Math.min(ht,Bt);e<n;e++){var i=pt[e];i.style.left=100*(e-ce)/Bt+"%",m(i,nt),g(i,rt)}if(st&&(I||Lt?(d(Kt,"#"+xe+" > .tns-item","font-size:"+s.getComputedStyle(pt[0]).fontSize+";",f(Kt)),d(Kt,"#"+xe,"font-size:0;",f(Kt))):J&&v(pt,(function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}))),R){if(q){var a=ot&&t.autoHeight?jn(t.speed):"";d(Kt,"#"+xe+"-mw",a,f(Kt))}a=Rn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),d(Kt,"#"+xe+"-iw",a,f(Kt)),J&&(a=st&&!Lt?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",q&&(a+=jn(Pt)),d(Kt,"#"+xe,a,f(Kt))),a=st&&!Lt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=qn(t.gutter)),J||(q&&(a+=jn(Pt)),j&&(a+=$n(Pt))),a&&d(Kt,"#"+xe+" > .tns-item",a,f(Kt))}else J&&zt&&(ot.style[q]=Pt/1e3+"s"),ut.style.cssText=Rn(_t,St,At,zt),J&&st&&!Lt&&(dt.style.width=zn(At,St,Bt)),a=st&&!Lt?Wn(At,St,Bt):"",St&&(a+=qn(St)),a&&d(Kt,"#"+xe+" > .tns-item",a,f(Kt));if(K&&R)for(var r in K){r=parseInt(r);var o=K[r],l=(a="",""),c="",u="",p="",h=Lt?null:In("items",r),y=In("fixedWidth",r),b=In("speed",r),x=In("edgePadding",r),w=In("autoHeight",r),C=In("gutter",r);q&&ot&&In("autoHeight",r)&&"speed"in o&&(l="#"+xe+"-mw{"+jn(b)+"}"),("edgePadding"in o||"gutter"in o)&&(c="#"+xe+"-iw{"+Rn(x,C,y,b,w)+"}"),J&&st&&!Lt&&("fixedWidth"in o||"items"in o||At&&"gutter"in o)&&(u="width:"+zn(y,C,h)+";"),q&&"speed"in o&&(u+=jn(b)),u&&(u="#"+xe+"{"+u+"}"),("fixedWidth"in o||At&&"gutter"in o||!J&&"items"in o)&&(p+=Wn(y,C,h)),"gutter"in o&&(p+=qn(C)),!J&&"speed"in o&&(q&&(p+=jn(b)),j&&(p+=$n(b))),p&&(p="#"+xe+" > .tns-item{"+p+"}"),(a=l+c+u+p)&&Kt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Kt.cssRules.length)}}(),Vn();var En=Rt?J?function(){var t=de,e=fe;t+=Ht,e-=Ht,_t?(t+=1,e-=1):At&&(Nt+St)%(At+St)&&(e-=1),te&&(ce>e?ce-=ht:ce<t&&(ce+=ht))}:function(){if(ce>fe)for(;ce>=de+ht;)ce-=ht;else if(ce<de)for(;ce<=fe-ht;)ce+=ht}:function(){ce=Math.max(de,Math.min(fe,ce))},Ln=J?function(){var t,e,n,i,a,r,o,l,s,c,u;Mi(dt,""),q||!Pt?(_i(),Pt&&L(dt)||Bi()):(t=dt,e=re,n=oe,i=le,a=Li(),r=Pt,o=Bi,l=Math.min(r,10),s=a.indexOf("%")>=0?"%":"px",a=a.replace(s,""),c=Number(t.style[e].replace(n,"").replace(i,"").replace(s,"")),u=(a-c)/r*l,setTimeout((function a(){r-=l,c+=u,t.style[e]=n+c+s+i,r>0?setTimeout(a,l):o()}),l)),st||Ui()}:function(){Zt=[];var t={};t[V]=t[G]=Bi,H(pt[ue],t),B(pt[ce],t),Si(ue,nt,it,!0),Si(ce,rt,nt),V&&G&&Pt&&L(dt)||Bi()};return{version:"2.9.4",getInfo:ta,events:ye,goTo:Hi,play:function(){Vt&&!dn&&(Ri(),vn=!1)},pause:function(){dn&&(zi(),vn=!0)},isOn:gt,updateSliderHeight:hi,refresh:Vn,destroy:function(){if(Kt.disabled=!0,Kt.ownerNode&&Kt.ownerNode.remove(),H(s,{resize:Kn}),Dt&&H(n,Ne),Ge&&H(Ge,Le),Ze&&H(Ze,Ae),H(dt,_e),H(dt,Se),mn&&H(mn,{click:Wi}),Vt&&clearInterval(un),J&&V){var e={};e[V]=Bi,H(dt,e)}jt&&H(dt,ke),$t&&H(dt,Be);var i=[vt,Qe,Ke,Ue,tn,gn];for(var a in X.forEach((function(e,n){var a="container"===e?ct:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),X=nt=it=at=rt=st=ct=ut=dt=ft=vt=pt=ht=lt=mt=Lt=At=_t=St=Nt=Bt=Ht=Ot=Dt=Pt=It=Rt=zt=Kt=Ut=yt=Zt=te=ee=ne=ie=ae=re=oe=le=se=ce=ue=de=fe=pe=he=me=ge=ye=be=xe=we=Ce=Me=Te=Ee=Le=Ae=_e=Se=Ne=ke=Be=He=Oe=De=Pe=Ie=Re=ze=qe=Fe=bt=Wt=qt=Ge=Qe=Xe=Ye=$e=Ve=Ft=Ze=tn=Je=en=nn=an=rn=on=ln=sn=cn=Vt=Gt=hn=Qt=Xt=mn=gn=Yt=yn=un=dn=fn=vn=pn=wn=Cn=bn=Mn=xn=Tn=jt=$t=null,this)"rebuild"!==a&&(this[a]=null);gt=!1},rebuild:function(){return D(a(t,Y))}}}function An(t){t&&(Wt=Ft=jt=$t=Dt=Vt=Xt=Yt=!1)}function _n(){for(var t=J?ce-te:ce;t<0;)t+=ht;return t%ht+1}function Sn(t){return t=t?Math.max(0,Math.min(Rt?ht-1:ht-Bt,t)):0,J?t+te:t}function Nn(t){for(null==t&&(t=ce),J&&(t-=te);t<0;)t+=ht;return Math.floor(t%ht)}function kn(){var t,e=Nn();return t=De?e:At||Lt?Math.ceil((e+1)*en/ht-1):Math.floor(e/Bt),!Rt&&J&&ce===fe&&(t=en-1),t}function Bn(){return s.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Hn(t){return"top"===t?"afterbegin":"beforeend"}function On(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||On(t.parentNode)}}function Dn(){var t=_t?2*_t-St:0;return On(ft)-t}function Pn(e){if(t[e])return!0;if(K)for(var n in K)if(K[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=mt),"items"===e&&At)return Math.floor((Nt+St)/(At+St))||1;var i=t[e];if(K)for(var a in K)n>=parseInt(a)&&e in K[a]&&(i=K[a][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),J||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Rn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=st?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var l="-"+e+"px";r="margin: 0 "+(st?l+" 0 0":"0 "+l+" 0")+";"}return!J&&a&&q&&i&&(r+=jn(i)),r}function zn(t,e,n){return t?(t+e)*ee+"px":P?P+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{J||(n=Math.floor(n));var a=J?ee:n;i=P?P+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function qn(t){var e="";return!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;"),e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return Fn(q,18)+"transition-duration:"+t/1e3+"s;"}function $n(t){return Fn(j,17)+"animation-duration:"+t/1e3+"s;"}function Vn(){if(Pn("autoHeight")||Lt||!st){var t=dt.querySelectorAll("img");v(t,(function(t){var e=t.src;Ut||(e&&e.indexOf("data:image")<0?(t.src="",B(t,Fe),m(t,"loading"),t.src=e):si(t))})),e((function(){fi(M(t),(function(){bt=!0}))})),Pn("autoHeight")&&(t=ui(ce,Math.min(ce+Bt-1,ee-1))),Ut?Gn():e((function(){fi(M(t),Gn)}))}else J&&Ai(),Xn(),Yn()}function Gn(){if(Lt&&ht>1){var t=Rt?ce:ht-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){st&&!Lt||(mi(),Lt?(ie=Ei(),Me&&(Te=Jn()),fe=se(),An(we||Te)):Ui()),J&&Ai(),Xn(),Yn()}function Xn(){if(gi(),ct.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+ht+"</div>"),xt=ct.querySelector(".tns-liveregion .current"),Pe){var e=Vt?"stop":"start";mn?w(mn,{"data-action":e}):t.autoplayButtonOutput&&(ct.insertAdjacentHTML(Hn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+yn[0]+e+yn[1]+Qt[0]+"</button>"),mn=ct.querySelector("[data-action]")),mn&&B(mn,{click:Wi}),Vt&&(Ri(),Xt&&B(dt,_e),Yt&&B(dt,Se))}if(Oe){if(Ze)w(Ze,{"aria-label":"Carousel Pagination"}),v(Je=Ze.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":sn+(e+1),"aria-controls":xe})}));else{for(var n="",i=De?"":'style="display:none"',a=0;a<ht;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+xe+'" '+i+' aria-label="'+sn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(Hn(t.navPosition),n),Ze=ct.querySelector(".tns-nav"),Je=Ze.children}if(Zi(),q){var r=q.substring(0,q.length-18).toLowerCase(),o="transition: all "+Pt/1e3+"s";r&&(o="-"+r+"-"+o),d(Kt,"[aria-controls^="+xe+"-item]",o,f(Kt))}w(Je[rn],{"aria-label":sn+(rn+1)+cn}),C(Je[rn],"tabindex"),m(Je[rn],ln),B(Ze,Ae)}He&&(Ge||Xe&&Ye||(ct.insertAdjacentHTML(Hn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+qt[1]+"</button></div>"),Ge=ct.querySelector(".tns-controls")),Xe&&Ye||(Xe=Ge.children[0],Ye=Ge.children[1]),t.controlsContainer&&w(Ge,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Xe,Ye],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Xe,{"data-controls":"prev"}),w(Ye,{"data-controls":"next"})),$e=bi(Xe),Ve=bi(Ye),Ci(),Ge?B(Ge,Le):(B(Xe,Le),B(Ye,Le))),ti()}function Yn(){if(J&&V){var e={};e[V]=Bi,B(dt,e)}jt&&B(dt,ke,t.preventScrollOnTouch),$t&&B(dt,Be),Dt&&B(n,Ne),"inner"===U?ye.on("outerResized",(function(){Un(),ye.emit("innerLoaded",ta())})):(K||At||Lt||zt||!st)&&B(s,{resize:Kn}),zt&&("outer"===U?ye.on("innerLoaded",di):we||di()),li(),we?ii():Te&&ni(),ye.on("indexChanged",vi),"inner"===U&&ye.emit("innerLoaded",ta()),"function"==typeof ge&&ge(ta()),gt=!0}function Kn(t){e((function(){Un(Fi(t))}))}function Un(e){if(gt){"outer"===U&&ye.emit("outerResized",ta(e)),mt=Bn();var i,a=lt,r=!1;K&&(Zn(),(i=a!==lt)&&ye.emit("newBreakpointStart",ta(e)));var o,l,s=Bt,c=we,u=Te,p=Dt,h=Wt,y=Ft,b=jt,x=$t,w=Vt,C=Xt,M=Yt,L=ce;if(i){var A=At,_=zt,S=qt,N=kt,k=Qt;if(!R)var O=St,D=_t}if(Dt=In("arrowKeys"),Wt=In("controls"),Ft=In("nav"),jt=In("touch"),kt=In("center"),$t=In("mouseDrag"),Vt=In("autoplay"),Xt=In("autoplayHoverPause"),Yt=In("autoplayResetOnVisibility"),i&&(we=In("disable"),At=In("fixedWidth"),Pt=In("speed"),zt=In("autoHeight"),qt=In("controlsText"),Qt=In("autoplayText"),Gt=In("autoplayTimeout"),R||(_t=In("edgePadding"),St=In("gutter"))),An(we),Nt=Dn(),st&&!Lt||we||(mi(),st||(Ui(),r=!0)),(At||Lt)&&(ie=Ei(),fe=se()),(i||At)&&(Bt=In("items"),Ht=In("slideBy"),(l=Bt!==s)&&(At||Lt||(fe=se()),En())),i&&we!==c&&(we?ii():function(){if(Ce){if(Kt.disabled=!1,dt.className+=be,Ai(),Rt)for(var t=te;t--;)J&&E(pt[t]),E(pt[ee-t-1]);if(!J)for(var e=ce,n=ce+ht;e<n;e++){var i=pt[e],a=e<ce+Bt?nt:rt;i.style.left=100*(e-ce)/Bt+"%",m(i,a)}ei(),Ce=!1}}()),Me&&(i||At||Lt)&&(Te=Jn())!==u&&(Te?(_i(Li(Sn(0))),ni()):(function(){if(Ee){if(_t&&R&&(ut.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)J&&g(pt[e],t),g(pt[ee-e-1],t);ei(),Ee=!1}}(),r=!0)),An(we||Te),Vt||(Xt=Yt=!1),Dt!==p&&(Dt?B(n,Ne):H(n,Ne)),Wt!==h&&(Wt?Ge?E(Ge):(Xe&&E(Xe),Ye&&E(Ye)):Ge?T(Ge):(Xe&&T(Xe),Ye&&T(Ye))),Ft!==y&&(Ft?(E(Ze),Zi()):T(Ze)),jt!==b&&(jt?B(dt,ke,t.preventScrollOnTouch):H(dt,ke)),$t!==x&&($t?B(dt,Be):H(dt,Be)),Vt!==w&&(Vt?(mn&&E(mn),dn||vn||Ri()):(mn&&T(mn),dn&&zi())),Xt!==C&&(Xt?B(dt,_e):H(dt,_e)),Yt!==M&&(Yt?B(n,Se):H(n,Se)),i){if(At===A&&kt===N||(r=!0),zt!==_&&(zt||(ut.style.height="")),Wt&&qt!==S&&(Xe.innerHTML=qt[0],Ye.innerHTML=qt[1]),mn&&Qt!==k){var P=Vt?1:0,I=mn.innerHTML,z=I.length-k[P].length;I.substring(z)===k[P]&&(mn.innerHTML=I.substring(0,z)+Qt[P])}}else kt&&(At||Lt)&&(r=!0);if((l||At&&!Lt)&&(en=Ji(),Zi()),(o=ce!==L)?(ye.emit("indexChanged",ta()),r=!0):l?o||vi():(At||Lt)&&(li(),gi(),ai()),l&&!J&&function(){for(var t=ce+Math.min(ht,Bt),e=ee;e--;){var n=pt[e];e>=ce&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-ce)/Bt+"%",m(n,nt),g(n,rt)):n.style.left&&(n.style.left="",m(n,rt),g(n,nt)),g(n,it)}setTimeout((function(){v(pt,(function(t){g(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!R&&(_t===D&&St===O||(ut.style.cssText=Rn(_t,St,At,Pt,zt)),st)){J&&(dt.style.width=zn(At,St,Bt));var W=Wn(At,St,Bt)+qn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Kt,f(Kt)-1),d(Kt,"#"+xe+" > .tns-item",W,f(Kt))}zt&&di(),r&&(Ai(),ue=ce)}i&&ye.emit("newBreakpointEnd",ta(e))}}function Jn(){if(!At&&!Lt)return ht<=(kt?Bt-(Bt-1)/2:Bt);var t=At?(At+St)*ht:yt[ht],e=_t?Nt+2*_t:Nt+St;return kt&&(e-=At?(Nt-At)/2:(Nt-(yt[ce+1]-yt[ce]-St))/2),t<=e}function Zn(){for(var t in lt=0,K)t=parseInt(t),mt>=t&&(lt=t)}function ti(){!Vt&&mn&&T(mn),!Ft&&Ze&&T(Ze),Wt||(Ge?T(Ge):(Xe&&T(Xe),Ye&&T(Ye)))}function ei(){Vt&&mn&&E(mn),Ft&&Ze&&E(Ze),Wt&&(Ge?E(Ge):(Xe&&E(Xe),Ye&&E(Ye)))}function ni(){if(!Ee){if(_t&&(ut.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)J&&m(pt[e],t),m(pt[ee-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Kt.disabled=!0,dt.className=dt.className.replace(be.substring(1),""),C(dt,["style"]),Rt)for(var t=te;t--;)J&&T(pt[t]),T(pt[ee-t-1]);if(st&&J||C(ut,["style"]),!J)for(var e=ce,n=ce+ht;e<n;e++){var i=pt[e];C(i,["style"]),g(i,nt),g(i,rt)}ti(),Ce=!0}}function ai(){var t=ri();xt.innerHTML!==t&&(xt.innerHTML=t)}function ri(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Li());var e,n,i,a=ce;if(kt||_t?(Lt||At)&&(n=-(parseFloat(t)+_t),i=n+Nt+2*_t):Lt&&(n=yt[ce],i=n+Nt),Lt)yt.forEach((function(t,r){r<ee&&((kt||_t)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(At){var r=At+St;kt||_t?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Nt/r)-1}else if(kt||_t){var o=Bt-1;if(kt?(a-=o/2,e=ce+o/2):e=ce+o,_t){var l=_t*Bt/Nt;a-=l,e+=l}a=Math.floor(a),e=Math.ceil(e)}else e=a+Bt-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function li(){if(Ut&&!we){var t=oi();t.push(Jt),ui.apply(null,t).forEach((function(t){if(!h(t,qe)){var e={};e[V]=function(t){t.stopPropagation()},B(t,e),B(t,Fe),t.src=b(t,"data-src");var n=b(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function si(t){m(t,"loaded"),ci(t)}function ci(t){m(t,qe),g(t,"loading"),H(t,Fe)}function ui(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function di(){var t=ui.apply(null,oi());e((function(){fi(t,hi)}))}function fi(t,n){return bt?n():(t.forEach((function(e,n){!Ut&&e.complete&&ci(e),h(e,qe)&&t.splice(n,1)})),t.length?void e((function(){fi(t,n)})):n())}function vi(){li(),gi(),ai(),Ci(),function(){if(Ft&&(rn=an>=0?an:kn(),an=-1,rn!==on)){var t=Je[on],e=Je[rn];w(t,{tabindex:"-1","aria-label":sn+(on+1)}),g(t,ln),w(e,{"aria-label":sn+(rn+1)+cn}),C(e,"tabindex"),m(e,ln),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=zt?pi(ce,Bt):pi(te,ht),e=ot||ut;e.style.height!==t&&(e.style.height=t+"px")}function mi(){yt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,a){a&&yt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&yt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=oi(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?y(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),m(t,ze)):y(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),g(t,ze))}))}function yi(t){return t.nodeName.toLowerCase()}function bi(t){return"button"===yi(t)}function xi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(Wt&&!It&&!Rt){var t=$e?Xe.disabled:xi(Xe),e=Ve?Ye.disabled:xi(Ye),n=ce<=de,i=!It&&ce>=fe;n&&!t&&wi($e,Xe,!0),!n&&t&&wi($e,Xe,!1),i&&!e&&wi(Ve,Ye,!0),!i&&e&&wi(Ve,Ye,!1)}}function Mi(t,e){q&&(t.style[q]=e)}function Ti(t){return null==t&&(t=ce),Lt?(Nt-(_t?St:0)-(yt[t+1]-yt[t]-St))/2:At?(Nt-At)/2:(Bt-1)/2}function Ei(){var t=Nt+(_t?St:0)-(At?(At+St)*ee:yt[ee]);return kt&&!Rt&&(t=At?-(At+St)*(ee-1)-Ti():Ti(ee-1)-yt[ee-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=ce),st&&!Lt)if(At)e=-(At+St)*t,kt&&(e+=Ti());else{var n=z?ee:Bt;kt&&(t-=Ti()),e=100*-t/n}else e=-yt[t],kt&&Lt&&(e+=Ti());return ne&&(e=Math.max(e,ie)),e+(!st||Lt||At?"px":"%")}function Ai(t){Mi(dt,"0s"),_i(t)}function _i(t){null==t&&(t=Li()),dt.style[re]=oe+t+le}function Si(t,e,n,i){var a=t+Bt;Rt||(a=Math.min(a,ee));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-ce)/Bt+"%"),at&&F&&(o.style[F]=o.style[$]=at*(r-t)/1e3+"s"),g(o,e),m(o,n),i&&Zt.push(o)}}function Ni(t,e){ae&&En(),(ce!==ue||e)&&(ye.emit("indexChanged",ta()),ye.emit("transitionStart",ta()),zt&&di(),dn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),me=!0,Ln())}function ki(t){return t.toLowerCase().replace(/-/g,"")}function Bi(t){if(J||me){if(ye.emit("transitionEnd",ta(t)),!J&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",$&&F&&(n.style[$]="",n.style[F]=""),g(n,it),m(n,rt)}if(!t||!J&&t.target.parentNode===dt||t.target===dt&&ki(t.propertyName)===ki(re)){if(!ae){var i=ce;En(),ce!==i&&(ye.emit("indexChanged",ta()),Ai())}"inner"===U&&ye.emit("innerLoaded",ta()),me=!1,ue=ce}}}function Hi(t,e){if(!Te)if("prev"===t)Oi(e,-1);else if("next"===t)Oi(e,1);else{if(me){if(ve)return;Bi()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=J?ht-Bt-n:ht-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ht-1,t))),i=t-n)),!J&&i&&Math.abs(i)<Bt){var a=i>0?1:-1;i+=ce+i-ht>=de?ht*a:2*ht*a*-1}ce+=i,J&&Rt&&(ce<de&&(ce+=ht),ce>fe&&(ce-=ht)),Nn(ce)!==Nn(ue)&&Ni(e)}}function Oi(t,e){if(me){if(ve)return;Bi()}var n;if(!e){for(var i=ji(t=Fi(t));i!==Ge&&[Xe,Ye].indexOf(i)<0;)i=i.parentNode;var a=[Xe,Ye].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(It){if(ce===de&&-1===e)return void Hi("last",t);if(ce===fe&&1===e)return void Hi("first",t)}e&&(ce+=Ht*e,Lt&&(ce=Math.floor(ce)),Ni(n||t&&"keydown"===t.type?t:null))}function Di(){un=setInterval((function(){Oi(null,hn)}),Gt),dn=!0}function Pi(){clearInterval(un),dn=!1}function Ii(t,e){w(mn,{"data-action":t}),mn.innerHTML=yn[0]+t+yn[1]+e}function Ri(){Di(),mn&&Ii("stop",Qt[1])}function zi(){Pi(),mn&&Ii("start",Qt[0])}function Wi(){dn?(zi(),vn=!0):(Ri(),vn=!1)}function qi(t){t.focus()}function Fi(t){return $i(t=t||s.event)?t.changedTouches[0]:t}function ji(t){return t.target||s.event.srcElement}function $i(t){return t.type.indexOf("touch")>=0}function Vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Gi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Qi(t){if(me){if(ve)return;Bi()}Vt&&dn&&Pi(),Mn=!0,xn&&(i(xn),xn=null);var e=Fi(t);ye.emit($i(t)?"touchStart":"dragStart",ta(t)),!$i(t)&&["img","a"].indexOf(yi(ji(t)))>=0&&Vi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,J&&(bn=parseFloat(dt.style[re].replace(oe,"")),Mi(dt,"0s"))}function Xi(t){if(Mn){var n=Fi(t);Cn.x=n.clientX,Cn.y=n.clientY,J?xn||(xn=e((function(){Yi(t)}))):("?"===he&&(he=Gi()),he&&(je=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&je&&t.preventDefault()}}function Yi(t){if(he){if(i(xn),Mn&&(xn=e((function(){Yi(t)}))),"?"===he&&(he=Gi()),he){!je&&$i(t)&&(je=!0);try{t.type&&ye.emit($i(t)?"touchMove":"dragMove",ta(t))}catch(t){}var n=bn,a=Tn(Cn,wn);!st||At||Lt?(n+=a,n+="px"):(n+=z?a*Bt*100/((Nt+St)*ee):100*a/(Nt+St),n+="%"),dt.style[re]=oe+n+le}}else Mn=!1}function Ki(n){if(Mn){xn&&(i(xn),xn=null),J&&Mi(dt,""),Mn=!1;var a=Fi(n);Cn.x=a.clientX,Cn.y=a.clientY;var r=Tn(Cn,wn);if(Math.abs(r)){if(!$i(n)){var o=ji(n);B(o,{click:function t(e){Vi(e),H(o,{click:t})}})}J?xn=e((function(){if(st&&!Lt){var t=-r*Bt/(Nt+St);t=r>0?Math.floor(t):Math.ceil(t),ce+=t}else{var e=-(bn+r);if(e<=0)ce=de;else if(e>=yt[ee-1])ce=fe;else for(var i=0;i<ee&&e>=yt[i];)ce=i,e>yt[i]&&r<0&&(ce+=1),i++}Ni(n,r),ye.emit($i(n)?"touchEnd":"dragEnd",ta(n))})):he&&Oi(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(je=!1),pe&&(he="?"),Vt&&!dn&&Di()}function Ui(){(ot||ut).style.height=yt[ce+Bt]-yt[ce]+"px"}function Ji(){var t=At?(At+St)*ht/Nt:ht/Bt;return Math.min(Math.ceil(t),ht)}function Zi(){if(Ft&&!De&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=T);t<e;)n(Je[t]),t++;nn=en}}function ta(t){return{container:dt,slideItems:pt,navContainer:Ze,navItems:Je,controlsContainer:Ge,hasControls:He,prevButton:Xe,nextButton:Ye,items:Bt,slideBy:Ht,cloneCount:te,slideCount:ht,slideCountNew:ee,index:ce,indexCached:ue,displayIndex:_n(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Kt,isOn:gt,event:t||{}}}Q&&console.warn("No slides found in",t.container)};document.addEventListener("DOMContentLoaded",(()=>{(function(){const t=document.querySelector(".slider__left"),e=document.querySelector(".slider__right"),n=()=>{document.documentElement.clientWidth<=768?(t.style.display="none",e.style.display="none"):(t.style.display="block",e.style.display="block")};n();let i=D({container:".slider__inner",items:1,slideBy:"page",controls:!1,nav:!1,mouseDrag:!0,speed:1e3});t.addEventListener("click",(()=>{i.goTo("prev")})),e.addEventListener("click",(()=>{i.goTo("next")})),window.addEventListener("resize",(function(){n(),i.refresh()})),setInterval((()=>{i.goTo("next")}),1e4)})(),function(){const t=document.querySelector(".catalog__cards");class e{constructor(t,e,n,i,a,r,o,l,s,c,u){this.img=t,this.alt=e,this.cardInfo=n,this.cardText=i,this.oldPrice=a,this.newPrice=r,this.li1=o,this.li2=l,this.li3=s,this.li4=c,this.wraper=u}render(){const t=document.createElement("div");t.classList.add("card"),t.classList.add("card_mb10"),t.innerHTML=`\n                        <div class="card__content-wrapper">\n                            <div class="card__content">\n                                <img src=${this.img} alt="${this.alt}">\n                                <div class="card__info">${this.cardInfo}</div>\n                                <div class="card__text">${this.cardText}</div>\n                                <div class="card__inspect">ПОДРОБНЕЕ</div>\n                            </div>\n                            <ul class="card__description">\n                                <li>${this.li1}</li>\n                                <li>${this.li2}</li>\n                                <li>${this.li3}</li>\n                                <li>${this.li4}</li>\n                                <div class="card__back">НАЗАД</div>\n                            </ul>\n                        </div>\n                        <hr>\n                        <div class="card__footer">\n                            <div class="card__prices">\n                                <div class="card__old-price">${this.oldPrice} EURO</div>\n                                <div class="card__new-price">${this.newPrice} EURO</div>\n                            </div>\n                            <button class="button button_buy">Купить</button>\n                        </div>\n            `,this.wraper.append(t)}}function n(n="all"){t.innerHTML="",fetch("http://localhost:4000/cards").then((t=>t.json())).then((i=>{"all"==n?i.forEach((n=>{new e(n.img,n.alt,n.cardInfo,n.cardText,n.oldPrice,n.newPrice,n.li1,n.li2,n.li3,n.li4,t).render()})):i.filter((t=>t.category==n)).forEach((n=>{new e(n.img,n.alt,n.cardInfo,n.cardText,n.oldPrice,n.newPrice,n.li1,n.li2,n.li3,n.li4,t).render()})),document.querySelectorAll(".card").forEach((t=>{t.classList.add("card_show")}))})),document.addEventListener("click",(t=>{t.target&&(t.target.classList.contains("card__inspect")||t.target.classList.contains("card__back"))&&t.target.parentElement.parentElement.classList.toggle("card__content-wrapper_translate")}))}n(),document.addEventListener("click",(t=>{if(t.target&&t.target.parentElement.classList.contains("catalog__tab")){switch(document.querySelectorAll(".catalog__tab").forEach((t=>{t.classList.remove("catalog__tab_activ")})),t.target.parentElement.classList.add("catalog__tab_activ"),t.target.innerHTML){case"для фитнеса":n("fitness");break;case"для бега":n("run");break;case"для триатлона":n("triathlon");break;default:n()}console.log(document.querySelectorAll(".card"))}}))}()}))})();
//# sourceMappingURL=bundle.js.map