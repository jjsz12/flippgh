(this.webpackJsonpflippgh=this.webpackJsonpflippgh||[]).push([[0],{120:function(e){e.exports=JSON.parse('{"search":"Flip PGH","tournament":[{"tournament_id":"47490","tournament_name":"Flip PGH Weekly: Dojo","country_code":"US","country_name":"United States","city":"Bellevue","event_count":"1","event_type":"Tournament","last_event_date":"2022-02-09"},{"tournament_id":"46648","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-01-12"},{"tournament_id":"47492","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-02-16"},{"tournament_id":"46647","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-01-19"},{"tournament_id":"46649","tournament_name":"Flip PGH Weekly: Kickback","country_code":"US","country_name":"United States","city":"Pittsburgh","event_count":"1","event_type":"Tournament","last_event_date":"2022-01-26"}]}')},121:function(e){e.exports=JSON.parse('[{"tournament_id":"46648","tournament_location":"Kickback","event_date":"2022-01-12","points":"4.5000"},{"tournament_id":"46649","tournament_location":"Kickback","event_date":"2022-01-26","points":"8.6400"},{"tournament_id":"46647","tournament_location":"Kickback","event_date":"2022-01-19","points":"5.8300"},{"tournament_id":"47492","tournament_location":"Kickback","event_date":"2022-02-16","points":"11.5100"},{"tournament_id":"47490","tournament_location":"Dojo","event_date":"2022-02-09","points":"12.5000"}]')},141:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(53),i=n.n(c),l=(n(141),n(142),n(35)),o=n(7),s=n(16);function j(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),n}var d=n(172),u=n(124),h=n.p+"static/media/flip-pgh-weekly-tournament-black-v2.df55a2c6.svg",b=n(83),p=n(19),m=n.n(p),x=n(119),O=n(171),f=n(24),v=n.n(f),g=n(48),y=[{date:"2022-01-12",location:"Kickback Pinball Cafe"},{date:"2022-01-19",location:"Kickback Pinball Cafe"},{date:"2022-01-26",location:"Kickback Pinball Cafe"},{date:"2022-02-02",no_tournament_scheduled:!0,no_tournament_msg:"NO TOURNAMENT THIS WEEK"},{date:"2022-02-09",location:"Pittsburgh Pinball Dojo"},{date:"2022-02-16",location:"Kickback Pinball Cafe"},{date:"2022-02-23",location:"Pittsburgh Pinball Dojo"},{date:"2022-03-02",location:"Kickback Pinball Cafe"},{date:"2022-03-09",location:"Kickback Pinball Cafe"},{date:"2022-03-16",location:"Pittsburgh Pinball Dojo"},{date:"2022-03-23",location:"Coop De Ville"},{date:"2022-03-30",location:"Pittsburgh Pinball Dojo"}],_=function(e,t){var n=null===t||void 0===t?void 0:t.url_label;if(n)return"https://matchplay.events/live/"+n},k=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.matchplay_url_label){e.next=11;break}return n="https://matchplay.events/data/tournaments/".concat(t.matchplay_url_label,"/standings"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if(!((a=e.sent).length>0)){e.next=11;break}return c=a[0].name,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e,t){var n=t.find((function(t){return t.last_event_date===e.date})),r=null===n||void 0===n?void 0:n.tournament_id;if(r)return"https://www.ifpapinball.com/tournaments/view.php?t="+r},C=function(e,t){var n=t.find((function(t){return t.event_date===e.date}));return null===n||void 0===n?void 0:n.points},P=n(120),S=n(121),D=n(1),I=a.a.createContext({});function F(e){var t=e.children,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(g.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://matchplay.events/data/series/1871",e.prev=1,e.next=4,fetch("https://matchplay.events/data/series/1871");case 4:return t=e.sent,e.next=7,t.json();case 7:return(n=e.sent).tournaments=n.tournaments.map((function(e){return e.date=m.a.parseZone(e.start).local().format("YYYY-MM-DD"),e})),e.next=11,Promise.all(y.map(function(){var e=Object(g.a)(v.a.mark((function e(t){var r,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.tournaments.find((function(e){return e.date===t.date})),t.matchplay_link=_(0,a),t.matchplay_url_label=null===a||void 0===a?void 0:a.url_label,e.next=5,k(t);case 5:return t.matchplay_winner=e.sent,t.ifpa_link=w(t,P.tournament),t.ifpa_points=null===(r=C(t,S))||void 0===r?void 0:r.replace("00",""),t.status=null===a||void 0===a?void 0:a.status,e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:r=e.sent,i(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("Error fetching data");case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=Object(r.useCallback)((function(){return{schedule:c}}),[c]);return Object(D.jsx)(I.Provider,{value:l(),children:t})}var G=n(170);var T=function(e){var t=e.link;return t?Object(D.jsx)(G.a,{primary:!0,as:"a",href:t,target:"_blank",rel:"noopener noreferrer",style:{marginBottom:"0.5rem"},children:"Get Directions"}):Object(D.jsx)(D.Fragment,{})};var Y=function(e){var t=e.link;return Object(D.jsx)(G.a,{primary:!0,as:"a",href:t,target:"_blank",rel:"noopener noreferrer",style:{marginBottom:"0.5rem"},children:"Go to Matchplay"})},H=n(169);function M(e){for(var t=e.count,n=void 0===t?5:t,r=e.width,a=void 0===r?"100%":r,c=[],i=0;i<n;i++)c.push(Object(D.jsx)(H.a.Line,{length:"very long"},i));return Object(D.jsx)("div",{style:{width:a},children:Object(D.jsx)(H.a,{style:{width:a},children:c})})}var B=function(e){var t=e.hours,n=e.minutes,r=e.seconds;return e.completed?null:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("span",{children:["-",t,":",n.toString().padStart(2,"0"),":",r.toString().padStart(2,"0")]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{})]})};var K=function(){var e,t=Object(r.useContext)(I).schedule;if(t&&0===t.length)return Object(D.jsx)("div",{style:{paddingBottom:"1rem"},children:Object(D.jsxs)(O.a,{compact:!0,children:[Object(D.jsx)("h3",{children:"Next Tournament"}),Object(D.jsx)(M,{width:"285px"})]})});if(t){var n=function(e){var t,n=null,r=Object(b.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(m()(a.date)>=m()().startOf("day")&&!a.no_tournament_scheduled){n=a;break}}}catch(c){r.e(c)}finally{r.f()}return n}(t);if(n){var a=m()(n.date).hours(19).minutes(0).seconds(0).milliseconds(0),c="",i=!1;m()().local().format("YYYY-MM-DD")!==n.date?c="Next Tournament":m()().isAfter(a)?c="Tournament in progress!":(c="Tournament starting soon!",i=!0);var l="Kickback Pinball Cafe"===(e=n.location)?"https://goo.gl/maps/VxGNpVJoadYbCPQn7":"Pittsburgh Pinball Dojo"===e?"https://goo.gl/maps/3Gx2gYpg3xuyaLucA":"Coop De Ville"===e?"https://goo.gl/maps/8zW4bUvXdtKB1v8f9":void 0;return Object(D.jsx)("div",{style:{paddingBottom:"1rem"},children:Object(D.jsxs)(O.a,{compact:!0,children:[Object(D.jsx)("h3",{children:c}),Object(D.jsx)("b",{children:"Date: "})," ",m()(n.date).format("dddd, M/D/YYYY"),Object(D.jsx)("br",{}),Object(D.jsx)("b",{children:"Location: "})," ",n.location,Object(D.jsx)("br",{}),Object(D.jsx)("b",{children:"Start time:"})," 7pm",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),i?Object(D.jsx)(x.a,{date:a.toDate(),renderer:B}):null,Object(D.jsx)(Y,{link:n.matchplay_link}),Object(D.jsx)(T,{link:l})]})})}}return Object(D.jsx)(D.Fragment,{})};var A=function(e){var t=e.children,n=j(),r={};return r=n.width&&n.width>640?{marginLeft:"210px",padding:"2rem"}:{marginTop:"76px",padding:"2rem"},Object(D.jsx)("div",{style:r,children:Object(D.jsx)(d.a,{children:Object(D.jsx)(d.a.Column,{mobile:16,tablet:16,computer:16,children:t})})})};var N=function(){return Object(D.jsxs)(A,{children:[Object(D.jsx)(d.a,{children:Object(D.jsxs)(d.a.Row,{children:[Object(D.jsx)(d.a.Column,{mobile:16,tablet:16,computer:7,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(D.jsx)(K,{})}),Object(D.jsx)(d.a.Column,{mobile:16,tablet:16,computer:9,children:Object(D.jsx)(u.a,{src:h})})]})}),Object(D.jsx)("h5",{children:"The Flip PGH Weekly Pinball Tournament series is held (mostly) every Wednesday at locations around the Pittsburgh area. 7pm start time. Come out and flip!"}),Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(l.b,{to:"/schedule",children:"Go to Schedule"})}),Object(D.jsx)("li",{children:Object(D.jsx)(l.b,{to:"/locations",children:"Go to Location Info"})}),Object(D.jsx)("li",{children:Object(D.jsx)(l.b,{to:"/rules",children:"Go to Format & Rules"})}),Object(D.jsx)("li",{children:Object(D.jsx)(l.b,{to:"/results",children:"Go to Results & Stats"})})]})]})};var R=function(){return Object(D.jsxs)(A,{children:[Object(D.jsx)("h1",{children:"Location Information"}),Object(D.jsx)("ul",{children:Object(D.jsxs)("li",{children:[Object(D.jsx)("b",{children:"Kickback Pinball Cafe"}),Object(D.jsxs)("ul",{children:[Object(D.jsxs)("li",{children:["Address: 4326 Butler St, Pittsburgh, PA 15201 [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/VxGNpVJoadYbCPQn7",children:"Google Maps"}),"]"]}),Object(D.jsxs)("li",{children:["Website:"," ",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.kickbackpgh.com/",children:"https://www.kickbackpgh.com/"})]}),Object(D.jsxs)("li",{children:["Current game list: [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=3682&by_location_name=Kickback+Pinball+Cafe",children:"Pinball Map"}),"]"]}),Object(D.jsxs)("li",{children:["Notes:",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"Open 10am-11pm on tournament days"}),Object(D.jsx)("li",{children:"Games are coin drop; prices range from $.25 to $1"}),Object(D.jsx)("li",{children:"BYOB permitted; $5 corkage/storage fee"}),Object(D.jsx)("li",{children:Object(D.jsx)("b",{children:Object(D.jsxs)("i",{children:["Special thanks to"," ",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://pghpinball.com/",children:"PGH Pinball"})," ","for sponsoring the IFPA endorsement fees!"]})})})]})]})]})]})}),Object(D.jsx)("ul",{children:Object(D.jsxs)("li",{children:[Object(D.jsx)("b",{children:"Pittsburgh Pinball Dojo"}),Object(D.jsxs)("ul",{children:[Object(D.jsxs)("li",{children:["Address: 2 N Balph Ave, Bellevue, PA 15202 [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/3Gx2gYpg3xuyaLucA",children:"Google Maps"}),"]"]}),Object(D.jsxs)("li",{children:["Website:"," ",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pittsburghpinballdojo.com/",children:"https://pittsburghpinballdojo.com/"})]}),Object(D.jsxs)("li",{children:["Current game list: [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=10790&by_location_name=Pittsburgh+Pinball+Dojo",children:"Pinball Map"}),"]"]}),Object(D.jsxs)("li",{children:["Notes:",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"Open 6-11pm on tournament days"}),Object(D.jsx)("li",{children:"$15 venue cover fee in addition to tournament entry fee ($20 total); all games are on free play"}),Object(D.jsx)("li",{children:"Masks required"}),Object(D.jsx)("li",{children:"BYOB permitted (no additional fee)"}),Object(D.jsx)("li",{children:Object(D.jsx)("b",{children:Object(D.jsx)("i",{children:"Special thanks to the Pittsburgh Pinball Dojo for sponsoring the IFPA endorsement fees!"})})})]})]})]})]})}),Object(D.jsx)("ul",{children:Object(D.jsxs)("li",{children:[Object(D.jsx)("b",{children:"Coop De Ville"}),Object(D.jsxs)("ul",{children:[Object(D.jsxs)("li",{children:["Address: 2305 Smallman St, Pittsburgh, PA 15222 [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/8zW4bUvXdtKB1v8f9",children:"Google Maps"}),"]"]}),Object(D.jsxs)("li",{children:["Website:"," ",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.coopdevillepgh.com/",children:"https://www.coopdevillepgh.com/"})]}),Object(D.jsxs)("li",{children:["Current game list: [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pinballmap.com/map/?by_location_id=15006",children:"Pinball Map"}),"]"]}),Object(D.jsxs)("li",{children:["Notes:",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"Open 11:30am-9pm on tournament days"}),Object(D.jsx)("li",{children:"Games are coin drop; prices range from $.75 to $1"})]})]})]})]})})]})},U=n(168),z=n(77),E=n(166);function L(){var e={paddingLeft:"1rem"};return Object(D.jsxs)("div",{style:{textAlign:"right"},children:[Object(D.jsx)("b",{children:"Values"}),Object(D.jsxs)("div",{style:e,children:[Object(D.jsx)(z.a,{name:"trophy",color:"yellow"},"yellow"),"= 3"]}),Object(D.jsxs)("div",{style:e,children:[Object(D.jsx)(z.a,{name:"trophy",color:"grey"},"grey"),"= 2"]}),Object(D.jsxs)("div",{style:e,children:[Object(D.jsx)(z.a,{name:"trophy",color:"brown"},"brown"),"= 1"]})]})}var W=function(e){var t=[];return e.forEach((function(e){1===e.position&&t.push({player:e.name,medal:"gold"}),2===e.position&&t.push({player:e.name,medal:"silver"}),3===e.position&&t.push({player:e.name,medal:"bronze"})})),t};function V(){var e=Object(r.useContext)(I).schedule,t=Object(r.useState)([]),n=Object(s.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){var t=[];function n(){return(n=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Promise.all(t.map(function(){var e=Object(g.a)(v.a.mark((function e(t){var r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://matchplay.events/data/tournaments/".concat(t,"/standings"),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n.push.apply(n,W(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&e.forEach((function(e){"completed"===e.status&&e.matchplay_winner&&e.matchplay_url_label&&t.push(e.matchplay_url_label)})),function(){n.apply(this,arguments)}()}),[e]);var i=[];return a.forEach((function(e){var t=i.findIndex((function(t){return t.player===e.player}));if(-1!==t){var n=i[t];"gold"===e.medal&&n.goldCount++,"silver"===e.medal&&n.silverCount++,"bronze"===e.medal&&n.bronzeCount++,i[t]=n}else{var r={player:e.player,bronzeCount:0,silverCount:0,goldCount:0};"gold"===e.medal&&r.goldCount++,"silver"===e.medal&&r.silverCount++,"bronze"===e.medal&&r.bronzeCount++,i.push(r)}})),i.sort((function(e,t){var n=3*e.goldCount+2*e.silverCount+e.bronzeCount;return 3*t.goldCount+2*t.silverCount+t.bronzeCount-n})),Object(D.jsxs)(E.a,{celled:!0,unstackable:!0,children:[Object(D.jsx)(E.a.Header,{children:Object(D.jsxs)(E.a.Row,{children:[Object(D.jsx)(E.a.HeaderCell,{children:"Player"}),Object(D.jsx)(E.a.HeaderCell,{children:"Trophy Count"}),Object(D.jsx)(E.a.HeaderCell,{children:"Value"})]})}),Object(D.jsx)(E.a.Body,{children:i.map((function(e){for(var t=0,n=[],r=0;r<e.goldCount;r++)n.push(Object(D.jsx)(z.a,{name:"trophy",color:"yellow"},t)),t++;for(var a=0;a<e.silverCount;a++)n.push(Object(D.jsx)(z.a,{name:"trophy",color:"grey"},t)),t++;for(var c=0;c<e.bronzeCount;c++)n.push(Object(D.jsx)(z.a,{name:"trophy",color:"brown"},t)),t++;return Object(D.jsxs)(E.a.Row,{children:[Object(D.jsx)(E.a.Cell,{children:e.player}),Object(D.jsx)(E.a.Cell,{children:n}),Object(D.jsx)(E.a.Cell,{children:3*e.goldCount+2*e.silverCount+e.bronzeCount})]},e.player)}))}),Object(D.jsx)(E.a.Footer,{children:Object(D.jsx)(E.a.Row,{children:Object(D.jsx)(E.a.HeaderCell,{colSpan:3,children:Object(D.jsx)(L,{})})})})]})}function $(){return Object(D.jsx)("div",{children:"Under construction -- coming soon"})}function J(){var e=Object(r.useContext)(I).schedule,t=function(e){if(e.ifpa_link)return[" [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.ifpa_link,children:"IFPA"},"ifpa"),"]"]};return Object(D.jsxs)(E.a,{celled:!0,unstackable:!0,children:[Object(D.jsx)(E.a.Header,{children:Object(D.jsxs)(E.a.Row,{children:[Object(D.jsx)(E.a.HeaderCell,{children:"Date"}),Object(D.jsx)(E.a.HeaderCell,{children:"Champion"}),Object(D.jsx)(E.a.HeaderCell,{children:"Points"}),Object(D.jsx)(E.a.HeaderCell,{children:"Details"})]})}),Object(D.jsx)(E.a.Body,{children:e?e.map((function(e){return"completed"===e.status&&e.matchplay_winner?Object(D.jsxs)(E.a.Row,{children:[Object(D.jsx)(E.a.Cell,{children:e.date}),Object(D.jsxs)(E.a.Cell,{children:[Object(D.jsx)(z.a,{name:"trophy",color:"yellow"})," ",e.matchplay_winner]}),Object(D.jsx)(E.a.Cell,{children:e.ifpa_points}),Object(D.jsxs)(E.a.Cell,{children:["[",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.matchplay_link,children:"Matchplay"},"matchplay"),"]",t(e)]})]},e.date):null})):null})]})}var Q=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(e,t){var r=t.index;void 0!==r&&a(n===+r?-1:+r)};return Object(D.jsxs)(A,{children:[Object(D.jsx)("h1",{children:"Results & Stats"}),Object(D.jsxs)(U.a,{styled:!0,fluid:!0,children:[Object(D.jsxs)(U.a.Title,{active:0===n,index:0,onClick:c,children:[Object(D.jsx)(z.a,{name:"dropdown"}),"Tournament Stats"]}),Object(D.jsx)(U.a.Content,{active:0===n,children:Object(D.jsxs)(d.a,{stackable:!0,columns:2,children:[Object(D.jsxs)(d.a.Column,{width:9,children:[Object(D.jsx)("h3",{children:"Past Champions"}),Object(D.jsx)(J,{})]}),Object(D.jsxs)(d.a.Column,{width:7,children:[Object(D.jsx)("h3",{children:"Trophy Leaderboard"}),Object(D.jsx)(V,{})]})]})}),Object(D.jsxs)(U.a.Title,{active:1===n,index:1,onClick:c,children:[Object(D.jsx)(z.a,{name:"dropdown"}),"Machine Stats"]}),Object(D.jsx)(U.a.Content,{active:1===n,children:Object(D.jsx)($,{})})]})]})};var X=function(){return Object(D.jsxs)(A,{children:[Object(D.jsx)("h1",{children:"Format & Rules"}),Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"Tournament starts at 7pm"}),Object(D.jsx)("li",{children:"$5 entry fee"}),Object(D.jsx)("li",{children:"IFPA endorsed"}),Object(D.jsxs)("li",{children:["3 strike knockout",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"Random groups of 3 or 4 players are formed each round"}),Object(D.jsx)("li",{children:"Bottom one or two players from each group receive a strike"}),Object(D.jsx)("li",{children:"Players are eliminated from the tournament after receiving three strikes"})]})]}),Object(D.jsx)("li",{children:"Number of strikes per group varies based on different factors, including total player count, venue closing time, average machine playing time, etc. One strike given in three-player groups will be preferred but may be altered to two strikes given in three-player groups at the discretion of the tournament director due to these factors."}),Object(D.jsxs)("li",{children:["Plunge extra balls",Object(D.jsx)("ul",{children:Object(D.jsx)("li",{children:"You may set up any skill shot beforehand, but can't touch the machine after plunging"})})]}),Object(D.jsxs)("li",{children:["If a variety of machine eras are available, game selection each round will alternate between groups of older and newer games",Object(D.jsx)("ul",{children:Object(D.jsx)("li",{children:"Note: Machines included in the tournament and the strict alternation between each machine group may be subject to modification at the discretion of the tournament director due to time limitations"})})]}),Object(D.jsx)("li",{children:"Payouts to top 3 players (60/30/10% -- rounded to a multiple of $5)"}),Object(D.jsxs)("li",{children:["The"," ",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ifpapinball.com/rules/",children:"PAPA/IFPA ruleset"})," ","will be used for any specific rulings, with the following modifications:",Object(D.jsx)("ul",{children:Object(D.jsx)("li",{children:'"Good Sportsmanship" exception: if someone shouts \u201cBall Save\u201d to a player who starts walking away from their machine, neither party will be penalized for providing / receiving coaching'})})]})]})]})},q=function(e){return e.map((function(e){var t=m()(e.date).format("ddd, M/D/YYYY");return e.no_tournament_scheduled?Object(D.jsxs)("li",{children:[t," - ",e.no_tournament_msg]},t):e.matchplay_link?Object(D.jsxs)("li",{children:[t," (7pm) - ",e.location," [",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.matchplay_link,children:"Matchplay"}),"]"]},t):Object(D.jsxs)("li",{children:[t," - ",e.location]},t)}))};var Z=function(){var e=Object(r.useContext)(I).schedule;if(e&&0===e.length)return Object(D.jsxs)(A,{children:[Object(D.jsx)("h1",{children:"Upcoming Schedule"}),Object(D.jsx)(M,{}),Object(D.jsx)("h1",{children:"Past Dates"}),Object(D.jsx)(M,{})]});if(void 0!==e){var t=e.filter((function(e){return m()(e.date)>=m()().startOf("day")})),n=e.filter((function(e){return m()(e.date)<m()().startOf("day")&&!e.no_tournament_scheduled}));return Object(D.jsxs)(A,{children:[Object(D.jsx)("h1",{children:"Upcoming Schedule"}),Object(D.jsx)("ul",{children:q(t)}),Object(D.jsx)("h1",{children:"Past Dates"}),Object(D.jsx)("ul",{children:q(n)})]})}return Object(D.jsx)(D.Fragment,{})},ee=n(165),te=n(164),ne=n.p+"static/media/flip-pgh-logo-white.025b1149.svg";var re=function(){var e=Object(o.f)(),t=j();return Object(D.jsxs)(ee.a,{fixed:"top",inverted:!0,style:{display:"flex"},children:[Object(D.jsx)(ee.a.Item,{name:"logo",onClick:function(){e("/")},children:t.width&&t.width>640?Object(D.jsx)(u.a,{src:ne}):Object(D.jsx)(u.a,{src:ne,style:{height:50,width:50}})}),Object(D.jsx)(te.a,{item:!0,text:"Menu",icon:"bars",simple:!0,style:{"margin-left":"auto"},className:"menu-dropdown",children:Object(D.jsxs)(te.a.Menu,{style:{right:0,left:"auto"},children:[Object(D.jsx)(te.a.Item,{onClick:function(){e("/")},children:"Home"}),Object(D.jsx)(te.a.Item,{onClick:function(){e("/schedule")},children:"Schedule"}),Object(D.jsx)(te.a.Item,{onClick:function(){e("/locations")},children:"Location Info"}),Object(D.jsx)(te.a.Item,{onClick:function(){e("/rules")},children:"Format & Rules"}),Object(D.jsx)(te.a.Item,{onClick:function(){e("/results")},children:"Results & Stats"})]})})]})};var ae=function(){var e=Object(o.f)(),t=Object(o.e)(),n=j();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ee.a.Item,{name:"logo",onClick:function(){e("/")},children:n.width&&n.width>640?Object(D.jsx)(u.a,{src:ne}):Object(D.jsx)(u.a,{src:ne,style:{height:50,width:50}})}),Object(D.jsx)(ee.a.Item,{name:"home",active:"/"===t.pathname,onClick:function(){e("/")},children:"Home"}),Object(D.jsx)(ee.a.Item,{name:"schedule",active:"/schedule"===t.pathname,onClick:function(){e("/schedule")},children:"Schedule"}),Object(D.jsx)(ee.a.Item,{name:"locations",active:"/locations"===t.pathname,onClick:function(){e("/locations")},children:"Location Info"}),Object(D.jsx)(ee.a.Item,{name:"rules",active:"/rules"===t.pathname,onClick:function(){e("/rules")},children:"Format & Rules"}),Object(D.jsx)(ee.a.Item,{name:"results",active:"/results"===t.pathname,onClick:function(){e("/results")},children:"Results & Stats"})]})};var ce=function(){return Object(D.jsx)(ee.a,{inverted:!0,vertical:!0,fixed:"left",style:{overflow:"auto"},children:Object(D.jsx)(ae,{})})};var ie=function(){var e=j();return Object(D.jsx)(F,{children:Object(D.jsxs)(l.a,{children:[e.width&&e.width>640?Object(D.jsx)(ce,{}):Object(D.jsx)(re,{}),Object(D.jsxs)(o.c,{children:[Object(D.jsx)(o.a,{path:"/",element:Object(D.jsx)(N,{})}),Object(D.jsx)(o.a,{path:"/schedule",element:Object(D.jsx)(Z,{})}),Object(D.jsx)(o.a,{path:"/locations",element:Object(D.jsx)(R,{})}),Object(D.jsx)(o.a,{path:"/rules",element:Object(D.jsx)(X,{})}),Object(D.jsx)(o.a,{path:"/results",element:Object(D.jsx)(Q,{})})]})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(ie,{})}),document.getElementById("root")),le()}},[[155,1,2]]]);
//# sourceMappingURL=main.65401631.chunk.js.map