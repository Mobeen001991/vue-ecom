import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vue3-carousel/dist/carousel.css' 
import App from './App.vue'
import store from "./store";
/* import the fontawesome core */
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 
library.add(faTrash,faShoppingCart)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store).mount('#app')
