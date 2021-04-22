(this["webpackJsonpanime-api-react"]=this["webpackJsonpanime-api-react"]||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(6),r=s.n(n),i=(s(11),s(2)),l=s.n(i),j=s(5),o=s(3),m=s.p+"static/media/logo.36a9fe01.png",d=s(0),b=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"row justify-content-start ml-2",children:Object(d.jsx)("img",{src:m,alt:"Logo",height:"150px"})})})};var u=function(e){var t=e.topAnimeList;return Object(d.jsxs)("aside",{className:"jumbotron jumbotron-fluid",children:[Object(d.jsx)("h3",{className:"ml-3 mb-3",children:Object(d.jsx)("strong",{children:"Top Anime"})}),Object(d.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"list-group-item list-group-item-action",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[e.title,Object(d.jsxs)("span",{className:"badge badge-success badge-pill ml-2",children:[Object(d.jsx)("i",{class:"fas fa-star pr-1"}),e.score]})]})},e.mal_id)}))})]})};var p=function(e){var t=e.anime;return Object(d.jsxs)("div",{className:"card mx-2 my-3 py-0",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:t.image_url,alt:t.title+" Image",className:"card-img-top",style:{height:"350px"}}),Object(d.jsx)("div",{className:"card-body d-flex align-items-center text-center justify-content-center",children:Object(d.jsx)("h5",{className:"card-title mb-0",children:Object(d.jsx)("strong",{children:t.title})})}),Object(d.jsxs)("div",{className:"align-bottom d-grid mx-3 mb-3",children:[Object(d.jsxs)("ul",{className:"list-group mb-3",children:[Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(d.jsx)("i",{className:"fas fa-tv"}),"Type",Object(d.jsx)("span",{className:"badge bg-primary rounded-pill",children:t.type})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(d.jsx)("i",{className:"fas fa-film"}),"Episodes",Object(d.jsx)("span",{className:"badge bg-primary rounded-pill",children:t.episodes})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(d.jsx)("i",{className:"fas fa-users"}),"PG Rating",Object(d.jsx)("span",{className:"badge bg-primary rounded-pill",children:t.rated?t.rated:"No rating"})]}),Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(d.jsx)("i",{className:"fas fa-star"}),"Score",Object(d.jsx)("span",{className:"badge bg-success rounded-pill",children:t.score})]})]}),Object(d.jsx)("div",{className:"d-grid",children:Object(d.jsx)("a",{type:"button",href:t.url,className:"btn btn-secondary btn-block",target:"_blank",rel:"noreferrer",children:"More details"})})]})]})};var h=function(e){return Object(d.jsxs)("main",{children:[Object(d.jsx)("hr",{className:"mx-2 my-0"}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-4",children:Object(d.jsx)("form",{className:"",onSubmit:e.searchHandler,children:Object(d.jsxs)("div",{className:"input-group my-2 mx-2",children:[Object(d.jsx)("input",{type:"search",className:"form-control",placeholder:"Search anime...",value:e.searchQuery,required:!0,onChange:function(t){return e.setSearchQuery(t.target.value)}}),Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("button",{className:"btn btn-primary ml-0",type:"submit",children:"Search"})})]})})})}),Object(d.jsx)("hr",{className:"mx-2 my-0"}),Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-start",children:e.animeList.map((function(e){return Object(d.jsx)(p,{anime:e},e.mal_id)}))})]})};var x=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),r=Object(o.a)(n,2),i=r[0],m=r[1],p=Object(c.useState)(""),x=Object(o.a)(p,2),f=x[0],O=x[1],g=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity").then((function(e){return e.json()}));case 2:t=e.sent,m(t.top.slice(0,5));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&order_by=title&sort=asc&limit=10")).then((function(e){return e.json()}));case 2:s=e.sent,a(s.results),console.log(s.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"content-wrap",children:[Object(d.jsx)(u,{topAnimeList:i}),Object(d.jsx)(h,{searchHandler:function(e){e.preventDefault(),console.log(f),N(f)},searchQuery:f,setSearchQuery:O,animeList:s})]})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7c18195f.chunk.js.map