(this.webpackJsonpniceday=this.webpackJsonpniceday||[]).push([[0],{304:function(e,t,a){},305:function(e,t,a){},451:function(e,t){},453:function(e,t){},464:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),i=a(66),o=(a(304),a(305),a(26)),l=a(85),d=a(11),u=a(2),j=Object(n.createContext)({}),b=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({}),i=Object(d.a)(s,2),b=(i[0],i[1]),h=Object(o.f)();Object(n.useEffect)((function(){var e=localStorage.getItem("user");e&&(b(JSON.parse(e)),c(!0))}),[]);var O={login:function(){c(!0),h.push("/dashboard")},loggedIn:r,logout:function(){localStorage.removeItem("user"),c(!1),h.push("/")},getCurrentUser:function(){var e=localStorage.getItem("user");return JSON.parse(e)}};return Object(u.jsx)(j.Provider,Object(l.a)({value:O},e))},h=function(){return r.a.useContext(j)},O=a(67),x=a.n(O),p=a(591),m=a(554),g=a(592),f=a(577),v=a(579),w=a(596),C=function(){var e=h(),t=e.loggedIn,a=e.login,r=Object(o.f)(),c=Object(n.useState)(""),s=Object(d.a)(c,2),i=s[0],l=s[1],j=Object(n.useState)(""),b=Object(d.a)(j,2),O=b[0],C=b[1],y=Object(n.useState)(),S=Object(d.a)(y,2),k=(S[0],S[1]),D=Object(n.useState)(""),I=Object(d.a)(D,2),N=I[0],U=I[1];function A(e){13===e.charCode&&B()}t&&r.push("/dashboard");var B=function(){var e={user_name:i,password:O};try{x.a.post("".concat("http://156.67.216.116/api;","/users/login"),e).then((function(e){e.data.success>0?(k(e.data),localStorage.setItem("user",JSON.stringify(e.data)),a()):U(e.data.message)})).catch((function(e){U(e.message)}))}catch(t){U(t.message)}};return Object(u.jsx)(p.a,{sx:{mt:10,mb:2},children:Object(u.jsxs)(m.a,{spacing:2,direction:"column",children:[Object(u.jsx)(g.a,{variant:"h5",align:"center",children:"Sign In"}),Object(u.jsx)(f.a,{label:"user name",variant:"outlined",onChange:function(e){l(e.target.value)},onKeyPress:A}),Object(u.jsx)(f.a,{label:"password",type:"password",variant:"outlined",onChange:function(e){C(e.target.value)},onKeyPress:A}),""!=N&&Object(u.jsx)(v.a,{severity:"error",children:N}),Object(u.jsx)("br",{}),Object(u.jsx)(w.a,{onClick:B,variant:"contained",color:"primary",children:"Sign In"})]})})},y=a(6),S=a(38),k=a(586),D=a(560),I=a(597),N=a(598),U=a(594),A=a(562),B=a(595),M=a(239),Y=a.n(M),F=a(242),P=a.n(F),R=a(243),E=a.n(R),T=a(581),W=a(563),L=a(244),z=a.n(L),V=a(245),_=a.n(V),J=a(246),q=a.n(J),H=a(247),G=a.n(H),K=a(587),Q=a(561),X=a(237),Z=a(266),$=a(585),ee=a(590),te=a(575),ae=240,ne=Object(y.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(l.a)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(ae,"px")},a&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),re=Object(y.a)(I.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(l.a)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{width:"calc(100% - ".concat(ae,"px)"),marginLeft:"".concat(ae,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),ce=Object(y.a)("div")((function(e){var t=e.theme;return Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function se(){var e,t,a=Object(S.a)(),r=n.useState(!1),c=Object(d.a)(r,2),s=c[0],j=c[1],b=(Object(o.f)(),h()),O=b.logout,x=(b.loggedIn,b.getCurrentUser),m=Object(n.useState)(),f=Object(d.a)(m,2),v=f[0],C=f[1],y=n.useState(null),I=Object(d.a)(y,2),M=I[0],F=I[1],R=Boolean(M);Object(n.useEffect)((function(){var e=x();e&&C("".concat(e.data.user_name," (").concat(e.data.role<2?"Admin":"User",")"))}),[]);function L(){j(!1)}return Object(u.jsxs)(p.a,{sx:{display:"flex"},children:[Object(u.jsx)(D.a,{}),Object(u.jsx)(re,{position:"fixed",open:s,children:Object(u.jsxs)(N.a,{children:[Object(u.jsx)(B.a,{color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},edge:"start",sx:Object(l.a)({mr:2},s&&{display:"none"}),children:Object(u.jsx)(Y.a,{})}),Object(u.jsx)(g.a,{variant:"h6",noWrap:!0,sx:{flexGrow:1},component:"div",children:"Workout Everyday"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(B.a,{id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":R?"true":void 0,onClick:function(e){F(e.currentTarget)},children:Object(u.jsx)(ee.a,{className:"avatarHover",label:null===(e=x().data)||void 0===e?void 0:e.user_name,sx:{bgcolor:Q.a[400],color:X.a[100]}})}),Object(u.jsx)(Z.a,{id:"basic-menu",anchorEl:M,open:R,onClose:function(){F(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:Object(u.jsx)($.a,{onClick:function(){O()},children:"Log out"})})]})]})}),Object(u.jsxs)(k.a,{sx:{width:ae,flexShrink:0,"& .MuiDrawer-paper":{width:ae,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:s,children:[Object(u.jsxs)(ce,{children:[Object(u.jsx)(te.a,{title:v,children:Object(u.jsx)(K.a,{className:"avatarHover",sx:{bgcolor:Q.a[500]},children:null===(t=x().data)||void 0===t?void 0:t.user_name.substring(0,2)})}),Object(u.jsx)(B.a,{onClick:function(){j(!1)},children:"ltr"===a.direction?Object(u.jsx)(P.a,{}):Object(u.jsx)(E.a,{})})]}),Object(u.jsx)(A.a,{}),Object(u.jsxs)(U.a,{children:[Object(u.jsxs)(T.a,{button:!0,children:[Object(u.jsx)(W.a,{children:Object(u.jsx)(z.a,{})}),Object(u.jsx)(i.b,{to:"/dashboard",style:{textDecoration:"none"},onClick:L,children:"Dashboard"})]}),x().data.role<2&&Object(u.jsxs)(T.a,{button:!0,children:[Object(u.jsx)(W.a,{children:Object(u.jsx)(_.a,{})}),Object(u.jsx)(i.b,{to:"/create",style:{textDecoration:"none"},onClick:L,children:"Create Account"})]}),Object(u.jsxs)(T.a,{button:!0,children:[Object(u.jsx)(W.a,{children:Object(u.jsx)(q.a,{})}),Object(u.jsx)(i.b,{to:"/chatroom",style:{textDecoration:"none"},onClick:L,children:"Chat Room"})]})]}),Object(u.jsx)(A.a,{}),Object(u.jsx)(U.a,{children:Object(u.jsxs)(T.a,{button:!0,children:[Object(u.jsx)(W.a,{children:Object(u.jsx)(G.a,{})}),Object(u.jsx)(w.a,{onClick:function(){O()},children:"Log Out"})]})})]}),Object(u.jsx)(ne,{open:s,children:Object(u.jsx)(ce,{})})]})}var ie=a(599),oe=a(602);function le(){return Object(u.jsxs)(g.a,{variant:"body2",color:"text.secondary",children:["Copyright \xa9 ",Object(u.jsx)(oe.a,{color:"inherit",href:"https://material-ui.com/",children:"Workout Everyday"})," ",(new Date).getFullYear(),"."]})}function de(e){var t=e.children;return Object(u.jsxs)(p.a,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[Object(u.jsx)(ie.a,{component:"main",maxWidth:"sm",children:t}),Object(u.jsx)(p.a,{component:"footer",sx:{py:3,px:2,mt:"auto",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[800]}},children:Object(u.jsxs)(ie.a,{maxWidth:"sm",children:[Object(u.jsx)(g.a,{variant:"body1"}),Object(u.jsx)(le,{})]})})]})}var ue=a(63),je=a.n(ue),be=a(107),he=a(578),Oe=a(588),xe=a(600),pe=a(593),me=a(555),ge=a(263),fe=a(127),ve=fe.a().shape({username:fe.b().required("User name is required!"),password:fe.b().min(5).max(20).required("Password is required!")}),we=a.p+"static/media/notification-sound.5b9ecb19.wav";function Ce(){var e=Object(o.f)(),t=h(),a=t.loggedIn,r=t.getCurrentUser;(!a||r().data.role>1)&&e.push("/");var c=Object(n.useState)("2"),s=Object(d.a)(c,2),i=s[0],l=s[1],j=Object(n.useState)(""),b=Object(d.a)(j,2),O=b[0],p=b[1],C=Object(n.useState)(!1),y=Object(d.a)(C,2),S=y[0],k=y[1],D=Object(n.useState)("2"),I=Object(d.a)(D,2),N=(I[0],I[1],Object(ge.a)({initialValues:{username:"",password:""},onSubmit:function(e){A(e)},validationSchema:ve}));function U(e){p(e),new Audio(we).play()}var A=function(){var e=Object(be.a)(je.a.mark((function e(t){var a,n,c,s,o,l;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r(),n={user_name:t.username,password:t.password,role:i,parent_id:a.data.id},c=a.token,s={headers:{Authorization:"Bearer ".concat(c)}},e.prev=4,e.next=7,x.a.post("".concat("http://156.67.216.116/api;","/users"),n,s).catch((function(e){throw e}));case 7:l=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),o=e.t0;case 13:o?(k(!1),U(o.message)):(l.data.success>0?k(!0):k(!1),U(l.data.message),N.resetForm());case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return a?Object(u.jsx)("form",{onSubmit:N.handleSubmit,children:Object(u.jsxs)(m.a,{spacing:2,direction:"column",children:[Object(u.jsx)(g.a,{variant:"h5",align:"center",children:"Create Account"}),Object(u.jsx)(f.a,{label:"user name",variant:"outlined",name:"username",value:N.values.username,onChange:N.handleChange,error:N.touched.username&&Boolean(N.errors.username),helperText:N.touched.username&&N.errors.username,onBlur:N.handleBlur,autoComplete:"off"}),Object(u.jsx)(f.a,{label:"password",type:"password",variant:"outlined",name:"password",value:N.values.password,onChange:N.handleChange,error:N.touched.password&&Boolean(N.errors.password),helperText:N.touched.password&&N.errors.password,onBlur:N.handleBlur}),0===r().data.role&&Object(u.jsxs)(pe.a,{component:"fieldset",children:[Object(u.jsx)(me.a,{component:"legend",children:"Role"}),Object(u.jsxs)(Oe.a,{"aria-label":"gender",name:"controlled-radio-buttons-group",value:i,onChange:function(e){l(e.target.value)},children:[Object(u.jsx)(xe.a,{value:"1",control:Object(u.jsx)(he.a,{}),label:"Admin"}),Object(u.jsx)(xe.a,{value:"2",control:Object(u.jsx)(he.a,{}),label:"User"})]})]}),""!=O&&Object(u.jsx)(v.a,{severity:"".concat(S?"success":"error"),children:O}),Object(u.jsx)("br",{}),Object(u.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",children:"Create Account"})]})}):Object(u.jsx)(o.a,{to:"/"})}var ye=a(582),Se={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ke(e){var t=e.onSubmit,a=h(),c=(a.loggedIn,a.getCurrentUser,Object(n.useState)("")),s=Object(d.a)(c,2),i=s[0],o=s[1],l=r.a.useState(!1),j=Object(d.a)(l,2),b=j[0],O=j[1],x=function(){return O(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"}),Object(u.jsx)(w.a,{onClick:function(){return O(!0)},children:"Rest Day"}),Object(u.jsx)(ye.a,{open:b,onClose:x,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(u.jsx)(p.a,{sx:Se,children:Object(u.jsxs)(m.a,{direction:"column",spacing:2,children:[Object(u.jsx)(g.a,{variant:"h5",gutterBottom:!0,component:"div",children:"Write something"}),Object(u.jsx)(f.a,{id:"outlined-multiline-static",label:"Notes",multiline:!0,rows:4,onChange:function(e){o(e.target.value)}}),Object(u.jsxs)(m.a,{spacing:2,direction:"row",children:[Object(u.jsx)(w.a,{align:"left",variant:"contained",className:"submit",onClick:function(){t(1,i),x()},children:"Post"}),Object(u.jsx)(w.a,{align:"right",variant:"contained",className:"cancel",onClick:function(){return x()},children:"Cancel"})]})]})})})]})}var De=a(174),Ie=a.n(De),Ne=a(609),Ue=a(613),Ae=a(612),Be=a(608),Me=a(610),Ye=a(611),Fe=a(601);a(603),a(607),a(605),a(606),a(604);var Pe=a(92),Re=a(110),Ee=a(255),Te=a.n(Ee),We=a(584),Le=a(254),ze=a.n(Le),Ve=a(253),_e=a.n(Ve);function Je(e){var t=e.userId,a=e.activeStatus,r=e.onSuspend,c=n.useState(null),s=Object(d.a)(c,2),i=s[0],o=s[1],l=Boolean(i);return Object(u.jsxs)("div",{children:[Object(u.jsx)(B.a,{id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":l?"true":void 0,onClick:function(e){o(e.currentTarget)},children:Object(u.jsx)(_e.a,{})}),Object(u.jsxs)(Z.a,{id:"basic-menu",anchorEl:i,open:l,onClose:function(){o(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(u.jsx)($.a,{onClick:function(){!function(e,t){r(e,t),o(null)}(t,a)},children:2!=a?"Suspend":"Unsuspend"}),Object(u.jsx)($.a,{onClick:function(){o(null)},children:"Remove User"})]})]})}function qe(e){var t=e.results,r=e.onSuspend,c=e.loginUserRole,s=Object(n.useState)(!1),i=Object(d.a)(s,2),o=(i[0],i[1],h().getCurrentUser);function l(e){var t=a(174),n=t().toDate();return t(n).format("DD/MM/YYYY")===t(e).format("DD/MM/YYYY")?"Today":n.getMonth()==new Date(e).getMonth()&&n.getFullYear()==new Date(e).getFullYear()?n.getDate()-new Date(e).getDate()==1?"Yesterday":"".concat(n.getDate()-new Date(e).getDate()," days ago"):n.getMonth()!=new Date(e).getMonth()&&n.getFullYear()==new Date(e).getFullYear()?n.getMonth()-new Date(e).getMonth()==1?"1 month ago":"".concat(n.getMonth()-new Date(e).getMonth()," months ago"):"".concat(n.getFullYear()-new Date(e).getFullYear()," Year(s) ago")}return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsx)(Be.a,{component:Fe.a,children:Object(u.jsxs)(Ne.a,{children:[Object(u.jsx)(Me.a,{children:Object(u.jsxs)(Ye.a,{children:[Object(u.jsx)(Ae.a,{children:"Name"}),Object(u.jsx)(Ae.a,{align:"center",children:"Active"}),Object(u.jsx)(Ae.a,{align:"center"})]})}),Object(u.jsx)(Ue.a,{children:t.map((function(e,t){return Object(u.jsxs)(Ye.a,{sx:{"&:last-child td, &:last-child th":{border:0},bgcolor:e.Status>0?Pe.a[100]:X.a[10]},children:[Object(u.jsx)(Ae.a,{component:"th",scope:"row",children:Object(u.jsxs)(m.a,{direction:"row",children:[e.UserName,2==e.Active&&Object(u.jsx)(te.a,{title:"User Suspended",children:Object(u.jsx)(ze.a,{style:{color:Re.a[800]}})})]})}),Object(u.jsxs)(Ae.a,{align:"center",children:[l(e.RecDate)," ",Ie()(e.RecDate).format("hh:mm a")]}),Object(u.jsx)(Ae.a,{align:"center",children:Object(u.jsxs)(m.a,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",children:[e.Status>0&&Object(u.jsx)(B.a,{onClick:function(){return t=e.Note,alert(t);var t},children:Object(u.jsx)(We.a,{badgeContent:1,color:"secondary",children:Object(u.jsx)(Te.a,{sx:{color:X.a[600]}})})}),2!==c&&o().data.id!==e.UserId&&Object(u.jsx)(Je,{userId:e.UserId,activeStatus:e.Active,onSuspend:r})]})})]},e.UserId)}))})]})})})}function He(){var e=h(),t=e.loggedIn,a=e.getCurrentUser,r=Object(n.useState)(null),c=Object(d.a)(r,2),s=c[0],i=c[1],l=Object(n.useState)(!1),j=Object(d.a)(l,2),b=j[0],O=j[1],p=Object(n.useState)(""),g=Object(d.a)(p,2),f=g[0],C=g[1],y=Object(n.useState)(!1),S=Object(d.a)(y,2),k=S[0],D=S[1];function I(e){C(e),new Audio(we).play()}function N(){return U.apply(this,arguments)}function U(){return(U=Object(be.a)(je.a.mark((function e(){var t,n,r,c;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a(),n={userId:t.data.id,role:t.data.role},r=t.token,c={headers:{Authorization:"Bearer ".concat(r)},params:n},e.next=6,x.a.get("".concat("http://156.67.216.116/api;","/users/workout"),c).then((function(e){e.data.success>0?i(e.data.rows):(D(!1),I(e.data.message))})).catch((function(e){D(!1),I(e.message.toString())}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(be.a)(je.a.mark((function e(t,n){var r,c,s,i;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a(),c={id:t,active:n},s=r.token,i={headers:{Authorization:"Bearer ".concat(s)}},e.next=6,x.a.patch("".concat("http://156.67.216.116/api;","/users/suspend"),c,i).then((function(e){e.data.success>0?D(!0):D(!1),I(e.data.message),N()})).catch((function(e){D(!1),I(e.message.toString())}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return M.apply(this,arguments)}function M(){return(M=Object(be.a)(je.a.mark((function e(t,n){var r,c,s,i;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a(),c=0==t?{userId:r.data.id,status:t}:{userId:r.data.id,status:t,note:n},s=r.token,i={headers:{Authorization:"Bearer ".concat(s)}},e.next=6,x.a.post("".concat("http://156.67.216.116/api;","/users/workout"),c,i).then((function(e){e.data.success>0?D(!0):D(!1),I(e.data.message),N()})).catch((function(e){D(!1),I(e.message.toString())}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){t&&N()}),[]),t?Object(u.jsxs)("div",{children:[""!=f&&Object(u.jsx)(v.a,{severity:"".concat(k?"success":"error"),children:f}),Object(u.jsx)("br",{}),Object(u.jsxs)(m.a,{spacing:2,direction:"row",children:[Object(u.jsx)(w.a,{variant:"contained",onClick:function(){B(0)},children:"Register"}),Object(u.jsx)("button",{children:Object(u.jsx)(ke,{variant:"outlined",onSubmit:B})})]}),Object(u.jsx)("br",{}),b&&Object(u.jsx)(ke,{closeModal:O}),s?Object(u.jsx)(qe,{results:s,onSuspend:function(e,t){return A.apply(this,arguments)},loginUserRole:a().data.role}):null]}):Object(u.jsx)(o.a,{to:"/"})}var Ge=a(4),Ke=a(574),Qe=a(569),Xe=a(564),Ze=a(567),$e=a(473),et=a(264),tt=a(179),at=a.n(tt),nt=Object(n.createContext)(),rt=Object(et.a)("http://156.67.216.116/api"),ct=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(d.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)(),h=Object(d.a)(b,2),O=h[0],x=h[1],p=Object(n.useState)(""),m=Object(d.a)(p,2),g=m[0],f=m[1],v=Object(n.useState)({}),w=Object(d.a)(v,2),C=w[0],y=w[1],S=Object(n.useState)(""),k=Object(d.a)(S,2),D=k[0],I=k[1],N=Object(n.useRef)(),U=Object(n.useRef)(),A=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){x(e),N.current.srcObject=e})),rt.on("me",(function(e){return I(e)})),rt.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;y({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(u.jsx)(nt.Provider,{value:{call:C,callAccepted:c,myVideo:N,userVideo:U,stream:O,name:g,setName:f,callEnded:l,me:D,callUser:function(e){var t=new at.a({initiator:!0,trickle:!1,stream:O});t.on("signal",(function(t){rt.emit("callUser",{userToCall:e,signalData:t,from:D,name:g})})),t.on("stream",(function(e){U.current.srcObject=e})),rt.on("callAccepted",(function(e){s(!0),t.signal(e)})),A.current=t},leaveCall:function(){j(!0),A.current.destroy(),window.location.reload()},answerCall:function(){s(!0);var e=new at.a({initiator:!1,trickle:!1,stream:O});e.on("signal",(function(e){rt.emit("answerCall",{signal:e,to:C.from})})),e.on("stream",(function(e){U.current.srcObject=e})),e.signal(C.signal),A.current=e}},children:t})},st=Object(Xe.a)((function(e){return{video:Object(Ge.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(Ge.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}}));var it=function(){var e=Object(n.useContext)(nt),t=e.name,a=e.callAccepted,r=e.myVideo,c=e.userVideo,s=e.callEnded,i=e.stream,o=e.call,l=st();return Object(u.jsxs)(Ze.a,{container:!0,className:l.gridContainer,children:[i&&Object(u.jsx)($e.a,{className:l.Paper,children:Object(u.jsxs)(Ze.a,{item:!0,xs:12,md:6,children:[Object(u.jsx)(Qe.a,{varient:"h5",gutterBottom:!0,children:t||"Name"}),Object(u.jsx)("video",{playsInline:!0,muted:!0,ref:r,autoPlay:!0,className:l.video})]})}),a&&!s&&Object(u.jsx)($e.a,{className:l.Paper,children:Object(u.jsxs)(Ze.a,{item:!0,xs:12,md:6,children:[Object(u.jsx)(Qe.a,{varient:"h5",gutterBottom:!0,children:o.name||"Name"}),Object(u.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:l.video})]})})]})},ot=a(570),lt=a(576),dt=a(583),ut=a(262),jt=a(571),bt=a(572),ht=a(573),Ot=Object(Xe.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(Ge.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(Ge.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),xt=function(e){var t=e.children,a=Object(n.useContext)(nt),r=a.me,c=a.callAccepted,s=a.name,i=a.setName,o=a.callEnded,l=a.leaveCall,j=a.callUser,b=Object(n.useState)(""),h=Object(d.a)(b,2),O=h[0],x=h[1],p=Ot();return Object(u.jsx)(ot.a,{className:p.container,children:Object(u.jsxs)($e.a,{elevation:10,className:p.paper,children:[Object(u.jsx)("form",{className:p.root,noValidate:!0,autoComplete:"off",children:Object(u.jsxs)(Ze.a,{container:!0,className:p.gridContainer,children:[Object(u.jsxs)(Ze.a,{item:!0,xs:12,md:6,className:p.padding,children:[Object(u.jsx)(Qe.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(u.jsx)(lt.a,{label:"Name",value:s,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(u.jsx)(ut.CopyToClipboard,{text:r,className:p.margin,children:Object(u.jsx)(dt.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(u.jsx)(jt.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(u.jsxs)(Ze.a,{item:!0,xs:12,md:6,className:p.padding,children:[Object(u.jsx)(Qe.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(u.jsx)(lt.a,{label:"ID to call",value:O,onChange:function(e){return x(e.target.value)},fullWidth:!0}),c&&!o?Object(u.jsx)(dt.a,{variant:"contained",color:"secondary",startIcon:Object(u.jsx)(bt.a,{fontSize:"large"}),fullWidth:!0,onClick:l,className:p.margin,children:"Hang Up"}):Object(u.jsx)(dt.a,{variant:"contained",color:"primary",startIcon:Object(u.jsx)(ht.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return j(O)},className:p.margin,children:"Call"})]})]})}),t]})})},pt=function(){var e=Object(n.useContext)(nt),t=e.answerCall,a=e.call,r=e.callAccepted;return Object(u.jsx)("div",{children:a.isReceivingCall&&!r&&Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(u.jsxs)("h1",{children:[a.name," is calling:"]}),Object(u.jsx)(dt.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},mt=Object(Xe.a)((function(e){return{appBar:Object(Ge.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}}));var gt=function(){var e=mt();return Object(u.jsx)(ct,{children:Object(u.jsxs)("div",{className:e.wrapper,children:[Object(u.jsx)(Ke.a,{className:e.appBar,position:"static",color:"inherit",children:Object(u.jsx)(Qe.a,{variant:"h2",align:"center",children:"Video Chat"})}),Object(u.jsx)(it,{}),Object(u.jsx)(xt,{children:Object(u.jsx)(pt,{})})]})})};var ft=function(){var e=h(),t=e.loggedIn;return e.getCurrentUser,Object(u.jsxs)(de,{children:[t&&Object(u.jsx)(se,{}),Object(u.jsx)(o.b,{exact:!0,path:"/",component:C}),Object(u.jsx)(o.b,{exact:!0,path:"/dashboard",component:He}),Object(u.jsx)(o.b,{exact:!0,path:"/create",component:Ce}),Object(u.jsx)(o.b,{exact:!0,path:"/chatroom",component:gt})]})},vt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,616)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(b,{children:Object(u.jsx)(ft,{})})})}),document.getElementById("root")),vt()}},[[464,1,2]]]);
//# sourceMappingURL=main.cb658bd3.chunk.js.map