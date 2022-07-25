<template>
  <div class="exchange-form">
    <div class="exchange-form__label">
      <h2>
        Exchange {{ getPayData.selectFiat }} to {{ getGetData.selectFiat }}
      </h2>
      <div>Сourses will be updated in: {{ timer }} second</div>
    </div>
    <div class="exchange-form__wrap">
      <InputForm :type="'pay'" />
      <InputForm :type="'get'" />
      <div class="exchange-form__commission">
        You will get with a commission({{ +getCurrencyPairs.commission }}%):
        {{ getCommissionData }}
      </div>
    </div>
    <v-btn class="primary" @click="handleExchange"> Exchange</v-btn>
    <v-snackbar :timeout="3000" color="success" v-model="snackbar">
      {{ textSnackbar }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "ExchangerForm",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      timer: 30,
      interval: 0,
      snackbar: false,
      textSnackbar: "",
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  created() {
    this.$store.commit("exchanger/generateCurrencyPairs");
    this.$store.commit("exchanger/generateCurrencyPairsRate");
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        if (!this.timer) {
          this.$store.commit("exchanger/generateCurrencyPairsRate");
          clearInterval(this.interval);
          this.timer = 30;
          this.startTimer();
          return false;
        }
        this.timer--;
      }, 1000);
    },
    handleExchange() {
      this.textSnackbar = `Successful exchange! You have received: ${this.getCommissionData} ${this.getGetData.selectFiat}`;
      this.snackbar = true;
    },
  },
  computed: {
    getPayData() {
      return this.$store.state.exchanger.payData;
    },
    getGetData() {
      return this.$store.state.exchanger.getData;
    },
    getCommissionData() {
      return (
        this.getGetData.value -
        (this.getGetData.value / 100) * this.getCurrencyPairs.commission
      );
    },
    getCurrencyPairs() {
      return this.$store.state.exchanger.currencyPairs.find(
        (item) =>
          item.base_currency === this.getPayData.selectFiat &&
          item.quote_currency === this.getGetData.selectFiat
      );
    },
  },
  watch: {},
  validations: {},
};
</script>

<style scoped lang="scss">
.exchange-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  background: #272727;
  border-radius: 15px;

  &__label {
    margin-bottom: 30px;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
  }

  &__commission {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    word-break: break-word;
  }
}
</style>
