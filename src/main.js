import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* PrimeVue Components */
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Dialog from 'primevue/dialog'
import Toolbar from 'primevue/toolbar'
import ModelViewer from '@google/model-viewer'

import 'primevue/resources/themes/fluent-light/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import './styles/styles.css'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

/* Bind components to app */
app.component('PrimeButton', Button);
app.component('PrimeSidebar', Sidebar);
app.component('PrimeDialog', Dialog);
app.component('PrimeToolbar', Toolbar);
app.component('ModelViewer', ModelViewer);

app.mount('#app');
