<template>
  <div class="crypto-exchanger">
    <div class="crypto-exchanger__heading">
      <h1>Crypto Exchanger</h1>
    </div>
    <div class="crypto-exchanger__wrap">
      <ExchangerForm />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style scoped lang="scss">
.crypto-exchanger {
  display: flex;
  flex-direction: column;
  padding: 20px;

  &__heading {
    margin-bottom: 50px;
  }

  &__wrap {
  }
}
</style>
