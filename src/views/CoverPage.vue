<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

function handleClickEvent() {
    router.push('./dashboard')
}

</script>

<template>
    <div>
        <img @click="handleClickEvent()" src="../assets/seed.png" class="logo1 vue" alt="SEED logo" />
    </div>
    <code>
        <div>
            Presented by
        </div>
        <br>
        <div>
            Team 08
        </div>
        <pre>Ankit Chaudhari          20apc7</pre>
        <pre>Arandjel Dimitrijevic    21ad24</pre>
        <pre>Jack Merker             21jbm11</pre>
        <pre>Joey Roemer              21jgr6</pre>
        <pre>Kangyu Zhao               18kz2</pre>
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
