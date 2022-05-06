import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { Loading } from 'vant';
import { Overlay } from 'vant';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Icon)
app.use(PasswordInput);
app.use(NumberKeyboard);
app.use(Loading)
app.use(Overlay)

app.mount('#app')


