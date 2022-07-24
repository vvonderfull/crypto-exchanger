<template>
  <div class="input-form">
    <label for="inputForm" class="input-form__label">{{
      dataInput.label
    }}</label>
    <div class="input-form__input">
      <input v-model="inputValue" id="inputForm" type="number" />
      <div class="input-form__select">{{ dataInput.selectFiat }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  mixins: [],
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  components: {},
  data() {
    return {
      inputValue: null,
    };
  },
  mounted() {},
  methods: {},
  computed: {
    dataInput() {
      return this.$store.state.exchanger[`${this.type}Data`];
    },
  },
  watch: {},
  validations: {},
};
</script>

<style scoped lang="scss">
.input-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &__label {
    margin-bottom: 10px;
  }

  &__input {
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      background: white;
      outline: none;
      border: none;
      border-radius: 10px 0 0 10px;
    }
  }

  &__select {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50px;
    background: #3482fa;
    border-radius: 0 10px 10px 0;
  }
}
</style>
