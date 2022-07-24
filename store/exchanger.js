export const state = () => ({
  payData: {
    value: null,
    selectFiat: null,
  },
  getData: {
    value: null,
    selectFiat: null,
  },
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", users);
  },
};

export const getters = {
  users: (s) => s.users,
};
