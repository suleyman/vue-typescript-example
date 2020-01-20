export default {
  state: {
    email: null,
    token: null,
  },
  getters: {
    isAuthenticated(state: any) {
      if (state.token === null || state.token === "") {
        return false
      }
      return true
    }
  },
  actions: {
    login({commit}: {commit: Function}, payload: any) {
      // login..
      commit('SET_TOKEN', payload.token);
    }
  },
  mutations: {
    SET_TOKEN(state: any, payload: string) {
      state.token = payload;
    }
  },
}
