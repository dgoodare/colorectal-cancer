import { createApp } from 'vue'
import App from './App.vue'

/* PrimeVue Components */
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Dialog from 'primevue/dialog'

import 'primevue/resources/themes/fluent-light/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App);
app.use(PrimeVue);

/* Bind components to app */
app.component('PrimeButton', Button);
app.component('PrimeSidebar', Sidebar);
app.component('PrimeDialog', Dialog);

app.mount('#app');
