import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

interface Team {
  id: number;
  sourceId: string
  school: string;
  mascot: string;
  abbreviation: string;
  conference: string;
  primaryColor: string;
  secondaryColor: string;
}

interface Conference {
  id: number;
  sourceId: string;
  name: string;
  shortName: string;
  abbreviation: string;
}

// interface PlayType {
//   id: number;
//   text: string;
//   abbreviation: string;
// }

// interface PlayStatType {
//   id: number;
//   name: string;
// }

export const useMainStore = defineStore("main", () => {
  const config = useRuntimeConfig();
  const isHydrating = ref(false);

  const teams: Ref<Team[]> = ref([]);
  const conferences: Ref<Conference[]> = ref([]);
  // const playTypes: Ref<PlayType[]> = ref([]);
  // const playStatTypes: Ref<PlayStatType[]> = ref([]);

  const yearRanges = ref([2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]);
  const defaultYear = ref(2025);

  // const fbsConferences = ref([
  //   {
  //     value: "All",
  //     text: "All"
  //   },
  //   {
  //     value: "ACC",
  //     text: "ACC"
  //   },
  //   {
  //     value: "AAC",
  //     text: "American Athletic"
  //   },
  //   {
  //     value: "B12",
  //     text: "Big 12"
  //   },
  //   {
  //     value: "B1G",
  //     text: "Big Ten"
  //   },
  //   {
  //     value: "CUSA",
  //     text: "Conference USA"
  //   },
  //   {
  //     value: "Ind",
  //     text: "FBS Independents"
  //   },
  //   {
  //     value: "MAC",
  //     text: "Mid-American"
  //   },
  //   {
  //     value: "Mountain West",
  //     text: "MWC"
  //   },
  //   {
  //     value: "PAC",
  //     text: "Pac-12"
  //   },
  //   {
  //     value: "SEC",
  //     text: "SEC"
  //   },
  //   {
  //     value: "SBC",
  //     text: "Sun Belt"
  //   }
  // ]);

  const seasonTypes = ref([
    {
      value: "regular",
      text: "Regular"
    },
    {
      value: "postseason",
      text: "Postseason"
    },
  ]);

  async function loadTeams() {
    const data = await $fetch<Team[]>("/teams", {
      method: 'GET',
      baseURL: config.public.apiBaseUrl,
    });
    teams.value = data.filter((t) => t.conference).sort((a, b) => a.school.localeCompare(b.school));
  }

  async function getConferences() {
    const data = await $fetch<Conference[]>("/conferences", {
      baseURL: config.public.apiBaseUrl,
      method: 'GET',
    });
    conferences.value = data.sort((a, b) => a.name.localeCompare(b.name));
  }

  // async function getPlayTypes() {
  //   const data = await $fetch<PlayType[]>("/plays/types", {
  //     baseURL: config.public.apiBaseUrl,
  //     method: 'GET',
  //   });
  //   playTypes.value = data;
  // }

  // async function getPlayStatTypes() {
  //   const data = await $fetch<PlayStatType[]>("/plays/stats/types", {
  //     baseURL: config.public.apiBaseUrl,
  //     method: 'GET',
  //   });
  //   playStatTypes.value = data;
  // }

  const darkMode = ref(localStorage.getItem('isDarkMode') == 'true');
  if (darkMode?.value) {
    document.documentElement.classList.toggle('dark-mode');
  }

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', String(!darkMode.value));
    darkMode.value = !darkMode.value;
    document.documentElement.classList.toggle('dark-mode');
  };

  async function hyrdate() {
    if (!isHydrating.value) {
      isHydrating.value = true;
      await Promise.all([
        loadTeams(),
        getConferences(),
        // getPlayTypes(),
        // getPlayStatTypes(),
      ]);
      isHydrating.value = false;
    }
  }

  return {
    isHydrating,
    hyrdate,
    loadTeams,
    darkMode,
    toggleDarkMode,
    teams,
    conferences,
    // playTypes,
    // playStatTypes,
    yearRanges,
    defaultYear,
    // fbsConferences,
    seasonTypes
  };
});
