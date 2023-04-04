(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{193:function(e,n,t){},194:function(e,n,t){},199:function(e,n){},201:function(e,n){},211:function(e,n){},213:function(e,n){},241:function(e,n){},243:function(e,n){},244:function(e,n){},249:function(e,n){},251:function(e,n){},270:function(e,n){},282:function(e,n){},285:function(e,n){},340:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,u,l,d=t(0),p=t.n(d),b=t(182),f=t.n(b),j=(t(193),t(194),t(29)),h=t(5),v=t(4),O=t(8),x=t(9),m=t(21),g=t(341),k="https://todo-list.alphacamp.io/api/auth",w=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r,a,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.password,e.prev=1,e.next=4,g.a.post("".concat(k,"/login"),{username:t,password:r});case 4:if(a=e.sent,c=a.data,!c.authToken){e.next=9;break}return e.abrupt("return",Object(m.a)({success:!0},c));case 9:return e.abrupt("return",c);case 12:return e.prev=12,e.t0=e.catch(1),console.error("[Login Failed]:",e.t0),e.abrupt("return",{success:!1});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r,a,c,o;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.email,a=n.password,e.prev=1,e.next=4,g.a.post("".concat(k,"/register"),{username:t,email:r,password:a});case 4:if(c=e.sent,o=c.data,!o.authToken){e.next=9;break}return e.abrupt("return",Object(m.a)({success:!0},o));case 9:return e.abrupt("return",o);case 12:return e.prev=12,e.t0=e.catch(1),console.error("[Register Failed]: ",e.t0),e.abrupt("return",{success:!1});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(k,"/test-token"),{headers:{Authorization:"Bearer "+n}});case 3:return t=e.sent,e.abrupt("return",t.data.success);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Check Permission Failed]:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),E=t(80),D=t(2),T={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},S=Object(d.createContext)(T),F=function(){return Object(d.useContext)(S)},z=function(e){var n=e.children,t=Object(d.useState)(!1),r=Object(x.a)(t,2),a=r[0],c=r[1],o=Object(d.useState)(null),i=Object(x.a)(o,2),s=i[0],u=i[1],l=Object(h.k)().pathname;return Object(d.useEffect)((function(){var e=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){var n,t;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("authToken")){e.next=5;break}return c(!1),u(null),e.abrupt("return");case 5:return e.next=7,C(n);case 7:e.sent?(c(!0),t=E.decode(n),u(t)):(c(!1),u(null));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(D.jsx)(S.Provider,{value:{isAuthenticated:a,currentMember:s&&{id:s.sub,name:s.name},register:function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r,a,o;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({username:n.username,email:n.email,password:n.password});case 2:return t=e.sent,r=t.success,a=t.authToken,(o=E.decode(a))?(u(o),c(!0),localStorage.setItem("authToken",a)):(u(null),c(!1)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),login:function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r,a,o;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({username:n.username,password:n.password});case 2:return t=e.sent,r=t.success,a=t.authToken,(o=E.decode(a))?(u(o),c(!0),localStorage.setItem("authToken",a)):(u(null),c(!1)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),logout:function(){localStorage.removeItem("authToken"),u(null),c(!1)}},children:n})},N=function(){var e=F().isAuthenticated,n=Object(h.m)();Object(d.useEffect)((function(){n(e?"/todos":"/login")}),[n,e])},R=t(12),M=t(13),A=M.a.div(r||(r=Object(R.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),I=M.a.div(a||(a=Object(R.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),B=M.a.button(c||(c=Object(R.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),P=M.a.div(o||(o=Object(R.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"]))),L=["title","titleId"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)}function V(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function Z(e,n){var t=e.title,r=e.titleId,a=V(e,L);return d.createElement("svg",K({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),t?d.createElement("title",{id:r},t):null,i||(i=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),s||(s=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),u||(u=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),l||(l=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}var H,J,Q,q,G,U,$,W,X,Y,_,ee,ne=d.forwardRef(Z),te=(t.p,t.p+"static/media/check-active.95ca055c.svg"),re=t.p+"static/media/check-circle.30720b46.svg",ae=t.p+"static/media/check-hover.5e00062b.svg",ce=M.a.div(H||(H=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),oe=M.a.label(J||(J=Object(R.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),ie=M.a.input(Q||(Q=Object(R.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"]))),se=function(e){var n=e.type,t=e.label,r=e.value,a=e.placeholder,c=e.onChange;return Object(D.jsxs)(ce,{children:[Object(D.jsx)(oe,{children:t}),Object(D.jsx)(ie,{type:n||"text",value:r,placeholder:a,onChange:function(e){return null===c||void 0===c?void 0:c(e.target.value)}})]})},ue=M.a.header(q||(q=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),le=M.a.div(G||(G=Object(R.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"]))),de=function(e){var n=e.username;return Object(D.jsxs)(ue,{children:[Object(D.jsx)("h3",{children:"Tasks"}),Object(D.jsxs)(le,{children:["Hi ",Object(D.jsx)("span",{children:n})]})]})},pe=t(55),be=M.a.div(U||(U=Object(R.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),fe=M.a.label($||($=Object(R.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),je=M.a.div(W||(W=Object(R.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),he=M.a.div(X||(X=Object(R.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"]))),ve=function(e){var n=e.inputValue,t=e.onChange,r=e.onKeyDown,a=e.onAddTodo;return Object(D.jsxs)(be,{className:Object(pe.a)("",{active:n.length>0}),children:[Object(D.jsx)(fe,{className:"icon",htmlFor:"add-todo-input"}),Object(D.jsx)(je,{children:Object(D.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:n,onChange:function(e){null===t||void 0===t||t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(null===r||void 0===r||r())}})}),Object(D.jsx)(he,{className:Object(pe.a)("",{active:n.length>0}),children:Object(D.jsx)("button",{className:"btn-reset",onClick:function(){return null===a||void 0===a?void 0:a()},children:"\u65b0\u589e"})})]})},Oe=M.a.div(Y||(Y=Object(R.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),te,re,ae),xe=function(e){var n=e.todo,t=e.onSave,r=e.onDelete,a=e.onToggleDone,c=e.onChangeMode,o=Object(d.useRef)(null);return Object(D.jsxs)(Oe,{className:Object(pe.a)("",{done:n.isDone},{edit:n.isEdit}),children:[Object(D.jsx)("div",{className:"task-item-checked",children:Object(D.jsx)("span",{className:"icon icon-checked",onClick:function(){null===a||void 0===a||a(n.id)}})}),Object(D.jsxs)("div",{className:"task-item-body",onDoubleClick:function(){return null===c||void 0===c?void 0:c({id:n.id,isEdit:!0})},children:[Object(D.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(D.jsx)("input",{ref:o,className:"task-item-body-input",onKeyDown:function(e){o.current.value.length>0&&"Enter"===e.key&&(null===t||void 0===t||t({id:n.id,title:o.current.value})),"Escape"===e.key&&(null===c||void 0===c||c({id:n.id,isEdit:!1}))},defaultValue:n.title})]}),Object(D.jsx)("div",{className:"task-item-action ",children:Object(D.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:function(){return null===r||void 0===r?void 0:r(n.id)}})})]})},me=function(e){var n=e.todos,t=e.onSave,r=e.onDelete,a=e.onToggleDone,c=e.onChangeMode;return Object(D.jsx)("div",{children:n.map((function(e){return Object(D.jsx)(xe,{todo:e,onToggleDone:function(e){return null===a||void 0===a?void 0:a(e)},onChangeMode:function(e){var n=e.id,t=e.isEdit;return null===c||void 0===c?void 0:c({id:n,isEdit:t})},onSave:function(e){var n=e.id,r=e.title;return null===t||void 0===t?void 0:t({id:n,title:r})},onDelete:function(e){return null===r||void 0===r?void 0:r(e)}},e.id)}))})},ge=M.a.footer(_||(_=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),ke=M.a.button(ee||(ee=Object(R.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),we=function(e){var n=e.todosQty,t=F().logout;return Object(D.jsxs)(ge,{children:[Object(D.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n]}),Object(D.jsx)(ke,{onClick:function(){t()},children:"\u767b\u51fa"})]})},ye=t(42),Ce=t.n(ye),Ee=function(){var e=Object(d.useState)(""),n=Object(x.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(""),c=Object(x.a)(a,2),o=c[0],i=c[1],s=Object(h.m)(),u=F(),l=u.login,p=u.isAuthenticated,b=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:if(0!==o.length){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,l({username:t,password:o});case 6:if(!e.sent){e.next=10;break}return Ce.a.fire({position:"top",title:"\u767b\u5165\u6210\u529f\uff01",timer:1e3,icon:"success",showConfirmButton:!1}),e.abrupt("return");case 10:Ce.a.fire({position:"top",title:"\u767b\u5165\u5931\u6557\uff01",timer:1e3,icon:"error",showConfirmButton:!1});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){p&&s("/todos")}),[s,p]),Object(D.jsxs)(A,{children:[Object(D.jsx)("div",{children:Object(D.jsx)(ne,{})}),Object(D.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(D.jsx)(I,{children:Object(D.jsx)(se,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return r(e)}})}),Object(D.jsx)(I,{children:Object(D.jsx)(se,{type:"password",label:"\u5bc6\u78bc",value:o,placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",onChange:function(e){return i(e)}})}),Object(D.jsx)(B,{onClick:b,children:"\u767b\u5165"}),Object(D.jsx)(j.b,{to:"/signup",children:Object(D.jsx)(P,{children:"\u8a3b\u518a"})})]})},De=function(){var e=Object(d.useState)(""),n=Object(x.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(""),c=Object(x.a)(a,2),o=c[0],i=c[1],s=Object(d.useState)(""),u=Object(x.a)(s,2),l=u[0],p=u[1],b=Object(h.m)(),f=F(),m=f.register,g=f.isAuthenticated,k=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:if(0!==l.length){e.next=4;break}return e.abrupt("return");case 4:if(0!==o.length){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,m({username:t,email:o,password:l});case 8:if(!e.sent){e.next=13;break}return Ce.a.fire({title:"\u8a3b\u518a\u6210\u529f",icon:"success",showConfirmButton:!1,timer:1e3,position:"top"}),b("/todos"),e.abrupt("return");case 13:Ce.a.fire({title:"\u8a3b\u518a\u5931\u6557",icon:"error",showConfirmButton:!1,timer:1e3,position:"top"});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){g&&b("/todos")}),[b,g]),Object(D.jsxs)(A,{children:[Object(D.jsx)("div",{children:Object(D.jsx)(ne,{})}),Object(D.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(D.jsx)(I,{children:Object(D.jsx)(se,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return r(e)}})}),Object(D.jsx)(I,{children:Object(D.jsx)(se,{label:"Email",placeholder:"\u8acb\u8f38\u5165Email",value:o,onChange:function(e){return i(e)}})}),Object(D.jsx)(I,{children:Object(D.jsx)(se,{label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:l,onChange:function(e){return p(e)}})}),Object(D.jsx)(B,{onClick:k,children:"\u8a3b\u518a"}),Object(D.jsx)(j.b,{to:"/login",children:Object(D.jsx)(P,{children:"\u53d6\u6d88"})})]})},Te=t(16),Se="https://todo-list.alphacamp.io/api",Fe=g.a.create({baseURL:Se});Fe.interceptors.request.use((function(e){var n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)}));var ze=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){var n;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Fe.get("".concat(Se,"/todos"));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Get Todos failed]: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r,a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.title,r=n.isDone,e.prev=1,e.next=4,Fe.post("".concat(Se,"/todos"),{title:t,isDone:r});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("[Create Todo failed]: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Re=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r,a,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.title,a=n.isDone,e.prev=1,e.next=4,Fe.patch("".concat(Se,"/todos/").concat(t),{title:r,isDone:a});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("[Patch Todo failed]:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Fe.delete("".concat(Se,"/todos/").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Delete Todo failed]:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(d.useState)(""),n=Object(x.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)([]),c=Object(x.a)(a,2),o=c[0],i=c[1],s=Object(h.m)(),u=F(),l=u.isAuthenticated,p=u.currentMember,b=o.length,f=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){var n;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Ne({title:t,isDone:!1});case 5:n=e.sent,i((function(e){return[].concat(Object(Te.a)(e),[{id:n.id,title:n.title,isDone:n.isDone,isEdit:!1}])})),r(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){var n;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Ne({title:t,isDone:!1});case 5:n=e.sent,i((function(e){return[].concat(Object(Te.a)(e),[{id:n.id,title:n.title,isDone:n.isDone,isEdit:!1}])})),r(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.find((function(e){return e.id===n})),e.prev=1,e.next=4,Re({id:n,isDone:!t.isDone});case 4:i((function(e){return e.map((function(e){return e.id===n?Object(m.a)(Object(m.a)({},e),{},{isDone:!e.isDone}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var t,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.title,e.prev=1,e.next=4,Re({id:t,title:r});case 4:i((function(e){return e.map((function(e){return e.id===t?Object(m.a)(Object(m.a)({},e),{},{title:r,isEdit:!1}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Me(n);case 3:i((function(e){return e.filter((function(e){return e.id!==n}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){var e=function(){var e=Object(O.a)(Object(v.a)().mark((function e(){var n;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ze();case 3:n=e.sent,i(n.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{isEdit:!1})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.useEffect)((function(){l||s("/login")}),[s,l]),Object(D.jsxs)("div",{children:[Object(D.jsx)(de,{username:null===p||void 0===p?void 0:p.name}),Object(D.jsx)(ve,{inputValue:t,onChange:function(e){r(e)},onAddTodo:f,onKeyDown:j}),Object(D.jsx)(me,{todos:o,onToggleDone:g,onChangeMode:function(e){var n=e.id,t=e.isEdit;i((function(e){return e.map((function(e){return e.id===n?Object(m.a)(Object(m.a)({},e),{},{isEdit:t}):Object(m.a)(Object(m.a)({},e),{},{isEdit:!1})}))}))},onSave:k,onDelete:w}),Object(D.jsx)(we,{todosQty:b})]})};var Ie=function(){return Object(D.jsx)("div",{className:"app",children:Object(D.jsx)(j.a,{basename:"/react-todolist",children:Object(D.jsx)(z,{children:Object(D.jsxs)(h.c,{children:[Object(D.jsx)(h.a,{path:"login",element:Object(D.jsx)(Ee,{})}),Object(D.jsx)(h.a,{path:"signup",element:Object(D.jsx)(De,{})}),Object(D.jsx)(h.a,{path:"todos",element:Object(D.jsx)(Ae,{})}),Object(D.jsx)(h.a,{path:"*",element:Object(D.jsx)(N,{})})]})})})})},Be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,342)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};f.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(p.a.StrictMode,{children:Object(D.jsx)(Ie,{})})),Be()}},[[340,1,2]]]);
//# sourceMappingURL=main.b7d7e5b3.chunk.js.map