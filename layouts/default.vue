<script setup lang="ts">
  import { useMainStore } from "~/stores/main";

  const currentYear = new Date().getFullYear();

  const mainStore = useMainStore();
  await mainStore.hyrdate();

  useHead({
    link: [
      {
        rel: "icon",
        href: "https://cdn.collegefootballdata.com/cbbd_favicon.ico",
      }
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-GGM1TEWPXM",
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GGM1TEWPXM');
        `,
      },
    ]
  })
</script>

<template>
  <Navigation />
  <slot />
  <footer class="text-center p-2">
    <hr />
    © {{ currentYear }} CollegeBasketballData.com. All rights reserved.<br />A
    product of Rad Sports Analytics LLC.
  </footer>
</template>
