(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{545:function(t,a,s){t.exports=s.p+"assets/img/image-20240622094735823.f26dcd53.png"},638:function(t,a,s){"use strict";s.r(a);var n=s(17),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"蓄水池算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#蓄水池算法"}},[t._v("#")]),t._v(" 蓄水池算法")]),t._v(" "),a("blockquote",[a("p",[t._v("一边进,一边出,保持任何时刻,任意一个元素,留在池子里的概率,均等!")])]),t._v(" "),a("h3",{attrs:{id:"解决的问题示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决的问题示例"}},[t._v("#")]),t._v(" 解决的问题示例：")]),t._v(" "),a("p",[t._v("假设有一个源源吐出不同球的机器，\n只有装下10个球的袋子，每一个吐出的球，要么放入袋子，要么永远扔掉\n如何做到机器吐出每一个球之后，所有吐出的球都等概率被放进袋子里")]),t._v(" "),a("h4",{attrs:{id:"解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解"}},[t._v("#")]),t._v(" 解:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当前袋子没满的时候,直接进,也就是说0-9号球,直接进到袋子里去.")])]),t._v(" "),a("li",[a("p",[t._v("当袋子满了的时候,两个问题.1我要决定他是否进到袋子里?2如果他要进入到袋子里,袋子里谁要出袋子?")]),t._v(" "),a("p",[a("img",{attrs:{src:s(545),alt:"image-20240622094735823"}})])])]),t._v(" "),a("h3",{attrs:{id:"程序中如何表达10-11概率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序中如何表达10-11概率"}},[t._v("#")]),t._v(" 程序中如何表达10/11概率")]),t._v(" "),a("p",[t._v("我们知道,Math.random()会等概率返回一个**[0.0, 1.0)**的数字.")]),t._v(" "),a("p",[t._v("如果这个数字,我们✖️10,是不是就是0~9一个随机数.再加一,是不是就是1-10一个随机数,")]),t._v(" "),a("p",[t._v("好,如果说我们随机出来的数字小于等于7,我们就返回true,否则就返回false,也就是8910三个数false,剩下的7个数是true,我们是不是就是得到了一个7/10的概率.")]),t._v(" "),a("p",[t._v("相同的道理.我们做一个方法")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("判断"),a("code",[t._v("if (random(num) <= 10) {")]),t._v("是不是就得到了"),a("code",[t._v("10/i")]),t._v("的概率.")]),t._v(" "),a("h3",{attrs:{id:"实际应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际应用"}},[t._v("#")]),t._v(" 实际应用")]),t._v(" "),a("p",[t._v("我一个游戏做一个抽奖,要求,1.1号凌晨~1.2号凌晨,第一次登录的用户(仅第一次,这原有服务器应该有这个功能)都有一次抽奖功能,一共抽100人获奖.等概率,怎么做")]),t._v(" "),a("p",[t._v("如果说我先收集所有的用户,然后随机选出100个,有2个弊端.1.资源消耗极大,2.不能及时开奖,我要先收集,然后分析,才能确定名单.")]),t._v(" "),a("p",[t._v("如果我用蓄水池算法,实施的就可能进一个用户,出一个用户,完全等概率.!!!")])])}),[],!1,null,null,null);a.default=r.exports}}]);