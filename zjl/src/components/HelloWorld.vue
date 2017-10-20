<template>
  <div class="p-index">
    <div class="slider">
      <mt-swipe :auto="4000" class="w-sliders">
        <mt-swipe-item v-for="item in list" class="swiper-wrapper">
          <a href="" class="swiper-slide" style="width:3.75rem">
            <img :src="item.thumb" :alt="item.title">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="w-videos" v-for="iten in listt" v-if="iten.list.length">
      <div class="g-b-t"></div>
      <div class="g-b-b"></div>
      <div class="w-videos_title-wrap">
        <div class="w-videos_title">{{iten.name}}</div>
        <div class="w-videos_more">
          <a href="">不够？戳我</a>
        </div>
      </div>
      <div class="w-videos_list">
        <a class="w-video" v-for="more in iten.list" :href="'/' + more.no">
          <div class="w-video_thumb">
            <img :src="more.live_thumb">
            <div class="w-video_view">{{(more.view/10000).toFixed(2) + '万'}}</div>
          </div>
          <div class="w-video_foot">
            <div class="w-video_avatar">
              <img :src="more.avatar">
            </div>
            <div class="w-video_detail-wrap">
              <div class="w-video_nick">{{more.nick}}</div>
              <div class="w-video_title">{{more.title}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  created(){
    this.getData();
    this.getDatb();
  },
  data: function () {
    return {
      list:[],
      listt:[],
    }
  },
  methods: {
    getData: function() {
      var that = this
      axios.get('/json/page/app_images.json?_t=201710161953')
      .then(function(response){
        // console.log(response);
        // console.log(response.data.ios-focus)
        that.list = response.data["ios-focus"]
        // console.log(that.list)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getDatb:function(){
      var that = this
      axios.get("/json/app/index/recommend/list-iphone.json?_t=201710171009")
      .then(function(response){
        console.log(response.data);
        console.log(response.data.room[0].list);
        that.listt = response.data.room
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: #666;
    text-decoration: none;
}
a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
/*.p-index {
    background: #f5fcff;
    padding-bottom: .8rem;
}
.w-sliders {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    position: relative;
}
.swiper-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  float: left;
  box-sizing: content-box;
}*/
.slider{
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    position: relative;
    height:2.0rem;
}
.w-sliders .swiper-slide img{
  width:100%;
}
.mint-swipe-indicators{
  left:73%;
  bottom: -5px;
}
/*--------------------------------------*/
.p-index .w-videos {
    margin-bottom: .32rem;
}
.g-b-t {
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: top left;
    transform: scaleY(0.5);
}
.g-b-b {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform-origin: bottom left;
    transform: scaleY(0.5);
}
.w-videos_title-wrap {
    position: relative;
    padding: .3rem 0;
}
.w-videos_title {
    border-left: .06rem solid #ff4646;
    font-size: .3rem;
    padding-left: .14rem;
    color: #34373b;
    line-height: 1;
}
.w-videos_more {
    position: absolute;
    font-size: .22rem;
    margin-right: .3rem;
    top: .33rem;
    right: 0;
    background: url(/static/v2/m/module/widget/videos/images/arrow_8ea12eb.png) no-repeat 0 0;
    background-size: .12rem .24rem;
    background-position: 1.28rem;
    padding-right: .32rem;
}
.w-videos_more a {
    color: #c2c3c4;
}
.w-videos_list {
    padding: 0 .1rem;
    overflow: hidden;
}
.w-videos_list .w-video {
    width: 50%;
    float: left;
}
/*.w-video:nth-child(n-2) {
    padding-top: 1px;
}*/
.w-video {
    width: 100%;
    box-sizing: border-box;
    padding: .1rem;
}
.w-video_thumb {
    width: 100%;
    height: 100%;
   /* background: url(/static/v2/m/lib/tools/img/video-placeholder_571d184.jpg) no-repeat 0 0;*/
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    padding-bottom: 55.65%;
    background-size: cover;
}
.w-video_thumb img {
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    position: absolute;
}
.w-video_view {
    position: absolute;
    bottom: .1rem;
    left: .1rem;
    z-index: 1;
    color: #c2c3c4;
    display: inline-block;
    background: rgba(0,0,0,.38);
    border-radius: 4px;
    width: auto;
    height: .3rem;
    font-size: .2rem;
    /*background-image: url(/static/v2/m/module/widget/video/images/play_0392ff0.png);*/
    background-repeat: no-repeat;
    background-size: .08rem .11rem;
    background-position: .12rem .1rem;
    padding: 0 .05rem;
    padding-left: .24rem;
    box-sizing: border-box;
}
.w-video_foot {
    box-sizing: border-box;
    padding-left: .8rem;
    position: relative;
    margin-top: .21rem;
}
.w-video_avatar {
    width: .64rem;
    height: .64rem;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    left: 0;
}
.w-video_avatar img {
    width: 100%;
    height: 100%;
    vertical-align: top;
}
.w-video_detail-wrap {
    line-height: 1;
}
.w-video_nick {
    height: .4rem;
    font-size: .26rem;
    color: #34373b;
}
.ellipsis, .w-video_nick, .w-video_title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.w-video_title {
    font-size: .22rem;
    color: #34373b;
    opacity: .5;
    height: .26rem;
    box-sizing: border-box;
}
</style>
