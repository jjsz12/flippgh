(this.webpackJsonpflippgh=this.webpackJsonpflippgh||[]).push([[0],{101:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),i=n.n(c),s=(n(101),n(102),n(33)),l=n(6),o=n(16);function j(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),n}var d=n(88),h=n.p+"static/media/flip-pgh-weekly-tournament-black-v2.e8cdf510.svg",b=n(23),u=n.n(b),p=n(41),O=n(19),m=n.n(O),x=n(85),f=n(131),g=[{date:"2022-01-12",location:"Kickback Pinball Cafe"},{date:"2022-01-19",location:"Kickback Pinball Cafe"},{date:"2022-01-26",location:"Kickback Pinball Cafe"},{date:"2022-02-02",no_tournament_scheduled:!0,no_tournament_msg:"NO TOURNAMENT THIS WEEK"},{date:"2022-02-09",location:"Pittsburgh Pinball Dojo"},{date:"2022-02-16",location:"Kickback Pinball Cafe"},{date:"2022-02-23",location:"Pittsburgh Pinball Dojo"},{date:"2022-03-02",location:"Location TBD"},{date:"2022-03-09",location:"Location TBD"},{date:"2022-03-16",location:"Location TBD"},{date:"2022-03-23",location:"Location TBD"},{date:"2022-03-30",location:"Location TBD"}],v=function(e,t){var n=t.find((function(t){return t.date===e.date})),r=null===n||void 0===n?void 0:n.url_label;if(r)return"https://matchplay.events/live/"+r},k=n(130),y=n(1);var w=function(e){var t=e.link;return t?Object(y.jsx)(k.a,{primary:!0,as:"a",href:t,target:"_blank",rel:"noopener noreferrer",children:"Get Directions"}):Object(y.jsx)(y.Fragment,{})};var P=function(e){var t=e.link;return Object(y.jsx)(k.a,{primary:!0,as:"a",href:t,target:"_blank",rel:"noopener noreferrer",children:"Go to Matchplay"})},_=function(e){var t=e.hours,n=e.minutes,r=e.seconds;return e.completed?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("span",{children:["-",t,":",n.toString().padStart(2,"0"),":",r.toString().padStart(2,"0")]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]})};var C=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://matchplay.events/data/series/1871",e.prev=1,e.next=4,fetch("https://matchplay.events/data/series/1871");case 4:return t=e.sent,e.next=7,t.json();case 7:(n=e.sent).tournaments=n.tournaments.map((function(e){return e.date=m.a.parseZone(e.start).local().format("YYYY-MM-DD"),e})),r=g.map((function(e){return e.matchplay_link=v(e,n.tournaments),e})),a(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Error fetching data");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var c,i=function(e){var t=m()().local().format("YYYY-MM-DD");return e.find((function(e){return e.date===t&&!e.no_tournament_scheduled}))}(n);if(i){var s=m()().hours(19).minutes(0).seconds(0).milliseconds(0);console.log(s.toDate());var l="";l=m()().isAfter(s)?"Tournament in progress!":"Tournament starting soon!";var j="Kickback Pinball Cafe"===(c=i.location)?"https://goo.gl/maps/VxGNpVJoadYbCPQn7":"Pittsburgh Pinball Dojo"===c?"https://goo.gl/maps/3Gx2gYpg3xuyaLucA":void 0;return Object(y.jsxs)(f.a,{children:[Object(y.jsx)("h3",{children:l}),Object(y.jsx)("b",{children:"Location:"})," ",i.location,Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:"Start time:"})," 7pm",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{date:s.toDate(),renderer:_}),Object(y.jsx)(P,{link:i.matchplay_link}),Object(y.jsx)(w,{link:j})]})}return Object(y.jsx)(y.Fragment,{})};var Y=function(){var e=j(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(y.jsxs)("div",{className:t,children:[Object(y.jsx)(C,{}),Object(y.jsx)(d.a,{src:h}),Object(y.jsx)("h5",{children:"The Flip PGH Weekly Pinball Tournament series is held (mostly) every Wednesday at locations around the Pittsburgh area. 7pm start time. Come out and flip!"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/schedule",children:"Go to Schedule"})}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/locations",children:"Go to Location Info"})}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/rules",children:"Go to Format & Rules"})}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/results",children:"Go to Results & Stats"})})]})]})};var D=function(){var e=j(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(y.jsxs)("div",{className:t,children:[Object(y.jsx)("h1",{children:"Location Information"}),Object(y.jsx)("ul",{children:Object(y.jsxs)("li",{children:[Object(y.jsx)("b",{children:"Kickback Pinball Cafe"}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Address: 4326 Butler St, Pittsburgh, PA 15201 [",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/VxGNpVJoadYbCPQn7",children:"Google Maps"}),"]"]}),Object(y.jsxs)("li",{children:["Website:"," ",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.kickbackpgh.com/",children:"https://www.kickbackpgh.com/"})]}),Object(y.jsxs)("li",{children:["Current game list: [",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=3682&by_location_name=Kickback+Pinball+Cafe",children:"Pinball Map"}),"]"]}),Object(y.jsxs)("li",{children:["Notes:",Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Open 10am-11pm on tournament days"}),Object(y.jsx)("li",{children:"Games are coin drop; prices range from $.25 to $1"}),Object(y.jsx)("li",{children:"BYOB permitted; $5 corkage/storage fee"})]})]})]})]})}),Object(y.jsx)("ul",{children:Object(y.jsxs)("li",{children:[Object(y.jsx)("b",{children:"Pittsburgh Pinball Dojo"}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Address: 2 N Balph Ave, Bellevue, PA 15202 [",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/3Gx2gYpg3xuyaLucA",children:"Google Maps"}),"]"]}),Object(y.jsxs)("li",{children:["Website:"," ",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pittsburghpinballdojo.com/",children:"https://pittsburghpinballdojo.com/"})]}),Object(y.jsxs)("li",{children:["Current game list: [",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=10790&by_location_name=Pittsburgh+Pinball+Dojo",children:"Pinball Map"}),"]"]}),Object(y.jsxs)("li",{children:["Notes:",Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Open ??-?? on tournament days"}),Object(y.jsx)("li",{children:"$15 venue cover fee in addition to tournament entry fee ($20 total); all games are on free play"}),Object(y.jsx)("li",{children:"Masks required"}),Object(y.jsx)("li",{children:"BYOB permitted (no additional fee)"})]})]})]})]})})]})};var S=function(){var e=j(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(r.useEffect)((function(){}),[]),Object(y.jsxs)("div",{className:t,children:[Object(y.jsx)("h1",{children:"Results & Stats"}),Object(y.jsx)("ul",{children:Object(y.jsx)("li",{children:"Under construction -- coming soon"})})]})};var B=function(){var e=j(),t="";return t=e.width&&e.width>640?"desktop-container":"mobile-container",Object(y.jsxs)("div",{className:t,children:[Object(y.jsx)("h1",{children:"Format & Rules"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"3 strike knockout"}),Object(y.jsx)("li",{children:"Random groups of 3 or 4"}),Object(y.jsxs)("li",{children:["Number of strikes per round varies based on total player count:",Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Less than 16 players:",Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"4-player groups: Bottom two players get a strike"}),Object(y.jsx)("li",{children:"3-player groups: Bottom player gets a strike"})]})]}),Object(y.jsxs)("li",{children:["16 players or more:",Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"4-player groups: Bottom two players get a strike"}),Object(y.jsx)("li",{children:"3-player groups: Bottom two players get a strike"})]})]})]})]}),Object(y.jsxs)("li",{children:["If a vareity of machine eras are available, rounds will alternate between older and newer games",Object(y.jsx)("ul",{children:Object(y.jsx)("li",{children:"Note: this may be subject to modification at the discretion of the tournament director due to time limitations"})})]}),Object(y.jsx)("li",{children:"Tournament starts at 7pm"}),Object(y.jsx)("li",{children:"$5 entry fee, payouts to top 3 (60/30/10%)"}),Object(y.jsx)("li",{children:"IFPA endorsed"}),Object(y.jsxs)("li",{children:["Plunge extra balls",Object(y.jsx)("ul",{children:Object(y.jsx)("li",{children:"You may set up any skill shot beforehand, but can't touch the machine after plunging"})})]}),Object(y.jsxs)("li",{children:["The"," ",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ifpapinball.com/rules/",children:"PAPA/IFPA ruleset"})," ","will be used for any specific rulings, with the following modifications:",Object(y.jsx)("ul",{children:Object(y.jsx)("li",{children:'"Good Sportsmanship" exception: if someone shouts \u201cBall Save\u201d to a player who starts walking away from their machine, neither party will be penalized for providing / receiving coaching'})})]})]})]})},L=function(e,t){var n=t.find((function(t){return t.date===e.date})),r=null===n||void 0===n?void 0:n.url_label;if(r)return"https://matchplay.events/live/"+r},M=function(e){return e.map((function(e){var t=m()(e.date).format("ddd, M/D/YYYY");return e.no_tournament_scheduled?Object(y.jsxs)("li",{children:[t," - ",e.no_tournament_msg]},t):e.matchplay_link?Object(y.jsxs)("li",{children:[t," - ",e.location," [",Object(y.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.matchplay_link,children:"Matchplay"}),"]"]},t):Object(y.jsxs)("li",{children:[t," - ",e.location]},t)}))};var T=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://matchplay.events/data/series/1871",e.prev=1,e.next=4,fetch("https://matchplay.events/data/series/1871");case 4:return t=e.sent,e.next=7,t.json();case 7:(n=e.sent).tournaments=n.tournaments.map((function(e){return e.date=m.a.parseZone(e.start).local().format("YYYY-MM-DD"),e})),r=g.map((function(e){return e.matchplay_link=L(e,n.tournaments),e})),a(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Error fetching data");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var c=j(),i="";i=c.width&&c.width>640?"desktop-container":"mobile-container";var s=n.filter((function(e){return m()(e.date)>=m()().startOf("day")})),l=n.filter((function(e){return m()(e.date)<m()().startOf("day")}));return Object(y.jsxs)("div",{className:i,children:[Object(y.jsx)("h1",{children:"Upcoming Schedule"}),Object(y.jsx)("ul",{children:M(s)}),Object(y.jsx)("h1",{children:"Past Dates"}),Object(y.jsx)("ul",{children:M(l)})]})},G=n(128),I=n.p+"static/media/flip-pgh-logo-white.025b1149.svg";var N=function(){var e=Object(l.f)(),t=Object(l.e)(),n=j();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(G.a.Item,{name:"logo",onClick:function(){e("/")},children:n.width&&n.width>640?Object(y.jsx)(d.a,{src:I}):Object(y.jsx)(d.a,{src:I,style:{height:50,width:50}})}),Object(y.jsx)(G.a.Item,{name:"home",active:"/"===t.pathname,onClick:function(){e("/")},children:"Home"}),Object(y.jsx)(G.a.Item,{name:"schedule",active:"/schedule"===t.pathname,onClick:function(){e("/schedule")},children:"Schedule"}),Object(y.jsx)(G.a.Item,{name:"locations",active:"/locations"===t.pathname,onClick:function(){e("/locations")},children:"Location Info"}),Object(y.jsx)(G.a.Item,{name:"rules",active:"/rules"===t.pathname,onClick:function(){e("/rules")},children:"Format & Rules"}),Object(y.jsx)(G.a.Item,{name:"results",active:"/results"===t.pathname,onClick:function(){e("/results")},children:"Results & Stats"})]})};var E=function(){return Object(y.jsx)(G.a,{fixed:"top",inverted:!0,style:{overflow:"auto"},children:Object(y.jsx)(N,{})})};var F=function(){return Object(y.jsx)(G.a,{inverted:!0,vertical:!0,fixed:"left",style:{overflow:"auto"},children:Object(y.jsx)(N,{})})};var A=function(){var e=j();return Object(y.jsxs)(s.a,{children:[e.width&&e.width>640?Object(y.jsx)(F,{}):Object(y.jsx)(E,{}),Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{path:"/",element:Object(y.jsx)(Y,{})}),Object(y.jsx)(l.a,{path:"/schedule",element:Object(y.jsx)(T,{})}),Object(y.jsx)(l.a,{path:"/locations",element:Object(y.jsx)(D,{})}),Object(y.jsx)(l.a,{path:"/rules",element:Object(y.jsx)(B,{})}),Object(y.jsx)(l.a,{path:"/results",element:Object(y.jsx)(S,{})})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(A,{})}),document.getElementById("root")),K()}},[[115,1,2]]]);
//# sourceMappingURL=main.116e2540.chunk.js.map