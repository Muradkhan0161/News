(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{225:function(t,e,o){var content=o(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("1b0e936c",content,!0,{sourceMap:!1})},239:function(t,e,o){"use strict";var c=o(225);o.n(c).a},240:function(t,e,o){(e=o(10)(!1)).push([t.i,".single-post-page[data-v-c93c31fc]{padding:30px;text-align:center;box-sizing:border-box}.post[data-v-c93c31fc]{width:100%}@media (min-width:768px){.post[data-v-c93c31fc]{width:600px;margin:auto}}.post-title[data-v-c93c31fc]{margin:0}.post-details[data-v-c93c31fc]{padding:10px;box-sizing:border-box;border-bottom:3px solid #ccc;display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width:768px){.post-details[data-v-c93c31fc]{flex-direction:row}}.post-detail[data-v-c93c31fc]{color:#585858;margin:0 10px}.post-feedback a[data-v-c93c31fc]{color:red;text-decoration:none}.post-feedback a[data-v-c93c31fc]:active,.post-feedback a[data-v-c93c31fc]:hover{color:salmon}",""]),t.exports=e},250:function(t,e,o){"use strict";o.r(e);var c={asyncData:function(t){return t.payload?{loadedPost:t.payload.postData}:t.app.$axios.$get("/posts/"+t.params.id+".json").then((function(data){return{loadedPost:data}})).catch((function(e){return t.error(e)}))},head:{title:"A blog post"}},n=(o(239),o(2)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"single-post-page"},[o("section",{staticClass:"post"},[o("h1",{staticClass:"post-title"},[t._v(t._s(t.loadedPost.title))]),t._v(" "),o("div",{staticClass:"post-details"},[o("div",{staticClass:"post-detail"},[t._v("Last updated on "+t._s(t._f("date")(t.loadedPost.updatedDate)))]),t._v(" "),o("div",{staticClass:"post-detail"},[t._v("Written by "+t._s(t.loadedPost.author))])]),t._v(" "),o("p",{staticClass:"post-content"},[t._v(t._s(t.loadedPost.content))])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"post-feedback"},[e("p",[this._v("Let me know what you think about the post, send a mail to "),e("a",{attrs:{href:"mailto:feedback@my-awesome-domain.com"}},[this._v("feedback@my-awesome-domain.com")]),this._v(".")])])}],!1,null,"c93c31fc",null);e.default=component.exports}}]);