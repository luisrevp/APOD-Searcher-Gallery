(this["webpackJsonpbuscador-apod"]=this["webpackJsonpbuscador-apod"]||[]).push([[0],{20:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(21),r=c.n(s),i=c(11),o=c(3),l=c(10),j=c(16),d=c.n(j),u=c(22),b=c(5),h=c(1),O=function(e){var t=e.search,c=e.setSearch,a=e.setFilterSearch,s=e.dateStart,r=e.setDateStart,i=e.dateEnd,o=e.setDateEnd,l=e.setQuery,j=Object(n.useState)(window.innerWidth),d=Object(b.a)(j,2),u=d[0],O=d[1];Object(n.useEffect)((function(){return window.addEventListener("resize",(function(){return O(window.innerWidth)})),function(){window.removeEventListener("resize",(function(){return O(window.innerWidth)}))}}));var x=new Date,p=x.getFullYear(),f=x.getMonth()<10?"0"+(x.getMonth()+1):x.getMonth()+1,g=x.getDate()<10?"0"+x.getDate():x.getDate(),v="".concat(p,"-").concat(f,"-").concat(g);return Object(h.jsxs)("div",{className:"page-result",children:[Object(h.jsxs)("div",{className:"search",children:[Object(h.jsxs)("div",{className:"bar",children:[Object(h.jsx)("input",{type:"text",placeholder:"busque lo que necesite",value:t,onChange:function(e){c(e.target.value),a(!1)}}),u>460&&Object(h.jsx)("button",{id:"search-btn",onClick:function(e){return a(!0)},children:"Buscar"})]}),u<=460&&Object(h.jsx)("div",{id:"search-btn-container",children:Object(h.jsx)("button",{id:"search-btn",onClick:function(e){return a(!0)},children:"Buscar"})}),Object(h.jsxs)("select",{name:"select",label:"Filtrar por:",onChange:function(e){return l(e.target.value)},children:[Object(h.jsx)("option",{value:"title",children:"Ordenar: Titulo"}),Object(h.jsx)("option",{value:"author",children:"Ordenar: Autor"}),Object(h.jsx)("option",{value:"date",children:"Ordenar: Fecha"})]})]}),Object(h.jsxs)("div",{className:"dates",children:[Object(h.jsxs)("div",{className:"date1",children:[Object(h.jsx)("label",{htmlFor:"desde",children:"Desde:"}),Object(h.jsx)("input",{type:"date",id:"desde",value:s,max:v,onChange:function(e){r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"date2",children:[Object(h.jsx)("label",{htmlFor:"hasta",children:"Hasta:"}),Object(h.jsx)("input",{type:"date",id:"hasta",value:i,max:v,onChange:function(e){o(e.target.value)}})]})]})]})},x=c(13),p=function(e){var t=e.filterSearch,c=e.busqueda,a=Object(n.useState)({}),s=Object(b.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){var e=t?"B\xfasqueda: ".concat(c.length," resultados"):"\xa1Bienvenidos!";return document.title=e}),[t,c]),Object(h.jsxs)("div",{className:"search-container",children:[Object(h.jsx)("h1",{children:c.length>0&&t&&"Resultado de b\xfasqueda: ".concat(c.length)}),0===c.length&&t?Object(h.jsx)("h3",{children:"No se ha encontrado nada..."}):t&&c.map((function(e){var t=e.date,c=e.explanation,n=e.url,a=e.copyright,s=e.title,o=e.id;return Object(h.jsxs)("div",{className:"nasa-wrap",children:[Object(h.jsx)("h1",{children:s}),Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:n})}),Object(h.jsxs)("h4",{children:["fecha: ",t]}),Object(h.jsxs)("h3",{children:["Autor: ",a||"Autor desconocido"]}),Object(h.jsx)("p",{children:r[o]?c:c.substring(0,120)+"..."}),Object(h.jsx)("button",{onClick:function(){return function(e){return i(Object(l.a)(Object(l.a)({},r),{},Object(x.a)({},e,!r[e])))}(o)},children:r[o]?"Leer Menos":"Leer M\xe1s"})]},o)}))]})},f=(c(20),function(){return Object(h.jsxs)("div",{className:"loading-page",children:[Object(h.jsx)("h2",{children:"Cargando"}),Object(h.jsx)("p",{children:"Esto puede tomar unos segundos"})]})}),g=function(){return Object(h.jsxs)("div",{className:"errorPage",children:[Object(h.jsx)("h1",{children:"Error..."}),Object(h.jsx)("h2",{children:"No pudimos completar su peticion"})]})};var v=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(b.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(!1),x=Object(b.a)(j,2),v=x[0],m=x[1],w=Object(n.useState)(!1),k=Object(b.a)(w,2),N=k[0],S=k[1],y=Object(n.useState)(""),E=Object(b.a)(y,2),D=E[0],A=E[1],C=Object(n.useState)("title"),P=Object(b.a)(C,2),L=P[0],F=P[1],q=new Date,B=q.getFullYear(),M=q.getMonth()<10?"0"+(q.getMonth()+1):q.getMonth()+1,z=q.getDate()<10?"0"+q.getDate():q.getDate(),R=Object(n.useState)("".concat(B,"-").concat(M,"-").concat(z)),I=Object(b.a)(R,2),_=I[0],T=I[1],W=Object(n.useState)("".concat(B,"-").concat(M,"-").concat(z)),Q=Object(b.a)(W,2),U=Q[0],Y=Q[1],H="https://api.nasa.gov/planetary/apod?api_key=Zxyg2mojmh8nUrjnsZ84dnI2DUUPv6lo45md3IRp"+"&start_date=".concat(_)+"&end_date=".concat(U);Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!((c=e.sent).ok&&c.status>=200&&c.status<=299)){e.next=11;break}return e.next=6,c.json();case 6:n=e.sent,a(n),o(!1),e.next=14;break;case 11:console.log("Error ".concat(c.status,": ").concat(c.statusText)),o(!1),m(!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(H)}),[N]);var J=1,Z=c.filter((function(e){var t=e.explanation,c=e.title,n=e.copyright,a=D.split(" ").join("|"),s=new RegExp(a,"gi");return s.test(t)||s.test(c)||s.test(n)})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:J++})}));switch(L){case"date":Z.sort((function(e,t){var c=new Date(e.date);return new Date(t.date)-c}));break;case"author":Z.sort((function(e,t){return e.copyright>t.copyright?1:-1}));break;case"title":Z.sort((function(e,t){return e.title[0]>t.title[0]?1:-1}))}return i?Object(h.jsx)(f,{}):v?(document.title="error...",Object(h.jsx)(g,{})):Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("h1",{children:"Buscador de APOD (Astronomy Picture of the Day)"}),Object(h.jsxs)("div",{className:"page-result",children:[Object(h.jsx)(O,{search:D,setSearch:A,setFilterSearch:S,dateStart:_,dateEnd:U,setDateStart:T,setDateEnd:Y,setQuery:F}),Object(h.jsx)(p,{busqueda:Z,filterSearch:N})]})]})},m=(c(31),function(){return document.title="Acerca de la p\xe1g.",Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"about-page",children:Object(h.jsx)("div",{className:"about-wrap",children:Object(h.jsxs)("div",{className:"about-content",children:[Object(h.jsx)("h1",{children:"Acerca de esta p\xe1gina"}),Object(h.jsxs)("p",{children:["Este es un simple proyecto que consiste de un buscador APOD",Object(h.jsx)("br",{}),"(acr\xf3nimo para ",Object(h.jsx)("span",{children:"Astronomy Picture of the Day"}),") disponible de la NASA,",Object(h.jsx)("br",{}),"en la cual permite navegar a estas fotografias",Object(h.jsx)("br",{})," a trav\xe9s de un sistema de b\xfasqueda con filtros incorporados."]}),Object(h.jsxs)("p",{children:["La API la puedes tomar desde"," ",Object(h.jsx)("a",{href:"https://api.nasa.gov/",target:"_blank",children:"ac\xe1"}),". Para ello, deber\xe1s registrarte",Object(h.jsx)("br",{}),"y crear una API key con la cual podr\xe1s tener acceso a los enlaces.",Object(h.jsx)("br",{})]}),Object(h.jsxs)("p",{children:["Los instructivos de Queries o consultas est\xe1n disponibles en la p\xe1gina. El l\xedmite de",Object(h.jsx)("br",{})," peticiones por usuario son de 1000 por hora."]})]})})})})}),w=(c(32),c(24)),k=(c(33),function(e){var t=e.background,c=e.size,a=Object(n.useState)(!1),s=Object(b.a)(a,2),r=s[0],o=s[1],l=Object(n.useRef)();var j=Object(h.jsx)(w.a,{onClick:function(){return r||o(!0),void(r&&(document.querySelector(".ul-container-responsive").className="cerrar",setTimeout((function(){o(!1)}),300)))},className:"burger-button",style:{color:t?"black":"white",alignSelf:"flex-end",display:r&&"block"}}),d=Object(h.jsx)("div",{className:"ul-wrap",style:{background:c>=900&&"none",height:r&&c<900&&"100vh"},onClick:function(e){return function(e){return e.target!==e.currentTarget?void 0:o(!r)}(e)},children:Object(h.jsxs)("ul",{className:c<900?"ul-container-responsive":"ul-container",ref:l,children:[c<900&&r&&Object(h.jsx)("li",{id:"resp-button",children:j}),Object(h.jsx)("li",{className:"links",onClick:function(){return o(!r)},children:Object(h.jsx)(i.b,{to:"/buscador-apod",style:{color:t?"#000":"#fff"},children:"Buscador"})}),Object(h.jsx)("li",{className:"links",onClick:function(){return o(!r)},children:Object(h.jsx)(i.b,{to:"/acerca",style:{color:t?"#000":"#fff"},children:"Acerca de pagina"})}),Object(h.jsx)("li",{className:"links",onClick:function(){return o(!r)},children:Object(h.jsx)("a",{href:"https://luisrevp.github.io/Personal-webpage/",children:"P\xe1gina Personal"})})]})});return c>=900&&r&&o(!1),Object(h.jsxs)("div",{className:"link-wrap",children:[c<900&&!r?j:"",(c>=900||r)&&d]})}),N=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(window.innerWidth),r=Object(b.a)(s,2),o=r[0],l=r[1];function j(){return l(window.innerWidth)}function d(){return window.scrollY>=80?a(!0):a(!1)}return Object(n.useEffect)((function(){return window.addEventListener("resize",j),window.addEventListener("scroll",d),function(){window.removeEventListener("resize",j),window.removeEventListener("scroll",d)}}),[]),Object(h.jsxs)("nav",{className:c?"navBar backgroundOn":"navBar backgroundOff",children:[Object(h.jsx)(i.b,{to:"/buscador-apod",id:"logo",children:"NASA Searcher"}),Object(h.jsx)(k,{background:c,size:o})]})},S=c(19),y=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("div",{className:"footer-wrap",children:[Object(h.jsxs)("h1",{children:["Sitio creado por Luis Revilla",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})," Tecnolog\xeda utilizada: React"]}),Object(h.jsxs)("div",{className:"proyectos",children:[Object(h.jsx)("h1",{children:"Otros proyectos:"}),Object(h.jsx)("a",{href:"https://luisrevp.github.io/Personal-webpage/",children:"P\xe1gina personal"}),Object(h.jsx)("a",{href:"https://luisrevp.github.io/Sushi-restaurant/",children:"Restaurante de Sushi"}),Object(h.jsx)("a",{href:"https://luisrevp.github.io/Chrome-clock-extension/reloj.html",children:"Extensi\xf3n de Chrome"})]}),Object(h.jsxs)("div",{className:"redes-sociales",children:[Object(h.jsx)("h1",{children:"\xa1Visita mis redes!"}),Object(h.jsxs)("div",{className:"red linkedin",children:[Object(h.jsx)("h2",{children:"LinkedIn"}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/luis-revilla/",target:"_blank",children:Object(h.jsx)(S.b,{})})]}),Object(h.jsxs)("div",{className:"red github",children:[Object(h.jsx)("h2",{children:"GitHub"}),Object(h.jsx)("a",{href:"https://github.com/luisrevp",target:"_blank",children:Object(h.jsx)(S.a,{})})]})]})]})})};var E=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(N,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/buscador-apod",component:v,exact:!0}),Object(h.jsx)(o.a,{path:"/acerca",component:m}),Object(h.jsx)(o.a,{path:"*",component:g})]}),Object(h.jsx)(y,{})]})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0e16a7d7.chunk.js.map