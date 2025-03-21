<template>
  <Card class="text-left m-3 p-3">
    <template #header>
      <div class='text-3xl font-bold text-center'>About this site</div>
    </template>
    <template #content>
      <p>CollegeBasketballData.com (CBBD) is a sports statistics and analytics website with no
        direct affiliation to the NCAA, its member conferences, or its member teams.</p>
      <p>This site is an offshoot of CollegeFootballData.com. New data and functionality is constantly being added.</p>
      <p>All data is unofficial and subject to change at any time. No guarantees are made regarding
        the accuracy of any data.</p>
      <p>If you have any questions or notice any issues you can reach me via Twitter (<b-link
          href='https://twitter.com/cfb_data' target='_blank'>@CFB_Data</b-link>), email (<b-link
          href='mailto:admin@collegefootballdata.com'>admin@collegefootballdata.com</b-link>), Discord (BlueSCar), or
        reddit
        (/u/BlueSCar).</p>
      <Divider></Divider>
      <div class="text-lg font-bold text-center">Data Updates</div>
      <p>Update frequency depends on the type of data. Generally, game level data is updated within
        minutes
        of a game being completed. This includes box score data, scores, drive data, and play data. Betting line
        data is updated every 15 minutes. Poll data usually goes live on the same day a new poll is released.
      </p>
      <Divider></Divider>
      <div class="text-lg font-bold text-center">Timeframes</div>
      <ul>
        <li>Most data goes back to around the 2003 season</li>
      </ul>
      <Divider></Divider>
      <div class="text-lg font-bold text-center">Cost and Usage</div>
      <p>This website and its companion API are completely free to use without restrictions.
        Attribution
        is always greatly appreciated. Some functionality may be available exclusively to Patreon subscribers.</p>
      <p>Please utilize good API usage habits when interacting with the API. This includes making
        efficient use of calls to grab greater chunks of data at a time as opposed to more frequent calls of smaller data
        chunks (i.e. "chunky" vs "chatty" calls). Abusing the free and public nature of the API may result in your key
        becoming blacklisted.</p>
      <Divider></Divider>
      <div class="text-lg font-bold text-center">Data Corrections and New Data</div>
      <p>If you have data corrections or even some new data you would like to submit for inclusion,
        please reach out to me at any of the methods mentioned at the top of the page. CSV files works best. To ensure
        speediest inclusion of your submission, please be sure to include any relevant id fields (e.g. game id, play id,
        athlete id, etc). This is a one-person operation and I try to get things included as quickly as I am able. Your
        patience is very much appreciated.</p>
      <Divider></Divider>
      <div class="text-lg font-bold text-center">Contributions</div>
      <p>
        There are many different ways to contribute:
      </p>
      <ul>
        <li>Programming - Most of the infrastructure is open-sourced. Pull requests on repos <a
            href='https://github.com/cfbd'>
            in the CFBD GitHub org</a> are always welcome! CBBD is programmed in JavaScript using a NodeJS/Postgres stack.
        </li>
        <li>Data - If you have some data you would like to see included, please send it to me using one of the methods
          listed above.
          Again, it is best to send datasets in CSV format listing any related id fields (e.g. game id, play id, etc).
        </li>
        <li>Writing - The <a href='https://blog.collegefootballdata.com'>CFBD blog</a> is always looking for writers,
          whether
          for a single article or for a series. We are looking for people of all backgrounds and skill levels, whether
          your
          are
          a programmer, a data scientist, or sports analytics enthusiast. We look to reach as wide an audience as possible.
          If
          you are
          interested, please reach out to me on reddit (/u/BlueSCar), in the Discord chat (BlueSCar), on Bluesky (@collegefootballdata.com), on Twitter
          (@CFB_Data),
          or <a href='mailto:admin@collegefootballdata.com' target='_blank'>shoot me an email</a>.</li>
        <li>Ideas and suggestions - Please join the CFBD community. We are on Bluesky (@collegefootballdata.com), Twitter (@CFB_Data), and <a
            href="https://discord.gg/Eb3ex5a" target='_blank'>Discord</a>.</li>
      </ul>
    </template>
  </Card>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
