(this.webpackJsonpruthvik_portfolio=this.webpackJsonpruthvik_portfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),r=c(7),i=c.n(r),l=(c(14),c(2)),j=c(3),o=c(5),d=c(4),h=(c(15),c(8)),b=c.n(h),m=(c(16),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.name,c=e.occupation,a=e.description,n=(e.address,this.props.data.social.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("i",{className:e.className})})},e.name)})));return Object(s.jsxs)("header",{id:"home",children:[Object(s.jsx)("nav",{id:"nav-wrap",children:Object(s.jsxs)("ul",{id:"nav",className:"nav",children:[Object(s.jsx)("li",{className:"current",children:Object(s.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})}),Object(s.jsx)("div",{className:"row banner",children:Object(s.jsxs)("div",{className:"banner-text",children:[Object(s.jsxs)("h1",{className:"responsive-headline",children:["I'm ",t,"."]}),Object(s.jsxs)("h3",{children:["I'm a US based ",Object(s.jsx)("span",{children:c}),". ",a,"."]}),Object(s.jsx)("hr",{}),Object(s.jsx)("ul",{className:"social",children:n})]})})]})}}]),c}(a.Component)),u=(c(17),c.p+"static/media/profile-pic.d6358373.jpeg"),O=c.p+"static/media/My_Resume.a832b2cd.pdf",x=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,t=e.name,c=e.occupation,a=e.fullname,n=(e.address,e.phone),r=e.email;return Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)("div",{className:"container row mx-5",children:[Object(s.jsx)("div",{className:"col-md-6 col-12",children:Object(s.jsx)("img",{className:"profile-pic",src:u,alt:"Tim Baker Profile Pic"})}),Object(s.jsxs)("div",{className:"col-md-6 col-12 ",id:"info",children:[Object(s.jsx)("h2",{children:"About Me"}),Object(s.jsxs)("p",{children:["I'm ",t,", I'm a ",c,"r. Currently Open to work"]}),Object(s.jsxs)("div",{className:"d-flex flex-lg-row flex-md-column flex-column mt-md-0 mt-2 flex-",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Contact Details"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{children:a}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:n}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:r})]})]}),Object(s.jsx)("div",{className:"columns download",children:Object(s.jsx)("p",{children:Object(s.jsxs)("a",{href:O,className:"button",children:[Object(s.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),c}(a.Component),p=(c(18),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data){var e=this.props.data,t=e.education;e.work;console.log(t.school);var c=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{style:{width:e.level},className:t}),Object(s.jsx)("em",{children:e.name})]},e.name)}))}return Object(s.jsx)("section",{id:"resume",children:Object(s.jsxs)("div",{className:"container text-center",children:[Object(s.jsxs)("div",{className:"row education",children:[Object(s.jsx)("div",{className:"col-md-4 col-12",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Education"})})}),Object(s.jsxs)("div",{className:"col-md-8 col-12 mt-md-0 mt-3",children:[Object(s.jsx)("h3",{children:"University of Central Missouri"}),Object(s.jsxs)("p",{className:"info",children:["Masters in Computer Science",Object(s.jsx)("span",{children:"\u2022"}),Object(s.jsx)("em",{className:"date",children:"January 2021"})]}),Object(s.jsx)("p",{children:"Graduated with Distinction"})]})]}),Object(s.jsxs)("div",{className:"row work",children:[Object(s.jsx)("div",{className:"col-md-4 col-12",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Work"})})}),Object(s.jsxs)("div",{className:"col-md-8 col-12 mt-md-0 mt-3",children:[Object(s.jsx)("h3",{children:"SaNa Software Services"}),Object(s.jsxs)("p",{className:"info",children:["Full Stack Developer",Object(s.jsx)("span",{children:"\u2022"}),Object(s.jsx)("em",{className:"date",children:"May 2018 - June 2019"})]})]})]}),Object(s.jsxs)("div",{className:"row skills",children:[Object(s.jsx)("div",{className:"col-md-4 col-12",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Skills"})})}),Object(s.jsxs)("div",{className:"col-md-8 col-12 nine columns main-col",children:[Object(s.jsx)("p",{}),Object(s.jsx)("div",{className:"bars",children:Object(s.jsx)("ul",{className:"skills",children:c})})]})]})]})})}}]),c}(a.Component)),f=(a.Component,c(19),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"contact",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("i",{style:{color:"white",fontSize:"52px",float:"left"},className:"fa fa-paper-plane"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"d-flex flex-column",children:Object(s.jsx)("form",{id:"contactForm",name:"contactForm",children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(s.jsx)("span",{className:"required",children:"*"})]}),Object(s.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName"})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(s.jsx)("span",{className:"required",children:"*"})]}),Object(s.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(s.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject"})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(s.jsx)("span",{className:"required",children:"*"})]}),Object(s.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",className:"submit",children:"Submit"})})]})})})]})})}}]),c}(a.Component)),v=(c(20),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("i",{className:e.className})})},e.name)}));return Object(s.jsx)("footer",{id:"footer",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("ul",{className:"social",children:e}),Object(s.jsx)("ul",{className:"copyright",children:Object(s.jsx)("li",{children:"\xa9 All credit goes to Ruthvik Reddy"})})]})})}}]),c}(a.Component)),N=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(l.a)(this,c),(s=t.call(this,e)).state={resumeData:{}},s}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"getResumeData",value:function(){b.a.ajax({url:"/my_resume_data.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,c){console.log(e.responseText),alert(c)}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(m,{data:this.state.resumeData.main}),Object(s.jsx)(x,{data:this.state.resumeData.main}),Object(s.jsx)(p,{data:this.state.resumeData.resume}),Object(s.jsx)(f,{}),Object(s.jsx)(v,{data:this.state.resumeData.main})]})}}]),c}(a.Component),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(21),c(22);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),y()}],[[23,1,2]]]);
//# sourceMappingURL=main.14bdc19e.chunk.js.map