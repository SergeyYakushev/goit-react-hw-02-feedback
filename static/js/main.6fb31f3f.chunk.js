(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={statisticValue:"Statistics_statisticValue__Gucsn",feautersList:"Statistics_feautersList__WU8kA",ststicItem:"Statistics_ststicItem__3MxXw"}},,,function(t,e,a){t.exports={btnBlock:"FeedbackOptions_btnBlock__jGCdk",btn:"FeedbackOptions_btn__1f19C"}},,,,,function(t,e,a){t.exports={nav:"Notification_nav__3hnln"}},function(t,e,a){t.exports={title:"Section_title__3858M"}},,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),c=a(2),n=a.n(c),i=a(5),r=a.n(i),o=(a(18),a(6)),l=a(7),u=a(8),b=a(12),d=a(11),j=a(4),h=a.n(j),O=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(s.jsx)("div",{className:h.a.btnBlock,children:e.map((function(t){return Object(s.jsx)("button",{type:"button",className:h.a.btn,name:t,onClick:a,children:t},t)}))})},m=a(9),f=a.n(m),v=function(t){var e=t.message;return Object(s.jsx)("p",{className:f.a.nav,children:e})},x=a(1),k=a.n(x),p=function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,i=t.positivePercentage;return Object(s.jsxs)("ul",{className:k.a.feautersList,children:[Object(s.jsxs)("li",{className:k.a.ststicItem,children:["Good:\xa0",Object(s.jsx)("span",{className:k.a.statisticValue,children:e})]}),Object(s.jsxs)("li",{className:k.a.ststicItem,children:["Neutral:\xa0",Object(s.jsx)("span",{className:k.a.statisticValue,children:a})]}),Object(s.jsxs)("li",{className:k.a.ststicItem,children:["Bad:\xa0",Object(s.jsx)("span",{className:k.a.statisticValue,children:c})]}),Object(s.jsxs)("li",{className:k.a.ststicItem,children:["Total:\xa0",Object(s.jsx)("span",{className:k.a.statisticValue,children:n()})]}),Object(s.jsxs)("li",{className:k.a.ststicItem,children:["PositivePercentage:\xa0",Object(s.jsxs)("span",{className:k.a.statisticValue,children:[i(),"%"]})]})]})},_=a(10),g=a.n(_),N=function(t){var e=t.title,a=t.children;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:g.a.title,children:e}),a]})},F=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){var a=e.target.name;t.setState((function(t){return Object(o.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,a=t.countTotalFeedback();return a?Math.round(e/a*100):0},t}return Object(u.a)(a,[{key:"render",value:function(){var t=Object.keys(this.state),e=this.state,a=e.good,c=e.neutral,n=e.bad;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(N,{title:"Please leave feedback",children:Object(s.jsx)(O,{options:t,onLeaveFeedback:this.onLeaveFeedback})}),Object(s.jsx)(N,{title:"Statistics",children:this.countTotalFeedback()?Object(s.jsx)(p,{good:a,neutral:c,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(s.jsx)(v,{message:"No feedback given"})})]})}}]),a}(c.Component);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6fb31f3f.chunk.js.map