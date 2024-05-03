// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  quasar: {
    config: {
      brand: {
        primary: "rgb(var(--secondary-800))",
        secondary: "rgb(var(--secondary-500))",
      },
    },
  },
});
