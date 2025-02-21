import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const ThemePreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{sky.50}',
          100: '{sky.100}',
          200: '{sky.200}',
          300: '{sky.300}',
          400: '{sky.400}',
          500: '{sky.500}',
          600: '{sky.600}',
          700: '{sky.700}',
          800: '{sky.800}',
          900: '{sky.900}',
          950: '{sky.950}'
      }
  }
});

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
        preset: ThemePreset,
        options: {
          darkModeSelector: '.dark-mode',
        }
      }
    }
  }
})
