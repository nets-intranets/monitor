(this["webpackJsonptransaction-monitor-frontend"]=this["webpackJsonptransaction-monitor-frontend"]||[]).push([[0],{132:function(e,t,s){},133:function(e,t,s){},184:function(e,t,s){},185:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(42),i=s.n(c),o=(s(132),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,187)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))}),l=s(18),r=(s(133),s(1)),d=s(44),j=s.n(d),u=s.p+"static/media/Nets_Logo.f41d039e.png",m=s(125),p=s(16);s(183),s(184);function b(){return Object(r.jsxs)("div",{className:"spinner-container",children:[Object(r.jsx)("div",{className:"loading-spinner"}),Object(r.jsx)("div",{style:{color:"white",paddingTop:"5px"},children:"Video loading..."})]})}var O=new p.TimeSeries({name:"hilo_rainfall",columns:["index","phys","ecomm"],points:[["2017-01-24T00:00",.01,.5],["2017-01-24T01:00",.13,.5],["2017-01-24T02:00",.07,.5],["2017-01-24T03:00",.04,.5],["2017-01-24T04:00",.33,.5],["2017-01-24T05:00",0,.5],["2017-01-24T06:00",0,.5],["2017-01-24T07:00",0,.5],["2017-01-24T08:00",.95,.5],["2017-01-24T09:00",1.12,.5],["2017-01-24T10:00",.66,.5],["2017-01-24T11:00",.06,.5],["2017-01-24T12:00",.3,.5],["2017-01-24T13:00",.05,.5],["2017-01-24T14:00",.5,.5],["2017-01-24T15:00",.24,.5],["2017-01-24T16:00",.02,.5],["2017-01-24T17:00",.98,.5],["2017-01-24T18:00",.46,.5],["2017-01-24T19:00",.8,.5],["2017-01-24T20:00",.39,.5],["2017-01-24T21:00",.4,.5],["2017-01-24T22:00",.39,.5],["2017-01-25T23:00",.28,.5]].map((function(e){var t=Object(l.a)(e,3),s=t[0],n=t[1],a=t[2];return[p.Index.getIndexString("1h",new Date(s)),n,a]}))});function h(){var e=Object(n.useState)(O),t=Object(l.a)(e,2),s=(t[0],t[1]),a=Object(n.useState)(null),c=Object(l.a)(a,2),i=c[0],o=c[1],d=Object(n.useState)(null),h=Object(l.a)(d,2),x=h[0],v=h[1],f=Object(n.useState)(null),T=Object(l.a)(f,2),g=(T[0],T[1]),N=Object(n.useState)(null),y=Object(l.a)(N,2),S=y[0],I=y[1],w=Object(n.useState)(null),C=Object(l.a)(w,2),E=C[0],F=C[1],P=Object(n.useState)(null),V=Object(l.a)(P,2),D=(V[0],V[1]),L=Object(n.useState)(!1),k=Object(l.a)(L,2),B=k[0],A=k[1],H=Object(n.useState)(!1),J=Object(l.a)(H,2),R=J[0],_=J[1],z=function(){A(!0)};Object(n.useEffect)((function(){_("?samsung=1"===window.location.search)}),[]),Object(n.useEffect)((function(){var e={method:"GET",headers:new Headers,redirect:"follow"};fetch("https://hexatownnets.blob.core.windows.net/feeds/monitor.json",e).then((function(e){return e.json()})).then((function(e){var t=[];e.map((function(e){25===e.day&&t.push(["2021-11-25T"+(e.hour<10?"0"+e.hour:e.hour)+":"+(e.minute<10?"0"+e.minute:e.minute),e.online.counter,e.terminals.counter])}));var n=new p.TimeSeries({name:"transactionss",columns:["index","phys","ecomm"],points:t.map((function(e){var t=Object(l.a)(e,3),s=t[0],n=t[1],a=t[2];return[p.Index.getIndexString("1h",new Date(s)),n,a]}))});s(n),console.log(e)})).catch((function(e){return console.log("error",e)})),fetch("https://nocc-api.azurewebsites.net//data",e).then((function(e){return e.json()})).then((function(e){o(e.PhysTermStart),v(e.OnlEcomStart),g(e.IaltStart),I(e.PhysTermSlut),F(e.OnlEcomSlut),D(e.IaltSlut),console.log(e)})).catch((function(e){return console.log("error",e)}))}),[i]);Object(m.styler)([{key:"phys",color:"#A5C8E1",selected:"#2CB1CF"},{key:"ecomm",color:"#FFCC9E",selected:"#2CB1CF"}]);return R?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("video",{autoPlay:"autoplay",muted:!0,playsInline:!0,loop:"loop",preload:"auto",id:"myVideo",className:"myVideo",onLoadedData:z,style:{opacity:1},children:Object(r.jsx)("source",{src:"video01.mp4",type:"video/mp4"})}),!B&&Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"heading",style:{position:"fixed",top:"200px"},children:Object(r.jsx)("div",{children:"Realtime Transactions"})}),Object(r.jsxs)("div",{className:"numbers",style:{position:"fixed",top:"600px"},children:[Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("div",{className:"caption",children:"Point of Sales"}),Object(r.jsx)("div",{className:"value",children:Object(r.jsx)(j.a,{start:i,end:S,duration:300,separator:".",preserveValue:!0})})]}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("div",{className:"caption",children:"Online"}),Object(r.jsx)("div",{className:"value",children:Object(r.jsx)(j.a,{start:x,end:E,duration:300,separator:"."})})]}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("div",{className:"caption",children:"Total"}),Object(r.jsx)("div",{className:"value",children:Object(r.jsx)(j.a,{start:parseInt(i)+parseInt(x),end:parseInt(S)+parseInt(E),duration:300,separator:"."})})]})]})]}),Object(r.jsx)("div",{className:"logoImageHolder",children:Object(r.jsx)("div",{className:"logoImage",style:{position:"fixed",left:"1600px",top:"500px"},children:Object(r.jsx)("img",{src:u,alt:"fireSpot",type:"image/png"})})})]}):Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("video",{autoPlay:"autoplay",muted:!0,playsInline:!0,loop:"loop",preload:"auto",id:"myVideo",className:"myVideo",onLoadedData:z,style:{opacity:1},children:Object(r.jsx)("source",{src:"video01.mp4",type:"video/mp4"})}),!B&&Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("div",{children:"Realtime Transactions"})}),Object(r.jsxs)("div",{className:"numbers",children:[Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("div",{className:"caption",children:"Point of Sales"}),Object(r.jsx)("div",{className:"value",children:Object(r.jsx)(j.a,{start:i,end:S,duration:300,separator:".",preserveValue:!0})})]}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("div",{className:"caption",children:"Online"}),Object(r.jsx)("div",{className:"value",children:Object(r.jsx)(j.a,{start:x,end:E,duration:300,separator:"."})})]}),Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("div",{className:"caption",children:"Total"}),Object(r.jsx)("div",{className:"value",children:Object(r.jsx)(j.a,{start:parseInt(i)+parseInt(x),end:parseInt(S)+parseInt(E),duration:300,separator:"."})})]})]})]}),Object(r.jsx)("div",{className:"logoImageHolder",children:Object(r.jsx)("div",{className:"logoImage",children:Object(r.jsx)("img",{src:u,alt:"fireSpot",type:"image/png"})})})]})}i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),o()}},[[185,1,2]]]);
//# sourceMappingURL=main.92a03da9.chunk.js.map