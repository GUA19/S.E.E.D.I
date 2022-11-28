<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import { NGrid, NGi } from 'naive-ui';
import WsClient from '../ws/PostureWebSocketClient';
import authApi from '../api/auth';

import upright from '../assets/upright.png'
import leaning_backward from '../assets/leaning_backward.png'
import leaning_forward from '../assets/leaning_forward.png'
import leaning_sideways from '../assets/leaning_sideways.png'
import one_leg_over_the_other from '../assets/one_leg_over_the_other.png'
import sitting_at_the_front_edge from '../assets/sitting_at_the_front_edge.png'

defineProps<{ msg: string }>()

let webSocketClient: WsClient

let webSocketData = reactive({
    Posture: null as (null | string)
})

let sittingPostures = ['leaning_sideways', 'upright', 'leaning_backward', 'leaning_forward', 'one_leg_over_the_other', 'sitting_at_the_front_edge']

function getImg(posture: string) {
    switch (posture) {
        case 'upright':
            return upright
        case 'leaning_backward':
            return leaning_backward
        case 'leaning_forward':
            return leaning_forward
        case 'leaning_sideways':
            return leaning_sideways
        case 'one_leg_over_the_other':
            return one_leg_over_the_other
        case 'sitting_at_the_front_edge':
            return sitting_at_the_front_edge
        default:
            break;
    }
}

function getSuggestion(posture: string | null) {
    switch (posture) {
        case 'upright':
            return "Looks like you are sitting upright. Well done, keep going with that nice sitting posture."
        case 'leaning_backward':
            return "Looks like you are leaning backward. Tring to take a nap?"
        case 'leaning_forward':
            return "Looks like you are leaning forward."
        case 'leaning_sideways':
            return "Looks like you are leaning sideways."
        case 'one_leg_over_the_other':
            return "Looks like you are crossing one leg over the other."
        case 'sitting_at_the_front_edge':
            return "Looks like you are sitting at the front edge of the chair."
        default:
            return "Looks like you are not sitting on the chair right now."
    }
}

function getClass(posture: string) {
   if (webSocketData.Posture == posture) {
       return "logoSelected"
   } else {
       return "logo"
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
        {{ getSuggestion(webSocketData.Posture) }}
        <br>
        <br>
    </code>
    <n-grid responsive="screen" :x-gap="10" :y-gap="8" cols="6">
        <n-gi v-for="posture in sittingPostures">
            <img :class=getClass(posture) :src=getImg(posture)>
        </n-gi>
    </n-grid>
</template>

<style scoped>
.logo {
    height: 23em;
    padding: 0em;
    filter: blur(5px);
}

.logoSelected {
    height: 23em;
    padding: 0em;
    filter: drop-shadow(0 0 15px #42b883);
    animation: breathe 6.5s ease-out infinite;
}

@keyframes breathe {
    0% {
        filter: drop-shadow(0 0 10px #42b88380);
    }
    50% {
        filter: drop-shadow(0 0 15px #42b883);
    }
    100% {
        filter: drop-shadow(0 0 10px #42b88380);
    }
}
</style>
