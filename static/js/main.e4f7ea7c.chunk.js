(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{60:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(20),l=s.n(n),r=s(8),i=(s(60),s(51)),j=s.n(i),h=(s(61),s(73)),o=s(25),d=s(7),b=s(76),m=s(77),x=s(0);function O(){return Object(x.jsxs)(b.a,{children:[Object(x.jsx)(b.a.Brand,{className:"m-0",children:Object(x.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)("span",{className:"d-flex justify-content-center",children:"Shun Jie."})})}),Object(x.jsxs)(h.a,{className:"justify-content-end",children:[Object(x.jsx)(m.a.Item,{children:Object(x.jsx)(m.a.Link,{children:Object(x.jsx)(o.b,{to:"/about",children:"ABOUT"})})}),Object(x.jsx)(m.a.Item,{children:Object(x.jsx)(m.a.Link,{children:Object(x.jsx)(o.b,{to:"/works",children:"WORKS"})})}),Object(x.jsx)(m.a.Item,{children:Object(x.jsx)(m.a.Link,{children:Object(x.jsx)(o.b,{to:"/contact",children:"CONTACT"})})})]})]})}var u=s(31),g=s(47),p=s(74),f=s(54);function N(){var e=(new Date).getFullYear();return Object(x.jsxs)(h.a,{className:"mb-3 mt-3",children:[Object(x.jsx)(p.a,{children:Object(x.jsx)(f.a,{className:"text-center",children:Object(x.jsxs)(h.a,{className:"d-flex align-items-center justify-content-center",children:[Object(x.jsx)("a",{href:"https://github.com/Ruin9999",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(u.a,{icon:g.b,size:"lg",color:"#6e5494"})}),"\xa0",Object(x.jsx)("a",{href:"https://www.linkedin.com/in/shun-jie-yong-9009bb164/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(u.a,{icon:g.c,size:"lg",color:"#0E76A8"})}),"\xa0",Object(x.jsx)("a",{href:"https://codepen.io/ruin9999",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(u.a,{icon:g.a,size:"lg"})})]})})}),Object(x.jsx)(p.a,{className:"mt-1",children:Object(x.jsx)(f.a,{className:"text-center",children:Object(x.jsxs)("small",{children:["\xa9 ",e," YONG SHUN JIE ALL RIGHTS RESERVED"]})})})]})}var v=s(79);function w(e){var t=Object(c.useState)(!1),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){n(e.visible)}),[e.visible]),Object(x.jsx)(v.a,{style:{position:"fixed",top:"10px",right:"10px"},onClose:function(){return n(!a)},show:a,children:Object(x.jsxs)(v.a.Header,{children:[Object(x.jsx)("strong",{className:"me-auto",children:"Message Sent!"}),Object(x.jsx)("small",{children:"just now"})]})})}var k=s(75);function y(){return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(f.a,{xs:12,md:8,children:Object(x.jsxs)(h.a,{className:"d-flex justify-content-center flex-column h-100",children:[Object(x.jsx)("span",{children:"Hello! I am"}),Object(x.jsx)("h2",{children:"Shun Jie"}),Object(x.jsx)("span",{style:{padding:"0px 5px"},children:"and I am currently..."}),Object(x.jsx)("h2",{children:"Working hard to become a developer!"}),Object(x.jsx)("small",{className:"text-muted",children:"scroll down for more"})]})}),Object(x.jsx)(f.a,{md:4,className:"d-none d-md-block",children:Object(x.jsx)(h.a,{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)(k.a,{src:"/images/shun_jie_gray.jpeg",height:"80%",width:"80%"})})})]})}function S(){return Object(x.jsx)(h.a,{className:"d-flex justify-content-center flex-column",children:Object(x.jsx)(y,{})})}var C=s(78),I=s(45);function _(e){var t=Object(c.useState)(""),s=Object(r.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)(""),i=Object(r.a)(l,2),j=i[0],o=i[1];function d(e){switch(e.target.name){case"name":o(e.target.value);break;case"message":n(e.target.value)}}return Object(x.jsx)(h.a,{className:"w-100",children:Object(x.jsxs)(p.a,{className:"align-items-center",children:[Object(x.jsx)(f.a,{md:6,children:Object(x.jsxs)(h.a,{className:"d-inline-flex justify-content-center",children:[Object(x.jsx)("h2",{children:"Let's have a chat!"}),Object(x.jsx)("h2",{className:"swivleIcon",children:"\ud83c\udf7a"})]})}),Object(x.jsx)(f.a,{md:6,children:Object(x.jsxs)(C.a,{onSubmit:function(t){t.preventDefault(),I.a.send("service_g8snmcq","template_cz805a6",{firstName:j,message:a},"user_gBREhfn77piuhd9XrUZdH").then((function(){e.setToast(!0),console.log("Success!")}),(function(e){return console.log(e.text)}))},children:[Object(x.jsxs)(C.a.Label,{children:["Name ",Object(x.jsx)("small",{className:"required",children:"*"})]}),Object(x.jsx)(C.a.Control,{name:"name",type:"text",placeholder:"Shun Jie",size:"sm",onChange:d,value:j,required:!0}),Object(x.jsxs)(C.a.Label,{className:"mt-2",children:["Message ",Object(x.jsx)("small",{className:"required",children:"*"})]}),Object(x.jsx)(C.a.Control,{name:"message",as:"textarea",style:{height:"100px"},placeholder:"...",size:"sm",onChange:d,value:a,required:!0}),Object(x.jsx)(h.a,{className:"mt-2 btn",children:Object(x.jsx)(C.a.Control,{type:"submit",value:"Send \u2709\ufe0f"})}),Object(x.jsx)(h.a,{className:"text-center",children:Object(x.jsx)("a",{href:"#email",onClick:function(e){e.preventDefault(),window.open("mailto:b14ktoss@gmail.com?subject=Let's talk!")},children:Object(x.jsx)("small",{children:"or send me a personal email..."})})})]})})]})})}function L(e){return Object(x.jsxs)(h.a,{children:[Object(x.jsx)(h.a,{style:{minHeight:"90vh"},className:"d-flex justify-content-start align-items-center","data-aos":"fade-up",children:Object(x.jsx)(S,{})}),Object(x.jsx)(h.a,{style:{minHeight:"90vh"},className:"d-flex align-items-center","data-aos":"fade-up",children:Object(x.jsx)(_,{setToast:e.setToast})})]})}function T(){return Object(x.jsxs)(p.a,{className:"mb-5 align-items-center","data-aos":"fade-up",children:[Object(x.jsx)(p.a,{children:Object(x.jsxs)(h.a,{className:"d-inline-flex justify-content-center mt-2",children:[Object(x.jsx)("h2",{children:"Who is this man?"}),Object(x.jsx)("h2",{className:"swivleIcon",children:"\ud83e\udd2a"})]})}),Object(x.jsx)(f.a,{xs:12,md:8,children:Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsxs)("h4",{children:["Hello! I am ",Object(x.jsx)("i",{children:"Shun Jie"})]}),Object(x.jsxs)("p",{children:["Located in ",Object(x.jsx)("b",{children:Object(x.jsx)("i",{children:"Singapore"})}),", I am a passionate Software developer looking to make it ",Object(x.jsx)("b",{children:Object(x.jsx)("i",{children:"Big"})}),"!"]}),Object(x.jsx)("p",{children:"Throw me anything and I will be more than happy to learn!"}),Object(x.jsx)("small",{className:"text-muted",children:"scroll down for more"})]})})}),Object(x.jsx)(f.a,{md:4,className:"text-center d-none d-md-block",children:Object(x.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036276397!2d103.70416536508672!3d1.314339378152852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1638878007258!5m2!1sen!2ssg",width:"300",height:"300",allowFullScreen:!1,loading:"lazy"})})]})}s(70);function H(){return Object(x.jsxs)(h.a,{children:[Object(x.jsx)("h2",{className:"mb-4",children:"My History \ud83d\udcdc"}),Object(x.jsxs)("ul",{className:"timeline",children:[Object(x.jsxs)("li",{className:"event","data-date":"2000 - 2011",children:[Object(x.jsx)("p",{className:"d-inline-block",children:"Sniffing apple juice, Drinking air"}),Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Magically learnt how to eat, sleep and walk."})})})]}),Object(x.jsxs)("li",{className:"event","data-date":"2007 - 2012",children:[Object(x.jsx)("p",{className:"d-inline-block",children:"Attended Pei Hwa Presbyterian"}),Object(x.jsx)("a",{className:"d-inline-block m-1",href:"https://peihwapresbyterianpri.moe.edu.sg/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("small",{children:"link"})}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Joined the Robotics club."})}),Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Learnt about visual scripting through the help of LEGO NXT."})})]})]}),Object(x.jsxs)("li",{className:"event","data-date":"2013 - 2017",children:[Object(x.jsx)("p",{className:"d-inline-block",children:"Went to Fajar Secondary"}),Object(x.jsx)("a",{className:"d-inline-block m-1",href:"https://fajarsec.moe.edu.sg/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("small",{children:"link"})}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Joined the Scouts uniformed group (UG)."})}),Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Was a member of the Student Council (SC)."})}),Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Picked up leadership and planning skills, learning how to put myself in the shoes of others."})})]})]}),Object(x.jsxs)("li",{className:"event","data-date":"2018 - 2020",children:[Object(x.jsx)("p",{className:"d-inline-block",children:"Spead my wings at Singapore Polytechnic"}),Object(x.jsx)("a",{className:"d-inline-block m-1",href:"https://www.sp.edu.sg/engineering-cluster/eee/courses/full-time-diplomas/computer-engineering/overview",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("small",{children:"link"})}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Pursued a diploma in Computer Engineering."})}),Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Obtained a scholarship from Singtel."})}),Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Joined the Disc Jockey club (SPDJ)."})}),Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Ventured further into Software Development where I gained a stronger grasp on AI Technologies, Data Structures and Algorithms and Web / Game Development."})})]})]}),Object(x.jsxs)("li",{className:"event","data-date":"2020 - Present",children:[Object(x.jsx)("p",{className:"d-inline-block",children:"Enlisted into the Singapore Army"}),Object(x.jsx)("a",{className:"d-inline-block m-1",href:"https://www.mindef.gov.sg/web/portal/army/our-forces/formations/formations-detail/transport/transport",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("small",{children:"link"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:Object(x.jsx)("small",{children:"Joined the Transport Vocation and currently on course to learn how to drive."})})})]})]})]})}var z=s(55);function J(){return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(h.a,{className:"text-center mb-4",children:Object(x.jsxs)("h2",{children:["Skillset ",Object(x.jsx)("h2",{className:"d-inline-block rotateIcon",children:Object(x.jsx)(u.a,{icon:z.a,size:"lg"})})]})}),Object(x.jsx)(h.a,{className:"text-center d-flex justify-content-center align-items-center",children:Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(f.a,{className:"mt-3",sm:12,md:6,children:[Object(x.jsx)("h5",{children:"Languages"}),Object(x.jsx)(h.a,{className:"customCard text-center d-flex align-items-center justify-content-center p-3",style:{height:"85%"},children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/javascript.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://docs.microsoft.com/en-us/dotnet/csharp/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/csharp.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://www.php.net/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/php.png",height:"50px",width:"50px"})})})]})})]}),Object(x.jsxs)(f.a,{className:"mt-3",sm:12,md:6,children:[Object(x.jsx)("h5",{children:"Technologies"}),Object(x.jsx)(h.a,{className:"customCard text-center d-flex align-items-center justify-content-center p-3",style:{height:"85%"},children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/visualcode.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://blender.org",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/blender.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://unity.com",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/unity.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://image-line.com",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/fl.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://nodejs.org",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/node.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/react.png",height:"50px",width:"50px"})})}),Object(x.jsx)(f.a,{className:"m-1",children:Object(x.jsx)("a",{href:"https://threejs.org",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(k.a,{className:"hoverIcon",src:"/icons/three.png",height:"50px",width:"50px"})})})]})})]}),Object(x.jsx)(h.a,{className:"text-center mt-2",children:Object(x.jsx)("p",{children:"With many more to come!"})})]})})]})}function E(){return Object(x.jsx)(h.a,{style:{minHeight:"85vh"},className:"d-flex align-items-center",children:Object(x.jsxs)(h.a,{className:"w-100",children:[Object(x.jsx)(h.a,{style:{minHeight:"90vh"},className:"d-flex align-items-center justify-content-center",children:Object(x.jsx)(T,{})}),Object(x.jsx)(h.a,{style:{minHeight:"90vh"},className:"d-flex align-items-center justify-content-center","data-aos":"fade-up",children:Object(x.jsx)(J,{})}),Object(x.jsx)(h.a,{style:{minHeight:"90vh"},className:"d-flex align-items-center justify-content-center text-center","data-aos":"fade-up",children:Object(x.jsx)(H,{})})]})})}var U=s(80);function D(e){var t;switch(e.lang){case"C++":t="/icons/cplusplus.png";break;case"Javascript":t="/icons/javascript.png";break;case"Java":t="/icons/java.png";break;case"HTML":t="icons/html.png";break;case"PHP":t="icons/php.png";break;default:t=null}return Object(x.jsxs)(U.a,{children:[e.imgUrl?Object(x.jsx)(U.a.Img,{src:e.imgUrl}):null,Object(x.jsxs)(U.a.Body,{children:[Object(x.jsxs)(U.a.Title,{children:[e.title," ",Object(x.jsx)(k.a,{style:{maxHeight:"1em"},src:t,fluid:!0})]}),Object(x.jsx)(U.a.Text,{children:e.des}),Object(x.jsx)("a",{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:Object(x.jsx)("small",{children:"Learn more"})})]})]})}function q(e){var t=e.data.map((function(e){return Object(x.jsx)(f.a,{style:{marginTop:"10px"},children:Object(x.jsx)(D,{title:e.name,des:e.description,htmlUrl:e.htmlUrl,imgUrl:e.imgUrl,lang:e.language})})}));return Object(x.jsx)(h.a,{style:{minHeight:"85vh"},children:Object(x.jsxs)(h.a,{"data-aos":"fade-up",className:"mt-1",children:[Object(x.jsx)("h2",{style:{borderBottom:"1px solid black",padding:"5px"},children:"Projects"}),Object(x.jsx)(p.a,{children:t})]})})}function P(e){var t=Object(c.useState)(""),s=Object(r.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)(""),i=Object(r.a)(l,2),j=i[0],o=i[1],d=Object(c.useState)(""),b=Object(r.a)(d,2),m=b[0],O=b[1],u=Object(c.useState)(""),g=Object(r.a)(u,2),N=g[0],v=g[1],w=Object(c.useState)(""),k=Object(r.a)(w,2),y=k[0],S=k[1],_=Object(c.useState)(""),L=Object(r.a)(_,2),T=L[0],H=L[1];function z(e){switch(e.target.name){case"firstName":n(e.target.value);break;case"lastName":o(e.target.value);break;case"email":O(e.target.value);break;case"contact":v(e.target.value);break;case"org":S(e.target.value);break;case"message":H(e.target.value)}console.log(e.target.name,e.target.value)}return Object(x.jsxs)(C.a,{onSubmit:function(t){t.preventDefault(),I.a.send("service_g8snmcq","template_cz805a6",{firstName:a,lastName:j,email:m,contact:N,org:y,message:T},"user_gBREhfn77piuhd9XrUZdH").then((function(){e.setToast(!0),console.log("Success!")}),(function(e){return console.log(e.text)}))},children:[Object(x.jsx)(C.a.Group,{className:"mt-1",children:Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(f.a,{sm:6,children:[Object(x.jsxs)(C.a.Label,{children:["First Name ",Object(x.jsx)("small",{className:"required",children:"*"})]}),Object(x.jsx)(C.a.Control,{name:"firstName",value:a,type:"text",placeholder:"Shun Jie",size:"sm",onChange:z,required:!0})]}),Object(x.jsxs)(f.a,{sm:6,children:[Object(x.jsx)(C.a.Label,{children:"Last Name"}),Object(x.jsx)(C.a.Control,{name:"lastName",value:j,type:"text",placeholder:"Yong",size:"sm",onChange:z})]})]})}),Object(x.jsx)(C.a.Group,{className:"mt-1",children:Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(f.a,{sm:6,children:[Object(x.jsx)(C.a.Label,{children:"Email"}),Object(x.jsx)(C.a.Control,{name:"email",value:m,placeholder:"Your Email",size:"sm",onChange:z})]}),Object(x.jsxs)(f.a,{sm:6,children:[Object(x.jsx)(C.a.Label,{children:"Contact no."}),Object(x.jsx)(C.a.Control,{name:"contact",value:N,placeholder:"+65",size:"sm",onChange:z})]})]})}),Object(x.jsxs)(C.a.Group,{className:"mt-1",children:[Object(x.jsx)(C.a.Label,{children:"Organization"}),Object(x.jsx)(C.a.Control,{name:"org",value:y,size:"sm",onChange:z})]}),Object(x.jsxs)(C.a.Group,{className:"mt-1",children:[Object(x.jsxs)(C.a.Label,{children:["Your Message ",Object(x.jsx)("small",{className:"required",children:"*"})]}),Object(x.jsx)(C.a.Control,{name:"message",value:T,as:"textarea",style:{height:"100px"},placeholder:"...",size:"sm",onChange:z,required:!0}),Object(x.jsx)(C.a.Text,{children:"I will not share any of this information with anyone."})]}),Object(x.jsx)(h.a,{className:"mt-2 btn",children:Object(x.jsx)(C.a.Control,{type:"submit",value:"Reach out \ud83d\udde3"})})]})}function A(e){return Object(x.jsx)(h.a,{style:{minHeight:"85vh"},className:"d-flex align-items-center",children:Object(x.jsxs)(h.a,{className:"w-100","data-aos":"fade-up",children:[Object(x.jsxs)(h.a,{className:"d-inline-flex justify-content-center",children:[Object(x.jsx)("h2",{children:"Let's start talkin'"}),Object(x.jsx)("h2",{className:"swivleIcon",children:"\ud83d\udcac"})]}),Object(x.jsxs)(p.a,{className:"mt-1",children:[Object(x.jsx)(f.a,{sm:8,className:"mb-5",children:Object(x.jsx)(P,{setToast:e.setToast})}),Object(x.jsx)(f.a,{md:4,className:"text-center mb-5",children:Object(x.jsx)("iframe",{title:"discord",src:"https://discord.com/widget?id=232873555031752704&theme=dark",width:"350",height:"500",allowTransparency:!0,frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})})]})]})})}var B=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),l=Object(r.a)(n,2),i=l[0],b=l[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/users/ruin9999/repos").then((function(e){if(200===e.status)return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){return j.a.init({duration:500})})),Object(x.jsx)(o.a,{children:Object(x.jsxs)(h.a,{style:{minHeight:"100vh"},children:[Object(x.jsx)(O,{}),Object(x.jsx)(w,{visible:i}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",element:Object(x.jsx)(L,{setToast:b})}),Object(x.jsx)(d.a,{path:"/about",element:Object(x.jsx)(E,{})}),Object(x.jsx)(d.a,{path:"/works",element:Object(x.jsx)(q,{data:s})}),Object(x.jsx)(d.a,{path:"/contact",element:Object(x.jsx)(A,{setToast:b})})]}),Object(x.jsx)(N,{})]})})};l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.e4f7ea7c.chunk.js.map