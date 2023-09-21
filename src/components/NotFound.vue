<script setup>
import {useRoute} from 'vue-router';
const router = useRoute()
console.log(router)
console.log(router.fullPath)
</script>

<template>
    <h2 class="bg-red-500 p-2 text-black text-xl font-bold">{{ router.fullPath }} - not found the page</h2>
</template>