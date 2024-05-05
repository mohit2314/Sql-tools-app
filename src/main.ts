import './assets/main.css'
// import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/themes/aura-light-teal/theme.css'
// import 'primevue/resources/themes/aura-dark-teal/theme.css'
// import 'primevue/resources/themes/lara-light-teal/theme.css'
// import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";
// import as directive
import BadgeDirective from 'primevue/badgedirective';
import ToastService from 'primevue/toastservice';
import { createPinia } from 'pinia'
import "light-icons/dist/light-icon.css";
//@ts-ignore
import LvCollapsible from 'lightvue/collapsible';
//@ts-ignore
import Chat from 'vue3-beautiful-chat'
const pinia = createPinia()
const app = createApp(App)

app.directive('badge', BadgeDirective);
app.use(PrimeVue);
app.use(router)
app.use(pinia)
app.use(ToastService);
app.component('LvCollapsible', LvCollapsible);
app.use(Chat)
app.mount('#app')
