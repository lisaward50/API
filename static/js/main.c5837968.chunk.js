(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=a(3),i=a(4),o=a(6),m=a(5),u=a(7),d=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{id:"navbar",className:"navbar fixed-top navbar-expand-md navbar-dark py-0"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"FX/CONV"))}}]),t}(n.Component),p=a(9),E=a.n(p),h=a(17),v=a(2),b=a(18),f=a.n(b),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={valueEntered:0,rateGBP:0,rateEUR:0,rateCAD:0,rateJPY:0,rateHKD:0,rateAUD:0},a.handleUserInput=a.handleUserInput.bind(Object(v.a)(Object(v.a)(a))),a.getRates=a.getRates.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleUserInput",value:function(e){this.setState({valueEntered:e.target.value})}},{key:"getRates",value:function(){var e=Object(h.a)(E.a.mark(function e(){var t,a,n,r,c,l,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.exchangeratesapi.io/latest?base=USD",e.next=3,f.a.get("https://api.exchangeratesapi.io/latest?base=USD");case 3:t=e.sent,a=t.data.rates.GBP,n=t.data.rates.EUR,r=t.data.rates.CAD,c=t.data.rates.JPY,l=t.data.rates.HKD,s=t.data.rates.AUD,this.setState({rateGBP:a,rateEUR:n,rateCAD:r,rateJPY:c,rateHKD:l,rateAUD:s});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRates()}},{key:"render",value:function(){var e=this.state,t=e.rateGBP,a=e.rateEUR,n=e.rateCAD,c=e.rateJPY,l=e.rateHKD,s=e.rateAUD,i=e.valueEntered;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CURRENCY ",r.a.createElement("span",{className:"text-white"},"CONVERTER")),r.a.createElement("br",null),r.a.createElement("p",null,"Enter a figure in dollars and see how much you have in other currencies..."),r.a.createElement("div",null,"\xa0 \xa0 ",r.a.createElement("span",{className:"text-white"},"USD")," \xa0",r.a.createElement("input",{onChange:this.handleUserInput,type:"text"})," \xa0 is equal to:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"text-white"},"GBP")," \xa0",(t*i).toFixed(2),"\xa0 \xa0 \xa0")),r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"text-white"},"EUR")," \xa0",(a*i).toFixed(2),"\xa0 \xa0 \xa0")),r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"text-white"},"CAD")," \xa0",(n*i).toFixed(2),"\xa0 \xa0 \xa0")),r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"text-white"},"JPY")," \xa0",(c*i).toFixed(2),"\xa0 \xa0 \xa0")),r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"text-white"},"HKD")," \xa0",(l*i).toFixed(2),"\xa0 \xa0 \xa0")),r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"text-white"},"AUD")," \xa0",(s*i).toFixed(2),"\xa0 \xa0 \xa0")))))}}]),t}(n.Component),N=(a(45),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"buffer"}),r.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.c5837968.chunk.js.map