export const state = {
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
    selectFiat: "USD",
  },
  getData: {
    label: "You Get",
    value: null,
    selectFiat: "RUB",
  },
};

export const mutations = {
  payDataSetter(state, payload) {
    state.payData = payload;
  },
  getDataSetter(state, payload) {
    state.getData = payload;
  },
  /**
   * Генерация списка Валютных пар | O(n^2)
   */
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
        } else {
          state.currencyPairs.push({
            base_currency: itemBase,
            quote_currency: itemQuote,
            commission: 0,
          });
        }
      });
    });
  },
  /**
   * Генерация списка курсов Валютных пар
   */
  generateCurrencyPairsRate(state) {
    state.currencyPairsRate = state.currencyPairs.map((item) => {
      let rand =
        item.base_currency !== item.quote_currency
          ? Math.floor(10 + Math.random() * (100 + 1 - 10))
          : 1;
      return {
        pair: `${item.base_currency}/${item.quote_currency}`,
        rate: rand,
      };
    });
  },
};

export const actions = {};

export const getters = {
  users: (s) => s.users,
};
