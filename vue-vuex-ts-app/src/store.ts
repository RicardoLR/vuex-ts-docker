import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

import vuexLocal from '@/plugins/vuex-persist';

import { RootState } from "@/store/types";

import {todoModule} from "@/store/modules/todo";
import {authModule} from "@/store/modules/auth";

Vue.use(Vuex);

/**
 * Similar a combineReducers en modulos
 */
const store: StoreOptions<RootState> = {
  state: {
    appName: 'Vuejs 2 + Vuex + Typescript',
    appVersion: '0.0.1'
  },
  modules: {
      todoModule,
      authModule,
  },
  plugins: [vuexLocal.plugin]
};

export default new Vuex.Store<RootState>(store);
