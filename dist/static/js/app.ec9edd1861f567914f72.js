webpackJsonp([2,0],[function(t,s,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var e=i(10),v=a(e),n=i(25),c=a(n),l=i(28),r=a(l);v.default.use(r.default),new v.default({el:"#app",render:function(t){return t(c.default)}});var _=new r.default;configRouter(_)},,,,,,,function(t,s,i){t.exports=i.p+"static/img/btn-close.png"},function(t,s,i){t.exports=i.p+"static/img/focus.jpg"},function(t,s){},,,,,,,,,,,,,function(t,s,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var e=i(27),v=a(e);i(23),s.default={name:"app",data:function(){return{Participate:!0,notConcerned:!1,personal:!1,arr:["泰国","韩国","日本","马来西亚","新加坡","柬埔寨","台湾","印度","新西兰","土耳其","斯里兰卡","文莱","越南","尼泊尔","菲律宾","加拿大","美国","德国","法国","意大利"],peop:[0,0,0,0,0,0,0,0],openId:"",scrollY1:"",scr:!1,timer:!1,up:"",pooBox:0,show:0,sssss:1,terminal:"选择遗憾目的地",content:"",personal_like:0,personal_like_list:[0,0,0,0,0,0,0,0,0,0]}},methods:{submit:function(){"选择遗憾目的地"!=this.terminal&&this.content.length>13&&(this.Participate=!1,this.personal=!0,document.documentElement.scrollTop=0,document.body.scrollTop=0)},cancel:function(){return!1},pop:function(t){this.pooBox=1,this.up=t;var s=window.screen.height;document.getElementById("app").style.height=s+"px",document.getElementById("app").style.overflow="hidden"},close:function(){this.pooBox=0,document.getElementById("app").style.overflow=""}},created:function(){},mounted:function(){var t=window.screen.height,s=document.getElementById("swipeScroll");s.style.height=t+"px";var i=this,a=0;new v.default(s,{touchMove:function(t){Math.abs(t.deltaY)>=Math.abs(t.deltaX)&&t.preventDefault()},swipe:function(e){if("Up"===e.direction)if(a<2){a++;var v=t*a,n=10;if(0==i.timer)var c=setInterval(function(){i.timer=!0,s.scrollTop=v-t/10*n,0==n&&(clearInterval(c),i.timer=!1,n=10,2==a&&(i.show=1)),n--},50)}else 2==a&&(s.style.height=0,setTimeout(function(){i.sssss=0,i.scr=!1},1e3));else"Down"===e.direction&&(s.scrollTop=t*a)}})}}},function(t,s,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var e=i(24),v=a(e);!function(){function t(t,i,a){for(var e=0,v=i.length;e<v;e++){var n=i[e];s(t,n,a)}}function s(t,s,i){(0,v.default)(t,s,{get:function(){return this["__"+s]},set:function(t){t!==this["__"+s]&&(this["__"+s]=t,i())}})}var i=function(t,s,i,a,e,v,n,c,l,r,_,o,d,p,u,C){this.elements=window.Float32Array?new Float32Array(16):[];var m=this.elements;m[0]=void 0!==t?t:1,m[4]=s||0,m[8]=i||0,m[12]=a||0,m[1]=e||0,m[5]=void 0!==v?v:1,m[9]=n||0,m[13]=c||0,m[2]=l||0,m[6]=r||0,m[10]=void 0!==_?_:1,m[14]=o||0,m[3]=d||0,m[7]=p||0,m[11]=u||0,m[15]=void 0!==C?C:1};i.DEG_TO_RAD=Math.PI/180,i.prototype={set:function(t,s,i,a,e,v,n,c,l,r,_,o,d,p,u,C){var m=this.elements;return m[0]=t,m[4]=s,m[8]=i,m[12]=a,m[1]=e,m[5]=v,m[9]=n,m[13]=c,m[2]=l,m[6]=r,m[10]=_,m[14]=o,m[3]=d,m[7]=p,m[11]=u,m[15]=C,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,s){var i=t.elements,a=this.elements,e=i[0],v=i[4],n=i[8],c=i[12],l=i[1],r=i[5],_=i[9],o=i[13],d=i[2],p=i[6],u=i[10],C=i[14],m=i[3],h=i[7],f=i[11],g=i[15],b=s[0],w=s[1],y=s[2],E=s[3],x=s[4],k=s[5],M=s[6],T=s[7],$=s[8],D=s[9],N=s[10],Y=s[11],X=s[12],A=s[13],I=s[14],R=s[15];return a[0]=e*b+v*x+n*$+c*X,a[4]=e*w+v*k+n*D+c*A,a[8]=e*y+v*M+n*N+c*I,a[12]=e*E+v*T+n*Y+c*R,a[1]=l*b+r*x+_*$+o*X,a[5]=l*w+r*k+_*D+o*A,a[9]=l*y+r*M+_*N+o*I,a[13]=l*E+r*T+_*Y+o*R,a[2]=d*b+p*x+u*$+C*X,a[6]=d*w+p*k+u*D+C*A,a[10]=d*y+p*M+u*N+C*I,a[14]=d*E+p*T+u*Y+C*R,a[3]=m*b+h*x+f*$+g*X,a[7]=m*w+h*k+f*D+g*A,a[11]=m*y+h*M+f*N+g*I,a[15]=m*E+h*T+f*Y+g*R,this},_rounded:function(t,s){return s=Math.pow(10,s||15),Math.round(t*s)/s},appendTransform:function(t,s,a,e,v,n,c,l,r,_,o,d,p,u){var C=c*i.DEG_TO_RAD,m=this._rounded(Math.cos(C)),h=this._rounded(Math.sin(C)),f=l*i.DEG_TO_RAD,g=this._rounded(Math.cos(f)),b=this._rounded(Math.sin(f)),w=r*i.DEG_TO_RAD,y=this._rounded(Math.cos(w*-1)),E=this._rounded(Math.sin(w*-1));return this.multiplyMatrices(this,[1,0,0,t,0,m,h,s,0,-h,m,a,0,0,0,1]),this.multiplyMatrices(this,[g,0,b,0,0,1,0,0,-b,0,g,0,0,0,0,1]),this.multiplyMatrices(this,[y*e,E*v,0,0,-E*e,y*v,0,0,0,0,1*n,0,0,0,0,1]),(_||o)&&this.multiplyMatrices(this,[this._rounded(Math.cos(_*i.DEG_TO_RAD)),this._rounded(Math.sin(_*i.DEG_TO_RAD)),0,0,-1*this._rounded(Math.sin(o*i.DEG_TO_RAD)),this._rounded(Math.cos(o*i.DEG_TO_RAD)),0,0,0,0,1,0,0,0,0,1]),(d||p||u)&&(this.elements[12]-=d*this.elements[0]+p*this.elements[4]+u*this.elements[8],this.elements[13]-=d*this.elements[1]+p*this.elements[5]+u*this.elements[9],this.elements[14]-=d*this.elements[2]+p*this.elements[6]+u*this.elements[10]),this}},window.Transform=function(s,a){t(s,["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],function(){var t=s.matrix3D.identity().appendTransform(s.translateX,s.translateY,s.translateZ,s.scaleX,s.scaleY,s.scaleZ,s.rotateX,s.rotateY,s.rotateZ,s.skewX,s.skewY,s.originX,s.originY,s.originZ);s.style.transform=s.style.msTransform=s.style.OTransform=s.style.MozTransform=s.style.webkitTransform=(a?"":"perspective("+(void 0===s.perspective?500:s.perspective)+"px) ")+"matrix3d("+Array.prototype.slice.call(t.elements).join(",")+")"}),s.matrix3D=new i,a||(t(s,["perspective"],function(){s.style.transform=s.style.msTransform=s.style.OTransform=s.style.MozTransform=s.style.webkitTransform="perspective("+s.perspective+"px) matrix3d("+Array.prototype.slice.call(s.matrix3D.elements).join(",")+")"}),s.perspective=500),s.scaleX=s.scaleY=s.scaleZ=1,s.translateX=s.translateY=s.translateZ=s.rotateX=s.rotateY=s.rotateZ=s.skewX=s.skewY=s.originX=s.originY=s.originZ=0}}()},,function(t,s,i){var a,e;i(9),a=i(22);var v=i(26);e=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(e=a=a.default),"function"==typeof e&&(e=e.options),e.render=v.render,e.staticRenderFns=v.staticRenderFns,t.exports=a},function(t,s,i){t.exports={render:function(){var t=this,s=(t.$createElement,t._c);return s("div",{attrs:{id:"app"}},[t.scr?s("div",{staticClass:"animate",attrs:{id:"swipeScroll"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"pp cc"},[s("div",{staticClass:"show"},[s("div",{staticClass:"show3"},[t.sssss?s("div",{class:[1==t.show?"active":"","mask","animate"]}):t._e()])]),t._v(" "),s("div",{staticClass:"down"})])]):t._e(),t._v(" "),t.Participate?s("div",{staticClass:"Participate"},[t._m(2),t._v(" "),s("div",{staticClass:"sign"},[s("p",[t._v("曾经与2016订下过很多约定")]),t._v(" "),s("p",[t._v("去冰岛看极光，非洲看动物，菲律宾潜水...")]),t._v(" "),s("p",[t._v("而今，它们即将成为遗憾")]),t._v(" "),s("p",[t._v("你是否感到不甘心")]),t._v(" "),s("p",[t._v("说出你的旅行遗憾")]),t._v(" "),t._m(3),t._v(" "),s("p",{staticClass:"fff rules",on:{click:function(s){t.pop(1)}}},[t._v("活动规则及大奖设置"),s("span",[t._v(">")])])]),t._v(" "),s("form",{staticClass:"part"},[s("p",{staticClass:"title"},[t._v("报名参加")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.terminal,expression:"terminal"}],attrs:{placeholder:"aaa"},on:{change:function(s){t.terminal=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){var s="_value"in t?t._value:t.value;return s})[0]}}},[s("option",{attrs:{disabled:""}},[t._v("选择遗憾目的地")]),t._v(" "),t._l(t.arr,function(i){return s("option",[t._v(t._s(i))])})],!0),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"说说你的旅行想法（15-140字）",maxlength:"140"},domProps:{value:t._s(t.content)},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}}),t._v(" "),s("div",{staticClass:"button",on:{click:t.submit}},[t._v("马上集赞")]),t._v(" "),s("p",{staticClass:"red",on:{click:function(s){t.pop(2)}}},[t._v("邀请小伙伴一起玩")])]),t._v(" "),s("div",{staticClass:"bottom-bar"})]):t._e(),t._v(" "),t._e(),t._v(" "),t.notConcerned?s("div",{staticClass:"not-concerned"},[t._m(9),t._v(" "),s("div",{staticClass:"sign"},[s("p",[t._v("曾经与2016订下过很多约定")]),t._v(" "),s("p",[t._v("去冰岛看极光，非洲看动物，菲律宾潜水...")]),t._v(" "),s("p",[t._v("而今，它们即将成为遗憾，你是否感到不甘心")]),t._v(" "),s("p",[t._v("说出你的旅行遗憾")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("就是现在")]),t._v(" "),s("p",{staticClass:"fff rules",on:{click:function(s){t.pop(1)}}},[t._v("活动规则及大奖设置"),s("span",[t._v(">")])])]),t._v(" "),s("div",{staticClass:"bottom-bar"},[s("div",{staticClass:"btn",on:{click:function(s){t.pop(3)}}},[t._v("立即参与")]),t._v(" "),s("div",{staticClass:"des",on:{click:function(s){t.pop(2)}}},[t._v("邀请小伙伴一起玩")])])]):t._e(),t._v(" "),t.personal?s("div",{staticClass:"personal"},[t._m(11),t._v(" "),s("router-link",{staticClass:"bread-item",attrs:{to:"/share"}},[t._v("订单管理")]),t._v(" "),s("div",{staticClass:"show"},[s("div",{staticClass:"top"},[s("div",{staticClass:"top1"},[t._m(12),t._v(" "),s("div",{staticClass:"decora"}),t._v(" "),s("p",[t._v("狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西")]),t._v(" "),s("div",{staticClass:"decora"}),t._v(" "),s("div",{staticClass:"pic"}),t._v(" "),s("div",{staticClass:"name"},[t._v("gou")]),t._v(" "),t._m(13),t._v(" "),s("div",{staticClass:"thumb"},[s("div",{staticClass:"like"}),t._v(" "),s("div",[t._v("0000")]),t._v(" "),t._l(t.peop,function(t){return s("div",{staticClass:"peo"})}),t._v(" "),s("div",{staticClass:"ellipsis"})],!0),t._v(" "),t._m(14)])])]),t._v(" "),s("div",{staticClass:"title"},[t._v("集赞排行榜Top10")]),t._v(" "),t._m(15),t._v(" "),s("div",{staticClass:"viewBtn"},[t._v("查看完整排名")]),t._v(" "),s("div",{staticClass:"bottom-bar"})]):t._e(),t._v(" "),t._e(),t._v(" "),t.pooBox?s("div",{staticClass:"popup",attrs:{id:"popup"},on:{click:t.close}},[1==t.up?s("div",{staticClass:"content",on:{click:function(s){s.stopPropagation(),t.cancel(s)}}},[s("div",{staticClass:"timing"},[t._v("活动时间")]),t._v(" "),s("p",{staticClass:"time"},[t._v("2016.12.21-2016.12.28")]),t._v(" "),s("p",{staticClass:"deadline"},[t._v("(12月28日 24:00 集赞截止)")]),t._v(" "),s("p",{staticClass:"methods-title"},[t._v("参与方式")]),t._v(" "),t._m(18),t._v(" "),s("p",{staticClass:"methods-title set"},[t._v("奖项设置")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",{staticClass:"methods-title set"},[t._v("其他说明")]),t._v(" "),t._m(22),t._v(" "),s("p",{staticClass:"bottom-bar"},[t._v("本活动最终解释权归熊猫签证所有")])]):t._e(),t._v(" "),2==t.up?s("div",{staticClass:"share"}):t._e(),t._v(" "),3==t.up?s("div",{staticClass:"guanzhu",on:{click:function(s){s.stopPropagation(),t.cancel(s)}}},[t._m(23),t._v(" "),s("p",[t._v("长按识别二维码")]),t._v(" "),s("p",[t._v("关注【熊猫旅行服务】公众号")]),t._v(" "),s("p",[t._v("点击下方菜单参与活动")])]):t._e(),t._v(" "),s("img",{staticClass:"close",attrs:{src:i(7)}})]):t._e()])},staticRenderFns:[function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"pp aa"},[s("div",{staticClass:"show"}),t._v(" "),s("div",{staticClass:"down"})])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"pp bb"},[s("div",{staticClass:"show"}),t._v(" "),s("div",{staticClass:"down"})])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"bg1"},[s("div",{staticClass:"logo"})])},function(){var t=this,s=(t.$createElement,t._c);return s("p",[t._v("赢取"),s("span",{staticClass:"big fff"},[t._v("免费签证+机票酒店")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"invite"},[s("div")])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"location"},[s("div"),t._v("\n            北京天安么\n          ")])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"ranking"},[t._v("排名"),s("span",[t._v("1111")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"btn-wrap"},[s("button",{staticClass:"btn"},[s("div",{staticClass:"ib"}),t._v("狠狠赞一个\n            ")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"ranking-list"},[s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb1"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb2"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb3"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum"},[t._v("\n            3\n          ")]),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right normal"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum"},[t._v("\n            4\n          ")]),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right normal"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"bg1"},[s("div",{staticClass:"logo"})])},function(){var t=this,s=(t.$createElement,t._c);return s("p",[t._v("赢取"),s("span",{staticClass:"big fff"},[t._v("免费签证+机票酒店")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"bg1"},[s("div",{staticClass:"logo"})])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"location"},[s("div"),t._v("\n            北京天安么\n          ")])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"ranking"},[t._v("排名"),s("span",[t._v("1111")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"btn-wrap"},[s("button",{staticClass:"btn"},[s("div",{staticClass:"ib"}),t._v("狠狠赞一个\n            ")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"ranking-list"},[s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb1"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb2"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb3"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum"},[t._v("\n            4\n          ")]),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right normal"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum"},[t._v("\n            5\n          ")]),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right normal"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"bg1"},[s("div",{staticClass:"logo"})])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"ranking-list"},[s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb1"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb2"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum numb3"}),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum"},[t._v("\n            3\n          ")]),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right normal"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticClass:"topNum"},[t._v("\n            4\n          ")]),t._v(" "),s("div",{staticClass:"pic"})]),t._v(" "),s("div",{staticClass:"right normal"},[s("div",{staticClass:"name"},[s("span",{staticClass:"l"},[t._v("二丫")]),t._v("想去"),s("span",{staticClass:"r"},[t._v("日本")]),t._v(" "),s("div",{staticClass:"thumb"},[t._v("210")])]),t._v(" "),s("div",{staticClass:"des"},[t._v("\n            无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩\n          ")])])])])},function(){var t=this,s=(t.$createElement,t._c);return s("ol",[s("li",[t._v("关注【熊猫旅行服务】公众号（xm-visa）,进入活动页面提交遗憾目的地和感言。")]),t._v(" "),s("li",[t._v("邀请好友为自己投票,每个微信号只能投票一次。由点赞数确定排名,按排名高低赢取相应奖励")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"top1"},[s("p",[s("span",[t._v("一等奖")]),t._v("1名")]),t._v(" "),s("div",[t._v("遗憾目的地豪华双人旅行套餐")]),t._v(" "),s("div",[t._v("双人签证+双人机票+3晚品质民宿+当地游体验券")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"flexBox"},[s("div",{staticClass:"flexItem"},[s("p",[s("span",[t._v("二等奖")]),t._v("1名")]),t._v(" "),s("div",[t._v("旅行基金1500元")])]),t._v(" "),s("div",{staticClass:"flexItem"},[s("p",[s("span",[t._v("三等奖")]),t._v("1名")]),t._v(" "),s("div",[t._v("旅行基金500元")])])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",{staticClass:"flexBox"},[s("div",{staticClass:"flexItem"},[s("p",[s("span",[t._v("四等奖")]),t._v("15名")]),t._v(" "),s("div",[t._v("萌萌哒熊猫眼罩一个")])]),t._v(" "),s("div",{staticClass:"flexItem"},[s("p",[s("span",[t._v("参与奖")]),t._v("不限")]),t._v(" "),s("div",[t._v("旅行基金1500元")])])])},function(){var t=this,s=(t.$createElement,t._c);return s("ol",[s("li",[t._v("获奖名单将于12月29日雨熊猫旅行服务公众号熊猫签证官方微博发布，请获奖者玉2016年12月31日前在微信公众号联系我们，过期未联系即视为自动放弃。")]),t._v(" "),s("li",[t._v("一等奖奖品为价值7000元旅行套餐，包括：有效期三个月（2017.1.1-2017.4.1）的双人往返机票、目的地国家签证、Airbnb品质民宿、当地双人游体验券")])])},function(){var t=this,s=(t.$createElement,t._c);return s("div",[s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i(8)}})])}]}}]);
//# sourceMappingURL=app.ec9edd1861f567914f72.js.map