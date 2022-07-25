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
    value: 0,
    selectFiat: "USD",
  },
  getData: {
    label: "You Get",
    value: 0,
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
   * Изменение и пересчет input'ов базовой и котируемой валюты
   */
  changeDataValue(state, payload) {
    let pairRate = state.currencyPairsRate.find(
      (item) =>
        item.pair === `${state.payData.selectFiat}/${state.getData.selectFiat}`
    );
    if (payload.type === "pay") {
      state.payData.value = payload.value;
      state.getData.value = payload.value * pairRate.rate;
    } else {
      state.getData.value = payload.value;
      state.payData.value = payload.value / pairRate.rate;
    }
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

export const actions = {
  /**
   * Сброс значений инпутов
   */
  updateDataValue({ state, commit }) {
    commit("changeDataValue", {
      type: "pay",
      value: 0,
    });
  },
};

export const getters = {};
