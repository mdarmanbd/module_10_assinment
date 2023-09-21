<script setup>

</script>

<template>
    <section class="w-full bg-green-200 py-5 mx-auto text-center">
        <h2 class="text-yellow-700 font-bold">this is about page</h2>

        <ul>
            <li>
                <router-link to="/AboutMango" class="font-bold text-red-400">Mango</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </section>
    
</template>