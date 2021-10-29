import Vue from "vue";
import Vuex from "vuex";
import { createProxy, extractVuexModule } from "vuex-class-component";
import block from "./block.vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(block),
  },
});
export const vxm = {
  user: createProxy(store, block),
};
