(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(61)},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=t(3),s=t(4),i=t(6),m=t(5),u=t(7),p=t(63),h=t(65),d=t(64),b=t(11),f=t.n(b),v=t(13),E=t(62),y=t(29),g=t(17),C=t(12),O=t.n(C),N=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(g.a)({},e,{contacts:[a.payload].concat(Object(y.a)(e.contacts))});case"UPDATE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),w=N.Consumer,S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(w,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down"}),r.a.createElement("i",{className:"fas fa-times",style:{float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(E.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email : ",c),r.a.createElement("li",{className:"list-group-item"},"Phone : ",o)):null)})}}]),a}(n.Component),x=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(S,{key:e.id,contact:e})}))})}}]),a}(n.Component),A=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onShowMenu=function(a){console.log("kartik"),e.setState({showHeaderMenu:!e.state.showHeaderMenu})},e.state={showHeaderMenu:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-danger mb-3 py-0 scrolling-navbar fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},this.props.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/contact/add",className:"nav-link"},"Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/about",className:"nav-link"},"About"))))))}}]),a}(n.Component);function T(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.2"))}t(58);var D=t(14),P=t(27),M=t.n(P),R=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},a),r.a.createElement("input",{type:o,name:t,className:M()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};R.defaultProps={type:"text"};var _=R,q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(D.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,c=n.email,o=n.phone;if(""!==r)if(""!==c)if(""!==o){var l={name:r,email:c,phone:o};O.a.post("https://jsonplaceholder.typicode.com/users",l).then(function(a){return e({type:"ADD_CONTACT",payload:a.data})}),console.log(t.state),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/")}else t.setState({errors:{phone:"phone is Required"}});else t.setState({errors:{email:"email is Required"}});else t.setState({errors:{name:"Name is Required"}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name..",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{label:"Email",type:"email",name:"email",placeholder:"Enter Email..",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(D.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is Required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"email is Required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"phone is Required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a,t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name..",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{label:"Email",type:"email",name:"email",placeholder:"Enter Email..",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component);function H(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}var L=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(p.a,{basename:"/github.io/ContactManager"},r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(A,{branding:"Contact Manager"})),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:x}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:I}),r.a.createElement(d.a,{exact:!0,path:"/about",component:T}),r.a.createElement(d.a,{component:H}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.9ff88eed.chunk.js.map