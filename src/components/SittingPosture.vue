<script setup lang="ts">
import { ref } from 'vue'
import { NCard, NGrid, NGi, NTooltip } from 'naive-ui';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <h1>
        <code>{{ msg }}</code>
    </h1>
    <p>will light up when the corresponding posture is detacted</p>
    <n-grid responsive="screen" :x-gap="10" :y-gap="8" cols="3">
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="height:100px">
                        picture
                    </n-card>
                </template>
                Upright
            </n-tooltip>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="height:100px">
                        picture
                    </n-card>
                </template>
                Leaning Back
            </n-tooltip>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="height:100px">
                        picture
                    </n-card>
                </template>
                Leaning Forward
            </n-tooltip>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="height:100px">
                        picture
                    </n-card>
                </template>
                Leaning Right / Left
            </n-tooltip>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="height:100px">
                        picture
                    </n-card>
                </template>
                One Leg Over the Other
            </n-tooltip>
        </n-gi>
        <n-gi>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-card embedded style="height:100px">
                        picture
                    </n-card>
                </template>
                Sitting at the Front Edge
            </n-tooltip>
        </n-gi>
    </n-grid>
</template>

<style scoped>
</style>
