<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

function handleClickEvent() {
    router.push('./dashboard')
}

</script>

<template>
    <div>
        <img @click="handleClickEvent()" src="../assets/seed.svg" class="logo1 vue" alt="SEED logo" />
    </div>
    <code>
        <div>
            Presented by
        </div>
        <br>
        <div>
            Team 08
        </div>
        <div>
            Ankit Chaudhari, Arandjel Dimitrijevic, Jack Merker, Joey Roemer, Kangyu Zhao
        </div>
        <br>
        <div>
            TA
        </div>
        <div>
            Deren Yelken
        </div>
    </code>
</template>

<style>
.logo1 {
    height: 34em;
    padding: 3em;
    will-change: filter;
    filter: drop-shadow(0 0 0em #42b8835b);
}

.logo1:hover {
    filter: drop-shadow(0 0 4em #42b883);
}
</style>