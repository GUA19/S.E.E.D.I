<script setup lang="ts">
import { NCard, NGrid, NGi, darkTheme, NConfigProvider } from 'naive-ui';
import SittingHistoryChart from './components/SittingHistoryChart.vue'
import SittingPosture from './components/SittingPosture.vue'
import ForceSensorMatrix from './components/ForceSensorMatrix.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div>
      <img src="./assets/seed.png" class="logo vue" alt="SEED logo" />
    </div>
    <n-grid responsive="screen" :x-gap="10" :y-gap="8" cols="2">
      <n-gi span="1">
        <SittingPosture msg="current sitting posture" />
      </n-gi>
      <n-gi span="1">
        <ForceSensorMatrix msg="real-time FSR matrix" />
      </n-gi>
    </n-grid>
    <SittingHistoryChart msg="sitting analysis for" />
  </n-config-provider>
</template>

<style scoped>
.logo {
  height: 10em;
  padding: 2.5em;
  will-change: filter;
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo:hover {
  filter: drop-shadow(0 0 2em #42b883);
}
</style>
