import Vuex from "vuex";
import axios from "@/plugins/axios";

const store = new Vuex.Store({
  state: {
    // Define your state properties here
    language: "cpp",
    footerActions: null,
    user: {},
  },
  mutations: {
    // Define your mutations here
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    // Define your actions here
    async getUser({ commit }) {
      const token = window.localStorage.getItem("LLMAccess");
      if (!token) return;

      const { data } = await axios.get("/auth/users/me/");
      commit("setUser", data)
    },
    logout({commit}) {
        window.localStorage.removeItem("LLMAccess");
        window.localStorage.removeItem("LLMRefresh");
        commit("setUser", {});
    }
  },
  getters: {
    // Define your getters here
  },
});

export default store;
