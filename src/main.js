import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'
import VueNotification from "@kugatsu/vuenotification";
 
Vue.use(VueNotification, {
  timer: 20
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
