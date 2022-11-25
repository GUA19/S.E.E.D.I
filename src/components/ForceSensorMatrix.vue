<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import { NCard, NGrid, NGi, NSpace, NTooltip } from 'naive-ui';
import WsClient from '../ws/SensorWebSocketClient';
import authApi from '../api/auth';

defineProps<{ msg: string }>()

let webSocketClient: WsClient

let webSocketData = reactive({
    sensorsReading: {
        fsr0: 0,
        fsr1: 0,
        fsr2: 0,
        fsr3: 0,
    } as any
})

function getFunction(reading: number) {
    if (reading > 900) {
        return '#42b883'
    } else if (reading > 800) {
        return '#42b883e7'
    } else if (reading > 700) {
        return '#42b883ce'
    } else if (reading > 600) {
        return '#42b883b5'
    } else if (reading > 500) {
        return '#42b8839c'
    } else if (reading > 400) {
        return '#42b88383'
    } else if (reading > 300) {
        return '#42b8836a'
    } else if (reading > 200) {
        return '#42b88351'
    } else if(reading > 100) {
        return '#42b88338'
    } else if (reading > 0) {
        return '#42b8831f'
    } else {
        return '#42b88300'
    }
}

onMounted(async () => {
    let wsToken = await authApi.getAuthToken()
    webSocketClient = new WsClient(wsToken, webSocketData)
})

onBeforeUnmount(() => {
    webSocketClient.close()
})

</script>

<template>
    <h1>
        <code>{{ msg }}</code>
    </h1>
    <code>
        front
    </code>
    <n-grid responsive="screen" :x-gap="10" :y-gap="10" cols="2">
        <n-gi>
            <n-space justify="end">
                <n-card embedded :style="{ backgroundColor: getFunction(webSocketData.sensorsReading.fsr0), width: '150px', height:'150px'}">
                    <code>
                        Sensor 0
                        <br>
                        <h2>
                            {{ webSocketData.sensorsReading.fsr0 }}
                        </h2>
                    </code>
                </n-card>
            </n-space>
        </n-gi>
        <n-gi>
            <n-card embedded :style="{ backgroundColor: getFunction(webSocketData.sensorsReading.fsr0), width: '150px', height:'150px'}">
                <code>
                    Sensor 1
                    <br>
                    <h2>
                        {{ webSocketData.sensorsReading.fsr1 }}
                    </h2>
                </code>
            </n-card>
        </n-gi>
        <n-gi>
            <n-space justify="end">
                <n-card embedded :style="{ backgroundColor: getFunction(webSocketData.sensorsReading.fsr0), width: '150px', height:'150px'}">
                    <code>
                        Sensor 2
                        <br>
                        <h2>
                            {{ webSocketData.sensorsReading.fsr2 }}
                        </h2>
                    </code>
                </n-card>
            </n-space>
        </n-gi>
        <n-gi>
            <n-card embedded :style="{ backgroundColor: getFunction(webSocketData.sensorsReading.fsr0), width: '150px', height:'150px'}">
                <code>
                    Sensor 3
                    <br>
                    <h2>
                        {{ webSocketData.sensorsReading.fsr3 }}
                    </h2>
                </code>
            </n-card>
        </n-gi>
    </n-grid>
    <code>
        back
    </code>
</template>

<style scoped>
</style>
