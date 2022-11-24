<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import { NCard, NGrid, NGi, NSpace, NTooltip } from 'naive-ui';
import WsClient from '../ws/SensorWebSocketClient';
import authApi from '../api/auth';

defineProps<{ msg: string }>()

let webSocketClient: WsClient

let webSocketData = reactive({
    sensorsReading: {} as any
})

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
    <p>
        will light up in different scales, corresponding to the measured pressure
    </p>
    <n-grid responsive="screen" :x-gap="10" :y-gap="10" cols="2">
        <n-gi>
            <n-space justify="end">
                <n-tooltip placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-card embedded style="width: 100px; height:100px;">
                            {{ webSocketData.sensorsReading.fsr0}}
                        </n-card>
                    </template>
                    LED 1
                </n-tooltip>
            </n-space>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="width: 100px; height:100px;">
                        {{ webSocketData.sensorsReading.fsr1}}
                    </n-card>
                </template>
                LED 2
            </n-tooltip>
        </n-gi>
        <n-gi>
            <n-space justify="end">
                <n-tooltip placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-card embedded style="width: 100px; height:100px;">
                            {{ webSocketData.sensorsReading.fsr2}}
                        </n-card>
                    </template>
                    LED 3
                </n-tooltip>
            </n-space>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="width: 100px; height:100px;">
                        {{ webSocketData.sensorsReading.fsr3}}
                    </n-card>
                </template>
                LED 4
            </n-tooltip>
        </n-gi>
    </n-grid>
</template>

<style scoped>
</style>
