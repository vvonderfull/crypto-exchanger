<template>
  <div class="login-page">
    <form>
      <v-text-field v-model="login" label="Login" required></v-text-field>
      <v-text-field
        type="password"
        v-model="password"
        label="Password"
        required
      ></v-text-field>

      <v-btn class="primary" @click="submit"> Login</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    submit() {
      let token = JSON.stringify({
        login: this.login,
        password: this.password,
      });
      this.$store.dispatch("login", token);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="scss">
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
