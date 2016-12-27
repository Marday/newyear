<template>
  <div id="app">
    <router-view></router-view>
    <div id="swipeScroll" class="animate" v-if="true">
      <div class="pp aa">
        <div class="show"></div>
        <div class="down"></div>
      </div>
      <div class="pp bb">
        <div class="show"></div>
        <div class="down"></div>        
      </div>
      <div class="pp cc">
        <div class="show">
          <div class="show3">
            <div :class="[show==1?'active':'' ,'mask' ,'animate']" v-if="sssss"></div>
          </div>
        </div>
        <div class="down"></div>        
      </div>
    </div>
    <div class="Participate" v-if="Participate">
      <div class="bg1">
          <div class="logo">
            
          </div>
      </div>
      <div class="sign">
        <p>曾经与2016订下过很多约定</p>
        <p>去冰岛看极光，非洲看动物，菲律宾潜水...</p>
        <p>而今，它们即将成为遗憾</p>
        <p>你是否感到不甘心</p>
        <p>说出你的旅行遗憾</p>
        <p>赢取<span class="big fff">免费签证+机票酒店</span></p>
        <p class="fff rules" v-on:click="pop(1)">活动规则及大奖设置<span>></span></p>
      </div>
      <form class="part">
        <p class="title">报名参加</p>
        <select placeholder="aaa" v-model="terminal">
          <option disabled>选择遗憾目的地</option>
          <option v-for="item in arr">{{item}}</option>
        </select>
        <textarea placeholder="说说你的旅行想法（15-140字）" maxlength="140" v-model="content">
          
        </textarea>
        <div  class='button'  v-on:click="submit">马上集赞</div>
        <p class="red" v-on:click="pop(2)">邀请小伙伴一起玩</p>
      </form>
      <div class="bottom-bar">
        
      </div>
    </div>
    <div class="share" v-if="0">
      <div class="show">
        <div class="top">
          <div class="invite">
            <div></div>
          </div>
          <div class="top1">
            <div class="location">
              <div></div>
              北京天安么
            </div>
            <div class="decora">
              
            </div>
            <p>狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西</p>
            <div class="decora">
              
            </div> 
            <div class="pic"></div>           
            <div class="name">gou</div>
            <div class="ranking">排名<span>1111</span></div>
            <div class="thumb">
              <div class="like"></div>
              <div>0000</div>
              <div class="peo" v-for="item in peop"></div>
              <div class="ellipsis"></div>
            </div>
            <div class="btn-wrap">
              <button class="btn">
                <div class="ib"></div>狠狠赞一个
              </button></div>
          </div>
        </div>
      </div>
      <div class="title">集赞排行榜Top10</div>
      <div class="ranking-list">
        <div class="item">
          <div class="left">
            <div class="topNum numb1">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="topNum numb2">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>        
        <div class="item">
          <div class="left">
            <div class="topNum numb3">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>        
        <div class="item">
          <div class="left">
            <div class="topNum">
              3
            </div>
            <div class="pic"></div>
          </div>
          <div class="right normal">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>       
        <div class="item">
          <div class="left">
            <div class="topNum">
              4
            </div>
            <div class="pic"></div>
          </div>
          <div class="right normal">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>         
      </div>
      <div class="viewBtn">查看完整排名</div>
      <div class="bottom-bar">
        
      </div>
    </div>
    <div class="not-concerned"  v-if="notConcerned">
      <div class="bg1">
          <div class="logo">
            
          </div>
      </div>
      <div class="sign">
        <p>曾经与2016订下过很多约定</p>
        <p>去冰岛看极光，非洲看动物，菲律宾潜水...</p>
        <p>而今，它们即将成为遗憾，你是否感到不甘心</p>
        <p>说出你的旅行遗憾</p>
        <p>赢取<span class="big fff">免费签证+机票酒店</span></p>
        <p>就是现在</p>
        <p class="fff rules" v-on:click="pop(1)">活动规则及大奖设置<span>></span></p>
      </div>  
      <div class="bottom-bar">
          <div class="btn"  v-on:click="pop(3)">立即参与</div>
          <div class="des" v-on:click="pop(2)">邀请小伙伴一起玩</div>
      </div>    
    </div>
    <div class="personal" v-if="personal">
      <div class="bg1">
          <div class="logo">
            
          </div>
      </div>
      <div class="show">
        <div class="top">
          <div class="top1">
            <div class="location">
              <div></div>
              北京天安么
            </div>
            <div class="decora">
              
            </div>
            <p>狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西狗东西</p>
            <div class="decora">
              
            </div> 
            <div class="pic"></div>           
            <div class="name">gou</div>
            <div class="ranking">排名<span>1111</span></div>
            <div class="thumb">
              <div class="like"></div>
              <div>0000</div>
              <div class="peo" v-for="item in peop"></div>
              <div class="ellipsis"></div>
            </div>
            <div class="btn-wrap">
              <button class="btn">
                <div class="ib"></div>狠狠赞一个
              </button></div>
          </div>
        </div>
      </div>
      <div class="title">集赞排行榜Top10</div>
      <div class="ranking-list">
        <div class="item">
          <div class="left">
            <div class="topNum numb1">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="topNum numb2">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>        
        <div class="item">
          <div class="left">
            <div class="topNum numb3">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>        
        <div class="item">
          <div class="left">
            <div class="topNum">
              4
            </div>
            <div class="pic"></div>
          </div>
          <div class="right normal">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>       
        <div class="item">
          <div class="left">
            <div class="topNum">
              5
            </div>
            <div class="pic"></div>
          </div>
          <div class="right normal">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>         
      </div>
      <div class="viewBtn">查看完整排名</div>      
      <div class="bottom-bar">
          
      </div>    
    </div>  
    <div class="rank" v-if="0">
      <div class="bg1">
          <div class="logo">
            
          </div>
      </div>
      
      <div class="title">集赞排行榜Top10</div>
      <div class="ranking-list">
        <div class="item">
          <div class="left">
            <div class="topNum numb1">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="topNum numb2">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>        
        <div class="item">
          <div class="left">
            <div class="topNum numb3">
              
            </div>
            <div class="pic"></div>
          </div>
          <div class="right">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>        
        <div class="item">
          <div class="left">
            <div class="topNum">
              3
            </div>
            <div class="pic"></div>
          </div>
          <div class="right normal">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>       
        <div class="item">
          <div class="left">
            <div class="topNum">
              4
            </div>
            <div class="pic"></div>
          </div>
          <div class="right normal">
            <div class='name'>
              <span class="l">二丫</span>想去<span class="r">日本</span>
              <div class="thumb">210</div>
            </div>
            <div class="des">
              无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼的玩意无油腻什么鬼的玩无油腻什么鬼油腻什么鬼的玩
            </div>
          </div>
        </div>         
      </div>
      <div class="viewBtn">立即参加拿大奖</div>      
      <div class="bottom-bar">
        
      </div>    
    </div> 
    <div class="popup" id="popup" v-if="pooBox" v-on:click="close">
      <div class="content" @click.stop="cancel" v-if="up==1">
        <div class="timing">活动时间</div>
        <p class="time">2016.12.21-2016.12.28</p>
        <p class="deadline">(12月28日 24:00 集赞截止)</p>
        <p class="methods-title">参与方式</p>
        <ol>
          <li>关注【熊猫旅行服务】公众号（xm-visa）,进入活动页面提交遗憾目的地和感言。</li>
          <li>邀请好友为自己投票,每个微信号只能投票一次。由点赞数确定排名,按排名高低赢取相应奖励</li>
        </ol>
        <p class="methods-title set">奖项设置</p>
        <div class="top1">
          <p><span>一等奖</span>1名</p>
          <div>遗憾目的地豪华双人旅行套餐</div>
          <div>双人签证+双人机票+3晚品质民宿+当地游体验券</div>
        </div>
        <div class="flexBox">
          <div class="flexItem">
            <p><span>二等奖</span>1名</p>
            <div>旅行基金1500元</div>
          </div>
          <div class="flexItem">
            <p><span>三等奖</span>1名</p>
            <div>旅行基金500元</div>
          </div>
        </div>
        <div class="flexBox">
          <div  class="flexItem">
            <p><span>四等奖</span>15名</p>
            <div>萌萌哒熊猫眼罩一个</div>            
          </div>
          <div class="flexItem">
            <p><span>参与奖</span>不限</p>
            <div>旅行基金1500元</div>            
          </div>
        </div>
        <p class="methods-title set">其他说明</p>
        <ol>
          <li>获奖名单将于12月29日雨熊猫旅行服务公众号熊猫签证官方微博发布，请获奖者玉2016年12月31日前在微信公众号联系我们，过期未联系即视为自动放弃。</li>
          <li>一等奖奖品为价值7000元旅行套餐，包括：有效期三个月（2017.1.1-2017.4.1）的双人往返机票、目的地国家签证、Airbnb品质民宿、当地双人游体验券</li>
        </ol> 
        <p class="bottom-bar">本活动最终解释权归熊猫签证所有</p>      
      </div>
      <div class="share" v-if="up==2">
        
      </div>
      <div class="guanzhu" v-if="up==3" v-on:click.stop="cancel">
        <div>
          <img src="./imgs/focus.jpg" style="width:100%;height:100%">
        </div>
        <p>长按识别二维码</p>
        <p>关注【熊猫旅行服务】公众号</p>
        <p>点击下方菜单参与活动</p>   
      </div>      
      <img class="close" src="./imgs/btn-close.png" ></img> 
    </div>    
  </div>
</template>

<script>
import AlloyFinger from 'AlloyFinger'

export default {
  name: 'app',
  data(){
    return {
      Participate:true,
      notConcerned:false,
      personal:false,
      arr:['泰国','韩国','日本','马来西亚','新加坡','柬埔寨','台湾','印度','新西兰','土耳其','斯里兰卡','文莱','越南','尼泊尔','菲律宾','加拿大','美国','德国','法国','意大利'],
      peop:[0,0,0,0,0,0,0,0],
      openId:"",
      scrollY1:"",
      scr:false,
      timer:false,
      up:"",
      pooBox:0,
      show:0,
      sssss:1,
      terminal:"选择遗憾目的地",
      content: "",
      personal_like:0,
      personal_like_list:[0,0,0,0,0,0,0,0,0,0],
    }
  },
  methods:{
    submit(){
      if(this.terminal!="选择遗憾目的地"&&this.content.length>13){
        this.Participate=false;

        this.personal=true;
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
      }
    },
    cancel(){
      return false
    },
    pop(i){
      this.pooBox=1;
      this.up=i;
      var h = window.screen.height;
      document.getElementById("app").style.height=h+'px'
      document.getElementById("app").style.overflow='hidden';
    },
    close(){
      this.pooBox=0;
      document.getElementById("app").style.overflow="";
    }
  },
  created(){
    // if(getCookie('openId')==""){
    //  location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe8fe87fd2044c871&redirect_uri=https%3A%2F%2Ftestapi.11visa.com%2Fwxs%2Fwx_server&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    // }
  
  },
  mounted(){
 
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }





    var h = window.screen.height;
    var swipeScroll = document.getElementById("swipeScroll");
    swipeScroll.style.height=h+'px';
    var _this=this;

    var currentIndex=0;
    
    new AlloyFinger(swipeScroll, {
        touchMove:function(evt) {
            if (Math.abs(evt.deltaY) >= Math.abs(evt.deltaX)) {
                evt.preventDefault();
                
            }
        },
        swipe:function(evt){
            if(evt.direction==="Up"){
                if(currentIndex<2) {
                    currentIndex++;
                    var dis=h*currentIndex,
                    step = h/10,
                    count = 10;
                    // swipeScroll.scrollTop= dis
                    if(_this.timer==false){
                      var t = setInterval(function(){
                       _this.timer = true;
                        swipeScroll.scrollTop= dis - h/10*count;                      
                        if(count==0){
                          clearInterval(t);
                          _this.timer = false;
                          count=10;
                          if(currentIndex==2){
                            _this.show=1
                          }
                        }
                         count--;
                      },50)
                    }
                }else if(currentIndex==2){
                  swipeScroll.style.height=0;
                  setTimeout(function(){
                    _this.sssss=0;
                    _this.scr=false
                  },1000)
                }
            }else if(evt.direction==="Down"){
                swipeScroll.scrollTop=h*currentIndex
            }
        }
    });    
  }
}
</script>

<style>
.popup{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
  text-align: center;
  font-size: .13rem;
  color: #777;
}
.popup .content{
  width: 325px;
  position: absolute;
  top: .4rem;
  bottom: 1.15rem;
  left: 50%;
  transform:translateX(-50%);
  background-color: #fff;
  border-radius: .1rem;
  padding: 0 .23rem;
  overflow: scroll;
}
.popup .timing{
  font-size: .15rem;
  color: #333;
  height: .6rem;
  line-height: .6rem;
  text-align: center;
}
.popup .time{
  font-size: .18rem;
  color: #ff0040;
  text-align: center;
}
.popup .deadline{
  margin-top: .1rem;
  font-size: .12rem;
  color: #777;

}
.popup .methods-title{
  font-size: .15rem;
  color:#333;
  margin-top: .3rem;
  position: relative;
}
.popup .methods-title:after{
  content:"";
  width: .27rem;
  height: 1px;
  position: absolute;
  left: .77rem;
  top: 50%;
  background-color: #444;

}
.popup .methods-title:before{
  content:"";
  width: .27rem;
  height: 1px;
  position: absolute;
  right: .77rem;
  top: 50%;
  background-color: #444; 

}
.popup ol{
  margin-top: .2rem;
   font-size: .13rem;
   margin-left: 0;
   list-style: decimal;
   padding-left: .08rem;
   color: #777;
   text-align: left;
   line-height: .2rem;
}
.popup ol li{
  margin-top: .08rem
}
.popup .set{
  margin-top: .24rem;
}
.popup .flexBox{
  display: flex;
  margin: .05;
}
.popup .flexItem{
  margin: .03rem;
  width: 1.4rem;
  height: .65rem;
  border:1px solid #ff9ca0;
  border-radius: .03rem;
  padding: .1rem;
  text-align: left;
  font-size: .12rem
}
.popup .flexItem span{
  font-size: .18rem;
  color: #ff0040;
  margin-right: .04rem;
}
.popup .flexItem div{
  margin-top: .05rem
}
.popup .top1{
  width: 2.74rem;
  margin: auto;
  height: .8rem;
  border: 1px solid #ff9ca0;
  text-align: left;
  padding: .1rem;
  border-radius: .04rem;
  margin-top: .1rem;
  margin-bottom: .02rem;
}
.popup .top1 span{
  font-size: .18rem;
  color: #ff0040;
  margin-right: .04rem;
}
.popup .bottom-bar{
  color:#444;
  font-size: .13rem;
  margin-top: .5rem;
  margin-bottom: .15rem;
}
.close{
  width: .15rem;
  height: .15rem;
  position: absolute;
  bottom: .55rem;
  left: 50%;
  transform:translateX(-50%);
}
.popup .share{
  width: 100%;
  height: 100%;
  background-image: url('./imgs/fenxiang.png');
  background-position: 80% .2rem;
  background-size: 70%
}
.popup .guanzhu{
  position: absolute;
  top: .75rem;
  left: 50%;
  bottom: 1.37rem;
  width: 3.2rem;
  transform:translateX(-50%);
  background-color: #fff;
  border-radius: 9px;
}
.popup .guanzhu div{
  width: 2.4rem;
  height: 2.4rem;
  margin-top: .4rem;
  margin-left: .4rem;
  padding: .1rem;
  box-sizing: border-box;
  margin-bottom: .25rem;
  border: 1px solid #a6a6a6;
}
.popup .guanzhu p{
  line-height: .23rem;
  color: #444;
}


#app {
  font-family: 'Pingfang SC', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #000034;

}

#swipeScroll{
  height:160px;
  margin: 0 auto;
  overflow: scroll;
  font-size: 0;
  position: relative;
  box-sizing: border-box;
  background-size: 100%;
}
.pp{
  position: relative;
  height: 100%; 
  background-color: #fff;
}
.pp .show{
  position: relative;
  background-position: 0 .35rem;
  background-size: 100%;  
  height: 80%
}
.aa .show{
  background-image: url('./imgs/p1.png');
}
.bb .show{
  background-image: url('./imgs/p2.png');
}
.cc .show{
   background-image: url('./imgs/p3.png');
}
.animate{
  transition: all 1s
}
#swipeScroll .down{
  height: .6rem;
  background:url('./imgs/down.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 10%;
  width: 100%;
}
.cc .show3{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1.2rem;
  width: 100%;
  background-size: 70%;
  background-position: 50% 50%;
  background-image: url('./imgs/pp3.png');;
}
.cc .show3 div{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #fff;
  opacity: .9
}
.cc .show3 .active{
  opacity: 0;
}




.Participate{
  color: #2c3e50;
  background-color: #000034;
}
.Participate .bg1{
  height: 1.8rem;
  background-image: url('./imgs/bg1.png');
  background-size: 110%;
  background-position: 50% 50%;
  padding: 12px 12px
}
.Participate .bg1 .logo{
  height: .5rem;
  width: .88rem;
  background-size: 100%;
  color: rgba(255,255,255,255,.94);
  font-size: .14rem;
  background-image: url('./imgs/logo@2x.png');
}
.Participate .sign{
  height: 2.53rem;
  background-position: 0% 50%;
  background-image: url('./imgs/shape.png');
  font-size: .13rem;
  color: #b9b9be;
  padding-top: .4rem;
  background-size: 98%
}
.Participate .sign p{
  text-align: center;
  line-height: .25rem
}
.Participate .sign .big{
  font-size: .16rem;
}
.Participate .sign .fff{
  color: #fff
}
.Participate .sign .rules{
  margin-top: .12rem;
  position: relative;
}
.Participate .sign .rules:after{
  position: absolute;
  content:"";
  bottom: 0;
  left: 50%;
  transform:translateX(-50%);
  width: 1.33rem;
  height: 0.02rem;
  background-image: url('./imgs/underline.png');
}
.Participate .sign p span{
  font-family: sans-serif;
  margin-left: 4px;
}
.Participate .part{
  width: 3.20rem;
  height: 3.93rem;
  font-size: .14rem;
  background-color: #fff;
  margin: auto;
  margin-top: .08rem;
  position: relative;
  border-radius: .08rem;
  background-image: url('./imgs/bottomBg.png');
  background-position: bottom;
}
.Participate .part p.title {
  font-size: .15rem;
  text-align: center;
  line-height: .55rem;
  height: .55rem;
  position: relative;
}
.Participate .part p.title:after{
  content: "";
  position: absolute;
  top:50%;
  left: .99rem;
  width: .27rem;
  height: 1px;
  background-color: #444;
}
.Participate .part p.title:before{
  content: "";
  position: absolute;
  top:50%;
  right: .99rem;
  width: .27rem;
  height: 1px;
  background-color: #444;
}
.Participate .part select{
  width: 2.6rem;
  height: .4rem;
  position: absolute;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  top: .55rem;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
  background-color: #fff;
  padding-left: .04rem;
}
.Participate .part textarea{
  width: 2.6rem;
  height: 1.3rem;
  position: absolute;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  top: 1.1rem;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
  background-color: #fff;  
  padding: .11rem;
}
.Participate .part .button{
  position: absolute;
  top: 2.65rem;
  height: .4rem;
  width: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  background-image: url('./imgs/button2.png');
  border: none;
  font-size: .15rem;
  color: #fff;
  text-align: center;
  line-height: .4rem;
  -webkit-appearance: none ;
}
.Participate .part .red{
  position: absolute;
  width: 100%;
  bottom: .5rem;
  color:#ff5a60;
  text-align: center;
  font-size: .14rem
}
.Participate .bottom-bar{
  height: 1.55rem;
  background-image: url('./imgs/bottomBar.png');
  background-size: 140%;
  margin-top: .17rem;
  background-position: -.78rem .05rem
}


.share .show,.personal .show,.rank .show{
  background-image: url('./imgs/shape.png');
  background-position: 0 2.6rem;

}
.share{
   background-color: #000034
}
.share .top{
  position: relative;
  background-color: #fff;
  width: 3.4rem;
  margin: auto;
  padding-top: 1.35rem;
  border-radius: .03rem;
  font-size: .12rem;
  color:#777;
  background-image: url('./imgs/youcuo.png');
  background-size: 1.03rem .57rem;
  background-position: 2rem 1.57rem;
}
.share .top .invite{
  position: absolute;
  top: 0;
  left: 0;
  height: 1.35rem;
  width: 100%;
  background-image: url('./imgs/invite.png');
  background-position: 0 -2px ;
}
.share .top .top1 p,.personal .top .top1 p,.rank .top .top p{
  padding: 0 0.5rem;
  text-align: center;
  line-height: .18rem;
}
.share .top .location,.personal .top .location,.rank .top .location .rank{
  height: .2rem;
  margin: auto;
  display: flex;
  justify-content:center;
  font-size:  .18rem;
  color:#444;
  margin-top: .24rem;
}
.share .top .location div,.personal .top .location div,.rank .top .location div{
    background-image: url('./imgs/location.png');
    width: .14rem;
    height: .18rem;
    margin-right: .05rem;
}
.share .top .decora,.personal .top .decora ,.rank .top .location div{
  width:.04rem;
  height: .04rem;
  border:1px solid #b9b9b9;
  position: relative;
  margin: .14rem auto;

}
.share .top .decora:after,.personal .top .decora:after,.rank .top .decora:after{
  content:'';
  width: .4rem;
  height: 1px;
  position: absolute;
  top: 50%;
  left: -.55rem;
  background-color: #b9b9b9;
}
.share .top .decora:before,.personal .top .decora:before,.rank .top .decora:before{
  content:'';
  width: .4rem;
  height: 1px;
  position: absolute;
  top: 50%;
  right: -.55rem;
  background-color: #b9b9b9;
}
.share .top .pic,.personal .top .pic,.rank .top .pic{
  width: .6rem;
  height: .6rem;
  border-radius: 50%;
  background-color: red;
  margin: auto;
}
.share .top .name,.personal .top .name,.rank .top .name{
  text-align: center;;
  margin: auto;
  width: .6rem;
  height: .12rem;
  font-size: .12rem;
  margin-top: .05rem;
}
.share .top .ranking,.personal .top .ranking,.rank .top .ranking{
  font-size: .12rem;
  color: #444;
  display: flex;
  margin-top: .15rem;
  justify-content:center;
  align-items:center;
}
.share .top .ranking span,.personal .top .ranking span,.rank .top .ranking span{
  height: .18rem;
  font-size: .18rem;
  color: #ff5a60;
}
.share .top .thumb,.personal .top .thumb,.rank .top .thumb{
  height: .2rem;
  display: flex;
  align-items:center;
  justify-content:center;
  margin-top: .22rem;
}
.share .top .thumb .like,.personal .top .thumb .like,.rank .top .thumb .like{
  width: .2rem;
  height: .2rem;
  background-image: url('./imgs/like.png');
  background-size: 90%;
  margin-right: .02rem;

}
.share .top .thumb .peo,.personal .top .thumb .peo,.rank .top .thumb .peo{
  height: .2rem;
  width: .2rem;
  border-radius: 50%;
  background-image: url('./imgs/like.png');
  margin-left: .06rem 
}
.share .top .thumb .ellipsis,.personal .top .thumb .ellipsis,.rank .top .thumb .ellipsis{
  height: .2rem;
  width: .2rem;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  line-height: .2rem;
  color: #f0f0f0;
  background-image: url('./imgs/dian.png');
  background-position: 50% 50%;
  background-size: 80%;
  margin-left: .06rem 
}
.share .top .btn,.personal .top .btn,.rank .top .btn{
  width: 2.4rem;
  height: .4rem;
  border-radius: .2rem;
  margin: auto;
  margin-top: .16rem;
  background-image: url('./imgs/button2.png');
  border: none;
  color: #fff;
  font-size: .15rem;
  position: relative;
  padding-left: 30px
}
.btn-wrap{
  width: 2.4rem;
  height: .8rem;
  margin: auto
}
.ib{
  display: inline-block;
  width: .2rem;
  height: .2rem;
  position: absolute;
  left: .7rem;
  top: .08rem;
  background-image: url('./imgs/like1.png');
}
.share .title,.personal .title,.rank .title{
  text-align: center;
  font-size: .15rem;
  color: #ffffff;
  height: .57rem;
  line-height: .57rem;
  position: relative;
}
.share .title:after,.personal .title:after,.rank .title:after{
  content: '';
  position: absolute;
  width: .2rem;
  height: 1px;
  top: 50%;
  left: .88rem;
  background-color: #fff;
}
.share .title:before,.personal .title:before,.rank .title:before{
  content: '';
  position: absolute;
  width: .2rem;
  height: 1px;
  top: 50%;
  right: .88rem;
  background-color: #fff;
}
.share .ranking-list .item,.personal .ranking-list .item,.rank .ranking-list .item{
  font-size: .12rem;
  display: flex;
  padding-right: .14rem
}
.share .ranking-list .left,.personal .ranking-list .left,.rank .ranking-list .left{
  width: 1.2rem;
  display: flex;
  align-items:center;
}
.share .ranking-list .left .topNum,.personal .ranking-list .left .topNum,.rank .ranking-list .left .topNum{
  width: .47rem;
  height: .5rem;
  font-size: .15rem;
  line-height: .5rem;
  text-align: center;
  color :#777;
  background-size: 22px 32px;
  background-position: 50% 50%;
}
.numb1{
    background-image: url('./imgs/1.png');
}
.numb2{
    background-image: url('./imgs/2.png');
}
.numb3{
    background-image: url('./imgs/3.png');
}


.share .ranking-list .left .pic,.personal .ranking-list .left .pic,.rank .ranking-list .left .pic{
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  background-color: red;
}
.share .ranking-list .right .name,.personal .ranking-list .right .name,.rank .ranking-list .right .name{
  color: #777;
  position: relative;
  height: .22rem;
}
.share .ranking-list .right .name span,.personal .ranking-list .right .name span,.rank .ranking-list .right .name span{
  color: #fff
}
.share .ranking-list .right,.personal .ranking-list .right,.rank .ranking-list .right{
  width: 2.54rem;
  padding: .18rem 0 .14rem 0;

}
.normal{
   border-bottom: 1px dashed rgba(255,255,255,.3); 
}
.share .ranking-list .right .l,.personal .ranking-list .right .l,.rank .ranking-list .right .l{
  margin-right: .05rem;
}
.share .ranking-list .right .r,.personal .ranking-list .right .r,.rank .ranking-list .right .r{
  margin-left: .05rem;
}
.share .ranking-list .right .thumb,.personal .ranking-list .right .thumb,.rank .ranking-list .right .thumb{
  display: inline-block;
  width: .55rem;
  height: .22rem;
  border-radius: 4px;
  margin-left: .86rem;
  margin-top: -0.1rem;
  padding-left: .25rem;
  border:1px solid #777;
  background-image: url('./imgs/like1.png');
  background-size: .15rem .14rem;
  background-position: .05rem .03rem;
  font-size: .14rem;
  color: #777;
  line-height: .22rem;
  margin-bottom: .1rem;
  position: absolute;
  right: 0;
  top:.04rem;
}
.share .ranking-list .right .des,.personal .ranking-list .right .des,.rank .ranking-list .right .des{
  color: #777;
  font-size: .12rem;
  line-height: .15rem;
  position: relative;
}
.share .ranking-list .right .des:after,.personal .ranking-list .right .des:after,.rank .ranking-list .right .des:after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
}
.share .viewBtn,.personal .viewBtn,.rank .viewBtn{
  width: 3.45rem;
  height: .4rem;
  margin: auto;
  border: 1px solid #9999ae;
  border-radius: .2rem;
  font-size: .14rem;
  color: rgba(255,255,255,.6);
  text-align: center;
  line-height: .4rem;
  margin-top: .25rem;
}
.share .bottom-bar,.personal .bottom-bar,.rank .bottom-bar{
  margin-top: .25rem;
  height: 1.3rem;
  background-image: url(./imgs/bottomBar.png);
}


.not-concerned .bg1{
  height: 1.8rem;
  background-image: url('./imgs/bg1.png');
  background-size: 110%;
  background-position: 50% 50%;
  padding: 12px 12px
}
.not-concerned .bg1 .logo{
  height: .5rem;
  width: .88rem;
  background-size: 100%;
  color: rgba(255,255,255,255,.94);
  font-size: .14rem;
  background-image: url('./imgs/logo@2x.png');
}
.not-concerned .sign{
  height: 2.53rem;
  background-position: 0% 50%;
  background-image: url('./imgs/shape.png');
  font-size: .13rem;
  color: #b9b9be;
  padding-top: .4rem;
  background-size: 98%
}
.not-concerned .sign p{
  text-align: center;
  line-height: .25rem
}
.not-concerned .sign .big{
  font-size: .16rem;
}
.not-concerned .sign .fff{
  color: #fff
}
.not-concerned .sign .rules{
  margin-top: .12rem;
  position: relative;
}
.not-concerned .sign .rules:after{
  position: absolute;
  content:"";
  bottom: 0;
  left: 50%;
  transform:translateX(-50%);
  width: 1.33rem;
  height: 0.02rem;
  background-image: url('./imgs/underline.png');
}
.not-concerned .sign p span{
  font-family: sans-serif;
  margin-left: 4px;
}
.not-concerned .bottom-bar{
  height: 1.68rem;
  background-image: url('./imgs/bottomBar1.png');
  background-size: 100%;
  position: relative;
}
.not-concerned .bottom-bar .btn{
  width: 2.6rem;
  height: .4rem;
  font-size: .15rem;
  border-radius: .2rem;
  background-image: url('./imgs/button2.png');
  line-height: .4rem;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 50%;
  top: .5rem;
  transform: translateX(-50%);
}
.not-concerned .bottom-bar .des{
  font-size: .14rem;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: .32rem;
  left: 50%;
  transform: translateX(-50%);  
}


.personal,.rank{
  background-color: #000034;
}

.personal .bg1,.rank .bg1{
  height: 1.8rem;
  background-image: url('./imgs/bg1.png');
  background-size: 110%;
  background-position: 50% 50%;
  padding: 12px 12px
}
.personal .bg1 .logo,.rank .bg1 .logo{
  height: .5rem;
  width: .88rem;
  background-size: 100%;
  color: rgba(255,255,255,255,.94);
  font-size: .14rem;
  background-image: url('./imgs/logo@2x.png');
}
.personal .sign,.rank .sign{
  height: 2.53rem;
  background-position: 0% 50%;
  background-image: url('./imgs/shape.png');
  font-size: .13rem;
  color: #b9b9be;
  padding-top: .4rem;
  background-size: 98%
}
.personal .sign p,.rank .sign p{
  text-align: center;
  line-height: .25rem
}
.personal .sign .big,.rank .sign .big{
  font-size: .16rem;
}
.personal .sign .fff,.rank .sign .fff{
  color: #fff
}
.personal .sign .rules,.rank .sign .rules{
  margin-top: .12rem;
  position: relative;
}
.personal .sign .rules:after,.rank .sign .rules:after{
  position: absolute;
  content:"";
  bottom: 0;
  left: 50%;
  transform:translateX(-50%);
  width: 1.33rem;
  height: 0.02rem;
  background-image: url('./imgs/underline.png');
}
.personal .sign p span,.rank .sign p span{
  font-family: sans-serif;
  margin-left: 4px;
}
.personal .bottom-bar,.rank .bottom-bar{
  height: 1.68rem;
  background-image: url('./imgs/bottomBar.png');
  background-size: 150%;
  background-position: 55% 10%;
  position: relative;
}
.personal .bottom-bar .btn,.rank .bottom-bar .btn{
  width: 2.6rem;
  height: .4rem;
  font-size: .15rem;
  border-radius: .2rem;
  background-image: url('./imgs/button2.png');
  line-height: .4rem;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 50%;
  top: .5rem;
  transform: translateX(-50%);
}
.personal .bottom-bar .des,.rank .bottom-bar .des{
  font-size: .14rem;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: .32rem;
  left: 50%;
  transform: translateX(-50%);  
}
.personal .top,.rank .top{
  background-color: #fff;
  width: 3.4rem;
  margin: auto;
  border-radius: .03rem;
  font-size: .12rem;
  color:#777;
  padding-top: .23rem;
  background-image: url('./imgs/youcuo.png');
  background-size: 1.03rem .57rem;
  background-position: 2rem .2rem;
}
.personal .top .location,.rank .top .location{
  margin-top: 0;
}
.rank  div.viewBtn{
  width: 2.6rem;
  height: .4rem;
  font-size: .15rem;
  border-radius: .2rem;
  background-image: url('./imgs/button2.png');
  line-height: .4rem;
  text-align: center;
  color: #fff;
  border:none;
}




html, body, div, span, applet, object, iframe, h1, h2, h3,
h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot,
thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
}
*{
  background-size: 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
}
:focus {
    outline: 0;
}
table {
    border-collapse: separate;
    border-spacing: 0;
}
caption, th, td {
    text-align: left;
    font-weight: normal;
}
a img, iframe {
    border: none;
}
ol, ul {
    list-style: none;
}
input, textarea, select, button {
    font-size: 100%;
    font-family: inherit;
}
select {
    margin: inherit;
}
/* Fixes incorrect placement of numbers in ol’s in IE6/7 */
ol { margin-left:2em; }
html{
  font-size: 625%
}
@media (max-width:320px){
  html{
    font-size: 500%
  }
}
</style>
