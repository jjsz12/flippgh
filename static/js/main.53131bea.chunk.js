(this.webpackJsonpflippgh=this.webpackJsonpflippgh||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(31),a=n.n(r),s=(n(96),n(97),n(34)),l=n(3),o=n(20);function h(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),n}var d=n(124),j=n.p+"static/media/flip-pgh-weekly-tournament-black-v2.e8cdf510.svg",u=n(1);var b=function(){var e=h(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)(d.a,{src:j}),Object(u.jsx)("h5",{children:"The Flip PGH Weekly Pinball Tournament series is held (mostly) every Wednesday at locations around the Pittsburgh area. 7pm start time. Come out and flip!"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/schedule",children:"Go to Schedule"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/results",children:"Go to Results & Stats"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/rules",children:"Go to Format & Rules"})})]})]})},f=n(47),m=n.n(f),O=n(61);var p=function(){var e=h(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(c.useEffect)((function(){}),[]),Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("h1",{children:"Results & Stats"}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:"Under construction -- coming soon"})})]})};var x=function(){var e=h(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("h1",{children:"Format & Rules"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"3 strike knockout"}),Object(u.jsx)("li",{children:"Random groups of 3 or 4"}),Object(u.jsx)("li",{children:"Bottom two players from each group get a strike"}),Object(u.jsx)("li",{children:"Tournament starts at 7pm"}),Object(u.jsx)("li",{children:"$5 entry fee, payouts to top 3"}),Object(u.jsx)("li",{children:"IFPA endorsed"}),Object(u.jsxs)("li",{children:["Plunge extra balls",Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:"You may set up any skill shot beforehand, but can't touch the machine after plunging"})})]}),Object(u.jsxs)("li",{children:["The"," ",Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ifpapinball.com/rules/",children:"PAPA/IFPA ruleset"})," ","will be used for any specific rulings, with the following modifications:",Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:'"Good Sportsmanship" exception: if someone shouts \u201cBall Save\u201d to a player who starts walking away from their machine, neither party will be penalized for providing / receiving coaching'})})]})]})]})},v=n(35),w=n.n(v),g=[{date:"2022-01-12",location:"Kickback Pinball Cafe"},{date:"2022-01-19",location:"Kickback Pinball Cafe"},{date:"2022-01-26",location:"Kickback Pinball Cafe"},{date:"2022-02-02",no_tournament_scheduled:!0,no_tournament_msg:"NO TOURNAMENT THIS WEEK"},{date:"2022-02-09",location:"Pittsburgh Pinball Dojo"},{date:"2022-02-16",location:"Kickback Pinball Cafe"},{date:"2022-02-23",location:"Pittsburgh Pinball Dojo"}],k=function(e,t){var n=t.find((function(t){return t.date===e.date})),c=null===n||void 0===n?void 0:n.url_label;if(c)return"https://matchplay.events/live/"+c},y=function(e){return e.map((function(e){var t=w()(e.date).format("ddd, M/D/YYYY");return e.no_tournament_scheduled?Object(u.jsxs)("li",{children:[t," - ",e.no_tournament_msg]},t):e.matchplay_link?Object(u.jsxs)("li",{children:[t," - ",e.location," [",Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.matchplay_link,children:"Matchplay"}),"]"]},t):Object(u.jsxs)("li",{children:[t," - ",e.location]},t)}))};var P=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(m.a.mark((function e(){var t,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://matchplay.events/data/series/1871",e.prev=1,e.next=4,fetch("https://matchplay.events/data/series/1871");case 4:return t=e.sent,e.next=7,t.json();case 7:(n=e.sent).tournaments=n.tournaments.map((function(e){return e.date=w.a.parseZone(e.start).local().format("YYYY-MM-DD"),e})),c=g.map((function(e){return e.matchplay_link=k(e,n.tournaments),e})),i(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Error fetching data");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=h(),a="";a=r.width&&r.width>640?"desktop-container":"mobile-container";var s=n.filter((function(e){return w()(e.date)>=w()().startOf("day")})),l=n.filter((function(e){return w()(e.date)<w()().startOf("day")}));return Object(u.jsxs)("div",{className:a,children:[Object(u.jsx)("h1",{children:"Upcoming Schedule"}),Object(u.jsx)("ul",{children:y(s)}),Object(u.jsx)("h1",{children:"Past Dates"}),Object(u.jsx)("ul",{children:y(l)})]})},_=n(123),C=n.p+"static/media/flip-pgh-logo-white.025b1149.svg";var S=function(){var e=Object(l.f)(),t=Object(l.e)(),n=h();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(_.a.Item,{name:"logo",onClick:function(){e("/")},children:n.width&&n.width>640?Object(u.jsx)(d.a,{src:C}):Object(u.jsx)(d.a,{src:C,style:{height:50,width:50}})}),Object(u.jsx)(_.a.Item,{name:"home",active:"/"===t.pathname,onClick:function(){e("/")},children:"Home"}),Object(u.jsx)(_.a.Item,{name:"schedule",active:"/schedule"===t.pathname,onClick:function(){e("/schedule")},children:"Schedule"}),Object(u.jsx)(_.a.Item,{name:"results",active:"/results"===t.pathname,onClick:function(){e("/results")},children:"Results & Stats"}),Object(u.jsx)(_.a.Item,{name:"rules",active:"/rules"===t.pathname,onClick:function(){e("/rules")},children:"Format & Rules"})]})};var F=function(){return Object(u.jsx)(_.a,{fixed:"top",inverted:!0,style:{overflow:"auto"},children:Object(u.jsx)(S,{})})};var E=function(){return Object(u.jsx)(_.a,{inverted:!0,vertical:!0,fixed:"left",style:{overflow:"auto"},children:Object(u.jsx)(S,{})})};var I=function(){var e=h();return Object(u.jsxs)(s.a,{children:[e.width&&e.width>640?Object(u.jsx)(E,{}):Object(u.jsx)(F,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(b,{})}),Object(u.jsx)(l.a,{path:"/schedule",element:Object(u.jsx)(P,{})}),Object(u.jsx)(l.a,{path:"/results",element:Object(u.jsx)(p,{})}),Object(u.jsx)(l.a,{path:"/rules",element:Object(u.jsx)(x,{})})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),T()},96:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.53131bea.chunk.js.map