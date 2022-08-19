import { createApp } from "vue";
import router from "@/router";
import App from "@/App";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretRight)

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")
