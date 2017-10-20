<template>
  <div class="main_container">
    <!-- <button @click="getData">aaa</button> -->
    <div class="p-category">
      <div class="g-b-t"></div>
      <ul class="p-category_list">
        <li class="p-category_item" v-for="item in list">
          <!-- <a href="" :style="{background: 'url(' + item.image + ')'}"> -->
          <a :href="'/game/' + item.slug">
            <img class="p-category_thumb" :src="item.image">
            <div class="p-category_item_name">{{item.name}}</div>
            <!-- {{item.image}} -->
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'category',
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
      axios.get('/json/categories/list.json?_t=201710161045')
      .then(function(response){
        console.log(response);
        that.list = response.data
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
.p-category {
    background-color: #F6FCFF;
    padding-top: .1rem;
    position: relative;
}
.g-b-t {
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: top left;
    transform: scaleY(0.5);
}
.p-category_list {
    box-sizing: border-box;
    width: 100%;
    list-style: none;
    padding: 0 .07rem;
}
.p-category_item {
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: .05rem;
    display: block;
    position: relative;
    text-align: center;
}
.p-category_item a {
    display: block;
    padding-top: 130.4%;
    position: relative;
    background-size: 100% 100%;
}
.p-category_thumb {
    border-radius: .04rem;
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-category_item_name {
    position: absolute;
    bottom: 1%;
    left: 0;
    right: 0;
    color: gray;
    font-size: .26rem;
}
</style>
