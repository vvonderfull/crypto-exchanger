<template>
  <div class="input-form">
    <label for="inputForm" class="input-form__label">
      {{ dataInput.label }}
    </label>
    <div class="input-form__input">
      <input v-model.number="inputValue" id="inputForm" type="number" />
      <div class="input-form__select" @click="openModal">
        <p>{{ dataInput.selectFiat }}</p>
        <v-icon>mdi-chevron-down</v-icon>
      </div>
    </div>
    <div class="input-form__modal" v-if="showModal">
      <div
        class="input-form__item"
        v-for="item in getFiatList"
        :key="item + type"
        @click="selectItem(item)"
      >
        {{ item }}
      </div>
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
      inputValue: 0,
      showModal: false,
    };
  },
  mounted() {},
  methods: {
    openModal() {
      this.showModal = !this.showModal;
    },
    selectItem(item) {
      this.$store.commit(`exchanger/${this.type}DataSetter`, {
        ...this.dataInput,
        selectFiat: item,
      });
    },
    changeValue(val) {
      // console.log(val);
      this.$store.commit(`exchanger/changeDataValue`, {
        type: this.type,
        value: val,
      });
    },
  },
  computed: {
    dataInput() {
      return this.$store.state.exchanger[`${this.type}Data`];
    },
    getFiatList() {
      return this.$store.state.exchanger.fiatList;
    },
  },
  watch: {
    inputValue() {
      console.log("inputValue " + this.type, this.inputValue, this.dataInput);
      this.changeValue(this.inputValue);
    },
    "dataInput.value"() {
      if (this.inputValue !== this.dataInput.value) {
        this.inputValue = this.dataInput.value;
      }
    },
  },
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
    margin-bottom: 5px;

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
    cursor: pointer;
    user-select: none;

    p {
      margin: 0;
      padding: 0;
      margin-right: 5px;
    }
  }

  &__modal {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    background: white;
    border-radius: 10px;
  }

  &__item {
    display: flex;
    width: 100%;
    color: #272727;
    padding: 2px;
    user-select: none;
    cursor: pointer;

    &:hover {
      color: #3482fa;
    }
  }
}
</style>
