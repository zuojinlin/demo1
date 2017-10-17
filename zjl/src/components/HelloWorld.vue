<template>
  <div class="p-index">
    <mt-swipe :auto="4000" class="w-sliders">
      <mt-swipe-item v-for="item in list" class="swiper-wrapper">
        <a href="" class="swiper-slide" style="width:3.75rem">
          <img :src="item.thumb" :alt="item.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div> 
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
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
      axios.get('/json/page/app_images.json?_t=201710161953')
      .then(function(response){
        console.log(response);
        // console.log(response.data.ios-focus)
        that.list =response.data["ios-focus"]
        // console.log(that.list)
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

lib_e531945.css:1
a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
.p-index {
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
  /*display: flex;*/
  float: left;
  box-sizing: content-box;
}
.w-sliders .swiper-slide {
    /*position: relative;*/
    padding-bottom: 30.55%;
/*    background: url(/static/v2/m/module/widget/sliders/images/placeholder_94b796c.jpg) no-repeat 0 0;*/
    background-size: cover;
}
.swiper-slide{
  flex-shrink: 0;
}
.w-sliders .swiper-slide img {
    /*position: absolute;*/
    width: 100%;
    height: 100%;
    /*top: 0;
    left: 0;*/
}
</style>
