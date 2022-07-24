export const state = {
  token: "null",
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
};

export const actions = {
  login({ commit }, payload) {
    commit("setToken", payload);
  },
  logout({ commit }) {
    commit("clearToken");
  },
};

export const getters = {
  isAuth: (state) => !!state.token,
};
