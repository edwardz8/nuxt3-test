// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxtjs/ionic", "@nuxtjs/sanity"],
  sanity: {
    projectId: '2mnyaa05',
    dataset: 'production',
    // apiVersion: '2021-03-25',
    useCdn: true // Use CDN for faster reads in production
  },
  css: ["@/theme/variables.css"],
})