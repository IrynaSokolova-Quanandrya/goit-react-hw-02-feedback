(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),s=n.n(o),i=(n(13),n(8)),r=n(2),b=n(3),l=n(5),u=n(4),d=(n(14),n(0));var j=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{className:"feedback__title",children:t}),n]})},h=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",className:"feedback__btn",onClick:function(){return e.props.onLeaveFeedback("good")},children:"Good"}),Object(d.jsx)("button",{type:"button",className:"feedback__btn",onClick:function(){return e.props.onLeaveFeedback("neutral")},children:"Neutral"}),Object(d.jsx)("button",{type:"button",className:"feedback__btn",onClick:function(){return e.props.onLeaveFeedback("bad")},children:"Bad"})]})}}]),n}(c.Component)),f=h;n(17);var k=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(d.jsxs)("ul",{className:"statistics__list",children:[Object(d.jsxs)("li",{children:["Good:",t]}),Object(d.jsxs)("li",{children:["Neutral: ",n," "]}),Object(d.jsxs)("li",{children:["Bad: ",c," "]}),Object(d.jsxs)("li",{children:["Total:",a]}),Object(d.jsxs)("li",{children:["Positive feedback: ",o]})]})};n(18);var v=function(e){var t=e.message;return Object(d.jsx)("p",{children:t})},O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e}return Object(b.a)(n,[{key:"leaveFeedback",value:function(e){console.log(e),this.setState((function(t){return Object(i.a)({},e,t[e]+1)}))}},{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return 0===this.state.good?"0":Math.round(100*this.state.good/this.countTotalFeedback())+"%"}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{title:"Please leave feedback",children:Object(d.jsx)(f,{onLeaveFeedback:this.leaveFeedback.bind(this)})}),Object(d.jsx)(j,{title:"Statistics"}),this.countTotalFeedback()?Object(d.jsx)(k,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(d.jsx)(v,{message:"No feedback given"})]})}}]),n}(c.Component),p=O;s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.803e1bad.chunk.js.map