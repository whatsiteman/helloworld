(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MxoQ:function(e){e.exports=JSON.parse('{"data":{"allPost":{"edges":[]}}}')},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return b}));a("91GP");var n=a("q1tI"),l=a.n(n),c=a("YwZP"),r=a("7oih"),s=a("MxoQ"),i=a("Wbzz"),m=a("5Epl"),o=a("EYWl"),u=a("ERVS"),g=function(e){var t=e.settings,a=s.data.allPost,c=Object(n.useState)(a.edges.map((function(e){return e.node}))||[]),r=c[0],g=c[1];return Object(n.useEffect)((function(){Object(u.b)((function(e){g(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{settings:t,title:"Home",className:"stretched"}),l.a.createElement("section",{className:"pt-40",style:{margin:"0 auto",maxWidth:"750px"}},l.a.createElement("div",{className:"container"},r.map((function(e,t){var a=e.title||e.slug;return l.a.createElement(i.Link,{className:"row mb-3",key:e.slug,to:"posts/"+e.slug},e.image?l.a.createElement("div",{className:"col-12 col-lg-5"},l.a.createElement(m.a,{src:e.image,alt:a})):null,l.a.createElement("div",{className:"col-12 "+(e.image?"col-lg-7":"col-lg-12")},l.a.createElement("div",{className:"heading-block"},l.a.createElement("h2",null,a)),l.a.createElement("p",{className:"lead",dangerouslySetInnerHTML:{__html:e.excerpt}})))})))))},d=a("IP2g"),E=a("wHSu"),p=function(e){var t=e.post,a=Object(n.useState)(""),c=a[0],r=a[1];return Object(n.useEffect)((function(){var e="";t.html&&(t.html.blocks.forEach((function(t){switch(t.type){case"header":e+="<h"+t.data.level+">"+t.data.text+"</h"+t.data.level+">";break;case"paragraph":e+="<p>"+t.data.text+"</p>";break;case"delimiter":e+="<hr />";break;case"image":e+='<img class="img-fluid" src="'+t.data.file.url+'" title="'+t.data.caption+'" /><br /><em>'+t.data.caption+"</em>";break;case"list":e+="<ul>",t.data.items.forEach((function(t){e+="<li>"+t+"</li>"})),e+="</ul>";break;default:console.log("Unknown block type",t.type)}})),r(e))}),[t]),l.a.createElement("section",null,l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"42rem",padding:"2.625rem 1.3125rem"}},l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{className:"nobottommargin"},t.title),l.a.createElement("p",null,t.excerpt)),l.a.createElement(m.a,{className:"blog-post-header",src:t.image,alt:t.title}),l.a.createElement("hr",null),l.a.createElement("section",{dangerouslySetInnerHTML:{__html:c}}))),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"50rem"}},l.a.createElement(i.Link,{to:"/"},l.a.createElement(d.a,{icon:E.b,size:"3x"}))))},f=function(e){var t=e.settings,a=e.slug,c=Object(n.useState)({title:"",image:"",excerpt:"",html:{blocks:[]}}),r=c[0],s=c[1];return Object(n.useEffect)((function(){Object(u.a)(a,(function(e){s(e)}))}),[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{settings:t,title:r.title,description:r.excerpt,className:"stretched"}),l.a.createElement(p,{settings:t,post:r}))},b=(t.default=function(e){var t=e.data,a=t.site,s=t.allSetting,i=Object(n.useState)(s.edges.reduce((function(e,t){var a;return Object.assign({},e,((a={})[t.node.key]=t.node.value,a))}),{})||{}),m=i[0],o=i[1];return Object(n.useEffect)((function(){Object(u.c)((function(e){o(e)}))}),[]),Object(u.d)()?l.a.createElement(r.a,{settings:m},l.a.createElement(c.Router,{basepath:a.pathPrefix},l.a.createElement(g,{settings:m,path:"/"}),l.a.createElement(f,{settings:m,path:"/posts/:slug"}))):l.a.createElement(r.a,{settings:m},l.a.createElement(g,{settings:m}))},"2090157902")}}]);
//# sourceMappingURL=component---src-pages-index-js-82ce196d1824928ecfe5.js.map