(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,a){e.exports=a(90)},57:function(e,t,a){},58:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(20),l=a.n(o),i=(a(57),a(11)),s=a(12),c=a(15),u=a(13),m=a(16),d=a(14),g=a(25),h=a(26),p=(a(58),a(29)),f={markers:[{title:"Asdf",name:"Coolio",position:{lat:30.2672,lng:-97.7431}},{title:"Dfsa",name:"Jerome",position:{lat:30.267,lng:-97.7428}},{title:"Fdas",name:"Clinton",position:{lat:30.2666,lng:-97.7421}}],centerCoords:{},users:[{id:1,username:"t28fan",password:"password12345",aircraft:[{model:"T28",description:"The Everyday Warbird",windMin:0,windMax:15},{model:"P47",description:"The Jug",windMin:5,windMax:20}],markers:[{title:"Asdf",name:"Coolio",position:{lat:30.2672,lng:-97.7431}},{title:"Dfsa",name:"Jerome",position:{lat:30.267,lng:-97.7428}},{title:"Fdas",name:"Clinton",position:{lat:30.2666,lng:-97.7421}}]},{id:2,username:"joshbixler",password:"flitetest",aircraft:[{model:"Bix3",description:"A dream to fly",windMin:0,windMax:30}],markers:[{title:"Asdf",name:"Coolio",position:{lat:30.2672,lng:-97.7431}},{title:"Dfsa",name:"Jerome",position:{lat:30.267,lng:-97.7428}},{title:"Fdas",name:"Clinton",position:{lat:30.2666,lng:-97.7421}}]}]},E={height:"90vh"};var v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Map,{google:this.props.google,zoom:14,style:E,initialCenter:f.centerCoords},function(){var e=[r.a.createElement(p.Marker,{title:"Current Position",name:"Current Position",position:f.centerCoords})];return f.markers.map(function(t,a){e.push(r.a.createElement(p.Marker,{title:t.title,name:t.name,position:t.position,key:a}))}),e}(),r.a.createElement(p.InfoWindow,{onClose:this.onInfoWindowClose},r.a.createElement("div",null,r.a.createElement("h1",null,"Test InfoWindow"))))}}]),t}(n.Component),y=Object(p.GoogleApiWrapper)({apiKey:"AIzaSyALRQdYdUeoh-KS37fpqYTJX4PGQWOss3E"})(v),b=a(119),w=a(99),O=a(100),S=a(101),j=a(102),k=a(103),C=a(104),I=a(105),N=a(106),W=a(107),L=a(108),M=a(95),x=a(46),R=a(118),z=a(96),T=a(97),A=a(98),D=a(91),G=a(92),U=a(93),P=a(94),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{onSubmit:this.props.handleSubmit},r.a.createElement(G.a,null,r.a.createElement(U.a,{for:"user"},"Username"),r.a.createElement(P.a,{type:"text",name:"username",onChange:this.handleChange,placeholder:"randyrhoads"})),r.a.createElement(G.a,null,r.a.createElement(U.a,{for:"password"},"Password"),r.a.createElement(P.a,{type:"password",name:"password",placeholder:"password123"})),r.a.createElement(x.a,null,"Submit"))}}]),t}(r.a.Component),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleAlert=function(e){a.setState({alertMessage:e})},a.state={modal:!1,displayed:"login",message:"",alertMessage:"",rSelected:1},a.handleLogin=a.handleLogin.bind(Object(m.a)(a)),a.handleRegister=a.handleRegister.bind(Object(m.a)(a)),a.toggle=a.toggle.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleLogin",value:function(e){var t=this;e.preventDefault();var a=e.target.username.value,n=e.target.password.value,r=JSON.stringify({username:a,password:n});fetch("/api/sessions",{method:"POST",headers:{"Content-Type":"application/json"},body:r}).then(function(e){return e.json()}).then(function(e){t.props.setUser(e.user),localStorage.setItem("user",e.user),localStorage.setItem("token",e.token),t.setState({message:e.message},function(){t.handleAlert(t.state.message),"success"===t.state.message&&setTimeout(t.toggle,1e3)})})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault();var a=e.target.username.value,n=e.target.password.value,r=JSON.stringify({username:a,password:n});console.log(r),fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:r}).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({message:e.message},function(){t.handleAlert(t.state.message)})})}},{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"viewLogin",value:function(){this.setState({displayed:"login",rSelected:1})}},{key:"viewRegister",value:function(){var e=this;this.setState({displayed:"register",rSelected:2},function(){return console.log(e.state)})}},{key:"displayedForm",value:function(){var e;return"login"===this.state.displayed?e=r.a.createElement(B,{handleSubmit:this.handleLogin,title:"Login"}):"register"===this.state.displayed&&(e=r.a.createElement(B,{handleSubmit:this.handleRegister,title:"Register"})),e}},{key:"alertMessage",value:function(){return"success"===this.state.alertMessage?r.a.createElement(M.a,{color:"success"},"Login successful!"):"failure"===this.state.alertMessage?r.a.createElement(M.a,{color:"danger"},"Username or password is incorrect!"):"created"===this.state.alertMessage?r.a.createElement(M.a,{color:"success"},"Account successfully created!"):"exists"===this.state.alertMessage?r.a.createElement(M.a,{color:"danger"},"An account with that username already exists!"):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.a,{color:"danger",onClick:this.toggle},"Login/Register"),r.a.createElement(R.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(z.a,{toggle:this.toggle},r.a.createElement(T.a,null,r.a.createElement(x.a,{color:"primary",onClick:function(){return e.viewLogin()},active:1===this.state.rSelected},"Login"),r.a.createElement(x.a,{color:"primary",onClick:function(){return e.viewRegister()},active:2===this.state.rSelected},"Register"))),r.a.createElement(A.a,null,this.displayedForm()),this.alertMessage()))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(m.a)(a)),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"logout",value:function(){localStorage.clear(),localStorage.setItem("token",""),localStorage.setItem("user","")}},{key:"displayUserDropdown",value:function(){return""===this.props.user?void 0:(localStorage.setItem("caret",!0),r.a.createElement(b.a,{nav:!0,inNavbar:!0},r.a.createElement(w.a,{nav:!0},this.props.user," \u25bc"),r.a.createElement(O.a,{right:!0},r.a.createElement(S.a,null,r.a.createElement(j.a,{tag:g.b,to:"/hangar/"},"Hangar")),r.a.createElement(S.a,null,r.a.createElement(j.a,{tag:g.b,to:"/locations/"},"Locations")),r.a.createElement(S.a,{divider:!0}),r.a.createElement(S.a,null,r.a.createElement(j.a,{to:"#",onClick:this.logout()},"Log Out")))))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{color:"light",light:!0,expand:"md"},r.a.createElement(C.a,{href:"/"},"RC Aircraft Wind Sock"),r.a.createElement(I.a,{onClick:this.toggle}),r.a.createElement(N.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(W.a,{className:"ml-auto",navbar:!0},r.a.createElement(L.a,null,r.a.createElement(j.a,{tag:g.b,to:"/current-weather/"},"Weather Forecast")),r.a.createElement(L.a,null,r.a.createElement(j.a,{tag:g.b,to:"/map/"},"View Map")),this.displayUserDropdown()),r.a.createElement(F,{setUser:this.props.setUser,toggleCaret:this.toggleCaret}))))}}]),t}(r.a.Component),H=a(109);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Q=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"m448.841,9.408c-50.1-25-91.9,5.2-104.3,32.3l-12.7,24.2c-26.4-12.8-56-20-87.3-20-110.5,0-200,89.5-200,200 0,71.8 37.9,134.8 94.7,170.1l-11.5,22c-12.1,24.3-42.7,39.6-76.1,24-28.2-14.6-38.6-49-24-76.1l-18.8-9.4c-19.8,37.5-5.2,84.4 32.4,104.2 50.1,25 91.9-5.2 104.3-32.3l11.9-22.5c26.4,12.8 55.9,20 87.2,20 110.5,0 200-89.5 200-200 0-71.8-37.8-134.7-94.6-170l12.4-23.7c12.1-24.3 42.7-39.6 76.1-24 28.2,14.6 38.6,49 24,76.1l18.8,9.4c19.7-37.5 5.1-84.4-32.5-104.3zm-299.9,388c-50.2-31.8-83.7-87.8-83.7-151.5 0-98.8 80.4-179.2 179.2-179.2 27.8,0 54.1,6.4 77.6,17.7l-30.4,57.7c-14.4-6.5-30.3-10.2-47.1-10.2-63,0-114,51-114,114 0,38.7 19.3,72.9 48.8,93.5l-30.4,58zm188.8-151.5c0,51.4-41.8,93.2-93.2,93.2s-93.2-41.8-93.2-93.2 41.8-93.2 93.2-93.2 93.2,41.8 93.2,93.2zm86,0c0,98.8-80.4,179.2-179.2,179.2-27.7,0-54-6.3-77.5-17.6l30.4-57.7c14.3,6.5 30.3,10.1 47,10.1 63,0 114-51 114-114 0-38.7-19.3-72.8-48.7-93.5l30.4-58c50.2,31.8 83.6,87.8 83.6,151.5z"}),r.a.createElement("path",{d:"m183.241,202.308c0,6.3 4.2,10.4 9.4,11.5l49.2,4.2-26.3,50.4-26-2.4c-6.3-1-10.4,4.2-11.5,9.4 0,6.3 4.2,10.4 9.4,11.5l29.2,3.1 18.8,22.9c5.5,6.7 13.3,2.4 15.6,0 4.2-3.1 5.2-10.4 1-14.6l-17.3-20.5 25.9-49.6 32,37.9c3.8,4.3 9.8,6.1 14.6,1 4.2-3.1 5.2-10.4 1-14.6l-36.9-44.6 8.9-17c3.1-5.2 1-11.5-4.2-14.6-5.2-3.1-11.5-1-14.6,4.2l-9.4,18.1-57.3-5.5c-6.3-1.2-10.4,4-11.5,9.2z"}))),V=function(e){var t=e.svgRef,a=K(e,["svgRef"]);return r.a.createElement("svg",Y({viewBox:"0 0 490.115 490.115",enableBackground:"new 0 0 490.115 490.115",ref:t},a),Q)},q=r.a.forwardRef(function(e,t){return r.a.createElement(V,Y({svgRef:t},e))}),X=(a.p,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={fireRedirect:!1},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),localStorage.setItem("zipcode",e.target.zipcode.value);var t=JSON.stringify({zipcode:e.target.zipcode.value});console.log(t),fetch("/search-location",{headers:{"Content-Type":"application/json"},method:"POST",body:t}),this.state.fireRedirect?this.setState({fireRedirect:!1}):this.setState({fireRedirect:!0})}},{key:"render",value:function(){return r.a.createElement(D.a,{inline:!0,style:{margin:"auto"},onSubmit:this.handleSubmit},r.a.createElement(G.a,null,r.a.createElement(P.a,{size:"lg",type:"text",placeholder:"Enter zipcode here",defaultValue:this.props.value,name:"zipcode"}),r.a.createElement(x.a,{size:"lg"},"Get Weather")),this.state.fireRedirect&&r.a.createElement(h.a,{to:"/current-weather"}))}}]),t}(n.Component)),$=function(e){return r.a.createElement("div",null,r.a.createElement(H.a,{className:"jumbotron"},r.a.createElement(q,{style:{height:"33vh"}}),r.a.createElement("h1",{className:"display-3 centerText"},"Fly with confidence."),r.a.createElement("p",{className:"lead centerText"},"Solutions for the model aircraft enthusiast"),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",{className:"centerText"},"Your aircraft. Your airfields. Know where, when, and what to fly. Never get caught unprepared on a perfect flying day again!"),r.a.createElement(X,{path:"/search-location"})))},Z=a(116),_=a(110),ee=a(111),te=a(112),ae=a(113),ne=a(114),re=a(115),oe=function(e){return r.a.createElement(_.a,{body:!0,inverse:!0,color:"primary",style:{margin:"10px 0"}},r.a.createElement(ee.a,null,r.a.createElement("h1",null,e.time)),r.a.createElement(te.a,null,r.a.createElement("h3",null,r.a.createElement(ae.a,{color:e.color},e.recommendation)),r.a.createElement(ne.a,null,e.summary),r.a.createElement(re.a,null,"Wind Speed: ",e.windSpeed,"mph. Gust Speed: ",e.windGust," mph."),r.a.createElement(re.a,null,"Winds out of the ",e.windDirection),r.a.createElement(re.a,null,"Wind Bearing: ",e.windBearing)))},le=(n.Component,a(117)),ie=a(51),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1,currently:{},hourly:[],color:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/search-location-weather").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({isLoading:!1,currently:t.currently,hourly:t.hourly.data}),console.log(e.state.hourly)})}},{key:"isGoodFlying",value:function(e,t){return e<=5&&t<=7?"Good wind conditions!":e<=10&&t<=15?"Average wind conditions.":"It is likely too windy to fly!"}},{key:"generateColor",value:function(e,t){return e<=5&&t<=7?"success":e<=10&&t<=15?"warning":"danger"}},{key:"convertDegreesToDirection",value:function(e){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(e/22.5+.5)%16]}},{key:"generateForecastCards",value:function(){var e=this,t=[];return this.state.hourly.map(function(a,n){var o=ie.unix(a.time).format("ddd, hA");t.push(r.a.createElement(oe,{key:n,time:o,color:e.generateColor(a.windSpeed,a.windGust),recommendation:e.isGoodFlying(a.windSpeed,a.windGust),summary:a.summary,windSpeed:a.windSpeed,windGust:a.windGust,windBearing:a.windBearing,windDirection:e.convertDegreesToDirection(a.windBearing)}))}),t}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("div",null,r.a.createElement(le.a,null),r.a.createElement(le.a,null),r.a.createElement(le.a,null),r.a.createElement(le.a,null),r.a.createElement(le.a,null)):r.a.createElement("div",null,r.a.createElement(X,{value:localStorage.getItem("zipcode")}),this.generateForecastCards())}}]),t}(n.Component),ce=function(e){return r.a.createElement("div",null,r.a.createElement(M.a,{color:"danger"},"Invalid zip code! ",r.a.createElement("a",{href:"/",className:"alert-link"},"Go Back Home.")))};function ue(){return r.a.createElement("h1",null,"Hangar")}var me=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setUser=function(e,t){a.setState({user:e,isLoggedIn:t})},a.state={user:localStorage.getItem("user"),isLoggedIn:!1},a.setUser=a.setUser.bind(Object(m.a)(a)),a.logout=a.logout.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.setItem("user",""),localStorage.setItem("token","")}},{key:"logout",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){return r.a.createElement(g.a,{className:"App",style:{height:window.innerHeight}},r.a.createElement(J,{className:"navbar",setUser:this.setUser,user:this.state.user,isLoggedIn:this.state.isLoggedIn,logOut:this.logOut}),r.a.createElement(h.b,{exact:!0,path:"/",component:$}),r.a.createElement(h.b,{path:"/current-weather",component:se}),r.a.createElement(h.b,{path:"/map",component:y}),r.a.createElement(h.b,{path:"/hangar",component:ue}),r.a.createElement(h.b,{path:"/error",component:ce}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);a(87).config(),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(e){f.centerCoords={lat:e.coords.latitude,lng:e.coords.longitude},console.log(f.centerCoords)}),l.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.fc0250e6.chunk.js.map