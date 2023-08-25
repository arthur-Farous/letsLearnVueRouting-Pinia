<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/NavBarComponent.vue'
import {useCounterStore} from './stores/counter';
import HomeView from './views/HomeView.vue';
import TaskView from './views/TaskView.vue';


</script>

<template>
<RouterView/>

</template>

<style scoped>

</style>
