<template>
  <div id="app">
    <child></child>
    <jingx></jingx>
    <!-- <mt-popup
      v-model="popupVisible"
      position="bottom">
    </mt-popup> -->
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    flex-direction:column;
  }
</style>
   