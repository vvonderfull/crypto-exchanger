<template>
  <div class="exchange-form">
    <div class="exchange-form__label">
      <h2>Exchange EUR to BTC</h2>
    </div>
    <div class="exchange-form__wrap">
      <InputForm :type="'pay'" />
      <InputForm :type="'get'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangerForm",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
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
}
</style>
