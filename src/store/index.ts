import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

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
      state.authUser = payload.user;
    },
    SET_THEME(state: State, payload: string) {
      state.theme = payload;
    },
  },
  getters: {
    displayUser(state: State) {
      return state.authUser;
    },
    currentTheme(state: State) {
      return state.theme;
    },
  },
  actions: {
    async login({ commit }, payload) {
      console.log("store action", payload);
      await commit("SET_LOGIN", payload);
    },
    changeTheme({ commit }, payload): void {
      console.log("store action::", payload);
      commit("SET_THEME", payload);
    },
  },
});
