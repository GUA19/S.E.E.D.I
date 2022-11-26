<script setup lang="ts">
import { NGrid, NGi} from 'naive-ui';
import SittingHistoryChart from '../components/SittingHistoryChart.vue'
import SittingPosture from '../components/SittingPosture.vue'
import ForceSensorMatrix from '../components/ForceSensorMatrix.vue'

</script>

<template>
    <n-grid responsive="screen" :x-gap="10" :y-gap="10" cols="24">
        <n-gi span="17">
            <SittingPosture msg="current sitting posture" />
        </n-gi>
        <n-gi span="7">
            <ForceSensorMatrix msg="FSR matrix" />
        </n-gi>
    </n-grid>
    <SittingHistoryChart msg="sitting analysis for" />
</template>

<style>

</style>