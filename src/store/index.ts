import Vue from "vue";
import Vuex from "vuex";
import account from "./modules/account/account";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    account
  },
  strict: debug,
});
