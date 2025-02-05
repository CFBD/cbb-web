import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  $production: {
    runtimeConfig: {
      public: {
        apiBaseUrl: 'https://api.collegebasketballdata.com',
      },
    },
  },
  $development: {
    runtimeConfig: {
      public: {
        apiBaseUrl: 'http://localhost:3031',
      },
    },
  },
  app: {
    head: {
      title: 'CollegeBasketballData.com',
    }
  },
  ssr: false,
  modules: ['@primevue/nuxt-module', '@pinia/nuxt'],
  css: ['primeflex/primeflex.css', 'primeicons/primeicons.css'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
        }
      }
    }
  }
})
