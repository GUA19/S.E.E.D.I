<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NGrid, NGi, NSpace, NInputNumber } from 'naive-ui';

defineProps<{ msg: string }>()

let series = [
  {
    data: [
      {
        x: 'Upright',
        y: [
          new Date('2022-11-12T08:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T10:24:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#00E396',
        strokeColor: '#00E396'
      },
      {
        x: 'Leaning Back',
        y: [
          new Date('2022-11-12T13:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T15:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#008FFB',
        strokeColor: '#008FFB'
      },
      {
        x: 'Leaning Forward',
        y: [
          new Date('2022-11-12T10:24:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T12:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#775DD0',
        strokeColor: '#775DD0'
      },
      {
        x: 'Leaning Forward',
        y: [
          new Date('2022-11-12T15:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T17:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#775DD0',
        strokeColor: '#775DD0'
      },
      {
        x: 'Leaning Right / Left',
        y: [
          new Date('2022-11-12T12:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T13:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#FEB019',
        strokeColor: '#FEB019'
      },
      {
        x: 'Leaning Right / Left',
        y: [
          new Date('2022-11-12T17:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T18:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#FEB019',
        strokeColor: '#FEB019'
      },
      {
        x: 'One Leg Over the Other',
        y: [
          new Date('2022-11-12T18:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T20:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#FF4560',
        strokeColor: '#FF4560'
      },
      {
        x: 'Sitting at the Front Edge',
        y: [
          new Date('2022-11-12T20:00:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000,
          new Date('2022-11-12T21:59:00').getTime() - new Date().getTimezoneOffset() * 60 * 1000
        ],
        fillColor: '#3F51B5',
        strokeColor: '#3F51B5'
      },
    ]
  },
]
let chartOptions = {
  chart: {
    type: 'rangeBar',
    background: 'transparent',
    animations: {
      enabled: true,
      easing: 'easeinout',
      animateGradually: {
        enabled: false,
      },
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
        barHeight: '80%'
    }
  }, 
  grid: {
    show: true,
  },
  xaxis: {
    type: 'datetime'
  },
  stroke: {
    show: true,
    width: 1
  },
  fill: {
    type: 'solid',
      opacity: 0.6
  },
  theme: {
    mode:'dark',
  }
}

let pieSeries = [44, 55, 13, 43, 12, 10]
let pieChartOptions = {
  chart: {
    type: 'pie',
    background: 'transparent',
  },
  colors: ['#00E396', '#008FFB', '#775DD0', '#FEB019', '#FF4560', '#3F51B5'],
  labels: ['Upright', 'Leaning Back', 'Leaning Forward', 'Leaning Right / Left', 'One Leg Over the Other', 'Sitting at the Front Edge'],
  stroke: {
    show: true,
    width: 1,
    colors: ['#00E396', '#008FFB', '#775DD0', '#FEB019', '#FF4560', '#3F51B5'],
  },
  fill: {
    type: 'solid',
    opacity: 0.6,
    colors: ['#00E396', '#008FFB', '#775DD0', '#FEB019', '#FF4560', '#3F51B5'],
  },
  legend: {
    show: true,
    position: 'bottom',
  },
  theme: {
    mode: 'dark',
  }
}

let timeNumber = ref(24)
let timeUnit = ref("hour")
let validator = (x: number) => x > 0 && x <= 24
</script>

<template>
  <n-space justify="center">
    <n-button text style="margin-right: 10px;text-decoration:underline">
      <h1> <code > query </code> </h1>
    </n-button>
    <h1> <code>{{ msg }} past</code> </h1>
    <h1>
      <n-input-number size="large" v-model:value="timeNumber" :validator="validator" style="width:77px; margin-top: -9px;" />
    </h1>
    <h1> <code>{{timeUnit}}(s)</code> </h1>
  </n-space>

  <n-grid responsive="screen" :x-gap="10" :y-gap="10" cols="3">
    <n-gi span="2">
      <apexchart type="rangeBar" height="350" :options="chartOptions" :series="series"></apexchart>
    </n-gi>
    <n-gi span="1">
      <apexchart type="pie" width="440" :options="pieChartOptions" :series="pieSeries"></apexchart>
    </n-gi>
  </n-grid>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
