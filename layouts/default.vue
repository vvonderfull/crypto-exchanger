<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" fixed app v-if="isAuth">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app v-if="isAuth">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  middleware: ["auth"],
  data() {
    return {
      items: [
        {
          icon: "mdi-cash",
          title: "Exchanger",
          to: "/",
        },
      ],
      miniVariant: true,
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>
