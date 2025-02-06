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
    ]
  })
</script>

<template>
  <Navigation />
  <slot />
  <footer class="text-center p-2">
    <hr />
    Copyright &copy; {{ currentYear }} CollegeBasketballData.com
  </footer>
</template>
