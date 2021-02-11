import { InjectionKey } from "vue";
import { createStore, GetterTree, Store } from "vuex";
import firebase from "firebase";
export interface State {
  count: number;
  authUser: any;
  theme: string;
}
//localStorage
const userLocal = localStorage.getItem("user");
const userJson = JSON.parse(userLocal);
// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    authUser: userJson,
    theme: "light",
  },
  mutations: {
    SET_INCREMENT(state: State, value: number) {
      state.count += value;
    },
    SET_LOGIN(state: State, payload: any) {
      console.log("login mutation", payload);
      state.authUser = payload;
    },
    SET_THEME(state: State, theme: string) {
      state.theme = theme;
    },
    SET_LOGOUT(state: State) {
      state.authUser = {};
    },
  },
  getters: {
    displayUser(state: State): State {
      return state.authUser;
    },
    currentTheme(state: State): string {
      return state.theme;
    },
  },
  actions: {
    async login({ commit }, payload) {
      console.log("store action", payload);
      await commit("SET_LOGIN", payload);
    },
    async logout({ commit }) {
      console.log("logging user");
      await commit("SET_LOGOUT");
    },
    changeTheme({ commit }, payload: State): void {
      commit("SET_THEME", payload.theme);
    },
  },

  modules: {},
});
