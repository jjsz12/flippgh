(this.webpackJsonpflippgh=this.webpackJsonpflippgh||[]).push([[0],{110:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(40),i=n.n(c),l=(n(110),n(111),n(38)),s=n(7),o=n(14);function j(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),n}var d=n(143),u=n(97),h=n.p+"static/media/flip-pgh-weekly-tournament-black-v2.df55a2c6.svg",b=n(61),p=n(15),m=n.n(p),x=n(93),O=n(142),f=n(19),v=n.n(f),g=n(36),y=[{date:"2022-01-12",location:"Kickback Pinball Cafe"},{date:"2022-01-19",location:"Kickback Pinball Cafe"},{date:"2022-01-26",location:"Kickback Pinball Cafe"},{date:"2022-02-02",no_tournament_scheduled:!0,no_tournament_msg:"NO TOURNAMENT THIS WEEK"},{date:"2022-02-09",location:"Pittsburgh Pinball Dojo"},{date:"2022-02-16",location:"Kickback Pinball Cafe"},{date:"2022-02-23",location:"Pittsburgh Pinball Dojo"},{date:"2022-03-02",location:"Kickback Pinball Cafe"},{date:"2022-03-09",location:"Kickback Pinball Cafe"},{date:"2022-03-16",location:"Location TBD"},{date:"2022-03-23",location:"Location TBD"},{date:"2022-03-30",location:"Location TBD"}],k=function(e,t){var n=t.find((function(t){return t.date===e.date})),r=null===n||void 0===n?void 0:n.url_label;if(r)return"https://matchplay.events/live/"+r},_=function(e,t){var n=t.find((function(t){return t.date===e.date})),r=null===n||void 0===n?void 0:n.url_label;if(r)return r},w=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.matchplay_url_label){e.next=11;break}return n="https://matchplay.events/data/tournaments/".concat(t.matchplay_url_label,"/standings"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(!((a=e.sent).length>0)){e.next=11;break}return c=a[0].name,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e,t){var n=t.find((function(t){return t.last_event_date===e.date})),r=null===n||void 0===n?void 0:n.tournament_id;if(r)return"https://www.ifpapinball.com/tournaments/view.php?t="+r},P=n(94),S=n(1),D=a.a.createContext({});function T(e){var t=e.children,n=Object(r.useState)([]),a=Object(o.a)(n,2),c=a[0],i=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(g.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://matchplay.events/data/series/1871",e.prev=1,e.next=4,fetch("https://matchplay.events/data/series/1871");case 4:return t=e.sent,e.next=7,t.json();case 7:return(n=e.sent).tournaments=n.tournaments.map((function(e){return e.date=m.a.parseZone(e.start).local().format("YYYY-MM-DD"),e})),e.next=11,Promise.all(y.map(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.matchplay_link=k(t,n.tournaments),t.matchplay_url_label=_(t,n.tournaments),e.next=4,w(t);case 4:return t.matchplay_winner=e.sent,t.ifpa_link=C(t,P.tournament),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:r=e.sent,i(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("Error fetching data");case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=Object(r.useCallback)((function(){return{schedule:c}}),[c]);return Object(S.jsx)(D.Provider,{value:l(),children:t})}var Y=n(141);var F=function(e){var t=e.link;return t?Object(S.jsx)(Y.a,{primary:!0,as:"a",href:t,target:"_blank",rel:"noopener noreferrer",style:{marginBottom:"0.5rem"},children:"Get Directions"}):Object(S.jsx)(S.Fragment,{})};var B=function(e){var t=e.link;return Object(S.jsx)(Y.a,{primary:!0,as:"a",href:t,target:"_blank",rel:"noopener noreferrer",style:{marginBottom:"0.5rem"},children:"Go to Matchplay"})},G=n(140);function I(e){for(var t=e.count,n=void 0===t?5:t,r=e.width,a=void 0===r?"100%":r,c=[],i=0;i<n;i++)c.push(Object(S.jsx)(G.a.Line,{length:"very long"},i));return Object(S.jsx)("div",{style:{width:a},children:Object(S.jsx)(G.a,{style:{width:a},children:c})})}var M=function(e){var t=e.hours,n=e.minutes,r=e.seconds;return e.completed?null:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("span",{children:["-",t,":",n.toString().padStart(2,"0"),":",r.toString().padStart(2,"0")]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]})};var H=function(){var e,t=Object(r.useContext)(D).schedule;if(t&&0===t.length)return Object(S.jsx)("div",{style:{paddingBottom:"1rem"},children:Object(S.jsxs)(O.a,{compact:!0,children:[Object(S.jsx)("h3",{children:"Next Tournament"}),Object(S.jsx)(I,{width:"285px"})]})});if(t){var n=function(e){var t,n=null,r=Object(b.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(m()(a.date)>=m()().startOf("day")&&!a.no_tournament_scheduled){n=a;break}}}catch(c){r.e(c)}finally{r.f()}return n}(t);if(n){var a=m()(n.date).hours(19).minutes(0).seconds(0).milliseconds(0),c="",i=!1;m()().local().format("YYYY-MM-DD")!==n.date?c="Next Tournament":m()().isAfter(a)?c="Tournament in progress!":(c="Tournament starting soon!",i=!0);var l="Kickback Pinball Cafe"===(e=n.location)?"https://goo.gl/maps/VxGNpVJoadYbCPQn7":"Pittsburgh Pinball Dojo"===e?"https://goo.gl/maps/3Gx2gYpg3xuyaLucA":void 0;return Object(S.jsx)("div",{style:{paddingBottom:"1rem"},children:Object(S.jsxs)(O.a,{compact:!0,children:[Object(S.jsx)("h3",{children:c}),Object(S.jsx)("b",{children:"Date: "})," ",m()(n.date).format("dddd, M/D/YYYY"),Object(S.jsx)("br",{}),Object(S.jsx)("b",{children:"Location: "})," ",n.location,Object(S.jsx)("br",{}),Object(S.jsx)("b",{children:"Start time:"})," 7pm",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),i?Object(S.jsx)(x.a,{date:a.toDate(),renderer:M}):null,Object(S.jsx)(B,{link:n.matchplay_link}),Object(S.jsx)(F,{link:l})]})})}}return Object(S.jsx)(S.Fragment,{})};var A=function(e){var t=e.children,n=j(),r={};return r=n.width&&n.width>640?{marginLeft:"210px",padding:"2rem"}:{marginTop:"76px",padding:"2rem"},Object(S.jsx)("div",{style:r,children:Object(S.jsx)(d.a,{children:Object(S.jsx)(d.a.Column,{mobile:16,tablet:16,computer:16,children:t})})})};var L=function(){return Object(S.jsxs)(A,{children:[Object(S.jsx)(d.a,{children:Object(S.jsxs)(d.a.Row,{children:[Object(S.jsx)(d.a.Column,{mobile:16,tablet:16,computer:7,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(S.jsx)(H,{})}),Object(S.jsx)(d.a.Column,{mobile:16,tablet:16,computer:9,children:Object(S.jsx)(u.a,{src:h})})]})}),Object(S.jsx)("h5",{children:"The Flip PGH Weekly Pinball Tournament series is held (mostly) every Wednesday at locations around the Pittsburgh area. 7pm start time. Come out and flip!"}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(l.b,{to:"/schedule",children:"Go to Schedule"})}),Object(S.jsx)("li",{children:Object(S.jsx)(l.b,{to:"/locations",children:"Go to Location Info"})}),Object(S.jsx)("li",{children:Object(S.jsx)(l.b,{to:"/rules",children:"Go to Format & Rules"})}),Object(S.jsx)("li",{children:Object(S.jsx)(l.b,{to:"/results",children:"Go to Results & Stats"})})]})]})};var E=function(){return Object(S.jsxs)(A,{children:[Object(S.jsx)("h1",{children:"Location Information"}),Object(S.jsx)("ul",{children:Object(S.jsxs)("li",{children:[Object(S.jsx)("b",{children:"Kickback Pinball Cafe"}),Object(S.jsxs)("ul",{children:[Object(S.jsxs)("li",{children:["Address: 4326 Butler St, Pittsburgh, PA 15201 [",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/VxGNpVJoadYbCPQn7",children:"Google Maps"}),"]"]}),Object(S.jsxs)("li",{children:["Website:"," ",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.kickbackpgh.com/",children:"https://www.kickbackpgh.com/"})]}),Object(S.jsxs)("li",{children:["Current game list: [",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=3682&by_location_name=Kickback+Pinball+Cafe",children:"Pinball Map"}),"]"]}),Object(S.jsxs)("li",{children:["Notes:",Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Open 10am-11pm on tournament days"}),Object(S.jsx)("li",{children:"Games are coin drop; prices range from $.25 to $1"}),Object(S.jsx)("li",{children:"BYOB permitted; $5 corkage/storage fee"}),Object(S.jsx)("li",{children:Object(S.jsx)("b",{children:Object(S.jsxs)("i",{children:["Special thanks to"," ",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://pghpinball.com/",children:"PGH Pinball"})," ","for sponsoring the IFPA endorsement fees!"]})})})]})]})]})]})}),Object(S.jsx)("ul",{children:Object(S.jsxs)("li",{children:[Object(S.jsx)("b",{children:"Pittsburgh Pinball Dojo"}),Object(S.jsxs)("ul",{children:[Object(S.jsxs)("li",{children:["Address: 2 N Balph Ave, Bellevue, PA 15202 [",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/3Gx2gYpg3xuyaLucA",children:"Google Maps"}),"]"]}),Object(S.jsxs)("li",{children:["Website:"," ",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pittsburghpinballdojo.com/",children:"https://pittsburghpinballdojo.com/"})]}),Object(S.jsxs)("li",{children:["Current game list: [",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=10790&by_location_name=Pittsburgh+Pinball+Dojo",children:"Pinball Map"}),"]"]}),Object(S.jsxs)("li",{children:["Notes:",Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Open 6-11pm on tournament days"}),Object(S.jsx)("li",{children:"$15 venue cover fee in addition to tournament entry fee ($20 total); all games are on free play"}),Object(S.jsx)("li",{children:"Masks required"}),Object(S.jsx)("li",{children:"BYOB permitted (no additional fee)"}),Object(S.jsx)("li",{children:Object(S.jsx)("b",{children:Object(S.jsx)("i",{children:"Special thanks to the Pittsburgh Pinball Dojo for sponsoring the IFPA endorsement fees!"})})})]})]})]})]})})]})},z=n(139),K=n(56),N=n(137),R=function(e){var t=[];return e.forEach((function(e){1===e.position&&t.push({player:e.name,medal:"gold"}),2===e.position&&t.push({player:e.name,medal:"silver"}),3===e.position&&t.push({player:e.name,medal:"bronze"})})),t};function U(){var e=Object(r.useContext)(D).schedule,t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){var t=[];function n(){return(n=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Promise.all(t.map(function(){var e=Object(g.a)(v.a.mark((function e(t){var r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://matchplay.events/data/tournaments/".concat(t,"/standings"),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n.push.apply(n,R(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&e.forEach((function(e){e.matchplay_winner&&e.matchplay_url_label&&t.push(e.matchplay_url_label)})),function(){n.apply(this,arguments)}()}),[e]);var i=[];return a.forEach((function(e){var t=i.findIndex((function(t){return t.player===e.player}));if(-1!==t){var n=i[t];"gold"===e.medal&&n.goldCount++,"silver"===e.medal&&n.silverCount++,"bronze"===e.medal&&n.bronzeCount++,i[t]=n}else{var r={player:e.player,bronzeCount:0,silverCount:0,goldCount:0};"gold"===e.medal&&r.goldCount++,"silver"===e.medal&&r.silverCount++,"bronze"===e.medal&&r.bronzeCount++,i.push(r)}})),i.sort((function(e,t){var n=3*e.goldCount+2*e.silverCount+e.bronzeCount;return 3*t.goldCount+2*t.silverCount+t.bronzeCount-n})),Object(S.jsxs)(N.a,{celled:!0,unstackable:!0,children:[Object(S.jsx)(N.a.Header,{children:Object(S.jsxs)(N.a.Row,{children:[Object(S.jsx)(N.a.HeaderCell,{children:"Player"}),Object(S.jsx)(N.a.HeaderCell,{children:"Medals"}),Object(S.jsx)(N.a.HeaderCell,{children:"Points"})]})}),Object(S.jsx)(N.a.Body,{children:i.map((function(e){for(var t=0,n=[],r=0;r<e.goldCount;r++)n.push(Object(S.jsx)(K.a,{name:"trophy",color:"yellow"},t)),t++;for(var a=0;a<e.silverCount;a++)n.push(Object(S.jsx)(K.a,{name:"trophy",color:"grey"},t)),t++;for(var c=0;c<e.bronzeCount;c++)n.push(Object(S.jsx)(K.a,{name:"trophy",color:"brown"},t)),t++;return Object(S.jsxs)(N.a.Row,{children:[Object(S.jsx)(N.a.Cell,{children:e.player}),Object(S.jsx)(N.a.Cell,{children:n}),Object(S.jsx)(N.a.Cell,{children:3*e.goldCount+2*e.silverCount+e.bronzeCount})]},e.player)}))})]})}function W(){return Object(S.jsx)("div",{children:"Under construction -- coming soon"})}function $(){var e=Object(r.useContext)(D).schedule,t=function(e){if(e.ifpa_link)return[" [",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.ifpa_link,children:"IFPA"},"ifpa"),"]"]};return Object(S.jsxs)(N.a,{celled:!0,unstackable:!0,children:[Object(S.jsx)(N.a.Header,{children:Object(S.jsxs)(N.a.Row,{children:[Object(S.jsx)(N.a.HeaderCell,{children:"Date"}),Object(S.jsx)(N.a.HeaderCell,{children:"Champion"}),Object(S.jsx)(N.a.HeaderCell,{children:"Details"})]})}),Object(S.jsx)(N.a.Body,{children:e?e.map((function(e){return e.matchplay_winner?Object(S.jsxs)(N.a.Row,{children:[Object(S.jsx)(N.a.Cell,{children:e.date}),Object(S.jsxs)(N.a.Cell,{children:[Object(S.jsx)(K.a,{name:"trophy",color:"yellow"})," ",e.matchplay_winner]}),Object(S.jsxs)(N.a.Cell,{children:["[",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.matchplay_link,children:"Matchplay"},"matchplay"),"]",t(e)]})]},e.date):null})):null})]})}var J=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=function(e,t){var r=t.index;void 0!==r&&a(n===+r?-1:+r)};return Object(S.jsxs)(A,{children:[Object(S.jsx)("h1",{children:"Results & Stats"}),Object(S.jsxs)(z.a,{styled:!0,fluid:!0,children:[Object(S.jsxs)(z.a.Title,{active:0===n,index:0,onClick:c,children:[Object(S.jsx)(K.a,{name:"dropdown"}),"Tournament Stats"]}),Object(S.jsx)(z.a.Content,{active:0===n,children:Object(S.jsxs)(d.a,{stackable:!0,columns:2,children:[Object(S.jsxs)(d.a.Column,{children:[Object(S.jsx)("h3",{children:"Medal Leaderboard"}),Object(S.jsx)(U,{})]}),Object(S.jsxs)(d.a.Column,{children:[Object(S.jsx)("h3",{children:"Past Champions"}),Object(S.jsx)($,{})]})]})}),Object(S.jsxs)(z.a.Title,{active:1===n,index:1,onClick:c,children:[Object(S.jsx)(K.a,{name:"dropdown"}),"Machine Stats"]}),Object(S.jsx)(z.a.Content,{active:1===n,children:Object(S.jsx)(W,{})})]})]})};var V=function(){return Object(S.jsxs)(A,{children:[Object(S.jsx)("h1",{children:"Format & Rules"}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Tournament starts at 7pm"}),Object(S.jsx)("li",{children:"$5 entry fee"}),Object(S.jsx)("li",{children:"IFPA endorsed"}),Object(S.jsxs)("li",{children:["3 strike knockout",Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Random groups of 3 or 4 players are formed each round"}),Object(S.jsx)("li",{children:"Bottom one or two players from each group receive a strike"}),Object(S.jsx)("li",{children:"Players are eliminated from the tournament after receiving three strikes"})]})]}),Object(S.jsx)("li",{children:"Number of strikes per round varies based on different factors, including total player count, venue closing time, average machine playing time, etc. One strike given in three-player groups will be preferred, but may be altered to two strikes given in three-player groups at the discretion of the tournament director due to these factors."}),Object(S.jsxs)("li",{children:["Plunge extra balls",Object(S.jsx)("ul",{children:Object(S.jsx)("li",{children:"You may set up any skill shot beforehand, but can't touch the machine after plunging"})})]}),Object(S.jsxs)("li",{children:["If a variety of machine eras are available, game selection each round will alternate between groups of older and newer games",Object(S.jsx)("ul",{children:Object(S.jsx)("li",{children:"Note: Machines included in the tournament and the strict alternation between each machine group may be subject to modification at the discretion of the tournament director due to time limitations"})})]}),Object(S.jsx)("li",{children:"Payouts to top 3 players (60/30/10% -- rounded to a multiple of $5)"}),Object(S.jsxs)("li",{children:["The"," ",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ifpapinball.com/rules/",children:"PAPA/IFPA ruleset"})," ","will be used for any specific rulings, with the following modifications:",Object(S.jsx)("ul",{children:Object(S.jsx)("li",{children:'"Good Sportsmanship" exception: if someone shouts \u201cBall Save\u201d to a player who starts walking away from their machine, neither party will be penalized for providing / receiving coaching'})})]})]})]})},Q=function(e){return e.map((function(e){var t=m()(e.date).format("ddd, M/D/YYYY");return e.no_tournament_scheduled?Object(S.jsxs)("li",{children:[t," - ",e.no_tournament_msg]},t):e.matchplay_link?Object(S.jsxs)("li",{children:[t," (7pm) - ",e.location," [",Object(S.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.matchplay_link,children:"Matchplay"}),"]"]},t):Object(S.jsxs)("li",{children:[t," - ",e.location]},t)}))};var q=function(){var e=Object(r.useContext)(D).schedule;if(e&&0===e.length)return Object(S.jsxs)(A,{children:[Object(S.jsx)("h1",{children:"Upcoming Schedule"}),Object(S.jsx)(I,{}),Object(S.jsx)("h1",{children:"Past Dates"}),Object(S.jsx)(I,{})]});if(void 0!==e){var t=e.filter((function(e){return m()(e.date)>=m()().startOf("day")})),n=e.filter((function(e){return m()(e.date)<m()().startOf("day")&&!e.no_tournament_scheduled}));return Object(S.jsxs)(A,{children:[Object(S.jsx)("h1",{children:"Upcoming Schedule"}),Object(S.jsx)("ul",{children:Q(t)}),Object(S.jsx)("h1",{children:"Past Dates"}),Object(S.jsx)("ul",{children:Q(n)})]})}return Object(S.jsx)(S.Fragment,{})},Z=n(136),X=n.p+"static/media/flip-pgh-logo-white.025b1149.svg";var ee=function(){var e=Object(s.f)(),t=Object(s.e)(),n=j();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Z.a.Item,{name:"logo",onClick:function(){e("/")},children:n.width&&n.width>640?Object(S.jsx)(u.a,{src:X}):Object(S.jsx)(u.a,{src:X,style:{height:50,width:50}})}),Object(S.jsx)(Z.a.Item,{name:"home",active:"/"===t.pathname,onClick:function(){e("/")},children:"Home"}),Object(S.jsx)(Z.a.Item,{name:"schedule",active:"/schedule"===t.pathname,onClick:function(){e("/schedule")},children:"Schedule"}),Object(S.jsx)(Z.a.Item,{name:"locations",active:"/locations"===t.pathname,onClick:function(){e("/locations")},children:"Location Info"}),Object(S.jsx)(Z.a.Item,{name:"rules",active:"/rules"===t.pathname,onClick:function(){e("/rules")},children:"Format & Rules"}),Object(S.jsx)(Z.a.Item,{name:"results",active:"/results"===t.pathname,onClick:function(){e("/results")},children:"Results & Stats"})]})};var te=function(){return Object(S.jsx)(Z.a,{fixed:"top",inverted:!0,style:{overflow:"auto"},children:Object(S.jsx)(ee,{})})};var ne=function(){return Object(S.jsx)(Z.a,{inverted:!0,vertical:!0,fixed:"left",style:{overflow:"auto"},children:Object(S.jsx)(ee,{})})};var re=function(){var e=j();return Object(S.jsx)(T,{children:Object(S.jsxs)(l.a,{children:[e.width&&e.width>640?Object(S.jsx)(ne,{}):Object(S.jsx)(te,{}),Object(S.jsxs)(s.c,{children:[Object(S.jsx)(s.a,{path:"/",element:Object(S.jsx)(L,{})}),Object(S.jsx)(s.a,{path:"/schedule",element:Object(S.jsx)(q,{})}),Object(S.jsx)(s.a,{path:"/locations",element:Object(S.jsx)(E,{})}),Object(S.jsx)(s.a,{path:"/rules",element:Object(S.jsx)(V,{})}),Object(S.jsx)(s.a,{path:"/results",element:Object(S.jsx)(J,{})})]})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(re,{})}),document.getElementById("root")),ae()},94:function(e){e.exports=JSON.parse('{"search":"Flip PGH","tournament":[{"tournament_id":"46649","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-01-26"},{"tournament_id":"46648","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-01-12"},{"tournament_id":"46647","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-01-19"}]}')}},[[124,1,2]]]);
//# sourceMappingURL=main.65e42b8d.chunk.js.map