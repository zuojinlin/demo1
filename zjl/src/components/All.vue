<template>
  <div class="main_container">
    <div class="p-list">
      <div class="w-videos">
        <div class="g-b-t"></div>
        <div class="g-b-b"></div>
        <div class="w-videos_list">
          <a class="w-video" :href="'/' + item.no" v-for="item in list">
            <div class="w-video_thumb">
              <img :src="item.live_thumb">
              <div class="w-video_view">{{(item.view/10000).toFixed(2) + '万'}}</div>

            </div>
            <div class="w-video_foot">
              <div class="w-video_avatar">
                <img :src="item.avatar">
              </div>
              <div class="w-video_detail-wrap">
                <div class="w-video_nick">{{item.nick}}</div>
                <div class="w-video_title">{{item.title}}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'all',
  created(){
    this.getData();
  },
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    getData: function() {
      var that = this
      axios.get('/json/play/list.json?_t=201710161510')
      .then(function(response){
        console.log(response);
        console.log(response.data.data)
        that.list = response.data.data
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
*{
  margin: 0;
  padding: 0;
}
a {
    color: #666;
    text-decoration: none;
}
.w-videos {
    position: relative;
    background: #fff;
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
.w-videos_list {
    padding: 0 .1rem;
}
.w-videos_list .w-video {
    width: 50%;
    float: left;
}
.w-video:nth-child(n-2) {
    padding-top: 1px;
}
.w-video {
    width: 100%;
    box-sizing: border-box;
    padding: .1rem;
}
.w-video_thumb {
    width: 100%;
    height: 100%;
  /*  background: url(/static/v2/m/lib/tools/img/video-placeholder_571d184.jpg) no-repeat 0 0;*/
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
    /*vertical-align: top;*/
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
