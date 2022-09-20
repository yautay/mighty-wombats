import { createStore } from "vuex";
import bulletinsModule from "./modules/bulletins/index.js"
import homeLoadingModule from "./modules/home_loading/index.js"

const store = createStore({
  modules: {
    bulletins: bulletinsModule,
    homeLoading: homeLoadingModule
}
});

export default store;
