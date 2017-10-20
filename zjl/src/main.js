// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

/*----------------------------------*/
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(MintUI);

import Child from './Child';
import Jingx from './Jingx';

Vue.component(Child.name, Child);
Vue.component(Jingx.name, Jingx);

/*------------------------------------------*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
