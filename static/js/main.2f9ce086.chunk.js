(window["webpackJsonpatmos-app"]=window["webpackJsonpatmos-app"]||[]).push([[0],{127:function(e,t,a){e.exports=a(155)},151:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),l=a(19),o=a.n(l),s=a(32),u=a.n(s),m=a(39),p=a(26),d=a(48),f=a.n(d),E=(a(133),a(25)),b=a.n(E),h=a(22),k=a.n(h),v=a(43),g=a.n(v),w=a(33),j=a.n(w),O=a(40),y=a.n(O),x=a(42),C=a.n(x),P=a(41),U=a.n(P),_=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(b.a,{id:t},c.a.createElement(k.a,null,"Example"),n&&c.a.createElement(j.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(j.a,{title:"Navigation Example"},c.a.createElement(C.a,null,c.a.createElement(g.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},A=a(34),I=a(47),K=a.n(I),S=a(44),V=a.n(S),N=a(45),W=a.n(N),J=a(46),T=a.n(J),z=(a(151),Object(A.b)()),B=function(e){return c.a.createElement(b.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(K.a,{onClick:e.go,"data-to":"home"},z===A.a?c.a.createElement(V.a,null):c.a.createElement(W.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},D=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),s=l[0],d=l[1],E=Object(n.useState)(null),b=Object(p.a)(E,2),h=b[0],k=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:h},c.a.createElement(_,{id:"home",fetchedUser:s,go:v}),c.a.createElement(B,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(D,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[127,1,2]]]);
//# sourceMappingURL=main.2f9ce086.chunk.js.map