import { createApp } from 'vue'
import App from './App.vue'

/* PrimeVue Components */
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Dialog from 'primevue/dialog'
import Toolbar from 'primevue/toolbar'

import 'primevue/resources/themes/fluent-light/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import './styles/sidebar.css'
import './styles/dialog-toolbar.css'

const app = createApp(App);
app.use(PrimeVue);

/* Bind components to app */
app.component('PrimeButton', Button);
app.component('PrimeSidebar', Sidebar);
app.component('PrimeDialog', Dialog);
app.component('PrimeToolbar', Toolbar);

app.mount('#app');
