(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(49)},24:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),s=a.n(l),o=(a(24),a(2)),c=a.n(o),m=a(5),i=a(3),u=a(14),g=a(15),h=a(17),p=a(16),d=a(18),E=a(6),v=a.n(E),b=(a(47),function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",name:"",tel:"",msg:"",emailError:"",msgError:"",telError:"",nameError:"",sentMessage:""},a.handleChange=function(e){e.preventDefault(),"tel"===e.target.name?(isNaN(e.target.value)||a.setState(Object(i.a)({},e.target.name,e.target.value)),0===e.target.value.length&&a.setState({telError:"Field should not be empty",tel:e.target.value})):"email"===e.target.name?0===e.target.value.length?a.setState({emailError:"Field should not be empty",email:e.target.value}):e.target.value.length<10?a.setState({emailError:"Email length more than 10 chars",email:e.target.value}):a.setState({email:e.target.value,emailError:""}):"name"===e.target.name?0===e.target.value.length?a.setState({nameError:"Field should not be empty",name:e.target.value}):a.setState(Object(i.a)({},e.target.name,e.target.value)):0===e.target.value.length?a.setState({msgError:"Field should not be empty",msg:e.target.value}):a.setState(Object(i.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){""===a.state.emailError&&""===a.state.telError&""===a.state.nameError&&""===a.state.msgError&&a.sumbitRequest()},a.sumbitRequest=Object(m.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("https://node-react-medgo.herokuapp.com/api/request",{email:a.state.email,name:a.state.name,tel:a.state.tel,msg:a.state.msg});case 3:t=e.sent,a.state.sentMessage="You're request has been sent!",console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error : ",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])})),a.getRequest=Object(m.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://node-react-medgo.herokuapp.com/api/request");case 3:t=e.sent,console.log(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error : ",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])})),a}return Object(d.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.name,r=e.tel,l=e.msg,s=e.emailError,o=e.msgError,c=e.telError,m=e.nameError,i=e.sentMessage;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-25"},n.a.createElement("label",{for:"lname"},"Name")),n.a.createElement("div",{class:"col-75"},n.a.createElement("input",{type:"text",onChange:this.handleChange,value:a,name:"name",placeholder:"Name"}),m&&n.a.createElement("p",{className:"errorMessage"},m))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-25"},n.a.createElement("label",{for:"lname"},"E-Mail")),n.a.createElement("div",{class:"col-75"},n.a.createElement("input",{type:"text",className:s?"inputError":"",onChange:this.handleChange,value:t,name:"email",placeholder:"E-Mail"}),s&&n.a.createElement("p",{className:"errorMessage"},s))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-25"},n.a.createElement("label",{for:"lname"},"Telephone")),n.a.createElement("div",{class:"col-75"},n.a.createElement("input",{type:"text",onChange:this.handleChange,value:r,name:"tel",placeholder:"Telephone"}),c&&n.a.createElement("p",{className:"errorMessage"},c))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-25"},n.a.createElement("label",{for:"subject"},"Subject")),n.a.createElement("div",{class:"col-75"},n.a.createElement("textarea",{onChange:this.handleChange,value:l,name:"msg",placeholder:"Your request here..."}),o&&n.a.createElement("p",{className:"errorMessage"},o))),n.a.createElement("div",{class:"row"},n.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit form"),n.a.createElement("p",null,i)))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.bd4eb7a9.chunk.js.map