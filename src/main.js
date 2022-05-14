import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { Loading } from 'vant';
import { Overlay } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import 'default-passive-events';

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
app.use(Swipe);
app.use(SwipeItem);

app.mount('#app')


