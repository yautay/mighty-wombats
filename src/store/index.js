import { createStore } from "vuex";
import bulletinsModule from "./modules/bulletins/index.js"

const store = createStore({
  modules: {
    bulletins: bulletinsModule
}
});

export default store;
