(this.webpackJsonpmsi2020=this.webpackJsonpmsi2020||[]).push([[0],{14:function(e,t,a){e.exports=a(43)},19:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l),o=(a(19),a(2)),i=a(3),u=a.n(i);a(37);var s=function(e){var t=e.selected,a=e.handleOptionChange;return c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"react-tips",value:"option1",defaultChecked:"option1"===t,onChange:a,className:"form-check-input"}),"Random"))};var m=function(e){var t=e.selected,a=e.handleOptionChange;return c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"react-tips",value:"option2",defaultChecked:"option2"===t,onChange:a,className:"form-check-input"}),"From Categories"))};var d=function(e){var t=e.selected,a=e.handleOptionChange;return c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"react-tips",value:"option3",defaultChecked:"option3"===t,onChange:a,className:"form-check-input"}),"Search"))};a(38);var f=function(e){return c.a.createElement("div",{className:"joke"},c.a.createElement("div",{id:"id"},"ID: ",c.a.createElement("a",{id:"link",href:e.id},e.id))," ",c.a.createElement("br",null),c.a.createElement("div",{id:"joke_value"},e.value))};a(39);var h=function(e){var t=e.categories;return c.a.createElement("div",{className:"categories_list"},t.map((function(e){return c.a.createElement("button",{className:"category_btn",value:e,key:e},e)})))};var p=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),i=Object(o.a)(r,2),p=i[0],E=i[1],v=Object(n.useState)("option1"),k=Object(o.a)(v,2),g=k[0],b=k[1],j=Object(n.useState)([]),C=Object(o.a)(j,2),N=C[0],O=C[1];Object(n.useEffect)((function(){u.a.get("https://api.chucknorris.io/jokes/random").then((function(e){console.log(e),l(e.data)})).catch((function(e){console.log(e)}))}),[p]),Object(n.useEffect)((function(){u.a.get("https://api.chucknorris.io/jokes/categories").then((function(e){console.log(e),O(e.data)})).catch((function(e){console.log(e)}))}),[]);var y=function(e){b(e.target.value)};return c.a.createElement("div",{className:"joke_logic"},c.a.createElement("div",{className:"select_option"},c.a.createElement("form",null,c.a.createElement(s,{defaultChecked:g,handleOptionChange:y}),c.a.createElement(m,{defaultChecked:g,handleOptionChange:y}),"option2"===g?c.a.createElement(h,{selected:g,categories:N.slice(0,4)}):null,c.a.createElement(d,{defaultChecked:g,handleOptionChange:y}),"option3"===g?c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"Free text search..."})):null,c.a.createElement("button",{className:"btn",onClick:function(){return E(p+1)}},"Get a joke"))),c.a.createElement(f,{value:a.value,id:a.id}))};a(40);var E=function(){return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"intro"},c.a.createElement("h3",null,"MSI 2020"),c.a.createElement("h1",null,"Hey!"),c.a.createElement("h2",null,"Let's try to find a joke for you:")),c.a.createElement(p,null))};a(41);var v=function(){return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",null,"Favorite jokes"))};var k=function(){return c.a.createElement("section",{className:"main_content"},c.a.createElement(E,null),c.a.createElement(v,null))};a(42);r.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e1bdcb9f.chunk.js.map