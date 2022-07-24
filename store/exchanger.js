export const state = () => ({
  fiatList: [
    "CNY",
    "USD",
    "EUR",
    "JPY",
    "RUB",
    "GBP",
    "KRW",
    "INR",
    "CAD",
    "AUD",
  ],
  commissionList: ["1.00", "2.00", "3.00", "4.00", "5.00"],
  currencyPairs: [],
  currencyPairsRate: [],
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
  generateCurrencyPairs(state) {
    state.fiatList.forEach((itemBase) => {
      state.fiatList.forEach((itemQuote) => {
        if (itemBase !== itemQuote) {
          let rand = Math.floor(
            1 + Math.random() * (state.commissionList.length + 1 - 1)
          );
          state.currencyPairs.push({
            base_currency: itemBase,
            quote_currency: itemQuote,
            commission: state.commissionList[rand - 1],
          });
        }
      });
    });
  },
  generateCurrencyPairsRate(state) {
    state.currencyPairsRate = state.currencyPairs.map((item) => {
      let rand = Math.floor(10 + Math.random() * (100 + 1 - 10));
      return {
        pair: `${item.base_currency}/${item.quote_currency}`,
        rate: rand,
      };
    });
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
