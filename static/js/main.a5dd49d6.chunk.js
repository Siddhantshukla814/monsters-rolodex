(this["webpackJsonpmonsters-robolox"]=this["webpackJsonpmonsters-robolox"]||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),s=n.n(c),a=n(14),o=n.n(a),i=(n(22),n(4)),u=n.n(i),l=n(15),j=n(5),h=n(16),d=n.n(h);n(41),n(42),n(43);var b=function(e){var t=e.monster;return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"monster",src:"https://robohash.org/"+t.id+"?set=set2&size=200x220"}),Object(r.jsx)("h2",{children:t.name}),Object(r.jsx)("p",{children:t.email})]})};var f=function(e){var t=e.monsters;return Object(r.jsx)("div",{className:"CardList",children:t.map((function(e){return Object(r.jsx)(b,{monster:e},e.id)}))})};n(44);var p=function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})};var m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(j.a)(a,2),i=o[0],h=o[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,n=t.data,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var b=n.filter((function(e){return e.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monster Rolodex"}),Object(r.jsx)(p,{placeholder:"Search Monsters...",handleChange:function(e){return h(e.target.value)}}),Object(r.jsx)(f,{monsters:b})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.a5dd49d6.chunk.js.map