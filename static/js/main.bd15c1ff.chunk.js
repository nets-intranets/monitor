(this["webpackJsonptransaction-monitor-frontend"]=this["webpackJsonptransaction-monitor-frontend"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),l=n.n(s),r=(n(10),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))}),i=n(2),o=(n(11),n(0)),d=n(3),j=n.n(d),u=n.p+"static/media/Nets_Logo.f41d039e.png";function b(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),l=Object(i.a)(s,2),r=l[0],d=l[1],b=Object(a.useState)(null),O=Object(i.a)(b,2),m=(O[0],O[1]),p=Object(a.useState)(null),h=Object(i.a)(p,2),v=h[0],x=h[1],f=Object(a.useState)(null),g=Object(i.a)(f,2),N=g[0],S=g[1],I=Object(a.useState)(null),y=Object(i.a)(I,2),P=(y[0],y[1]);return Object(a.useEffect)((function(){var e=new Headers;fetch("https://nocc-api.azurewebsites.net//data",{method:"GET",headers:e,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){c(e.PhysTermStart),d(e.OnlEcomStart),m(e.IaltStart),x(e.PhysTermSlut),S(e.OnlEcomSlut),P(e.IaltSlut),console.log(e)})).catch((function(e){return console.log("error",e)}))}),[n]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("video",{autoPlay:"autoplay",muted:!0,playsInline:!0,loop:"loop",preload:"auto",id:"myVideo",poster:"Poster.png",children:Object(o.jsx)("source",{src:"video2.mp4",type:"video/mp4"})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsx)("div",{children:"Realtime Transactions"})}),Object(o.jsxs)("div",{className:"numbers",children:[Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("div",{className:"caption",children:"Point of Sales"}),Object(o.jsx)("div",{className:"value",children:Object(o.jsx)(j.a,{start:n,end:v,duration:300,separator:".",preserveValue:!0})})]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("div",{className:"caption",children:"Online"}),Object(o.jsx)("div",{className:"value",children:Object(o.jsx)(j.a,{start:r,end:N,duration:300,separator:"."})})]}),Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("div",{className:"caption",children:"Total"}),Object(o.jsx)("div",{className:"value",children:Object(o.jsx)(j.a,{start:parseInt(n)+parseInt(r),end:parseInt(v)+parseInt(N),duration:300,separator:"."})})]})]})]}),Object(o.jsx)("div",{className:"logoImageHolder",children:Object(o.jsx)("div",{className:"logoImage",children:Object(o.jsx)("img",{src:u,alt:"fireSpot",type:"image/png"})})})]})}l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),r()}},[[14,1,2]]]);
//# sourceMappingURL=main.bd15c1ff.chunk.js.map