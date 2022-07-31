import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Vue from "vue";
import Dev from "./serve.vue";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Dev),
}).$mount("#app");