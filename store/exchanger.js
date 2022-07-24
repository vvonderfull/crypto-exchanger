export const state = () => ({
  payData: {
    label: "You Pay",
    value: null,
    selectFiat: "BTC",
  },
  getData: {
    label: "You Get",
    value: null,
    selectFiat: "EUR",
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
