(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{614:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据库常用操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库常用操作"}},[t._v("#")]),t._v(" 数据库常用操作")]),t._v(" "),s("h3",{attrs:{id:"_1-mysql-快速删除库中所有的表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql-快速删除库中所有的表"}},[t._v("#")]),t._v(" 1.mysql,快速删除库中所有的表")]),t._v(" "),s("p",[t._v("有时候我们需要清库里的表，直接drop database再create本来也是可以，但是如果遇到登陆的用户没有create database的权限或者只需要删除大部分的表，保留几个表的时候怎么办.")]),t._v(" "),s("p",[t._v("当表只有几个的时候我们可以很容易的drop table，但是如果上百张表呢，下面提供一个使用information_schema库的方案：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CONCAT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'drop table '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" information_schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("TABLES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" table_schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据库名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("执行完上述语句后即可得到成品删除表的语句,执行即可.")])])}),[],!1,null,null,null);s.default=e.exports}}]);