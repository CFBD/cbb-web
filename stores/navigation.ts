import { computed } from "vue";
import { defineStore } from "pinia";
import { type MenuItem } from "primevue/menuitem";

import { useMainStore } from "./main";

export const useNavigationStore = defineStore("navigation", () => {
  const menuIcon = computed((): string => {
    const mainStore = useMainStore();
    return mainStore.darkMode ? "https://cdn.collegefootballdata.com/cbb-logos/LetterLogoCBBDDark.png" : "https://cdn.collegefootballdata.com/cbb-logos/LetterLogoCBBD.png";
  });

  const menuItems = computed((): MenuItem[] => {
    return [
      {
        label: "Home",
        route: "/",
      },
      {
        label: "Data",
        route: "/exporter",
      },
      {
        label: "API",
        items: [
          {
            label: "Docs",
            url: "https://api.collegebasketballdata.com",
            target: "_blank"
          },
          {
            label: "API Keys",
            route: "/key"
          },
          {
            separator: true,
            label: "Wrappers",
          },
          {
            label: "Python",
            url: "https://pypi.org/project/cbbd/",
            target: "_blank"
          },
          {
            label: "TypeScript",
            url: "https://www.npmjs.com/package/cbbd",
            target: "_blank"
          },
        ],
      },
      {
        label: "Football",
        url: "https://collegefootballdata.com",
        target: "_blank",
      },
      {
        label: "About",
        items: [
          {
            label: "Glossary",
            route: "/glossary"
          },
          {
            label: "FAQ & Info",
            route: "/about"
          },
        ],
      },
    ];
  });

  return { menuIcon, menuItems };
});
