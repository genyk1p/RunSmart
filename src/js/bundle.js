(()=>{"use strict";var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function l(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function s(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function u(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function d(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function f(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},g=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function y(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function T(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function C(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function P(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var _=!1;try{var A=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,A)}catch(t){}var N=!!_&&{passive:!0};function k(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&N;t.addEventListener(i,e[i],a)}}function B(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&N;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var H=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,c=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},_=t.useLocalStorage;if(_){var A=navigator.userAgent,N=new Date;try{(b=c.localStorage)?(b.setItem(N,N),_=b.getItem(N)==N,b.removeItem(N)):_=!1,_||(b={})}catch(t){_=!1}_&&(b.tnsApp&&b.tnsApp!==A&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=A)}var O=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=l(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",c=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],d=0;d<3;d++)if(r=c[d],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?u(e,n):i.remove(),a}(),_),D=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=l(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var c=0;c<70;c++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?u(n,i):a.remove(),t}(),_),R=b.tMQ?r(b.tMQ):o(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=l(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?u(n,i):a.remove(),"absolute"===t}(),_),z=b.tTf?r(b.tTf):o(b,"tTf",P("transform"),_),W=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=l(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?u(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(z),_),j=b.tTDu?r(b.tTDu):o(b,"tTDu",P("transitionDuration"),_),q=b.tTDe?r(b.tTDe):o(b,"tTDe",P("transitionDelay"),_),F=b.tADu?r(b.tADu):o(b,"tADu",P("animationDuration"),_),$=b.tADe?r(b.tADe):o(b,"tADe",P("animationDelay"),_),V=b.tTE?r(b.tTE):o(b,"tTE",S(j,"Transition"),_),G=b.tAE?r(b.tAE):o(b,"tAE",S(F,"Animation"),_),Q=c.console&&"function"==typeof c.console.warn,X=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Y={};if(X.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(Y[e]=i,!a||!a.nodeName)return void(Q&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var K=t.responsive,U=t.nested,J="carousel"===t.mode;if(K){0 in K&&(t=a(t,K[0]),delete K[0]);var Z={};for(var tt in K){var et=K[tt];et="number"==typeof et?{items:et}:et,Z[tt]=et}K=Z,Z=null}if(J||function t(e){for(var n in e)J||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!J){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,lt,ct="horizontal"===t.axis,st=n.createElement("div"),ut=n.createElement("div"),dt=t.container,ft=dt.parentNode,vt=dt.outerHTML,pt=dt.children,ht=pt.length,mt=kn(),gt=!1;K&&Zn(),J&&(dt.className+=" tns-vpfix");var yt,xt,bt,wt,Tt,Mt,Ct,Et,Lt=t.autoWidth,Pt=Dn("fixedWidth"),St=Dn("edgePadding"),_t=Dn("gutter"),At=Hn(),Nt=Dn("center"),kt=Lt?1:Math.floor(Dn("items")),Bt=Dn("slideBy"),It=t.viewportMax||t.fixedWidthViewportWidth,Ht=Dn("arrowKeys"),Ot=Dn("speed"),Dt=t.rewind,Rt=!Dt&&t.loop,zt=Dn("autoHeight"),Wt=Dn("controls"),jt=Dn("controlsText"),qt=Dn("nav"),Ft=Dn("touch"),$t=Dn("mouseDrag"),Vt=Dn("autoplay"),Gt=Dn("autoplayTimeout"),Qt=Dn("autoplayText"),Xt=Dn("autoplayHoverPause"),Yt=Dn("autoplayResetOnVisibility"),Kt=(null,Ct=Dn("nonce"),Et=document.createElement("style"),Ct&&Et.setAttribute("nonce",Ct),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Ut=t.lazyload,Jt=t.lazyloadSelector,Zt=[],te=Rt?(Tt=function(){if(Lt||Pt&&!It)return ht-1;var e=Pt?"fixedWidth":"items",n=[];if((Pt||t[e]<ht)&&n.push(t[e]),K)for(var i in K){var a=K[i][e];a&&(Pt||a<ht)&&n.push(a)}return n.length||n.push(0),Math.ceil(Pt?It/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=J?Math.ceil((5*Tt-ht)/2):4*Tt-ht,Mt=Math.max(Tt,Mt),On("edgePadding")?Mt+1:Mt):0,ee=J?ht+2*te:ht+te,ne=!(!Pt&&!Lt||Rt),ie=Pt?Ei():null,ae=!J||!Rt,re=ct?"left":"top",oe="",le="",ce=Pt?function(){return Nt&&!Rt?ht-1:Math.ceil(-ie/(Pt+_t))}:Lt?function(){for(var t=0;t<ee;t++)if(yt[t]>=-ie)return t}:function(){return Nt&&J&&!Rt?ht-1:Rt||J?Math.max(0,ee-Math.ceil(kt)):ee-1},se=_n(Dn("startIndex")),ue=se,de=(Sn(),0),fe=Lt?null:ce(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,he=!pe||"?",me=!1,ge=t.onInit,ye=new I,xe=" tns-slider tns-"+t.mode,be=dt.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),we=Dn("disable"),Te=!1,Me=t.freezable,Ce=!(!Me||Lt)&&Jn(),Ee=!1,Le={click:Ii,keydown:function(t){t=qi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Xe.disabled||Ii(t,-1):Ye.disabled||Ii(t,1))}},Pe={click:function(t){if(me){if(ve)return;ki()}for(var e=Fi(t=qi(t));e!==Ze&&!y(e,"data-nav");)e=e.parentNode;if(y(e,"data-nav")){var n=an=Number(x(e,"data-nav")),i=Pt||Lt?n*ht/en:n*kt;Bi(He?n:Math.min(Math.ceil(i),ht-1),t),rn===n&&(dn&&zi(),an=-1)}},keydown:function(t){t=qi(t);var e=n.activeElement;if(y(e,"data-nav")){var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));i>=0&&(0===i?a>0&&ji(Je[a-1]):1===i?a<en-1&&ji(Je[a+1]):(an=a,Bi(a,t)))}}},Se={mouseover:function(){dn&&(Oi(),fn=!0)},mouseout:function(){fn&&(Hi(),fn=!1)}},_e={visibilitychange:function(){n.hidden?dn&&(Oi(),pn=!0):pn&&(Hi(),pn=!1)}},Ae={keydown:function(t){t=qi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Ii(t,0===e?-1:1)}},Ne={touchstart:Qi,touchmove:Xi,touchend:Ki,touchcancel:Ki},ke={mousedown:Qi,mousemove:Xi,mouseup:Ki,mouseleave:Ki},Be=On("controls"),Ie=On("nav"),He=!!Lt||t.navAsThumbnails,Oe=On("autoplay"),De=On("touch"),Re=On("mouseDrag"),ze="tns-slide-active",We="tns-slide-cloned",je="tns-complete",qe={load:function(t){ci(Fi(t))},error:function(t){var e;e=Fi(t),m(e,"failed"),si(e)}},Fe="force"===t.preventScrollOnTouch;if(Be)var $e,Ve,Ge=t.controlsContainer,Qe=t.controlsContainer?t.controlsContainer.outerHTML:"",Xe=t.prevButton,Ye=t.nextButton,Ke=t.prevButton?t.prevButton.outerHTML:"",Ue=t.nextButton?t.nextButton.outerHTML:"";if(Ie)var Je,Ze=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Lt?ht:Ji(),nn=0,an=-1,rn=Nn(),on=rn,ln="tns-nav-active",cn="Carousel Page ",sn=" (Current Slide)";if(Oe)var un,dn,fn,vn,pn,hn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",yn=["<span class='tns-visually-hidden'>"," animation</span>"];if(De||Re)var xn,bn,wn={},Tn={},Mn=!1,Cn=ct?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Lt||Pn(we||Ce),z&&(re=z,oe="translate",W?(oe+=ct?"3d(":"3d(0px, ",le=ct?", 0px, 0px)":", 0px)"):(oe+=ct?"X(":"Y(",le=")")),J&&(dt.className=dt.className.replace("tns-vpfix","")),function(){if(On("gutter"),st.className="tns-outer",ut.className="tns-inner",st.id=be+"-ow",ut.id=be+"-iw",""===dt.id&&(dt.id=be),xe+=D||Lt?" tns-subpixel":" tns-no-subpixel",xe+=O?" tns-calc":" tns-no-calc",Lt&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,dt.className+=xe,J?((ot=n.createElement("div")).id=be+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ut)):st.appendChild(ut),zt&&((ot||ut).className+=" tns-ah"),ft.insertBefore(st,dt),ut.appendChild(dt),v(pt,(function(t,e){m(t,"tns-item"),t.id||(t.id=be+"-item"+e),!J&&rt&&m(t,rt),w(t,{"aria-hidden":"true",tabindex:"-1"})})),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var r=a%ht,o=pt[r].cloneNode(!0);if(m(o,We),T(o,"id"),i.insertBefore(o,i.firstChild),J){var l=pt[ht-1-r].cloneNode(!0);m(l,We),T(l,"id"),e.appendChild(l)}}dt.insertBefore(e,dt.firstChild),dt.appendChild(i),pt=dt.children}}(),function(){if(!J)for(var e=se,n=se+Math.min(ht,kt);e<n;e++){var i=pt[e];i.style.left=100*(e-se)/kt+"%",m(i,nt),g(i,rt)}if(ct&&(D||Lt?(d(Kt,"#"+be+" > .tns-item","font-size:"+c.getComputedStyle(pt[0]).fontSize+";",f(Kt)),d(Kt,"#"+be,"font-size:0;",f(Kt))):J&&v(pt,(function(t,e){t.style.marginLeft=function(t){return O?O+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}))),R){if(j){var a=ot&&t.autoHeight?Fn(t.speed):"";d(Kt,"#"+be+"-mw",a,f(Kt))}a=Rn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),d(Kt,"#"+be+"-iw",a,f(Kt)),J&&(a=ct&&!Lt?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(a+=Fn(Ot)),d(Kt,"#"+be,a,f(Kt))),a=ct&&!Lt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=jn(t.gutter)),J||(j&&(a+=Fn(Ot)),F&&(a+=$n(Ot))),a&&d(Kt,"#"+be+" > .tns-item",a,f(Kt))}else J&&zt&&(ot.style[j]=Ot/1e3+"s"),ut.style.cssText=Rn(St,_t,Pt,zt),J&&ct&&!Lt&&(dt.style.width=zn(Pt,_t,kt)),a=ct&&!Lt?Wn(Pt,_t,kt):"",_t&&(a+=jn(_t)),a&&d(Kt,"#"+be+" > .tns-item",a,f(Kt));if(K&&R)for(var r in K){r=parseInt(r);var o=K[r],l=(a="",""),s="",u="",p="",h=Lt?null:Dn("items",r),y=Dn("fixedWidth",r),x=Dn("speed",r),b=Dn("edgePadding",r),w=Dn("autoHeight",r),T=Dn("gutter",r);j&&ot&&Dn("autoHeight",r)&&"speed"in o&&(l="#"+be+"-mw{"+Fn(x)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+be+"-iw{"+Rn(b,T,y,x,w)+"}"),J&&ct&&!Lt&&("fixedWidth"in o||"items"in o||Pt&&"gutter"in o)&&(u="width:"+zn(y,T,h)+";"),j&&"speed"in o&&(u+=Fn(x)),u&&(u="#"+be+"{"+u+"}"),("fixedWidth"in o||Pt&&"gutter"in o||!J&&"items"in o)&&(p+=Wn(y,T,h)),"gutter"in o&&(p+=jn(T)),!J&&"speed"in o&&(j&&(p+=Fn(x)),F&&(p+=$n(x))),p&&(p="#"+be+" > .tns-item{"+p+"}"),(a=l+s+u+p)&&Kt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Kt.cssRules.length)}}(),Vn();var En=Rt?J?function(){var t=de,e=fe;t+=Bt,e-=Bt,St?(t+=1,e-=1):Pt&&(At+_t)%(Pt+_t)&&(e-=1),te&&(se>e?se-=ht:se<t&&(se+=ht))}:function(){if(se>fe)for(;se>=de+ht;)se-=ht;else if(se<de)for(;se<=fe-ht;)se+=ht}:function(){se=Math.max(de,Math.min(fe,se))},Ln=J?function(){var t,e,n,i,a,r,o,l,c,s,u;Mi(dt,""),j||!Ot?(Si(),Ot&&L(dt)||ki()):(t=dt,e=re,n=oe,i=le,a=Li(),r=Ot,o=ki,l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),u=(a-s)/r*l,setTimeout((function a(){r-=l,s+=u,t.style[e]=n+s+c+i,r>0?setTimeout(a,l):o()}),l)),ct||Ui()}:function(){Zt=[];var t={};t[V]=t[G]=ki,B(pt[ue],t),k(pt[se],t),_i(ue,nt,it,!0),_i(se,rt,nt),V&&G&&Ot&&L(dt)||ki()};return{version:"2.9.4",getInfo:ta,events:ye,goTo:Bi,play:function(){Vt&&!dn&&(Ri(),vn=!1)},pause:function(){dn&&(zi(),vn=!0)},isOn:gt,updateSliderHeight:hi,refresh:Vn,destroy:function(){if(Kt.disabled=!0,Kt.ownerNode&&Kt.ownerNode.remove(),B(c,{resize:Kn}),Ht&&B(n,Ae),Ge&&B(Ge,Le),Ze&&B(Ze,Pe),B(dt,Se),B(dt,_e),mn&&B(mn,{click:Wi}),Vt&&clearInterval(un),J&&V){var e={};e[V]=ki,B(dt,e)}Ft&&B(dt,Ne),$t&&B(dt,ke);var i=[vt,Qe,Ke,Ue,tn,gn];for(var a in X.forEach((function(e,n){var a="container"===e?st:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),X=nt=it=at=rt=ct=st=ut=dt=ft=vt=pt=ht=lt=mt=Lt=Pt=St=_t=At=kt=Bt=It=Ht=Ot=Dt=Rt=zt=Kt=Ut=yt=Zt=te=ee=ne=ie=ae=re=oe=le=ce=se=ue=de=fe=pe=he=me=ge=ye=xe=be=we=Te=Me=Ce=Ee=Le=Pe=Se=_e=Ae=Ne=ke=Be=Ie=He=Oe=De=Re=ze=je=qe=xt=Wt=jt=Ge=Qe=Xe=Ye=$e=Ve=qt=Ze=tn=Je=en=nn=an=rn=on=ln=cn=sn=Vt=Gt=hn=Qt=Xt=mn=gn=Yt=yn=un=dn=fn=vn=pn=wn=Tn=xn=Mn=bn=Cn=Ft=$t=null,this)"rebuild"!==a&&(this[a]=null);gt=!1},rebuild:function(){return H(a(t,Y))}}}function Pn(t){t&&(Wt=qt=Ft=$t=Ht=Vt=Xt=Yt=!1)}function Sn(){for(var t=J?se-te:se;t<0;)t+=ht;return t%ht+1}function _n(t){return t=t?Math.max(0,Math.min(Rt?ht-1:ht-kt,t)):0,J?t+te:t}function An(t){for(null==t&&(t=se),J&&(t-=te);t<0;)t+=ht;return Math.floor(t%ht)}function Nn(){var t,e=An();return t=He?e:Pt||Lt?Math.ceil((e+1)*en/ht-1):Math.floor(e/kt),!Rt&&J&&se===fe&&(t=en-1),t}function kn(){return c.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Bn(t){return"top"===t?"afterbegin":"beforeend"}function In(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||In(t.parentNode)}}function Hn(){var t=St?2*St-_t:0;return In(ft)-t}function On(e){if(t[e])return!0;if(K)for(var n in K)if(K[n][e])return!0;return!1}function Dn(e,n){if(null==n&&(n=mt),"items"===e&&Pt)return Math.floor((At+_t)/(Pt+_t))||1;var i=t[e];if(K)for(var a in K)n>=parseInt(a)&&e in K[a]&&(i=K[a][e]);return"slideBy"===e&&"page"===i&&(i=Dn("items")),J||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Rn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=ct?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var l="-"+e+"px";r="margin: 0 "+(ct?l+" 0 0":"0 "+l+" 0")+";"}return!J&&a&&j&&i&&(r+=Fn(i)),r}function zn(t,e,n){return t?(t+e)*ee+"px":O?O+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{J||(n=Math.floor(n));var a=J?ee:n;i=O?O+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function jn(t){var e="";return!1!==t&&(e=(ct?"padding-":"margin-")+(ct?"right":"bottom")+": "+t+"px;"),e}function qn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Fn(t){return qn(j,18)+"transition-duration:"+t/1e3+"s;"}function $n(t){return qn(F,17)+"animation-duration:"+t/1e3+"s;"}function Vn(){if(On("autoHeight")||Lt||!ct){var t=dt.querySelectorAll("img");v(t,(function(t){var e=t.src;Ut||(e&&e.indexOf("data:image")<0?(t.src="",k(t,qe),m(t,"loading"),t.src=e):ci(t))})),e((function(){fi(M(t),(function(){xt=!0}))})),On("autoHeight")&&(t=ui(se,Math.min(se+kt-1,ee-1))),Ut?Gn():e((function(){fi(M(t),Gn)}))}else J&&Pi(),Xn(),Yn()}function Gn(){if(Lt&&ht>1){var t=Rt?se:ht-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){ct&&!Lt||(mi(),Lt?(ie=Ei(),Me&&(Ce=Jn()),fe=ce(),Pn(we||Ce)):Ui()),J&&Pi(),Xn(),Yn()}function Xn(){if(gi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+ht+"</div>"),bt=st.querySelector(".tns-liveregion .current"),Oe){var e=Vt?"stop":"start";mn?w(mn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Bn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+yn[0]+e+yn[1]+Qt[0]+"</button>"),mn=st.querySelector("[data-action]")),mn&&k(mn,{click:Wi}),Vt&&(Ri(),Xt&&k(dt,Se),Yt&&k(dt,_e))}if(Ie){if(Ze)w(Ze,{"aria-label":"Carousel Pagination"}),v(Je=Ze.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":cn+(e+1),"aria-controls":be})}));else{for(var n="",i=He?"":'style="display:none"',a=0;a<ht;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+cn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Bn(t.navPosition),n),Ze=st.querySelector(".tns-nav"),Je=Ze.children}if(Zi(),j){var r=j.substring(0,j.length-18).toLowerCase(),o="transition: all "+Ot/1e3+"s";r&&(o="-"+r+"-"+o),d(Kt,"[aria-controls^="+be+"-item]",o,f(Kt))}w(Je[rn],{"aria-label":cn+(rn+1)+sn}),T(Je[rn],"tabindex"),m(Je[rn],ln),k(Ze,Pe)}Be&&(Ge||Xe&&Ye||(st.insertAdjacentHTML(Bn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+jt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+jt[1]+"</button></div>"),Ge=st.querySelector(".tns-controls")),Xe&&Ye||(Xe=Ge.children[0],Ye=Ge.children[1]),t.controlsContainer&&w(Ge,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Xe,Ye],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Xe,{"data-controls":"prev"}),w(Ye,{"data-controls":"next"})),$e=xi(Xe),Ve=xi(Ye),Ti(),Ge?k(Ge,Le):(k(Xe,Le),k(Ye,Le))),ti()}function Yn(){if(J&&V){var e={};e[V]=ki,k(dt,e)}Ft&&k(dt,Ne,t.preventScrollOnTouch),$t&&k(dt,ke),Ht&&k(n,Ae),"inner"===U?ye.on("outerResized",(function(){Un(),ye.emit("innerLoaded",ta())})):(K||Pt||Lt||zt||!ct)&&k(c,{resize:Kn}),zt&&("outer"===U?ye.on("innerLoaded",di):we||di()),li(),we?ii():Ce&&ni(),ye.on("indexChanged",vi),"inner"===U&&ye.emit("innerLoaded",ta()),"function"==typeof ge&&ge(ta()),gt=!0}function Kn(t){e((function(){Un(qi(t))}))}function Un(e){if(gt){"outer"===U&&ye.emit("outerResized",ta(e)),mt=kn();var i,a=lt,r=!1;K&&(Zn(),(i=a!==lt)&&ye.emit("newBreakpointStart",ta(e)));var o,l,c=kt,s=we,u=Ce,p=Ht,h=Wt,y=qt,x=Ft,b=$t,w=Vt,T=Xt,M=Yt,L=se;if(i){var P=Pt,S=zt,_=jt,A=Nt,N=Qt;if(!R)var I=_t,H=St}if(Ht=Dn("arrowKeys"),Wt=Dn("controls"),qt=Dn("nav"),Ft=Dn("touch"),Nt=Dn("center"),$t=Dn("mouseDrag"),Vt=Dn("autoplay"),Xt=Dn("autoplayHoverPause"),Yt=Dn("autoplayResetOnVisibility"),i&&(we=Dn("disable"),Pt=Dn("fixedWidth"),Ot=Dn("speed"),zt=Dn("autoHeight"),jt=Dn("controlsText"),Qt=Dn("autoplayText"),Gt=Dn("autoplayTimeout"),R||(St=Dn("edgePadding"),_t=Dn("gutter"))),Pn(we),At=Hn(),ct&&!Lt||we||(mi(),ct||(Ui(),r=!0)),(Pt||Lt)&&(ie=Ei(),fe=ce()),(i||Pt)&&(kt=Dn("items"),Bt=Dn("slideBy"),(l=kt!==c)&&(Pt||Lt||(fe=ce()),En())),i&&we!==s&&(we?ii():function(){if(Te){if(Kt.disabled=!1,dt.className+=xe,Pi(),Rt)for(var t=te;t--;)J&&E(pt[t]),E(pt[ee-t-1]);if(!J)for(var e=se,n=se+ht;e<n;e++){var i=pt[e],a=e<se+kt?nt:rt;i.style.left=100*(e-se)/kt+"%",m(i,a)}ei(),Te=!1}}()),Me&&(i||Pt||Lt)&&(Ce=Jn())!==u&&(Ce?(Si(Li(_n(0))),ni()):(function(){if(Ee){if(St&&R&&(ut.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)J&&g(pt[e],t),g(pt[ee-e-1],t);ei(),Ee=!1}}(),r=!0)),Pn(we||Ce),Vt||(Xt=Yt=!1),Ht!==p&&(Ht?k(n,Ae):B(n,Ae)),Wt!==h&&(Wt?Ge?E(Ge):(Xe&&E(Xe),Ye&&E(Ye)):Ge?C(Ge):(Xe&&C(Xe),Ye&&C(Ye))),qt!==y&&(qt?(E(Ze),Zi()):C(Ze)),Ft!==x&&(Ft?k(dt,Ne,t.preventScrollOnTouch):B(dt,Ne)),$t!==b&&($t?k(dt,ke):B(dt,ke)),Vt!==w&&(Vt?(mn&&E(mn),dn||vn||Ri()):(mn&&C(mn),dn&&zi())),Xt!==T&&(Xt?k(dt,Se):B(dt,Se)),Yt!==M&&(Yt?k(n,_e):B(n,_e)),i){if(Pt===P&&Nt===A||(r=!0),zt!==S&&(zt||(ut.style.height="")),Wt&&jt!==_&&(Xe.innerHTML=jt[0],Ye.innerHTML=jt[1]),mn&&Qt!==N){var O=Vt?1:0,D=mn.innerHTML,z=D.length-N[O].length;D.substring(z)===N[O]&&(mn.innerHTML=D.substring(0,z)+Qt[O])}}else Nt&&(Pt||Lt)&&(r=!0);if((l||Pt&&!Lt)&&(en=Ji(),Zi()),(o=se!==L)?(ye.emit("indexChanged",ta()),r=!0):l?o||vi():(Pt||Lt)&&(li(),gi(),ai()),l&&!J&&function(){for(var t=se+Math.min(ht,kt),e=ee;e--;){var n=pt[e];e>=se&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-se)/kt+"%",m(n,nt),g(n,rt)):n.style.left&&(n.style.left="",m(n,rt),g(n,nt)),g(n,it)}setTimeout((function(){v(pt,(function(t){g(t,"tns-moving")}))}),300)}(),!we&&!Ce){if(i&&!R&&(St===H&&_t===I||(ut.style.cssText=Rn(St,_t,Pt,Ot,zt)),ct)){J&&(dt.style.width=zn(Pt,_t,kt));var W=Wn(Pt,_t,kt)+jn(_t);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Kt,f(Kt)-1),d(Kt,"#"+be+" > .tns-item",W,f(Kt))}zt&&di(),r&&(Pi(),ue=se)}i&&ye.emit("newBreakpointEnd",ta(e))}}function Jn(){if(!Pt&&!Lt)return ht<=(Nt?kt-(kt-1)/2:kt);var t=Pt?(Pt+_t)*ht:yt[ht],e=St?At+2*St:At+_t;return Nt&&(e-=Pt?(At-Pt)/2:(At-(yt[se+1]-yt[se]-_t))/2),t<=e}function Zn(){for(var t in lt=0,K)t=parseInt(t),mt>=t&&(lt=t)}function ti(){!Vt&&mn&&C(mn),!qt&&Ze&&C(Ze),Wt||(Ge?C(Ge):(Xe&&C(Xe),Ye&&C(Ye)))}function ei(){Vt&&mn&&E(mn),qt&&Ze&&E(Ze),Wt&&(Ge?E(Ge):(Xe&&E(Xe),Ye&&E(Ye)))}function ni(){if(!Ee){if(St&&(ut.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)J&&m(pt[e],t),m(pt[ee-e-1],t);ti(),Ee=!0}}function ii(){if(!Te){if(Kt.disabled=!0,dt.className=dt.className.replace(xe.substring(1),""),T(dt,["style"]),Rt)for(var t=te;t--;)J&&C(pt[t]),C(pt[ee-t-1]);if(ct&&J||T(ut,["style"]),!J)for(var e=se,n=se+ht;e<n;e++){var i=pt[e];T(i,["style"]),g(i,nt),g(i,rt)}ti(),Te=!0}}function ai(){var t=ri();bt.innerHTML!==t&&(bt.innerHTML=t)}function ri(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Li());var e,n,i,a=se;if(Nt||St?(Lt||Pt)&&(n=-(parseFloat(t)+St),i=n+At+2*St):Lt&&(n=yt[se],i=n+At),Lt)yt.forEach((function(t,r){r<ee&&((Nt||St)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Pt){var r=Pt+_t;Nt||St?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(At/r)-1}else if(Nt||St){var o=kt-1;if(Nt?(a-=o/2,e=se+o/2):e=se+o,St){var l=St*kt/At;a-=l,e+=l}a=Math.floor(a),e=Math.ceil(e)}else e=a+kt-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function li(){if(Ut&&!we){var t=oi();t.push(Jt),ui.apply(null,t).forEach((function(t){if(!h(t,je)){var e={};e[V]=function(t){t.stopPropagation()},k(t,e),k(t,qe),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function ci(t){m(t,"loaded"),si(t)}function si(t){m(t,je),g(t,"loading"),B(t,qe)}function ui(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function di(){var t=ui.apply(null,oi());e((function(){fi(t,hi)}))}function fi(t,n){return xt?n():(t.forEach((function(e,n){!Ut&&e.complete&&si(e),h(e,je)&&t.splice(n,1)})),t.length?void e((function(){fi(t,n)})):n())}function vi(){li(),gi(),ai(),Ti(),function(){if(qt&&(rn=an>=0?an:Nn(),an=-1,rn!==on)){var t=Je[on],e=Je[rn];w(t,{tabindex:"-1","aria-label":cn+(on+1)}),g(t,ln),w(e,{"aria-label":cn+(rn+1)+sn}),T(e,"tabindex"),m(e,ln),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=zt?pi(se,kt):pi(te,ht),e=ot||ut;e.style.height!==t&&(e.style.height=t+"px")}function mi(){yt=[0];var t=ct?"left":"top",e=ct?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,a){a&&yt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&yt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=oi(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?y(t,"aria-hidden")&&(T(t,["aria-hidden","tabindex"]),m(t,ze)):y(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),g(t,ze))}))}function yi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===yi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ti(){if(Wt&&!Dt&&!Rt){var t=$e?Xe.disabled:bi(Xe),e=Ve?Ye.disabled:bi(Ye),n=se<=de,i=!Dt&&se>=fe;n&&!t&&wi($e,Xe,!0),!n&&t&&wi($e,Xe,!1),i&&!e&&wi(Ve,Ye,!0),!i&&e&&wi(Ve,Ye,!1)}}function Mi(t,e){j&&(t.style[j]=e)}function Ci(t){return null==t&&(t=se),Lt?(At-(St?_t:0)-(yt[t+1]-yt[t]-_t))/2:Pt?(At-Pt)/2:(kt-1)/2}function Ei(){var t=At+(St?_t:0)-(Pt?(Pt+_t)*ee:yt[ee]);return Nt&&!Rt&&(t=Pt?-(Pt+_t)*(ee-1)-Ci():Ci(ee-1)-yt[ee-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=se),ct&&!Lt)if(Pt)e=-(Pt+_t)*t,Nt&&(e+=Ci());else{var n=z?ee:kt;Nt&&(t-=Ci()),e=100*-t/n}else e=-yt[t],Nt&&Lt&&(e+=Ci());return ne&&(e=Math.max(e,ie)),e+(!ct||Lt||Pt?"px":"%")}function Pi(t){Mi(dt,"0s"),Si(t)}function Si(t){null==t&&(t=Li()),dt.style[re]=oe+t+le}function _i(t,e,n,i){var a=t+kt;Rt||(a=Math.min(a,ee));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-se)/kt+"%"),at&&q&&(o.style[q]=o.style[$]=at*(r-t)/1e3+"s"),g(o,e),m(o,n),i&&Zt.push(o)}}function Ai(t,e){ae&&En(),(se!==ue||e)&&(ye.emit("indexChanged",ta()),ye.emit("transitionStart",ta()),zt&&di(),dn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),me=!0,Ln())}function Ni(t){return t.toLowerCase().replace(/-/g,"")}function ki(t){if(J||me){if(ye.emit("transitionEnd",ta(t)),!J&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",$&&q&&(n.style[$]="",n.style[q]=""),g(n,it),m(n,rt)}if(!t||!J&&t.target.parentNode===dt||t.target===dt&&Ni(t.propertyName)===Ni(re)){if(!ae){var i=se;En(),se!==i&&(ye.emit("indexChanged",ta()),Pi())}"inner"===U&&ye.emit("innerLoaded",ta()),me=!1,ue=se}}}function Bi(t,e){if(!Ce)if("prev"===t)Ii(e,-1);else if("next"===t)Ii(e,1);else{if(me){if(ve)return;ki()}var n=An(),i=0;if("first"===t?i=-n:"last"===t?i=J?ht-kt-n:ht-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ht-1,t))),i=t-n)),!J&&i&&Math.abs(i)<kt){var a=i>0?1:-1;i+=se+i-ht>=de?ht*a:2*ht*a*-1}se+=i,J&&Rt&&(se<de&&(se+=ht),se>fe&&(se-=ht)),An(se)!==An(ue)&&Ai(e)}}function Ii(t,e){if(me){if(ve)return;ki()}var n;if(!e){for(var i=Fi(t=qi(t));i!==Ge&&[Xe,Ye].indexOf(i)<0;)i=i.parentNode;var a=[Xe,Ye].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Dt){if(se===de&&-1===e)return void Bi("last",t);if(se===fe&&1===e)return void Bi("first",t)}e&&(se+=Bt*e,Lt&&(se=Math.floor(se)),Ai(n||t&&"keydown"===t.type?t:null))}function Hi(){un=setInterval((function(){Ii(null,hn)}),Gt),dn=!0}function Oi(){clearInterval(un),dn=!1}function Di(t,e){w(mn,{"data-action":t}),mn.innerHTML=yn[0]+t+yn[1]+e}function Ri(){Hi(),mn&&Di("stop",Qt[1])}function zi(){Oi(),mn&&Di("start",Qt[0])}function Wi(){dn?(zi(),vn=!0):(Ri(),vn=!1)}function ji(t){t.focus()}function qi(t){return $i(t=t||c.event)?t.changedTouches[0]:t}function Fi(t){return t.target||c.event.srcElement}function $i(t){return t.type.indexOf("touch")>=0}function Vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Gi(){return r=Tn.y-wn.y,o=Tn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Qi(t){if(me){if(ve)return;ki()}Vt&&dn&&Oi(),Mn=!0,bn&&(i(bn),bn=null);var e=qi(t);ye.emit($i(t)?"touchStart":"dragStart",ta(t)),!$i(t)&&["img","a"].indexOf(yi(Fi(t)))>=0&&Vi(t),Tn.x=wn.x=e.clientX,Tn.y=wn.y=e.clientY,J&&(xn=parseFloat(dt.style[re].replace(oe,"")),Mi(dt,"0s"))}function Xi(t){if(Mn){var n=qi(t);Tn.x=n.clientX,Tn.y=n.clientY,J?bn||(bn=e((function(){Yi(t)}))):("?"===he&&(he=Gi()),he&&(Fe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Fe&&t.preventDefault()}}function Yi(t){if(he){if(i(bn),Mn&&(bn=e((function(){Yi(t)}))),"?"===he&&(he=Gi()),he){!Fe&&$i(t)&&(Fe=!0);try{t.type&&ye.emit($i(t)?"touchMove":"dragMove",ta(t))}catch(t){}var n=xn,a=Cn(Tn,wn);!ct||Pt||Lt?(n+=a,n+="px"):(n+=z?a*kt*100/((At+_t)*ee):100*a/(At+_t),n+="%"),dt.style[re]=oe+n+le}}else Mn=!1}function Ki(n){if(Mn){bn&&(i(bn),bn=null),J&&Mi(dt,""),Mn=!1;var a=qi(n);Tn.x=a.clientX,Tn.y=a.clientY;var r=Cn(Tn,wn);if(Math.abs(r)){if(!$i(n)){var o=Fi(n);k(o,{click:function t(e){Vi(e),B(o,{click:t})}})}J?bn=e((function(){if(ct&&!Lt){var t=-r*kt/(At+_t);t=r>0?Math.floor(t):Math.ceil(t),se+=t}else{var e=-(xn+r);if(e<=0)se=de;else if(e>=yt[ee-1])se=fe;else for(var i=0;i<ee&&e>=yt[i];)se=i,e>yt[i]&&r<0&&(se+=1),i++}Ai(n,r),ye.emit($i(n)?"touchEnd":"dragEnd",ta(n))})):he&&Ii(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Fe=!1),pe&&(he="?"),Vt&&!dn&&Hi()}function Ui(){(ot||ut).style.height=yt[se+kt]-yt[se]+"px"}function Ji(){var t=Pt?(Pt+_t)*ht/At:ht/kt;return Math.min(Math.ceil(t),ht)}function Zi(){if(qt&&!He&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=C);t<e;)n(Je[t]),t++;nn=en}}function ta(t){return{container:dt,slideItems:pt,navContainer:Ze,navItems:Je,controlsContainer:Ge,hasControls:Be,prevButton:Xe,nextButton:Ye,items:kt,slideBy:Bt,cloneCount:te,slideCount:ht,slideCountNew:ee,index:se,indexCached:ue,displayIndex:Sn(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Kt,isOn:gt,event:t||{}}}Q&&console.warn("No slides found in",t.container)};const O=function(t="obj"){const e="http://localhost:4000/cards",n={cards:[{img:"img/polar.jpg",altimg:"polar",cardInfo:"Пульсометр Polar FT1'",cardText:"Для первых шагов в тренировках, основанных на сердечном ритме",oldPrice:60,newPrice:50,li1:"Вы услышите звуковое оповещение о нужном пульсе во время тренировки;",li2:"Вы увидите информативный графический индикатор целевых тренировочных зон пульса;",li3:"Также Вы увидите информацию о расходе калорий за тренировку;",li4:"Вы сможете посмотреть данные по 10 тренировкам.",category:"fitness"},{img:"img/polar.jpg",altimg:"polar",cardInfo:"Пульсометр Suunto M2'",cardText:"Для первых шагов в тренировках, основанных на сердечном ритме",oldPrice:70,newPrice:60,li1:"Вы услышите звуковое оповещение о нужном пульсе во время тренировки;",li2:"Вы увидите информативный графический индикатор целевых тренировочных зон пульса;",li3:"Также Вы увидите информацию о расходе калорий за тренировку;",li4:"Вы сможете посмотреть данные по 10 тренировкам.",category:"run"},{img:"img/polar.jpg",altimg:"polar",cardInfo:"Пульсометр Polar FT1",cardText:"Для первых шагов в тренировках, основанных на сердечном ритме",oldPrice:40,newPrice:30,li1:"Вы услышите звуковое оповещение о нужном пульсе во время тренировки;",li2:"Вы увидите информативный графический индикатор целевых тренировочных зон пульса;",li3:"Также Вы увидите информацию о расходе калорий за тренировку;",li4:"Вы сможете посмотреть данные по 10 тренировкам.",category:"triathlon"},{img:"img/polar.jpg",altimg:"polar",cardInfo:"Пульсометр Polar FT1'",cardText:"Для первых шагов в тренировках, основанных на сердечном ритме",oldPrice:60,newPrice:50,li1:"Вы услышите звуковое оповещение о нужном пульсе во время тренировки;",li2:"Вы увидите информативный графический индикатор целевых тренировочных зон пульса;",li3:"Также Вы увидите информацию о расходе калорий за тренировку;",li4:"Вы сможете посмотреть данные по 10 тренировкам.",category:"fitness"},{img:"img/polar.jpg",altimg:"polar",cardInfo:"Пульсометр Suunto M2'",cardText:"Для первых шагов в тренировках, основанных на сердечном ритме",oldPrice:70,newPrice:60,li1:"Вы услышите звуковое оповещение о нужном пульсе во время тренировки;",li2:"Вы увидите информативный графический индикатор целевых тренировочных зон пульса;",li3:"Также Вы увидите информацию о расходе калорий за тренировку;",li4:"Вы сможете посмотреть данные по 10 тренировкам.",category:"run"},{img:"img/polar.jpg",altimg:"polar",cardInfo:"Пульсометр Polar FT1",cardText:"Для первых шагов в тренировках, основанных на сердечном ритме",oldPrice:40,newPrice:30,li1:"Вы услышите звуковое оповещение о нужном пульсе во время тренировки;",li2:"Вы увидите информативный графический индикатор целевых тренировочных зон пульса;",li3:"Также Вы увидите информацию о расходе калорий за тренировку;",li4:"Вы сможете посмотреть данные по 10 тренировкам.",category:"triathlon"}]},i=document.querySelector(".catalog__cards");class a{constructor(t,e,n,i,a,r,o,l,c,s,u){this.img=t,this.alt=e,this.cardInfo=n,this.cardText=i,this.oldPrice=a,this.newPrice=r,this.li1=o,this.li2=l,this.li3=c,this.li4=s,this.wraper=u}render(){const t=document.createElement("div");t.classList.add("card"),t.classList.add("card_mb10"),t.innerHTML=`\n                        <div class="card__content-wrapper">\n                            <div class="card__content">\n                                <img src=${this.img} alt="${this.alt}">\n                                <div class="card__info">${this.cardInfo}</div>\n                                <div class="card__text">${this.cardText}</div>\n                                <div class="card__inspect">ПОДРОБНЕЕ</div>\n                            </div>\n                            <ul class="card__description">\n                                <li>${this.li1}</li>\n                                <li>${this.li2}</li>\n                                <li>${this.li3}</li>\n                                <li>${this.li4}</li>\n                                <div class="card__back">НАЗАД</div>\n                            </ul>\n                        </div>\n                        <hr>\n                        <div class="card__footer">\n                            <div class="card__prices">\n                                <div class="card__old-price">${this.oldPrice} EURO</div>\n                                <div class="card__new-price">${this.newPrice} EURO</div>\n                            </div>\n                            <button class="button button_buy">Купить</button>\n                        </div>\n            `,this.wraper.append(t)}}function r(){document.querySelectorAll(".card").forEach((t=>{t.classList.add("card_show")}))}function o(o="all"){i.innerHTML="",function({method:t="fetch",filter:o="all"}){"fetch"===t?fetch(e).then((t=>t.json())).then((t=>{"all"==o?t.forEach((t=>{new a(t.img,t.alt,t.cardInfo,t.cardText,t.oldPrice,t.newPrice,t.li1,t.li2,t.li3,t.li4,i).render()})):t.filter((t=>t.category==o)).forEach((t=>{new a(t.img,t.alt,t.cardInfo,t.cardText,t.oldPrice,t.newPrice,t.li1,t.li2,t.li3,t.li4,i).render()})),r()})):("all"==o?n.cards.forEach((t=>{new a(t.img,t.alt,t.cardInfo,t.cardText,t.oldPrice,t.newPrice,t.li1,t.li2,t.li3,t.li4,i).render()})):n.cards.filter((t=>t.category==o)).forEach((t=>{new a(t.img,t.alt,t.cardInfo,t.cardText,t.oldPrice,t.newPrice,t.li1,t.li2,t.li3,t.li4,i).render()})),r()),document.addEventListener("click",(t=>{t.target&&(t.target.classList.contains("card__inspect")||t.target.classList.contains("card__back"))&&t.target.parentElement.parentElement.classList.toggle("card__content-wrapper_translate")}))}({method:t,filter:o})}o(),document.addEventListener("click",(t=>{if(t.target&&t.target.parentElement.classList.contains("catalog__tab"))switch(document.querySelectorAll(".catalog__tab").forEach((t=>{t.classList.remove("catalog__tab_activ")})),t.target.parentElement.classList.add("catalog__tab_activ"),t.target.innerHTML){case"для фитнеса":o("fitness");break;case"для бега":o("run");break;case"для триатлона":o("triathlon");break;default:o()}}))};document.addEventListener("DOMContentLoaded",(()=>{(function(){const t=document.querySelector(".slider__left"),e=document.querySelector(".slider__right"),n=()=>{document.documentElement.clientWidth<=768?(t.style.display="none",e.style.display="none"):(t.style.display="block",e.style.display="block")};n();let i=H({container:".slider__inner",items:1,slideBy:"page",controls:!1,nav:!1,mouseDrag:!0,speed:1e3});t.addEventListener("click",(()=>{i.goTo("prev")})),e.addEventListener("click",(()=>{i.goTo("next")})),window.addEventListener("resize",(function(){n(),i.refresh()})),setInterval((()=>{i.goTo("next")}),1e4)})(),O()}))})();
//# sourceMappingURL=bundle.js.map